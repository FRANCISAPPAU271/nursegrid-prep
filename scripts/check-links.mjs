#!/usr/bin/env node
/**
 * Checks that everything the app *refers to* actually exists.
 *
 * Three bugs reached production with the same shape: code pointing at something
 * that was never built.
 *
 *   - ResetPasswordForm posted to /api/auth/reset-password, a route that had
 *     never existed. Every password reset 404'd.
 *   - The health check was added as a third Vercel cron entry on a plan that
 *     allows two, so it would silently never have run.
 *   - The "Practice questions" button at the foot of every learning topic
 *     linked to /dashboard/practice, which has never existed. Every student who
 *     finished a topic and took the app up on the offer got a 404.
 *
 * TypeScript cannot see any of these: a string that names a route is still a
 * valid string. Only a check that compares references against the router tree
 * catches it, which is what this does.
 *
 * Run with `npm run check:links`. Exits non-zero on a dangling reference.
 */
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, relative, sep } from "node:path";

const ROOT = process.cwd();
const APP = join(ROOT, "src", "app");
const PUBLIC = join(ROOT, "public");
const SRC = join(ROOT, "src");

/** Paths that are served by infrastructure, not by the router. */
const IGNORED_PREFIXES = [
  "/_next",
  "/favicon",
  "/apple-touch-icon",
  "/icons/",
  "/images/",
  "/sw.js",
  "/manifest",
  "/robots",
  "/sitemap",
];

/** Intentionally allowed dangling references, with a reason each. */
const ALLOW = new Set([
  // Sent to users in email; handled by the API route, not a page.
  "/api/email/unsubscribe",
]);

/** `(group)` segments are not part of the URL; `[id]` matches anything. */
function toUrl(dir) {
  const rel = relative(APP, dir).split(sep).filter(Boolean);
  const parts = [];
  for (const seg of rel) {
    if (/^\(.*\)$/.test(seg)) continue; // route group
    if (/^\[.*\]$/.test(seg)) parts.push(":id"); // dynamic segment
    else parts.push(seg);
  }
  return "/" + parts.join("/");
}

function collect(entryFile) {
  const urls = new Set();
  if (!existsSync(APP)) return urls;
  const walk = (dir) => {
    let entries;
    try {
      entries = readdirSync(dir);
    } catch {
      return;
    }
    if (entries.includes(entryFile)) urls.add(toUrl(dir));
    for (const e of entries) {
      const p = join(dir, e);
      try {
        if (statSync(p).isDirectory()) walk(p);
      } catch {
        /* unreadable path: ignore */
      }
    }
  };
  walk(APP);
  return urls;
}

/**
 * HTTP methods each route actually exports.
 *
 * A route can exist and still refuse the request: calling DELETE on a file that
 * only exports GET and POST answers 405, which the browser reports as a generic
 * failure. That is the same class of bug as a missing path, one level deeper,
 * and it is equally invisible to the type checker.
 */
function collectMethods() {
  const methods = new Map(); // url -> Set<VERB>
  if (!existsSync(APP)) return methods;
  const walk = (dir) => {
    let entries;
    try {
      entries = readdirSync(dir);
    } catch {
      return;
    }
    const routeFile = join(dir, "route.ts");
    if (entries.includes("route.ts")) {
      const src = readFileSync(routeFile, "utf8");
      const found = new Set();
      for (const m of src.matchAll(/export\s+(?:async\s+)?(?:function|const)\s+(GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS)\b/g)) {
        found.add(m[1]);
      }
      methods.set(toUrl(dir), found);
    }
    for (const e of entries) {
      const p = join(dir, e);
      try {
        if (statSync(p).isDirectory()) walk(p);
      } catch {
        /* ignore */
      }
    }
  };
  walk(APP);
  return methods;
}

/** Files under public/, addressed by URL path. */
function collectPublic() {
  const urls = new Set();
  if (!existsSync(PUBLIC)) return urls;
  const walk = (dir) => {
    for (const e of readdirSync(dir)) {
      const p = join(dir, e);
      if (statSync(p).isDirectory()) walk(p);
      else urls.add("/" + relative(PUBLIC, p).split(sep).join("/"));
    }
  };
  walk(PUBLIC);
  return urls;
}

const pages = collect("page.tsx");
const routes = collect("route.ts");
const publicFiles = collectPublic();
const routeMethods = collectMethods();

/** Does `url` match `pattern`, treating :id as a wildcard? */
function matches(url, pattern) {
  const a = url.split("/").filter(Boolean);
  const b = pattern.split("/").filter(Boolean);
  if (a.length !== b.length) return false;
  return a.every((seg, i) => b[i] === ":id" || seg === b[i]);
}

/** True when the pattern has no wildcard segments at all. */
function isExact(pattern) {
  return !pattern.split("/").some((seg) => seg === ":id");
}

/**
 * Resolve a url against a set of patterns, literal first.
 *
 * Next.js gives a static segment precedence over a dynamic one at the same
 * level: /api/admin/questions/media hits the `media` directory, never
 * `questions/[id]` with id="media". Resolving in Set order instead reports the
 * wrong route - and then the wrong set of exported methods - which is exactly
 * the sort of confidently-wrong result a check must never produce.
 */
function resolve(url, set) {
  if (url === "/") return set.has("/");
  const candidates = [...set].filter((p) => matches(url, p));
  if (candidates.length === 0) return false;
  return candidates.sort((a, b) => Number(isExact(b)) - Number(isExact(a)))[0] !== undefined;
}

/** The declared route a url resolves to, honouring static-before-dynamic. */
function resolveRoute(url) {
  const candidates = [...routes].filter((p) => matches(url, p));
  if (candidates.length === 0) return null;
  const exact = candidates.filter(isExact);
  return exact.length > 0 ? exact[0] : candidates[0];
}

/**
 * The method a fetch call uses. Absent an explicit `method`, fetch is a GET -
 * which is precisely how a POST-only route gets called by mistake.
 */
function methodOf(args) {
  const m = args.match(/method\s*:\s*["'`]([A-Za-z]+)["'`]/);
  if (m) return m[1].toUpperCase();
  const t = args.match(/method\s*:\s*([A-Za-z_$][\w$]*)\s*\?/);
  if (t) return "DYNAMIC"; // computed: cannot be checked statically
  return "GET";
}

function ignored(url) {
  return IGNORED_PREFIXES.some((p) => url === p || url.startsWith(p));
}

/** Turn `${...}` inside a template literal into a dynamic segment. */
function normalize(raw) {
  let u = raw.trim();
  u = u.replace(/\$\{[^}]*\}/g, ":id");
  u = u.split("?")[0].split("#")[0];
  if (u.length > 1) u = u.replace(/\/+$/, "");
  return u;
}

function walkFiles(dir, out = []) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    const s = statSync(p);
    if (s.isDirectory()) {
      if (e === "node_modules" || e.startsWith(".")) continue;
      walkFiles(p, out);
    } else if (/\.(ts|tsx)$/.test(e)) {
      out.push(p);
    }
  }
  return out;
}

const problems = [];
const seen = new Set();

for (const file of walkFiles(SRC)) {
  const src = readFileSync(file, "utf8");
  const rel = relative(ROOT, file);

  const check = (raw, kind, method = "GET") => {
    const url = normalize(raw);
    if (!url.startsWith("/")) return; // external, relative, or empty
    if (ignored(url)) return;
    if (ALLOW.has(url)) return;

    const key = `${kind}:${method}:${url}`;
    if (seen.has(`${key}:${rel}`)) return;
    seen.add(`${key}:${rel}`);

    if (kind === "api") {
      const declared = resolveRoute(url);
      if (!declared) {
        problems.push({ kind, url, file: rel });
        return;
      }
      if (method && method !== "DYNAMIC") {
        const exported = routeMethods.get(declared) ?? new Set();
        // HEAD is answered by GET automatically; anything else must be declared.
        const ok = exported.has(method) || (method === "HEAD" && exported.has("GET"));
        if (!ok) {
          problems.push({
            kind: "method",
            url,
            file: rel,
            detail: `${method} not exported by ${declared} (has: ${[...exported].join(", ") || "none"})`,
          });
        }
      }
      return;
    }
    // a link may point at a page or at a file in public/
    if (resolve(url, pages) || publicFiles.has(url)) return;
    problems.push({ kind, url, file: rel });
  };

  // Template literals are captured whole, then `${...}` becomes :id. Capturing
  // only up to the `$` would turn `/api/courses/${id}/enroll` into
  // `/api/courses` and report a route that is perfectly fine.
  const grab = (re) => {
    for (const m of src.matchAll(re)) check(m[1], "X");
  };

  // Capture the whole argument list so an explicit method can be read.
  for (const m of src.matchAll(/fetch\(\s*`([^`]*)`([^)]*)/g)) check(m[1], "api", methodOf(m[2]));
  for (const m of src.matchAll(/fetch\(\s*"([^"]*)"([^)]*)/g)) check(m[1], "api", methodOf(m[2]));
  for (const m of src.matchAll(/fetch\(\s*'([^']*)'([^)]*)/g)) check(m[1], "api", methodOf(m[2]));

  const linkRefs = [
    /href=\{`([^`]*)`\}/g,
    /href=\{?"([^"]*)"/g,
    /href=\{?'([^']*)'/g,
    /router\.(?:push|replace)\(\s*`([^`]*)`/g,
    /router\.(?:push|replace)\(\s*"([^"]*)"/g,
    /router\.(?:push|replace)\(\s*'([^']*)'/g,
    /redirect\(\s*`([^`]*)`/g,
    /redirect\(\s*"([^"]*)"/g,
    /redirect\(\s*'([^']*)'/g,
  ];
  for (const re of linkRefs) for (const m of src.matchAll(re)) check(m[1], "link");
}

console.log(`pages served        : ${pages.size}`);
console.log(`api routes served   : ${routes.size}`);
console.log(`files in public/    : ${publicFiles.size}`);

if (problems.length === 0) {
  console.log("\nOK - every internal link and API call resolves to something real.");
  process.exit(0);
}

console.error(`\n${problems.length} dangling reference(s):\n`);
for (const p of problems) {
  console.error(`  [${p.kind}] ${p.url}`);
  if (p.detail) console.error(`         ${p.detail}`);
  console.error(`         in ${p.file}`);
}
console.error(
  "\nEach of these would fail at runtime, not at build time. Fix the path, or add it to ALLOW in scripts/check-links.mjs with a reason.",
);
process.exit(1);

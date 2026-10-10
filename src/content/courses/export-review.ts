/**
 * Export a course as a single self-contained HTML file for proof-reading.
 *
 *   npx tsx src/content/courses/export-review.ts respiratory-nursing
 *   → ./respiratory-nursing-review.html
 *
 * The file embeds every diagram as inline SVG so it can be opened offline or
 * previewed in a sandboxed viewer. It is a review aid only — it is not served
 * by the app and is never imported by application code.
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { COURSES, courseMinutes, flattenLessons } from "./index";
import type { LessonBlock } from "./types";

const ALLOWED_INLINE = /<(\/?)(strong|em|b|i)>/gi;

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/** Escape everything, then restore the handful of inline tags lessons are allowed to use. */
function inline(s: string): string {
  return esc(s).replace(/&lt;(\/?)(strong|em|b|i)&gt;/gi, (_m, slash: string, tag: string) => `<${slash}${tag.toLowerCase()}>`);
}

function svgFor(src: string): string {
  const path = join(process.cwd(), "public", src);
  if (!existsSync(path)) return `<div class="missing">Missing diagram: ${esc(src)}</div>`;
  const raw = readFileSync(path, "utf8").replace(/<\?xml[^>]*\?>/, "").replace(/<!DOCTYPE[^>]*>/i, "");
  return raw;
}

function block(b: LessonBlock): string {
  switch (b.type) {
    case "text":
      return `${b.heading ? `<h4>${inline(b.heading)}</h4>` : ""}${b.paragraphs.map((p) => `<p>${inline(p)}</p>`).join("")}`;
    case "list": {
      const tag = b.style === "steps" ? "ol" : "ul";
      return `${b.heading ? `<h4>${inline(b.heading)}</h4>` : ""}<${tag}>${b.items.map((i) => `<li>${inline(i)}</li>`).join("")}</${tag}>`;
    }
    case "table":
      return `${b.heading ? `<h4>${inline(b.heading)}</h4>` : ""}<table><thead><tr>${b.columns.map((c) => `<th>${inline(c)}</th>`).join("")}</tr></thead><tbody>${b.rows
        .map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`)
        .join("")}</tbody></table>`;
    case "callout":
      return `<div class="callout ${b.tone}"><div class="callout-title">${{ tip: "Tip", warning: "Warning", exam: "Exam focus" }[b.tone]} — ${inline(b.title)}</div><div>${inline(b.body)}</div></div>`;
    case "diagram":
      return `<figure>${svgFor(b.src)}<figcaption><span class="src">${esc(b.src)}</span>${b.caption ? ` — ${inline(b.caption)}` : ""}</figcaption></figure>`;
  }
}

const slug = process.argv[2];
const course = COURSES.find((c) => c.slug === slug);
if (!course) {
  console.error(`Unknown course "${slug ?? ""}". Available: ${COURSES.map((c) => c.slug).join(", ")}`);
  process.exit(1);
}

const lessons = flattenLessons(course);
const toc = course.modules
  .map(
    (m, mi) =>
      `<li><strong>Module ${mi + 1}: ${inline(m.title)}</strong><ul>${m.lessons
        .map((l, li) => `<li><a href="#l-${l.slug}">${mi + 1}.${li + 1} ${inline(l.title)}</a> <span class="muted">(${l.minutes} min)</span></li>`)
        .join("")}</ul></li>`,
  )
  .join("");

const body = lessons
  .map(
    (f) => `<section class="lesson" id="l-${f.lesson.slug}">
  <div class="crumb">Module ${f.label.split(".")[0]} · ${inline(f.module.title)}</div>
  <h2>${f.label} ${inline(f.lesson.title)} <span class="muted">· ${f.lesson.minutes} min · ${f.index === 1 ? "FREE" : "Premium"}</span></h2>
  <div class="box"><h4>By the end of this lesson you will be able to</h4><ul>${f.lesson.objectives.map((o) => `<li>${inline(o)}</li>`).join("")}</ul></div>
  ${f.lesson.blocks.map(block).join("\n")}
  <div class="box key"><h4>Key points</h4><ul>${f.lesson.keyPoints.map((k) => `<li>${inline(k)}</li>`).join("")}</ul></div>
  <div class="muted small">Practice-question keywords: ${f.lesson.quiz.keywords.map(esc).join(", ")}</div>
</section>`,
  )
  .join("\n");

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>${esc(course.title)} — review copy</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  body{font-family:Georgia,"Times New Roman",serif;line-height:1.55;color:#1e293b;max-width:900px;margin:0 auto;padding:24px 20px 80px;background:#fff}
  h1{font-size:2rem;margin:0 0 .25rem}h2{font-size:1.45rem;margin:2.5rem 0 .5rem;padding-top:1rem;border-top:2px solid #e2e8f0}
  h3{font-size:1.15rem;margin:1.5rem 0 .5rem}h4{font-size:1rem;margin:1.4rem 0 .4rem;color:#0f172a;font-family:system-ui,sans-serif}
  p{margin:.5rem 0}ul,ol{margin:.4rem 0 .8rem;padding-left:1.4rem}li{margin:.3rem 0}
  table{border-collapse:collapse;width:100%;margin:.6rem 0 1rem;font-size:.92rem;font-family:system-ui,sans-serif}
  th,td{border:1px solid #cbd5e1;padding:6px 8px;vertical-align:top;text-align:left}th{background:#f1f5f9}
  .callout{border-left:4px solid;padding:10px 14px;margin:1rem 0;border-radius:6px;font-family:system-ui,sans-serif;font-size:.95rem}
  .callout-title{font-weight:700;margin-bottom:.25rem}
  .callout.tip{border-color:#0ea5e9;background:#f0f9ff}.callout.warning{border-color:#f59e0b;background:#fffbeb}.callout.exam{border-color:#8b5cf6;background:#f5f3ff}
  figure{margin:1.2rem 0;padding:12px;border:1px solid #e2e8f0;border-radius:8px;background:#fafafa}figure svg{max-width:100%;height:auto;display:block;margin:0 auto}
  figcaption{font-size:.88rem;color:#475569;margin-top:.5rem;font-family:system-ui,sans-serif}.src{font-family:ui-monospace,monospace;font-size:.8rem;color:#64748b}
  .box{background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:10px 16px;margin:1rem 0}.box.key{background:#ecfdf5;border-color:#a7f3d0}
  .crumb{font-family:system-ui,sans-serif;font-size:.8rem;text-transform:uppercase;letter-spacing:.06em;color:#64748b;margin-top:2rem}
  .muted{color:#64748b;font-weight:400;font-size:.85em}.small{font-size:.8rem;font-family:system-ui,sans-serif;margin-top:1rem}
  .missing{color:#b91c1c;font-weight:700}.meta{font-family:system-ui,sans-serif;color:#475569;font-size:.95rem}
  .toc ul{list-style:none;padding-left:1rem}.toc>ul{padding-left:0}.toc a{color:#0369a1;text-decoration:none}
  @media print{.lesson{page-break-before:always}h2{border-top:none}}
</style></head><body>
<h1>${esc(course.icon)} ${esc(course.title)} <span class="muted">${esc(course.code)}</span></h1>
<p class="meta">${esc(course.tagline)}</p>
<p class="meta"><strong>Review copy</strong> — ${course.modules.length} modules · ${lessons.length} lessons · about ${courseMinutes(course)} minutes of reading · ${course.creditHours} contact hours · ${course.level}. Lesson 1.1 is free; the rest is Premium. Post-test: ${course.postTest.questionCount} questions, pass ${course.postTest.passMark}%, ${course.postTest.maxAttemptsPer24h} attempts per 24 h.</p>
<p>${inline(course.description)}</p>
<h3>Course outcomes</h3><ul>${course.outcomes.map((o) => `<li>${inline(o)}</li>`).join("")}</ul>
<h3>Who it is for</h3><ul>${course.audience.map((o) => `<li>${inline(o)}</li>`).join("")}</ul>
<h3>Contents</h3><div class="toc"><ul>${toc}</ul></div>
${body}
<section class="lesson"><h2>Course evaluation</h2><p class="meta">${esc(course.evaluation.description)}</p><ol>${course.evaluation.items.map((i) => `<li>${esc(i.prompt)}</li>`).join("")}</ol><p class="meta">Free text: ${esc(course.evaluation.commentPrompt)}</p></section>
</body></html>`;

const outPath = join(process.cwd(), `${course.slug}-review.html`);
writeFileSync(outPath, html);
console.log(`Wrote ${outPath} (${(html.length / 1024).toFixed(0)} KB, ${lessons.length} lessons)`);

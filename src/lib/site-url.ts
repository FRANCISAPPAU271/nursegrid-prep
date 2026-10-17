/**
 * The canonical public origin, with a safe production fallback.
 *
 * Every place that needs an absolute URL — the sitemap, `metadataBase`,
 * canonical links, Open Graph images and the Organization/Product structured
 * data — was falling back to `http://localhost:3000` whenever
 * NEXT_PUBLIC_APP_URL was unset. On the deployed site it *was* unset, so the
 * live sitemap advertised localhost URLs to Google and every canonical and
 * share-preview URL pointed at a machine that does not exist. That silently
 * costs rankings and breaks link previews.
 *
 * Vercel sets VERCEL_PROJECT_PRODUCTION_URL automatically for every
 * deployment, so using it as the second choice fixes the deployed site without
 * anyone having to configure anything. NEXT_PUBLIC_APP_URL still wins when it
 * is set, so a custom domain can be pinned explicitly.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_APP_URL?.trim();
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, "").replace(/\/+$/, "")}`;

  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();

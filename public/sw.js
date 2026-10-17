// NurseGrid Prep service worker
// Strategy: network-first for navigations/API (always fresh data for a
// logged-in study app), cache-first for static assets (icons, images, fonts)
// so the app shell loads instantly and works offline for previously visited
// pages.
const CACHE_NAME = "nursegrid-static-v1";
const OFFLINE_URL = "/offline.html";

const PRECACHE_URLS = [OFFLINE_URL, "/icons/icon-192.png", "/icons/icon-512.png", "/manifest.webmanifest"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)).then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Never cache API calls or auth-sensitive routes — always hit the network.
  if (url.pathname.startsWith("/api/")) return;

  // Page navigations: try network first, fall back to a friendly offline page.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(() => caches.match(OFFLINE_URL).then((res) => res ?? Response.error())),
    );
    return;
  }

  // Static assets (icons, images, fonts, _next static files): cache-first.
  if (
    url.pathname.startsWith("/icons/") ||
    url.pathname.startsWith("/images/") ||
    url.pathname.startsWith("/_next/static/")
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        });
      }),
    );
  }
});

// ---------------------------------------------------------------------------
// Web Push. This is the alert that Gmail cannot silence: the browser subscribes
// the device directly, so the notification arrives in the system tray whether
// the weekly email was filed under Primary, Promotions, or never opened.
//
// `event.waitUntil` around showNotification matters — a service worker can be
// terminated the moment the handler returns, and without it the notification
// is silently dropped on slower devices.
// ---------------------------------------------------------------------------
self.addEventListener("push", (event) => {
  let data = { title: "NurseGrid Prep", body: "You have a new update.", url: "/dashboard" };
  try {
    if (event.data) data = { ...data, ...event.data.json() };
  } catch {
    // A non-JSON payload is not worth failing the notification over.
  }

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: "/icons/icon-192.png",
      badge: "/icons/icon-192.png",
      data: { url: data.url },
      tag: "nursegrid-weekly",
      // Replace the previous digest notification rather than stacking one per
      // week in the tray.
      renotify: false,
    }),
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const target = (event.notification.data && event.notification.data.url) || "/dashboard";

  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((clients) => {
      for (const client of clients) {
        if (client.url.includes(self.location.origin) && "focus" in client) {
          client.navigate(target);
          return client.focus();
        }
      }
      return self.clients.openWindow(target);
    }),
  );
});

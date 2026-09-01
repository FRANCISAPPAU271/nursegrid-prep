"use client";

import { useEffect, useState } from "react";

// Self-contained, dynamic security watermark component. On mount, it fetches the
// currently logged-in user's name, email, and IP address from our /api/me and
// /api/me/session endpoints, then dynamically renders a repeating, low-opacity
// (3-5%) diagonal text overlay. If a user attempts to screenshot, record, or
// share your premium question bank/learning content, their personal identity
// is permanently stamped on the image, deterring theft or account sharing.
export default function Watermark() {
  const [stampText, setStampText] = useState("NurseGrid Prep · SECURE CONTENT");

  useEffect(() => {
    let cancelled = false;

    async function loadIdentity() {
      try {
        const [meRes, sessRes] = await Promise.all([
          fetch("/api/me"),
          fetch("/api/me/session").catch(() => null),
        ]);

        if (cancelled) return;

        let email = "";
        let ip = "";

        if (meRes.ok) {
          const meData = await meRes.json();
          if (meData.user) {
            email = meData.user.email;
          }
        }

        if (sessRes && sessRes.ok) {
          const sessData = await sessRes.json();
          if (sessData.session && sessData.session.ipAddress) {
            ip = sessData.session.ipAddress;
          }
        }

        if (cancelled) return;

        const dateStr = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(new Date());

        const segments = ["NurseGrid Prep"];
        if (email) segments.push(email);
        if (ip) segments.push(ip);
        segments.push(dateStr);

        setStampText(segments.join(" · "));
      } catch {
        // Fallback to default generic watermark if network request fails
      }
    }

    loadIdentity();

    return () => {
      cancelled = true;
    };
  }, []);

  // Generate a repeating, responsive, low-opacity SVG background dynamically
  // using encodeURIComponent. This is highly performant, handles Unicode perfectly,
  // and adapts instantly to container sizing.
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="380" height="220" viewBox="0 0 380 220">
      <text x="190" y="110" fill="rgba(100, 116, 139, 0.04)" font-size="11" font-family="sans-serif" font-weight="600" transform="rotate(-25 190 110)" text-anchor="middle">
        ${stampText}
      </text>
    </svg>
  `;

  const bgUrl = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;

  return (
    <div
      aria-hidden="true"
      style={{ backgroundImage: bgUrl }}
      className="pointer-events-none absolute inset-0 select-none overflow-hidden z-20 rounded-2xl"
    />
  );
}

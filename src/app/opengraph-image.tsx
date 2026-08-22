import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "NurseGrid Prep — NCLEX Task Manager & 10,000-Question Bank";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          position: "relative",
          backgroundColor: "#065f46",
          backgroundImage:
            "linear-gradient(135deg, #047857 0%, #059669 42%, #10b981 78%, #34d399 100%)",
          fontFamily: "sans-serif",
          overflow: "hidden",
        }}
      >
        {/* Decorative background shapes for depth */}
        <div
          style={{
            position: "absolute",
            top: -140,
            right: -140,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: "rgba(255,255,255,0.10)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -180,
            left: -120,
            width: 460,
            height: 460,
            borderRadius: 9999,
            background: "rgba(6,95,70,0.35)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 120,
            right: 120,
            width: 10,
            height: 10,
            borderRadius: 9999,
            background: "rgba(255,255,255,0.5)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 200,
            right: 90,
            width: 6,
            height: 6,
            borderRadius: 9999,
            background: "rgba(255,255,255,0.4)",
            display: "flex",
          }}
        />

        {/* Top row: logo mark + brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, zIndex: 1 }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 22,
              background: "rgba(255,255,255,0.16)",
              border: "2px solid rgba(255,255,255,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Simple medical-cross glyph drawn with two bars */}
            <div style={{ position: "relative", width: 34, height: 34, display: "flex" }}>
              <div
                style={{
                  position: "absolute",
                  left: 13,
                  top: 0,
                  width: 8,
                  height: 34,
                  borderRadius: 4,
                  background: "#ffffff",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 13,
                  width: 34,
                  height: 8,
                  borderRadius: 4,
                  background: "#ffffff",
                }}
              />
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 800, color: "#ffffff", letterSpacing: -0.5 }}>
            NurseGrid Prep
          </div>
        </div>

        {/* Middle: headline */}
        <div style={{ display: "flex", flexDirection: "column", zIndex: 1, maxWidth: 980 }}>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.08,
              letterSpacing: -1.5,
            }}
          >
            10,000 NCLEX questions.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 800,
              color: "#d1fae5",
              lineHeight: 1.08,
              letterSpacing: -1.5,
              marginTop: 4,
            }}
          >
            One confident nurse.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 26,
              fontSize: 27,
              color: "rgba(255,255,255,0.88)",
              fontWeight: 400,
              maxWidth: 820,
            }}
          >
            Task manager + rationale-driven question bank built for student nurses.
          </div>
        </div>

        {/* Bottom row: feature chips */}
        <div style={{ display: "flex", gap: 16, zIndex: 1 }}>
          {["Rationales for every question", "Test-taking strategies", "Progress tracking"].map((label) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: "rgba(255,255,255,0.14)",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: 9999,
                padding: "14px 24px",
                fontSize: 20,
                color: "#ffffff",
                fontWeight: 600,
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: 9999, background: "#d1fae5", display: "flex" }} />
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}

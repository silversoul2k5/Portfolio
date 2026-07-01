import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.03), transparent 24%), #030406",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 18% 20%, rgba(103,232,249,0.24), transparent 26%), radial-gradient(circle at 78% 14%, rgba(139,92,246,0.24), transparent 22%), radial-gradient(circle at 50% 78%, rgba(20,184,166,0.16), transparent 20%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 36,
            display: "flex",
            borderRadius: 36,
            border: "1px solid rgba(255,255,255,0.08)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.025)), rgba(6,10,16,0.6)",
            boxShadow:
              "0 30px 90px rgba(2,6,23,0.42), inset 0 1px 0 rgba(255,255,255,0.05)",
            backdropFilter: "blur(24px)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 72px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
              }}
            >
              <div
                style={{
                  width: 68,
                  height: 68,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.06)",
                  fontSize: 24,
                  fontWeight: 700,
                }}
              >
                AC
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <div
                  style={{
                    fontSize: 34,
                    fontWeight: 700,
                    letterSpacing: "-0.05em",
                  }}
                >
                  {siteConfig.name}
                </div>
                <div
                  style={{
                    fontSize: 15,
                    textTransform: "uppercase",
                    letterSpacing: "0.32em",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  Embedded x Web x AI
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.04)",
                padding: "12px 18px",
                fontSize: 14,
                color: "rgba(255,255,255,0.66)",
                textTransform: "uppercase",
                letterSpacing: "0.28em",
              }}
            >
              Premium Portfolio
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div
              style={{
                fontSize: 84,
                lineHeight: 0.95,
                letterSpacing: "-0.08em",
                fontWeight: 800,
                maxWidth: 850,
              }}
            >
              Building hardware-software experiences with cinematic polish.
            </div>
            <div
              style={{
                fontSize: 28,
                lineHeight: 1.5,
                color: "rgba(255,255,255,0.68)",
                maxWidth: 860,
              }}
            >
              Embedded systems, modern web development, AI-driven projects, and
              creative engineering.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div style={{ display: "flex", gap: 14 }}>
              {["Next.js", "Framer Motion", "ESP32", "Python"].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 999,
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.04)",
                    padding: "12px 18px",
                    fontSize: 18,
                    color: "rgba(255,255,255,0.72)",
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
            <div
              style={{
                fontSize: 18,
                color: "rgba(255,255,255,0.5)",
              }}
            >
              {siteConfig.url.replace(/^https?:\/\//, "")}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}

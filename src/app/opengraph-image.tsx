import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.roles[0]}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08090b",
          color: "#e7eaf0",
          padding: "72px 80px",
          fontFamily: "monospace",
        }}
      >
        {/* accent bar */}
        <div style={{ display: "flex", height: 6, gap: 8 }}>
          <div style={{ flex: 1, background: "#22d3ee" }} />
          <div style={{ flex: 1, background: "#4ade80" }} />
          <div style={{ flex: 1, background: "#a78bfa" }} />
          <div style={{ flex: 1, background: "#1d2129" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 26, color: "#22d3ee" }}>
            ~/{site.handle}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 84,
              fontWeight: 600,
              letterSpacing: -3,
            }}
          >
            {site.name}
          </div>
          <div style={{ display: "flex", marginTop: 20, fontSize: 36, color: "#8b93a1" }}>
            {site.roles.join(" · ")}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#5c6472",
          }}
        >
          <div style={{ display: "flex" }}>{site.tagline}</div>
          <div style={{ display: "flex", color: "#4ade80" }}>● {site.availability}</div>
        </div>
      </div>
    ),
    size,
  );
}

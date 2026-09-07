import { ImageResponse } from "next/og";
import { site, headline } from "@/lib/content";

/**
 * The social card. 1200x630 is the ratio every platform crops to; the old
 * portrait headshot was being sliced. Editorial/paper voice to match the site.
 */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.role}`;

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
          background: "#f4f3ee",
          color: "#1a1a18",
          padding: "72px 80px",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#6b6a63",
              fontFamily: "sans-serif",
            }}
          >
            {site.location}
          </div>
          <div style={{ fontSize: 96, lineHeight: 1.05, marginTop: 24 }}>{site.name}</div>
          <div style={{ fontSize: 40, color: "#43423c", marginTop: 12 }}>
            {`${site.role} · ${site.subrole}`}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 20 }}>
            <div style={{ fontSize: 88, lineHeight: 1 }}>{headline.metric}</div>
            <div style={{ fontSize: 36, color: "#43423c" }}>{headline.claim}</div>
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#6b6a63",
              marginTop: 28,
              borderTop: "2px solid #1a1a18",
              paddingTop: 20,
              fontFamily: "sans-serif",
            }}
          >
            rohitjain.is-a.dev
          </div>
        </div>
      </div>
    ),
    size,
  );
}

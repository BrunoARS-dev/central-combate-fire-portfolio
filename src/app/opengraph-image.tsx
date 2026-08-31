import { ImageResponse } from "next/og";

export const alt = "Central Combate Fire — prevenção e combate a incêndios";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#f3f4f5",
        color: "#202124",
      }}
    >
      <div style={{ width: 28, background: "#d9231a" }} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: 72 }}>
        <div style={{ color: "#d9231a", fontSize: 28, fontWeight: 700, letterSpacing: 2 }}>
          CENTRAL COMBATE FIRE
        </div>
        <div style={{ maxWidth: 980, marginTop: 30, fontSize: 68, fontWeight: 700, lineHeight: 1.08 }}>
          Prevenção e combate a incêndios do projeto à manutenção
        </div>
        <div style={{ marginTop: 34, fontSize: 30, color: "#555b61" }}>
          Salvador, Região Metropolitana e cidades próximas
        </div>
      </div>
    </div>,
    size,
  );
}

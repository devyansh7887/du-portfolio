import { useNavigate } from "@tanstack/react-router";

export function SwitchButton({ variant }: { variant: "dark" | "light" }) {
  const navigate = useNavigate();
  const isDark = variant === "dark";
  return (
    <button
      onClick={() => navigate({ to: "/" })}
      aria-label="Back to choice"
      title="Back to choice"
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 9999,
        width: 56,
        height: 56,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        background:
          "linear-gradient(135deg, #1a1a1d 0%, #2b2d31 50%, #f7f7f5 50%, #e9e9e6 100%)",
        border: "2px solid #ff6b4a",
        boxShadow: isDark
          ? "0 0 0 3px rgba(255,107,74,0.18), 0 8px 22px rgba(0,0,0,0.5)"
          : "0 0 0 3px rgba(255,107,74,0.18), 0 8px 22px rgba(43,45,49,0.25)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        padding: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <span
        aria-hidden="true"
        style={{
          fontFamily: '"Playfair Display", serif',
          fontStyle: "italic",
          fontWeight: 700,
          fontSize: 36,
          lineHeight: 1,
          color: "#ff6b4a",
          textShadow: "0 2px 8px rgba(0,0,0,0.45)",
          transform: "translateY(-4px)",
        }}
      >
        ;
      </span>
    </button>
  );
}

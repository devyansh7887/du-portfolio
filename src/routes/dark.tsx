import { createFileRoute } from "@tanstack/react-router";
import { SwitchButton } from "@/components/SwitchButton";
import { batmanHtml } from "@/lib/batman-html";

export const Route = createFileRoute("/dark")({
  head: () => ({
    meta: [
      { title: "Devyansh Upadhyay — The Dark Side" },
      { name: "description", content: "Creative, atmospheric portfolio — Gotham edition." },
    ],
  }),
  component: DarkMode,
});

function DarkMode() {
  return (
    <div className="gotham" style={{ position: "fixed", inset: 0, background: "#050505" }}>
      <iframe
        title="Batman Portfolio"
        srcDoc={batmanHtml}
        style={{ width: "100%", height: "100%", border: "none", display: "block" }}
      />
      <SwitchButton variant="dark" />
    </div>
  );
}

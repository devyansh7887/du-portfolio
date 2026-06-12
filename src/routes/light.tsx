import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import devyanshPhoto from "@/assets/devyansh-photo.png.asset.json";
import { SwitchButton } from "@/components/SwitchButton";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export const Route = createFileRoute("/light")({
  head: () => ({
    meta: [
      { title: "Devyansh Upadhyay — Software Engineer & AI Builder" },
      {
        name: "description",
        content:
          "Final-year CS (AI) student at NIET. Builder of AI agents, full-stack products, and algorithm visualizers. Open to 2026 product roles.",
      },
      { property: "og:title", content: "Devyansh Upadhyay — Software Engineer & AI Builder" },
      {
        property: "og:description",
        content: "AI agents, full-stack products, and algorithm visualizers. Open to 2026 roles.",
      },
    ],
  }),
  component: LightMode,
});

/* ---------- helpers ---------- */

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

function Container({ children }: { children: ReactNode }) {
  return (
    <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 11,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "#5a6068",
        marginBottom: 18,
      }}
    >
      <span style={{ width: 18, height: 1, background: "#ff6b4a" }} />
      {children}
    </div>
  );
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

/* ---------- brand icons (inline SVG, currentColor) ---------- */

type IconProps = { size?: number };

const Icon = {
  GitHub: ({ size = 20 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.07 11.07 0 015.78 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.66.8.55C20.21 21.38 23.5 17.07 23.5 12 23.5 5.65 18.35.5 12 .5z"/>
    </svg>
  ),
  LinkedIn: ({ size = 20 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zM8.5 8h4.37v1.92h.06c.61-1.15 2.1-2.36 4.33-2.36 4.63 0 5.49 3.05 5.49 7.02V22h-4.56v-6.27c0-1.5-.03-3.43-2.09-3.43-2.09 0-2.41 1.63-2.41 3.32V22H8.5V8z"/>
    </svg>
  ),
  LeetCode: ({ size = 20 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.48 2.34a2 2 0 012.86 0l4.32 4.4a2 2 0 010 2.83 2 2 0 01-2.85 0l-4.33-4.4a2 2 0 010-2.83zM3.7 12.97l6.7-6.84a2 2 0 012.85 0 2 2 0 010 2.83l-4.84 4.93 4.84 4.93a2 2 0 010 2.83 2 2 0 01-2.85 0l-6.7-6.84a2 2 0 010-2.84zm17.3 1.42a1.5 1.5 0 010 3h-7a1.5 1.5 0 010-3h7z"/>
    </svg>
  ),
  Codeforces: ({ size = 20 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.5 7.5A1.5 1.5 0 016 9v10.5A1.5 1.5 0 014.5 21h-3A1.5 1.5 0 010 19.5V9a1.5 1.5 0 011.5-1.5h3zm9 3A1.5 1.5 0 0115 12v7.5a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 019 19.5V12a1.5 1.5 0 011.5-1.5h3zm9-6A1.5 1.5 0 0124 6v13.5a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 0118 19.5V6a1.5 1.5 0 011.5-1.5h3z"/>
    </svg>
  ),
  GFG: ({ size = 20 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.45 14.32c-.39 1.09-1.06 1.96-1.96 2.6-.86.6-1.85.9-2.94.9-1.06 0-2.02-.3-2.86-.88-.86-.6-1.5-1.45-1.93-2.5h-1.5c-.43 1.05-1.07 1.9-1.93 2.5-.84.58-1.8.88-2.86.88-1.1 0-2.08-.3-2.94-.9-.9-.64-1.57-1.51-1.96-2.6L0 12.6c.34-1.7 1.17-3.06 2.46-4.05C3.78 7.55 5.36 7.05 7.2 7.05c1.4 0 2.66.29 3.78.87 1.13.6 1.99 1.43 2.6 2.5h-1.62c-.44-.62-1-1.1-1.7-1.42-.7-.34-1.45-.5-2.26-.5-1.3 0-2.42.4-3.34 1.2-.92.78-1.46 1.8-1.6 3.05.16 1.25.7 2.28 1.6 3.07.92.78 2.04 1.18 3.34 1.18.8 0 1.55-.16 2.26-.48.7-.34 1.27-.82 1.7-1.44h1.62c.43.62 1 1.1 1.7 1.44.71.32 1.46.48 2.26.48 1.3 0 2.42-.4 3.34-1.18.9-.79 1.44-1.82 1.6-3.07-.14-1.25-.68-2.27-1.6-3.05-.92-.8-2.04-1.2-3.34-1.2-.81 0-1.56.16-2.26.5-.7.32-1.27.8-1.71 1.42h-1.62c.6-1.07 1.47-1.9 2.6-2.5 1.12-.58 2.38-.87 3.78-.87 1.84 0 3.42.5 4.74 1.5C22.83 9.54 23.66 10.9 24 12.6l-2.55 1.72z"/>
    </svg>
  ),
  Mail: ({ size = 20 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2"/>
      <path d="M3 7l9 7 9-7"/>
    </svg>
  ),
  Phone: ({ size = 20 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92V21a1 1 0 01-1.09 1 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 013.21 4.09 1 1 0 014.2 3h4.09a1 1 0 011 .75c.12.96.35 1.9.7 2.81a1 1 0 01-.23 1.06L8.21 9.17a16 16 0 006.62 6.62l1.55-1.55a1 1 0 011.06-.23c.91.35 1.85.58 2.81.7a1 1 0 01.75 1z"/>
    </svg>
  ),
  ExternalLink: ({ size = 16 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
      <path d="M15 3h6v6"/>
      <path d="M10 14L21 3"/>
    </svg>
  ),
  ArrowDown: ({ size = 18 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 5v14M5 12l7 7 7-7"/>
    </svg>
  ),
};

const SOCIALS: { key: keyof typeof Icon; label: string; href: string }[] = [
  { key: "GitHub", label: "GitHub", href: "https://github.com/devyansh7887" },
  { key: "LinkedIn", label: "LinkedIn", href: "https://linkedin.com/in/devyanshupadhyay" },
  { key: "LeetCode", label: "LeetCode", href: "https://leetcode.com/u/devyansh_7887/" },
  { key: "Codeforces", label: "Codeforces", href: "https://codeforces.com/profile/devyansh78" },
  { key: "GFG", label: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/user/devyansh_7887/" },
  { key: "Mail", label: "Email", href: "mailto:dupadhyay7887@gmail.com" },
];

/* ---------- root ---------- */

function LightMode() {
  return (
    <div
      className="light-mode"
      style={{
        background: "#f7f7f5",
        color: "#2b2d31",
        minHeight: "100vh",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <CursorDot />
      <Nav />
      <Hero />
      <TechMarquee />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />

      <Certifications />
      <Contact />
      <Footer />
      <SwitchButton variant="light" />
    </div>
  );
}

/* ---------- coral cursor dot (light-only) ---------- */

function CursorDot() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const tick = () => {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${x - 6}px, ${y - 6}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 12,
        height: 12,
        borderRadius: "50%",
        background: "#ff6b4a",
        pointerEvents: "none",
        zIndex: 9998,
        boxShadow: "0 0 14px rgba(255,107,74,0.55)",
      }}
    />
  );
}

/* ---------- nav ---------- */

function Nav() {
  const links = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 68,
        zIndex: 100,
        background: "rgba(247,247,245,0.85)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid #d8dadd",
      }}
    >
      <Container>
        <div
          style={{
            height: 68,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <button
            onClick={() => scrollTo("hero")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: '"Playfair Display", serif',
              fontStyle: "italic",
              fontSize: 22,
              color: "#2b2d31",
              padding: 0,
            }}
          >
            devyansh<span style={{ color: "#ff6b4a" }}>.</span>
          </button>

          <div className="hidden md:flex" style={{ gap: 28 }}>
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: 12,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#5a6068",
                  padding: "6px 2px",
                  borderBottom: "1px solid transparent",
                  transition: "color .2s, border-color .2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#2b2d31";
                  e.currentTarget.style.borderBottomColor = "#ff6b4a";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#5a6068";
                  e.currentTarget.style.borderBottomColor = "transparent";
                }}
              >
                {l.label}
              </button>
            ))}
          </div>

          <a
            href={resumeAsset.url}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 12,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#2b2d31",
              border: "1.5px solid #2b2d31",
              padding: "8px 16px",
              borderRadius: 2,
              textDecoration: "none",
              transition: "all .2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#ff6b4a";
              e.currentTarget.style.color = "#f7f7f5";
              e.currentTarget.style.borderColor = "#ff6b4a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#2b2d31";
              e.currentTarget.style.borderColor = "#2b2d31";
            }}
          >
            Résumé
          </a>
        </div>
      </Container>
    </nav>
  );
}

/* ---------- hero ---------- */

function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 120,
        paddingBottom: 80,
      }}
    >
      {/* faint grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(to right, rgba(43,45,49,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(43,45,49,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 35%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 35%, transparent 85%)",
          pointerEvents: "none",
        }}
      />
      <Container>
        <div
          className="flex flex-col md:flex-row text-center md:text-left"
          style={{ gap: 64, alignItems: "center", justifyContent: "center", position: "relative" }}
        >
          <div className="flex flex-col items-center md:items-start w-full" style={{ flex: 1 }}>

            <Reveal>
              <SectionLabel>Available · 2026 cohort</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h1
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 700,
                  lineHeight: 1.02,
                  letterSpacing: "-0.02em",
                  color: "#2b2d31",
                  margin: 0,
                }}
                className="!text-[44px] md:!text-[72px]"
              >
                Devyansh
                <br />
                Upadhyay<span style={{ color: "#ff6b4a" }}>.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p
                style={{
                  marginTop: 20,
                  fontSize: 18,
                  lineHeight: 1.55,
                  color: "#5a6068",
                  maxWidth: 560,
                }}
              >
                Agentic AI engineer in the making. I build{" "}
                <span style={{ color: "#2b2d31", borderBottom: "1.5px solid #ff6b4a" }}>
                  autonomous LLM agents
                </span>
                {" "}— multi-step reasoning with LangGraph & CrewAI, retrieval over
                Pinecone and Neo4j, and production-grade evals with LangSmith and RAGAS.
                From prompt to pipeline to deploy.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div style={{ marginTop: 32, display: "flex", gap: 14, flexWrap: "wrap" }}>
                <button
                  onClick={() => scrollTo("projects")}
                  style={{
                    background: "#ff6b4a",
                    color: "#f7f7f5",
                    border: "1.5px solid #ff6b4a",
                    padding: "12px 22px",
                    borderRadius: 2,
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: 12,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all .2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 10px 24px rgba(255,107,74,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  View Work
                </button>
                <a
                  href={resumeAsset.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#2b2d31",
                    border: "1.5px solid #2b2d31",
                    padding: "12px 22px",
                    borderRadius: 2,
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: 12,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    transition: "all .2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#2b2d31";
                    e.currentTarget.style.color = "#f7f7f5";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#2b2d31";
                  }}
                >
                  Download Résumé
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div style={{ marginTop: 40, display: "flex", gap: 18, alignItems: "center" }}>
                {SOCIALS.slice(0, 5).map((s) => {
                  const I = Icon[s.key];
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      style={{
                        color: "#5a6068",
                        transition: "color .2s, transform .2s",
                        display: "inline-flex",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#ff6b4a";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#5a6068";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <I size={22} />
                    </a>
                  );
                })}
              </div>
            </Reveal>
          </div>

          {/* Right: portrait card */}
          <Reveal delay={0.2}>
            <div
              style={{
                position: "relative",
                width: 320,
                height: 380,
                background: "#2b2d31",
                boxShadow: "16px 16px 0 #ff6b4a",
                overflow: "hidden",
              }}
            >
              <img
                src={devyanshPhoto.url}
                alt="Devyansh Upadhyay"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  filter: "contrast(1.05) saturate(1.05)",
                }}
              />
              {/* corner ticks */}
              <span style={{ position: "absolute", top: 8, left: 8, width: 14, height: 1, background: "#ff6b4a", zIndex: 2 }} />
              <span style={{ position: "absolute", top: 8, left: 8, height: 14, width: 1, background: "#ff6b4a", zIndex: 2 }} />
              <span style={{ position: "absolute", bottom: 8, right: 8, width: 14, height: 1, background: "#ff6b4a", zIndex: 2 }} />
              <span style={{ position: "absolute", bottom: 8, right: 8, height: 14, width: 1, background: "#ff6b4a", zIndex: 2 }} />
              {/* status badge */}
              <div
                style={{
                  position: "absolute",
                  left: 16,
                  bottom: 16,
                  right: 16,
                  background: "rgba(29,30,34,0.85)",
                  backdropFilter: "blur(6px)",
                  padding: "10px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  borderLeft: "3px solid #ff6b4a",
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#ff6b4a",
                    boxShadow: "0 0 10px #ff6b4a",
                  }}
                />
                <span
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: 12,
                    color: "#f7f7f5",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Open to SWE / AI roles
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <button
            onClick={() => scrollTo("about")}
            style={{
              marginTop: 80,
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#5a6068",
            }}
          >
            <Icon.ArrowDown size={16} />
            Scroll
          </button>
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------- tech marquee ---------- */

const TECH = [
  "Python", "TypeScript", "PyTorch", "TensorFlow", "LangGraph", "LangChain",
  "LlamaIndex", "CrewAI", "OpenAI Agents SDK", "GPT-4o", "Claude", "Gemini",
  "LLaMA 3", "Hugging Face", "Pinecone", "ChromaDB", "FAISS", "Neo4j",
  "RAGAS", "LangSmith", "FastAPI", "Docker", "Kubernetes",
  "AWS Bedrock", "AWS SageMaker", "PostgreSQL", "MongoDB",
];

function TechMarquee() {
  const row = [...TECH, ...TECH];
  return (
    <section
      aria-label="Tech stack"
      style={{
        background: "#2b2d31",
        borderTop: "1px solid #d8dadd",
        borderBottom: "1px solid #d8dadd",
        overflow: "hidden",
        padding: "20px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 48,
          width: "max-content",
          animation: "marquee-scroll 38s linear infinite",
        }}
      >
        {row.map((k, i) => (
          <span
            key={i}
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 13,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#d8dadd",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: "#ff6b4a", marginRight: 14 }}>◆</span>
            {k}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------- about ---------- */

const EDUCATION = [
  {
    school: "NIET, Greater Noida",
    degree: "B.Tech, Artificial Intelligence",
    when: "2022 — 2026",
    note: "CGPA 8.7 / 10 · Coursework: DSA, OOP, DBMS, OS, Machine Learning, NLP.",
  },
  {
    school: "Parmeshwari Devi Dhanuka SVM, Vrindavan",
    degree: "Senior Secondary (12th)",
    when: "2021",
    note: "86% · CBSE · Physics, Chemistry, Math, Computer Science.",
  },
  {
    school: "Bhaktivedanta Gurukula & International School, Vrindavan",
    degree: "Secondary (10th)",
    when: "2019",
    note: "86% · CBSE · Foundation in math, science, and the classics.",
  },
];

function About() {
  const [tab, setTab] = useState(0);
  const resumeRows = [
    { k: "Name", v: "Devyansh Upadhyay" },
    { k: "Role", v: "Software Engineer · AI Builder" },
    { k: "Location", v: "Greater Noida, IN" },
    { k: "Email", v: "dupadhyay7887@gmail.com" },
    { k: "Phone", v: "+91 79069 77607" },
    { k: "Focus", v: "Distributed systems · Agentic AI" },
    { k: "Availability", v: "Full-time · 2026" },
    { k: "Languages", v: "English, Hindi" },
  ];

  return (
    <section id="about" style={{ padding: "120px 0", background: "#f7f7f5" }}>
      <Container>
        <Reveal>
          <SectionLabel>01 — About</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              color: "#2b2d31",
              margin: 0,
              marginBottom: 48,
              lineHeight: 1.1,
            }}
            className="!text-[32px] md:!text-[44px]"
          >
            About <span style={{ color: "#ff6b4a" }}>me.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 28 }}>
          {/* Left: digital resume */}
          <Reveal delay={0.05}>
            <div
              style={{
                background: "#fff",
                border: "1px solid #d8dadd",
                padding: 0,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                boxShadow: "10px 10px 0 #2b2d31",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #d8dadd",
                  padding: "12px 18px",
                  background: "#2b2d31",
                  color: "#f7f7f5",
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                <span>resume.txt</span>
                <span style={{ display: "flex", gap: 6 }}>
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff6b4a" }} />
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#5a6068" }} />
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#5a6068" }} />
                </span>
              </div>
              <div style={{ padding: 24, flex: 1 }}>
                {resumeRows.map((r, i) => (
                  <div
                    key={r.k}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 16,
                      padding: "10px 0",
                      borderTop: i === 0 ? "none" : "1px dashed #d8dadd",
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: 13,
                    }}
                  >
                    <span style={{ color: "#5a6068", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                      {r.k}
                    </span>
                    <span style={{ color: "#2b2d31", textAlign: "right" }}>{r.v}</span>
                  </div>
                ))}
                <a
                  href={resumeAsset.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    marginTop: 20,
                    color: "#f7f7f5",
                    background: "#ff6b4a",
                    padding: "10px 16px",
                    textDecoration: "none",
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: 12,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                  }}
                >
                  Download PDF <Icon.ExternalLink size={14} />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right: education tabs */}
          <Reveal delay={0.1}>
            <div
              style={{
                background: "#fff",
                border: "1px solid #d8dadd",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                boxShadow: "10px 10px 0 #ff6b4a",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 18px",
                  background: "#2b2d31",
                  color: "#f7f7f5",
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  borderBottom: "1px solid #d8dadd",
                }}
              >
                <span>education</span>
                <span style={{ color: "#ff6b4a" }}>///</span>
              </div>
              <div
                role="tablist"
                style={{
                  display: "flex",
                  borderBottom: "1px solid #d8dadd",
                  background: "#f7f7f5",
                }}
              >
                {EDUCATION.map((e, i) => (
                  <button
                    key={e.school + i}
                    role="tab"
                    aria-selected={tab === i}
                    onClick={() => setTab(i)}
                    style={{
                      flex: 1,
                      background: tab === i ? "#fff" : "transparent",
                      border: "none",
                      borderRight: i < EDUCATION.length - 1 ? "1px solid #d8dadd" : "none",
                      borderTop: tab === i ? "3px solid #ff6b4a" : "3px solid transparent",
                      padding: "12px 10px",
                      cursor: "pointer",
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: tab === i ? "#2b2d31" : "#5a6068",
                      transition: "all .2s",
                    }}
                  >
                    {e.when.split(" — ")[0]}
                  </button>
                ))}
              </div>
              <div style={{ padding: 28, flex: 1 }}>
                <div
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: 11,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#ff6b4a",
                  }}
                >
                  {EDUCATION[tab].when}
                </div>
                <h3
                  style={{
                    margin: "8px 0 4px",
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 700,
                    fontSize: 24,
                    color: "#2b2d31",
                  }}
                >
                  {EDUCATION[tab].school}
                </h3>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 14,
                    color: "#5a6068",
                    fontStyle: "italic",
                  }}
                >
                  {EDUCATION[tab].degree}
                </div>
                <p
                  style={{
                    marginTop: 16,
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: "#5a6068",
                  }}
                >
                  {EDUCATION[tab].note}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ---------- skills (Chrome-tab style, screen-wide cards) ---------- */

const SKILL_GROUPS: { title: string; items: string[] }[] = [
  { title: "Programming Languages", items: ["Python", "TypeScript", "JavaScript", "SQL"] },
  {
    title: "AI/ML Frameworks & Libraries",
    items: [
      "PyTorch", "TensorFlow", "Keras", "scikit-learn", "XGBoost",
      "Hugging Face Transformers", "Hugging Face Datasets", "NumPy", "Pandas",
    ],
  },
  {
    title: "Agentic AI & LLM Frameworks",
    items: ["LangGraph", "LangChain", "LlamaIndex", "CrewAI", "OpenAI Agents SDK"],
  },
  {
    title: "Large Language Models",
    items: [
      "OpenAI GPT-4o / o3", "Anthropic Claude 3.x / 4.x", "Google Gemini",
      "Mistral", "LLaMA 3.x", "Phi-4", "Gemma", "Whisper", "CLIP / BLIP-2",
    ],
  },
  {
    title: "RAG & Vector Databases",
    items: [
      "Pinecone", "ChromaDB", "FAISS", "Neo4j (GraphRAG)", "Hybrid Search",
      "Re-ranking", "Semantic Chunking", "Agentic RAG", "RAGAS", "DeepEval",
    ],
  },
  {
    title: "Cloud & Databases",
    items: [
      "AWS Bedrock", "AWS SageMaker", "AWS Lambda", "AWS S3", "AWS EMR",
      "PostgreSQL", "MongoDB",
    ],
  },
  {
    title: "Infra & APIs",
    items: ["Docker", "Kubernetes (K8s)", "GitHub Actions", "FastAPI", "REST APIs", "GraphQL", "Async Python (asyncio)"],
  },
];

function Skills() {
  const [active, setActive] = useState(0);
  return (
    <section
      id="skills"
      style={{
        padding: "120px 0",
        background: "#fff",
        borderTop: "1px solid #d8dadd",
        borderBottom: "1px solid #d8dadd",
      }}
    >
      <Container>
        <Reveal>
          <SectionLabel>02 — Skills</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              color: "#2b2d31",
              margin: 0,
              marginBottom: 32,
            }}
            className="!text-[32px] md:!text-[44px]"
          >
            Skills.
          </h2>
        </Reveal>

        {/* Chrome-style tab strip */}
        <div
          role="tablist"
          style={{
            display: "flex",
            gap: 4,
            borderBottom: "2px solid #2b2d31",
            overflowX: "auto",
          }}
        >
          {SKILL_GROUPS.map((g, i) => (
            <button
              key={g.title}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              style={{
                position: "relative",
                background: active === i ? "#2b2d31" : "#f7f7f5",
                color: active === i ? "#f7f7f5" : "#5a6068",
                border: "1px solid #d8dadd",
                borderBottom: "none",
                padding: "12px 22px",
                cursor: "pointer",
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 12,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                transition: "all .2s",
              }}
            >
              {g.title}
              {active === i && (
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: -2,
                    height: 2,
                    background: "#ff6b4a",
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Screen-wide content card (highlighted) */}
        <Reveal key={active}>
          <div
            style={{
              background: "#fff",
              border: "2px solid #2b2d31",
              borderTop: "none",
              padding: "44px 36px",
              minHeight: 240,
              display: "flex",
              flexDirection: "column",
              gap: 24,
              boxShadow:
                "0 24px 60px -20px rgba(43,45,49,0.28), 0 8px 22px -10px rgba(255,107,74,0.18)",
              position: "relative",
            }}
          >
            {/* coral accent rail */}
            <span
              aria-hidden
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: 4,
                background: "#ff6b4a",
              }}
            />
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
              <h3
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 700,
                  fontSize: 32,
                  color: "#2b2d31",
                  margin: 0,
                }}
              >
                {SKILL_GROUPS[active].title}
              </h3>
              <span
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#ff6b4a",
                  background: "#2b2d31",
                  padding: "6px 12px",
                  borderRadius: 2,
                }}
              >
                {String(active + 1).padStart(2, "0")} / {String(SKILL_GROUPS.length).padStart(2, "0")}
              </span>
            </div>
            <div
              className="grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                gap: 14,
              }}
            >
              {SKILL_GROUPS[active].items.map((it) => (
                <div
                  key={it}
                  style={{
                    background: "#f7f7f5",
                    border: "1.5px solid #2b2d31",
                    padding: "18px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    boxShadow: "3px 3px 0 0 #ff6b4a",
                    transition: "transform .2s, box-shadow .2s, background .2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translate(-2px,-2px)";
                    e.currentTarget.style.boxShadow = "6px 6px 0 0 #ff6b4a";
                    e.currentTarget.style.background = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translate(0,0)";
                    e.currentTarget.style.boxShadow = "3px 3px 0 0 #ff6b4a";
                    e.currentTarget.style.background = "#f7f7f5";
                  }}
                >
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      background: "#ff6b4a",
                      flexShrink: 0,
                      boxShadow: "0 0 0 2px #2b2d31",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#2b2d31",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {it}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------- projects (description left, large image card right) ---------- */

const PROJECTS = [
  {
    title: "AI Resume Analyser",
    short: "AI Resume Analyser",
    blurb:
      "AI-powered resume scoring tool that beats ATS gatekeepers with targeted suggestions in under 3 seconds.",
    bullets: [
      "Built ATS match-scoring engine using TF-IDF and NLTK on top of Claude API.",
      "Delivers 5+ targeted suggestions per scan with sub-3s response time.",
      "Full-stack React + Python pipeline, deployed and live for public use.",
    ],
    stack: ["Python", "React.js", "Claude API", "TF-IDF", "NLTK"],
    live: "https://puter.com/app/my-ai-resume-analyzer",
    code: "https://github.com/devyansh7887/AI-RESUME-ANALYZER",
    accent: "linear-gradient(135deg, #312a5e 0%, #6a4ec2 100%)",
  },
  {
    title: "Algorithm Visualizer",
    short: "Algorithm Visualizer",
    blurb:
      "Interactive visualizer for 12 sorting & searching algorithms with step-through and dynamic speed control.",
    bullets: [
      "Animated 12 sorting and searching algorithms in real-time at 60 FPS.",
      "Step-through mode with dynamic speed control for learning workflows.",
      "Scored 95+ on Lighthouse — fast, accessible, zero-dependency build.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Vanilla JS"],
    live: "https://thealgorithmvisualizer.netlify.app/",
    code: "https://github.com/devyansh7887/Algorithm_Visualizer",
    accent: "linear-gradient(135deg, #2b2d31 0%, #ff6b4a 100%)",
  },
  {
    title: "Swoley-Fit",
    short: "Swoley-Fit",
    blurb:
      "Responsive fitness app that generates custom workouts and tracks progress across 3+ muscle group categories.",
    bullets: [
      "Custom workout generator covering 3+ muscle group categories.",
      "Fully responsive across every device, no external state libraries.",
      "Build size reduced 30% vs baseline through Vite + clean hooks.",
    ],
    stack: ["React.js", "Tailwind CSS", "Vite", "React Hooks"],
    live: "https://swoleyfit-vite.netlify.app/",
    code: "https://github.com/devyansh7887/Swoley-fit",
    accent: "linear-gradient(135deg, #0b3d2e 0%, #1f8a70 100%)",
  },
];

function ProjectCard({ p, i }: { p: (typeof PROJECTS)[number]; i: number }) {
  const reversed = i % 2 === 1;
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-12"
      style={{ gap: 32, alignItems: "center" }}
    >
      {/* Description */}
      <div
        className="md:col-span-5"
        style={{ order: reversed ? 2 : 1 }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 14,
          }}
        >
          <span
            style={{
              width: 4,
              height: 22,
              background: "#ff6b4a",
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              fontSize: 24,
              color: "#2b2d31",
            }}
          >
            {p.short}
          </span>
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            style={{
              marginLeft: "auto",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              border: "1px solid #2b2d31",
              padding: "6px 12px",
              color: "#2b2d31",
              textDecoration: "none",
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            Check out <Icon.ExternalLink size={12} />
          </a>
        </div>
        <p
          style={{
            color: "#5a6068",
            fontSize: 15,
            lineHeight: 1.6,
            marginBottom: 16,
          }}
        >
          {p.blurb}
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
          {p.bullets.map((b, j) => (
            <li key={j} style={{ display: "flex", gap: 10, color: "#5a6068", fontSize: 14, lineHeight: 1.55 }}>
              <span style={{ color: "#ff6b4a", fontWeight: 700 }}>+</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {/* tech stack chips */}
        <div style={{ marginTop: 22 }}>
          <div
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 10,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#5a6068",
              marginBottom: 10,
            }}
          >
            Tech stack
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {p.stack.map((s) => (
              <span
                key={s}
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: 11,
                  letterSpacing: "0.06em",
                  color: "#2b2d31",
                  background: "#fff",
                  border: "1px solid #d8dadd",
                  padding: "5px 10px",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* links */}
        <div style={{ marginTop: 20, display: "flex", gap: 18 }}>
          <a
            href={p.code}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "#2b2d31",
              textDecoration: "none",
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 12,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            <Icon.GitHub size={16} /> Code
          </a>
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "#2b2d31",
              textDecoration: "none",
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 12,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            <Icon.ExternalLink size={16} /> Live
          </a>
        </div>
      </div>

      {/* Large showcase card */}
      <div
        className="md:col-span-7"
        style={{ order: reversed ? 1 : 2 }}
      >
        <div
          style={{
            borderRadius: 18,
            padding: 36,
            background: p.accent,
            minHeight: 360,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0 20px 60px rgba(43,45,49,0.18)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* subtle grid */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              opacity: 0.5,
            }}
          />
          <h3
            style={{
              position: "relative",
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              fontSize: 32,
              lineHeight: 1.15,
              color: "#fff",
              margin: 0,
              maxWidth: "92%",
            }}
          >
            {p.title}
          </h3>
          <div
            style={{
              position: "relative",
              marginTop: 32,
              background: "#0b0b10",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.12)",
              padding: 18,
            }}
          >
            <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
              }}
            >
              {p.stack.slice(0, 6).map((s) => (
                <div
                  key={s}
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 6,
                    padding: "10px 12px",
                    color: "#f7f7f5",
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: 12,
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" style={{ padding: "120px 0", background: "#f7f7f5" }}>
      <Container>
        <Reveal>
          <SectionLabel>03 — Selected work</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 16,
              marginBottom: 48,
            }}
          >
            <h2
              style={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                color: "#2b2d31",
                margin: 0,
              }}
              className="!text-[32px] md:!text-[44px]"
            >
              Projects.
            </h2>
            <a
              href="https://github.com/devyansh7887"
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 12,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#5a6068",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              All on GitHub <Icon.ExternalLink size={14} />
            </a>
          </div>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: 96 }}>
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={0.05 * i}>
              <ProjectCard p={p} i={i} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- experience (kept with timeline + scroll reveal) ---------- */

const EXPERIENCE = [
  {
    role: "Tech Lead — College Coding Club",
    org: "NIET",
    when: "2023 — 2024",
    bullets: [
      "Ran weekly DSA sessions and intra-college contests for 80+ students.",
      "Mentored juniors on system design and interview prep.",
    ],
  },
];

/* ---------- achievements (horizontal scroll snap, aashishjaini.me style) ---------- */

const ACHIEVEMENTS = [
  { metric: "1400+", label: "Codeforces - Specialist", sub: "Achieved 1400+ rating in Codeforces Competetive Programming." },
  { metric: "250+", label: "DSA Problems Solved", sub: "LeetCode · GeeksforGeeks" },
  { metric: "96.7%", label: "NCAT 2025 — Engineering", sub: "Top engineers nationwide" },
  { metric: "86.5", label: "eLitmus pH Test Percentile", sub: "Quant · Logic · Problem-solving" },
  { metric: "+35%", label: "Problem-solving accuracy gain", sub: "Within one year of practice" },
  { metric: "3", label: "End-to-end systems shipped", sub: "AI Resume · Visualizer · Swoley-Fit" },
  { metric: "4", label: "Industry Certifications", sub: "Oracle · AWS · IBM" },
];

function Achievements() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  // Translate the horizontal track based on vertical scroll progress.
  // -((cards * cardWidth) - viewport) approx. Use -75% of track width.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-78%"]);

  return (
    <section
      ref={sectionRef}
      id="achievements"
      style={{
        position: "relative",
        height: `${ACHIEVEMENTS.length * 70}vh`,
        background: "#2b2d31",
        color: "#f7f7f5",
        borderTop: "1px solid #d8dadd",
        borderBottom: "1px solid #d8dadd",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Container>
          <div style={{ paddingTop: 80 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#d8dadd", marginBottom: 18 }}>
              <span style={{ width: 18, height: 1, background: "#ff6b4a" }} />
              04 — Achievements
            </div>
            <h2
              style={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                margin: 0,
                marginBottom: 12,
                color: "#f7f7f5",
              }}
              className="!text-[32px] md:!text-[44px]"
            >
              Numbers I'm proud of.
            </h2>
            <p
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#8a8f96",
                margin: 0,
                marginBottom: 24,
              }}
            >
              Scroll to explore →
            </p>
          </div>
        </Container>

        <div style={{ flex: 1, display: "flex", alignItems: "center", overflow: "hidden" }}>
          <motion.div
            style={{
              x,
              display: "flex",
              gap: 28,
              paddingLeft: 24,
              paddingRight: 24,
              willChange: "transform",
            }}
          >
            {ACHIEVEMENTS.map((a, i) => (
              <div
                key={a.label}
                style={{
                  flex: "0 0 360px",
                  background: "#1d1e22",
                  border: "1.5px solid #3a3c41",
                  padding: 32,
                  minHeight: 280,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  boxShadow: "8px 8px 0 0 #ff6b4a",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 20,
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: 11,
                    letterSpacing: "0.2em",
                    color: "#5a6068",
                  }}
                >
                  #{String(i + 1).padStart(2, "0")}
                </span>
                <div
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 700,
                    fontSize: 64,
                    lineHeight: 1,
                    color: "#ff6b4a",
                  }}
                >
                  {a.metric}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 17,
                      fontWeight: 600,
                      color: "#f7f7f5",
                      marginTop: 18,
                    }}
                  >
                    {a.label}
                  </div>
                  <div
                    style={{
                      marginTop: 8,
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: 11,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "#d8dadd",
                    }}
                  >
                    {a.sub}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "120px 0",
        background: "#fff",
        borderTop: "1px solid #d8dadd",
        borderBottom: "1px solid #d8dadd",
      }}
    >
      <Container>
        <Reveal>
          <SectionLabel>05 — Experience</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              color: "#2b2d31",
              margin: 0,
              marginBottom: 48,
            }}
            className="!text-[32px] md:!text-[44px]"
          >
            Where I've shipped.
          </h2>
        </Reveal>

        <div style={{ position: "relative", paddingLeft: 28 }}>
          <span
            aria-hidden
            style={{
              position: "absolute",
              top: 8,
              bottom: 8,
              left: 5,
              width: 1,
              background: "#d8dadd",
            }}
          />
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.role} delay={0.05 * i}>
              <div style={{ position: "relative", paddingBottom: 40 }}>
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    top: 10,
                    left: -28,
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#ff6b4a",
                    boxShadow: "0 0 0 4px #fff, 0 0 0 5px #ff6b4a",
                  }}
                />
                <div
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: 11,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#5a6068",
                  }}
                >
                  {e.when}
                </div>
                <h3
                  style={{
                    margin: "6px 0 2px",
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 700,
                    fontSize: 22,
                    color: "#2b2d31",
                  }}
                >
                  {e.role}{" "}
                  <span style={{ color: "#ff6b4a", fontStyle: "italic" }}>
                    @ {e.org}
                  </span>
                </h3>
                <ul
                  style={{
                    marginTop: 10,
                    paddingLeft: 18,
                    color: "#5a6068",
                    fontSize: 15,
                    lineHeight: 1.6,
                  }}
                >
                  {e.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- certifications (highlighted cards) ---------- */

const CERTS = [
  { title: "Oracle Cloud Infrastructure 2025 Generative AI Professional", org: "Oracle University", year: "Sep 2025" },
  { title: "AWS Cloud Practitioner Essentials", org: "Amazon Web Services", year: "Mar 2026" },
  { title: "Artificial Intelligence with Machine Learning in Java", org: "Oracle Academy", year: "May 2025" },
  { title: "Python for Data Science, AI & Development", org: "IBM · Coursera", year: "Apr 2023" },
];

function Certifications() {
  return (
    <section style={{ padding: "100px 0", background: "#f7f7f5" }}>
      <Container>
        <Reveal>
          <SectionLabel>06 — Certifications</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              color: "#2b2d31",
              margin: 0,
              marginBottom: 36,
            }}
            className="!text-[32px] md:!text-[44px]"
          >
            Certifications.
          </h2>
        </Reveal>
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: 22 }}
        >
          {CERTS.map((c, i) => (
            <Reveal key={c.title} delay={0.05 * i}>
              <div
                style={{
                  position: "relative",
                  background: "#fff",
                  border: "1px solid #d8dadd",
                  padding: "26px 26px 26px 32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 18,
                  boxShadow: "8px 8px 0 #2b2d31",
                  transition: "transform .2s, box-shadow .2s",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translate(-2px,-2px)";
                  e.currentTarget.style.boxShadow = "10px 10px 0 #ff6b4a";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translate(0,0)";
                  e.currentTarget.style.boxShadow = "8px 8px 0 #2b2d31";
                }}
              >
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    width: 6,
                    background: "#ff6b4a",
                  }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: 10,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "#ff6b4a",
                      marginBottom: 8,
                    }}
                  >
                    Certification · {c.year}
                  </div>
                  <div
                    style={{
                      fontFamily: '"Playfair Display", serif',
                      fontWeight: 700,
                      fontSize: 22,
                      color: "#2b2d31",
                      lineHeight: 1.2,
                    }}
                  >
                    {c.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 14,
                      color: "#5a6068",
                      marginTop: 6,
                    }}
                  >
                    {c.org}
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 700,
                    fontSize: 42,
                    color: "#d8dadd",
                  }}
                >
                  #{String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- contact (big, highlighted, fits margins) ---------- */

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Job Opportunity");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async () => {
    if (!name || !email || !message) return;
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "1601840e-85fa-4dd4-8105-1c346beb28be",
          subject: `${subject} — from ${name}`,
          from_name: "Devyansh Portfolio",
          name,
          email,
          message,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error("Failed");
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    background: "#1d1e22",
    border: "1px solid #3a3c41",
    borderRadius: 4,
    padding: "14px 16px",
    fontFamily: "Inter, sans-serif",
    fontSize: 15,
    color: "#f7f7f5",
    outline: "none",
    transition: "border-color .2s",
    width: "100%",
  };

  return (
    <section
      id="contact"
      style={{
        padding: "80px 0 100px",
        background: "#f7f7f5",
      }}
    >
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 16px" }}>
        <div
          style={{
            position: "relative",
            background: "#2b2d31",
            color: "#f7f7f5",
            borderRadius: 24,
            padding: "64px 56px",
            overflow: "hidden",
            boxShadow: "0 30px 60px rgba(43,45,49,0.25)",
          }}
        >
          {/* coral accent corner */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: -80,
              right: -80,
              width: 280,
              height: 280,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,107,74,0.55), transparent 70%)",
              filter: "blur(20px)",
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              pointerEvents: "none",
              opacity: 0.6,
            }}
          />

          <Reveal>
            <div
              style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#d8dadd",
                marginBottom: 18,
              }}
            >
              <span style={{ width: 18, height: 1, background: "#ff6b4a" }} />
              07 — Connect
            </div>
          </Reveal>

          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: 48, position: "relative", alignItems: "start" }}
          >
            <Reveal delay={0.05}>
              <div>
                <h2
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 700,
                    margin: 0,
                    lineHeight: 1.05,
                    color: "#f7f7f5",
                  }}
                  className="!text-[40px] md:!text-[64px]"
                >
                  Let's build
                  <br />
                  something
                  <span style={{ color: "#ff6b4a" }}>.</span>
                </h2>
                <p
                  style={{
                    marginTop: 22,
                    fontSize: 17,
                    color: "#d8dadd",
                    lineHeight: 1.6,
                    maxWidth: 460,
                  }}
                >
                  Open to full-time roles, internships, and the occasional
                  interesting side project. Fastest reply via email or LinkedIn.
                </p>

                <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 14 }}>
                  <a
                    href="mailto:dupadhyay7887@gmail.com"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 12,
                      color: "#f7f7f5",
                      textDecoration: "none",
                      fontFamily: "Inter, sans-serif",
                      fontSize: 16,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ff6b4a")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#f7f7f5")}
                  >
                    <Icon.Mail size={20} /> dupadhyay7887@gmail.com
                  </a>
                  <a
                    href="tel:+917906977607"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 12,
                      color: "#f7f7f5",
                      textDecoration: "none",
                      fontFamily: "Inter, sans-serif",
                      fontSize: 16,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ff6b4a")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#f7f7f5")}
                  >
                    <Icon.Phone size={20} /> +91 79069 77607
                  </a>
                </div>

                <div style={{ marginTop: 32, display: "flex", gap: 18, flexWrap: "wrap" }}>
                  {SOCIALS.map((s) => {
                    const I = Icon[s.key];
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={s.label}
                        title={s.label}
                        style={{
                          width: 44,
                          height: 44,
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                          border: "1px solid #3a3c41",
                          color: "#f7f7f5",
                          transition: "all .2s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#ff6b4a";
                          e.currentTarget.style.borderColor = "#ff6b4a";
                          e.currentTarget.style.transform = "translateY(-3px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#f7f7f5";
                          e.currentTarget.style.borderColor = "#3a3c41";
                          e.currentTarget.style.transform = "translateY(0)";
                        }}
                      >
                        <I size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  background: "rgba(15,16,19,0.6)",
                  border: "1px solid #3a3c41",
                  padding: 32,
                  borderRadius: 12,
                  backdropFilter: "blur(6px)",
                }}
              >
                <input
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#ff6b4a")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#3a3c41")}
                />
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#ff6b4a")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#3a3c41")}
                />
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  style={inputStyle}
                >
                  <option>Job Opportunity</option>
                  <option>Internship</option>
                  <option>Collaboration</option>
                  <option>Just saying hi</option>
                </select>
                <textarea
                  placeholder="Tell me about it…"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#ff6b4a")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#3a3c41")}
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{
                    background: "#ff6b4a",
                    color: "#f7f7f5",
                    border: "none",
                    padding: "16px 22px",
                    borderRadius: 4,
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: 12,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                    transition: "all .2s",
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "loading") {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 10px 24px rgba(255,107,74,0.4)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {status === "loading" ? "Sending…" : "Send message →"}
                </button>
                {status === "success" && (
                  <div style={{ color: "#f7f7f5", fontSize: 13 }}>
                    Thanks — I'll get back to you shortly.
                  </div>
                )}
                {status === "error" && (
                  <div style={{ color: "#ff6b4a", fontSize: 13 }}>
                    Something went wrong. Try email instead.
                  </div>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}




/* ---------- footer ---------- */

function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #d8dadd",
        background: "#f7f7f5",
        padding: "32px 0",
      }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 12,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#5a6068",
          }}
        >
          <span>© 2026 Devyansh Upadhyay</span>
          <span>
            Built with <span style={{ color: "#ff6b4a" }}>TanStack Start</span>
          </span>
        </div>
      </Container>
    </footer>
  );
}

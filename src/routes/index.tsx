import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import batLogo from "@/assets/batman/bat-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Devyansh Upadhyay — Two Sides" },
      { name: "description", content: "Two sides of the same semicolon. Choose your portfolio experience." },
      { property: "og:title", content: "Devyansh Upadhyay — Two Sides" },
      { property: "og:description", content: "Two sides of the same semicolon." },
    ],
  }),
  component: Entry,
});

function Entry() {
  const navigate = useNavigate();
  const [hover, setHover] = useState<"dark" | "light" | null>(null);
  const [exiting, setExiting] = useState<null | "dark" | "light">(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const drops = useMemo(
    () =>
      mounted
        ? Array.from({ length: 50 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            height: 14 + Math.random() * 14,
            opacity: 0.08 + Math.random() * 0.1,
            delay: Math.random() * 3,
            duration: 0.6 + Math.random() * 0.7,
          }))
        : [],
    [mounted],
  );

  const buildings = useMemo(() => {
    if (!mounted) return [];
    const arr: { x: number; w: number; h: number; windows: number[] }[] = [];
    let x = 0;
    for (let i = 0; i < 14; i++) {
      const w = 24 + Math.random() * 32;
      const h = 80 + Math.random() * 150;
      const windows = Array.from(
        { length: Math.floor(Math.random() * 5) + 1 },
        () => Math.random(),
      );
      arr.push({ x, w, h, windows });
      x += w + 2 + Math.random() * 5;
    }
    const scale = 800 / x;
    return arr.map((b) => ({ ...b, x: b.x * scale, w: b.w * scale }));
  }, [mounted]);

  const flyingBats = useMemo(
    () =>
      mounted
        ? Array.from({ length: 5 }, (_, i) => ({
            id: i,
            top: 10 + Math.random() * 35,
            duration: 14 + Math.random() * 12,
            delay: Math.random() * 8,
            size: 18 + Math.random() * 22,
            opacity: 0.35 + Math.random() * 0.35,
          }))
        : [],
    [mounted],
  );

  // Realistic jagged lightning bolts (with branches)
  const bolts = useMemo(() => {
    if (!mounted) return [];
    const W = 800;
    const H = 600;
    const makeBolt = (startX: number) => {
      const segs = 14 + Math.floor(Math.random() * 6);
      const pts: { x: number; y: number }[] = [{ x: startX, y: 0 }];
      let x = startX;
      let y = 0;
      const stepY = H / segs;
      for (let i = 1; i <= segs; i++) {
        x += (Math.random() - 0.5) * 70;
        y = i * stepY + (Math.random() - 0.5) * 18;
        pts.push({ x, y });
      }
      // branches: 1-3 forks from middle points
      const branches: { x: number; y: number }[][] = [];
      const nBranches = 1 + Math.floor(Math.random() * 3);
      for (let b = 0; b < nBranches; b++) {
        const startIdx = 3 + Math.floor(Math.random() * (segs - 6));
        const base = pts[startIdx];
        const bSegs = 4 + Math.floor(Math.random() * 4);
        const dir = Math.random() < 0.5 ? -1 : 1;
        const bp: { x: number; y: number }[] = [base];
        let bx = base.x;
        let by = base.y;
        for (let i = 1; i <= bSegs; i++) {
          bx += dir * (15 + Math.random() * 35);
          by += stepY * 0.6 + (Math.random() - 0.5) * 14;
          bp.push({ x: bx, y: by });
        }
        branches.push(bp);
      }
      return { main: pts, branches };
    };
    return Array.from({ length: 4 }, (_, i) => {
      const startX = 80 + Math.random() * (W - 160);
      const { main, branches } = makeBolt(startX);
      const toPath = (p: { x: number; y: number }[]) =>
        p.map((pt, idx) => `${idx === 0 ? "M" : "L"}${pt.x.toFixed(1)},${pt.y.toFixed(1)}`).join(" ");
      return {
        id: i,
        mainPath: toPath(main),
        branchPaths: branches.map(toPath),
        duration: 7 + Math.random() * 6,
        delay: i * 2.5 + Math.random() * 3,
      };
    });
  }, [mounted]);

  const handleClick = (side: "dark" | "light") => {
    setExiting(side);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background: "#050505",
      }}
      className="flex flex-col sm:flex-row"
    >
      {/* Tagline pinned at top-center */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        style={{
          position: "fixed",
          top: 18,
          left: 0,
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
          width: "max-content",
          maxWidth: "calc(100vw - 32px)",
          zIndex: 30,
          background: "rgba(20,20,24,0.65)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: 999,
          padding: "8px 22px",
          border: "1px solid rgba(255,255,255,0.18)",
          fontFamily: '"Playfair Display", serif',
          fontStyle: "italic",
          color: "#f7f7f5",
          letterSpacing: "0.01em",
          whiteSpace: "nowrap",
          boxShadow: "0 6px 24px rgba(0,0,0,0.35)",
        }}
        className="!text-[12px] sm:!text-[14px]"
      >
        Two sides of the same semicolon.
      </motion.div>

      {/* Left half — The Dark Vigilante */}
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 20 }}
        onMouseEnter={() => setHover("dark")}
        onMouseLeave={() => setHover(null)}
        onClick={() => handleClick("dark")}
        style={{
          flex: hover === "dark" ? 1.28 : hover === "light" ? 0.72 : 1,
          transition: "flex 0.4s ease-out",
          position: "relative",
          overflow: "hidden",
          background: "radial-gradient(ellipse at 30% 40%, #14110a 0%, #050505 70%)",
          cursor: "pointer",
          minHeight: 0,
        }}
      >
        {/* Lightning: per-bolt screen flash */}
        {bolts.map((b) => (
          <div
            key={`flash-${b.id}`}
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 2,
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(200,220,255,0.9) 0%, rgba(160,190,255,0.35) 35%, transparent 70%)",
              opacity: 0,
              mixBlendMode: "screen",
              pointerEvents: "none",
              animation: `lightning-flash ${b.duration}s linear ${b.delay}s infinite`,
            }}
          />
        ))}

        {/* Lightning bolts */}
        <svg
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMin slice"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 3,
            pointerEvents: "none",
            mixBlendMode: "screen",
          }}
        >
          <defs>
            <filter id="bolt-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur1" />
              <feGaussianBlur stdDeviation="8" in="SourceGraphic" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {bolts.map((b) => (
            <g
              key={`bolt-${b.id}`}
              filter="url(#bolt-glow)"
              style={{
                opacity: 0,
                animation: `lightning-bolt ${b.duration}s linear ${b.delay}s infinite`,
              }}
            >
              {/* outer glow */}
              <path d={b.mainPath} stroke="rgba(180,210,255,0.55)" strokeWidth={6} fill="none" strokeLinecap="round" strokeLinejoin="round" />
              {/* mid */}
              <path d={b.mainPath} stroke="rgba(220,235,255,0.9)" strokeWidth={2.4} fill="none" strokeLinecap="round" strokeLinejoin="round" />
              {/* hot core */}
              <path d={b.mainPath} stroke="#ffffff" strokeWidth={1} fill="none" strokeLinecap="round" strokeLinejoin="round" />
              {b.branchPaths.map((bp, i) => (
                <g key={i}>
                  <path d={bp} stroke="rgba(180,210,255,0.4)" strokeWidth={3} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={bp} stroke="#ffffff" strokeWidth={0.8} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              ))}
            </g>
          ))}
        </svg>

        {/* Skyline (scoped to left half) */}
        <svg
          viewBox="0 0 800 240"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 200,
            zIndex: 4,
            pointerEvents: "none",
          }}
        >
          {buildings.map((b, i) => (
            <g key={i}>
              <rect x={b.x} y={240 - b.h} width={b.w} height={b.h} fill="#0a0a0a" />
              {b.windows.map((wy, j) => (
                <rect
                  key={j}
                  x={b.x + 5 + j * 7}
                  y={240 - b.h + 12 + wy * (b.h - 24)}
                  width={2}
                  height={3}
                  fill="rgba(245,197,24,0.55)"
                />
              ))}
            </g>
          ))}
        </svg>

        {/* Rain */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1, overflow: "hidden" }}>
          {drops.map((d) => (
            <div
              key={d.id}
              style={{
                position: "absolute",
                top: 0,
                left: `${d.left}%`,
                width: 1,
                height: d.height,
                background: `rgba(255,255,255,${d.opacity})`,
                borderRadius: 1,
                animation: `batman-rain-fall ${d.duration}s linear infinite`,
                animationDelay: `${d.delay}s`,
              }}
            />
          ))}
        </div>

        {/* Bat signal beam */}
        <div
          style={{
            position: "absolute",
            top: 50,
            right: "18%",
            width: 220,
            height: 220,
            zIndex: 3,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(245,197,24,0.16) 0%, transparent 70%)",
            animation: "batman-signal-pulse 3s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />

        {/* Flying bats */}
        {flyingBats.map((b) => (
          <img
            key={b.id}
            src={batLogo.url}
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              top: `${b.top}%`,
              left: "-10%",
              width: b.size,
              opacity: b.opacity,
              filter: "brightness(0)",
              zIndex: 3,
              animation: `landing-bat-fly ${b.duration}s linear ${b.delay}s infinite`,
              pointerEvents: "none",
            }}
          />
        ))}

        {/* Foreground */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: 24,
          }}
        >
          <img
            src={batLogo.url}
            alt="Bat symbol"
            style={{
              width: 78,
              height: 50,
              objectFit: "contain",
              filter: "drop-shadow(0 0 18px rgba(245,197,24,0.45))",
            }}
          />
          <div style={{ height: 22 }} />
          <h1
            style={{
              fontFamily: '"Bruce Forever", "Playfair Display", serif',
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: "0.04em",
              color: "#F5C518",
              margin: 0,
              textShadow: "0 0 30px rgba(245,197,24,0.35)",
            }}
            className="!text-[38px] sm:!text-[58px]"
          >
            THE DARK VIGILANTE
          </h1>
          <div style={{ height: 12 }} />
          <div
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 10,
              letterSpacing: "0.22em",
              color: "rgba(245,197,24,0.55)",
              textTransform: "uppercase",
            }}
          >
            CREATIVE · ATMOSPHERIC · UNCONVENTIONAL
          </div>
          <div style={{ height: 36 }} />
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClick("dark");
            }}
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              background: "transparent",
              border: "1.5px solid rgba(245,197,24,0.6)",
              color: "rgba(245,197,24,0.85)",
              padding: "11px 28px",
              borderRadius: 3,
              cursor: "pointer",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(245,197,24,1)";
              e.currentTarget.style.color = "#F5C518";
              e.currentTarget.style.boxShadow = "0 0 24px rgba(245,197,24,0.32)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(245,197,24,0.6)";
              e.currentTarget.style.color = "rgba(245,197,24,0.85)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            ENTER GOTHAM
          </button>
        </div>
      </motion.div>

      {/* Right half — The Professional (bright, industrial, no Batman) */}
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 20 }}
        onMouseEnter={() => setHover("light")}
        onMouseLeave={() => setHover(null)}
        onClick={() => handleClick("light")}
        style={{
          flex: hover === "light" ? 1.28 : hover === "dark" ? 0.72 : 1,
          transition: "flex 0.4s ease-out",
          position: "relative",
          overflow: "hidden",
          background: "#f7f7f5",
          cursor: "pointer",
          minHeight: 0,
        }}
      >
        {/* Faint hairline grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            backgroundImage:
              "linear-gradient(to right, rgba(43,45,49,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(43,45,49,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse at center, black 55%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 55%, transparent 100%)",
          }}
        />

        {/* Coral accent bar (industrial flourish) */}
        <div
          style={{
            position: "absolute",
            top: "18%",
            right: 0,
            width: 80,
            height: 4,
            background: "#ff6b4a",
            zIndex: 2,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "18%",
            left: 0,
            width: 80,
            height: 4,
            background: "#2b2d31",
            zIndex: 2,
          }}
        />

        {/* Corner brackets */}
        <div
          style={{ position: "absolute", top: 24, right: 24, width: 32, height: 32, zIndex: 3 }}
        >
          <div style={{ position: "absolute", top: 0, right: 0, width: 32, height: 1, background: "#2b2d31" }} />
          <div style={{ position: "absolute", top: 0, right: 0, width: 1, height: 32, background: "#2b2d31" }} />
        </div>
        <div
          style={{ position: "absolute", bottom: 24, left: 24, width: 32, height: 32, zIndex: 3 }}
        >
          <div style={{ position: "absolute", bottom: 0, left: 0, width: 32, height: 1, background: "#2b2d31" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, width: 1, height: 32, background: "#2b2d31" }} />
        </div>

        {/* Foreground */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: 24,
          }}
        >
          {/* Monogram chip */}
          <div
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 14,
              letterSpacing: "0.18em",
              color: "#ff6b4a",
              border: "1.5px solid #2b2d31",
              padding: "8px 14px",
              borderRadius: 2,
              background: "#f7f7f5",
            }}
          >
            DU<span style={{ color: "#2b2d31" }}>.</span>
          </div>
          <div style={{ height: 22 }} />
          <h1
            style={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.01em",
              color: "#2b2d31",
              margin: 0,
            }}
            className="!text-[34px] sm:!text-[52px]"
          >
            THE PROFESSIONAL
          </h1>
          <div style={{ height: 12 }} />
          <div
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 10,
              letterSpacing: "0.22em",
              color: "#5a6068",
              textTransform: "uppercase",
            }}
          >
            PRECISE · HUMAN · IMPACTFUL
          </div>
          <div style={{ height: 36 }} />
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClick("light");
            }}
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              background: "#2b2d31",
              border: "1.5px solid #2b2d31",
              color: "#f7f7f5",
              padding: "11px 28px",
              borderRadius: 3,
              cursor: "pointer",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#ff6b4a";
              e.currentTarget.style.borderColor = "#ff6b4a";
              e.currentTarget.style.color = "#f7f7f5";
              e.currentTarget.style.boxShadow = "0 8px 22px rgba(255,107,74,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#2b2d31";
              e.currentTarget.style.borderColor = "#2b2d31";
              e.currentTarget.style.color = "#f7f7f5";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            ENTER PORTFOLIO
          </button>
        </div>
      </motion.div>

      {/* Center semicolon badge */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.55, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: "50vh",
          left: "50vw",
          marginLeft: -42,
          marginTop: -42,
          width: 84,
          height: 84,
          borderRadius: "50%",
          background:
            "linear-gradient(135deg, #1a1a1d 0%, #2b2d31 50%, #f7f7f5 50%, #e9e9e6 100%)",
          border: "2px solid #ff6b4a",
          boxShadow:
            "0 0 0 4px rgba(255,107,74,0.18), 0 12px 32px rgba(0,0,0,0.45)",
          zIndex: 15,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <span
          aria-hidden="true"
          style={{
            fontFamily: '"Playfair Display", serif',
            fontStyle: "italic",
            fontWeight: 700,
            fontSize: 56,
            lineHeight: 1,
            color: "#ff6b4a",
            textShadow: "0 2px 12px rgba(0,0,0,0.45)",
            transform: "translateY(-6px)",
          }}
        >
          ;
        </span>
      </motion.div>

      {/* Exit overlay */}
      <AnimatePresence>
        {exiting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45 }}
            onAnimationComplete={() =>
              navigate({ to: exiting === "dark" ? "/dark" : "/light" })
            }
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 50,
              background: exiting === "dark" ? "#050505" : "#f7f7f5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {exiting === "dark" ? (
              <motion.img
                src={batLogo.url}
                alt=""
                aria-hidden="true"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                  width: 160,
                  filter:
                    "drop-shadow(0 0 40px rgba(245,197,24,0.7)) drop-shadow(0 0 80px rgba(245,197,24,0.4))",
                }}
              />
            ) : (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "60%" }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                style={{
                  height: 4,
                  background: "#ff6b4a",
                  boxShadow: "0 0 24px rgba(255,107,74,0.5)",
                }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

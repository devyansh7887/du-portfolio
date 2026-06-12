// Auto-generated from devyansh7887/BATMAN_Portfolio
export const batmanHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Devyansh Upadhyay | The Dark Dev</title>
    <meta
      name="description"
      content="Batman and Gotham inspired portfolio for Devyansh Upadhyay, full-stack AI/ML developer."
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Special+Elite&family=Stardos+Stencil:wght@400;700&family=Share+Tech+Mono&display=swap"
      rel="stylesheet"
    />
    <link rel="icon" href="/assets/batman/bat-logo.png" />
    <style>
      :root {
        --bat-black: #0a0a0f;
        --bat-dark: #0b0c0d;
        --bat-cave: #121313;
        --bat-steel: #1b1d1c;
        --bat-yellow: #f5c518;
        --bat-yellow-dim: #c9a012;
        --bat-orange: #e87d0d;
        --bat-gray: #292a27;
        --bat-fog: #3a3b35;
        --bat-smoke: rgba(10, 10, 20, 0.85);
        --bat-glow: rgba(245, 197, 24, 0.15);
        --bat-glow-strong: rgba(245, 197, 24, 0.4);
        --bat-text: #d4cfc0;
        --bat-text-bright: #f0ead8;
        --bat-text-dim: #858274;
        --bat-red: #8b1a1a;
        --bat-signal: rgba(245, 197, 24, 0.07);
        --paper: #d7c399;
        --ink: #16100c;
        --max: 1180px;
        color-scheme: dark;
      }

      * {
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
        cursor:
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 64 64'%3E%3Cpath fill='%23f5c518' stroke='%230a0a0f' stroke-width='2' d='M4 30c8-2 13-7 16-16 5 8 8 10 12 10s7-2 12-10c3 9 8 14 16 16-9 3-13 8-16 18-5-7-8-9-12-9s-7 2-12 9C17 38 13 33 4 30Z'/%3E%3C/svg%3E")
            8 8,
          crosshair;
      }

      body {
        margin: 0;
        min-height: 100vh;
        background: var(--bat-black);
        color: var(--bat-text);
        font-family: "Special Elite", system-ui, sans-serif;
        letter-spacing: 0;
        overflow-x: hidden;
      }

      body::before {
        content: "";
        position: fixed;
        inset: 0;
        z-index: 3;
        pointer-events: none;
        opacity: 0.17;
        mix-blend-mode: screen;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E");
      }

      ::selection {
        background: var(--bat-yellow);
        color: var(--bat-black);
      }

      ::-webkit-scrollbar {
        width: 12px;
      }
      ::-webkit-scrollbar-track {
        background: var(--bat-black);
      }
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(var(--bat-yellow), var(--bat-orange));
        border: 3px solid var(--bat-black);
      }

      a {
        color: inherit;
        text-decoration: none;
      }
      img {
        display: block;
        max-width: 100%;
      }

      .loader {
        position: fixed;
        inset: 0;
        z-index: 5000;
        display: grid;
        place-items: center;
        background: #000;
        animation: loaderExit 0.7s ease 1.8s forwards;
      }

      .loader-bat {
        width: 190px;
        filter: drop-shadow(0 0 28px var(--bat-glow-strong));
        animation: loaderZoom 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      }

      @keyframes loaderZoom {
        0% {
          transform: scale(0.25) rotate(-8deg);
          opacity: 0;
        }
        45% {
          opacity: 1;
        }
        100% {
          transform: scale(1.8) rotate(0deg);
          opacity: 0;
        }
      }

      @keyframes loaderExit {
        to {
          opacity: 0;
          visibility: hidden;
        }
      }

      .progress {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1500;
        width: 100%;
        height: 3px;
        background: rgba(245, 197, 24, 0.08);
      }

      .progress-fill {
        position: relative;
        width: 0%;
        height: 100%;
        background: linear-gradient(
          90deg,
          var(--bat-yellow-dim),
          var(--bat-yellow)
        );
        box-shadow: 0 0 18px var(--bat-glow-strong);
      }

      .progress-fill::after {
        content: "";
        position: absolute;
        right: -13px;
        top: -10px;
        width: 28px;
        height: 22px;
        background: var(--bat-yellow);
        clip-path: polygon(
          0 50%,
          18% 28%,
          36% 5%,
          44% 35%,
          56% 35%,
          64% 5%,
          82% 28%,
          100% 50%,
          72% 57%,
          62% 85%,
          50% 64%,
          38% 85%,
          28% 57%
        );
        filter: drop-shadow(0 0 12px var(--bat-glow-strong));
      }

      .bat-signal-bg {
        position: fixed;
        right: -18vw;
        top: -24vh;
        z-index: 0;
        width: min(72vw, 840px);
        aspect-ratio: 1;
        pointer-events: none;
        opacity: var(--signal-opacity, 0.05);
        background: conic-gradient(
          from 20deg,
          transparent 0 52deg,
          rgba(245, 197, 24, 0.9) 64deg,
          transparent 82deg 360deg
        );
        -webkit-mask: radial-gradient(
          circle at 48% 48%,
          black 0 16%,
          transparent 17% 100%
        );
        mask: radial-gradient(
          circle at 48% 48%,
          black 0 16%,
          transparent 17% 100%
        );
        animation: rotateSignal 30s linear infinite;
      }

      .bat-signal-bg::after {
        content: "";
        position: absolute;
        left: 39%;
        top: 39%;
        width: 18%;
        height: 12%;
        background: var(--bat-yellow);
        clip-path: polygon(
          0 48%,
          18% 18%,
          35% 2%,
          44% 34%,
          56% 34%,
          65% 2%,
          82% 18%,
          100% 48%,
          72% 58%,
          62% 98%,
          50% 66%,
          38% 98%,
          28% 58%
        );
      }

      @keyframes rotateSignal {
        to {
          transform: rotate(360deg);
        }
      }

      .swarm-layer {
        position: fixed;
        inset: 0;
        z-index: 1300;
        pointer-events: none;
        overflow: hidden;
      }

      .flying-bat {
        position: absolute;
        width: var(--size);
        height: calc(var(--size) * 0.55);
        color: #030307;
        opacity: var(--alpha);
        filter: drop-shadow(0 0 8px rgba(245, 197, 24, 0.18));
        animation:
          batFlight var(--duration) linear forwards,
          batBob 0.9s ease-in-out infinite alternate;
        will-change: transform, opacity;
      }
      .flying-bat > path {
        transform-origin: 50% 50%;
        animation: batFlap 0.18s ease-in-out infinite alternate;
      }

      @keyframes batFlight {
        from {
          transform: translate3d(var(--start), var(--y), 0) scale(var(--scale));
        }
        to {
          transform: translate3d(var(--end), calc(var(--y) + var(--drift)), 0)
            scale(var(--scale));
        }
      }

      @keyframes batBob {
        from { margin-top: -12px; }
        to   { margin-top: 14px; }
      }

      @keyframes batFlap {
        from { transform: scaleY(1); }
        to   { transform: scaleY(0.45); }
      }

      .navbar {
        position: sticky;
        top: 3px;
        z-index: 1200;
        background: rgba(10, 10, 15, 0.72);
        backdrop-filter: blur(12px);
        border-bottom: 1px solid rgba(245, 197, 24, 0.14);
      }

      .nav-inner {
        width: min(var(--max), calc(100% - 32px));
        margin: 0 auto;
        min-height: 72px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
      }

      .brand {
        display: inline-flex;
        align-items: center;
        gap: 12px;
        font-family: "Stardos Stencil", "Special Elite", serif;
        font-weight: 700;
        color: var(--bat-text-bright);
      }

      .brand:hover .brand-name {
        animation: flicker 0.9s steps(2) 1;
      }

      .brand-mark,
      .tiny-bat {
        width: 46px;
        height: 30px;
        object-fit: contain;
        flex: 0 0 auto;
        filter: drop-shadow(0 0 12px var(--bat-glow-strong));
      }

      .nav-links {
        display: flex;
        align-items: center;
        gap: 8px;
        font-family: "Share Tech Mono", monospace;
        color: var(--bat-text-bright);
      }

      .nav-links a {
        position: relative;
        padding: 10px 8px;
        font-size: 0.88rem;
        text-transform: uppercase;
      }

      .nav-links a::after {
        content: "";
        position: absolute;
        left: 8px;
        right: 8px;
        bottom: 5px;
        height: 2px;
        transform: scaleX(0);
        transform-origin: left;
        background: var(--bat-yellow);
        transition: transform 0.24s ease;
      }

      .nav-links a:hover::after,
      .nav-links a.active::after {
        transform: scaleX(1);
      }

      .menu-toggle {
        display: none;
        width: 44px;
        height: 44px;
        border: 1px solid rgba(245, 197, 24, 0.35);
        background: rgba(0, 0, 0, 0.25);
        color: var(--bat-yellow);
        align-items: center;
        justify-content: center;
      }

      @keyframes flicker {
        0%,
        19%,
        23%,
        48%,
        55%,
        100% {
          opacity: 1;
          text-shadow: 0 0 12px var(--bat-glow);
        }
        20%,
        49% {
          opacity: 0.45;
          text-shadow: none;
        }
      }

      .section {
        position: relative;
        z-index: 1;
        min-height: 70vh;
        padding: 104px 0;
        overflow: hidden;
      }

      .inner {
        position: relative;
        width: min(var(--max), calc(100% - 36px));
        margin: 0 auto;
        z-index: 2;
      }

      .section-heading {
        display: flex;
        align-items: center;
        gap: 16px;
        margin: 0 0 36px;
        font-family: "Stardos Stencil", "Special Elite", serif;
        font-size: clamp(1.7rem, 3vw, 3rem);
        color: var(--bat-text-bright);
        text-transform: uppercase;
      }

      .section-heading .tag {
        display: inline-flex;
        align-items: center;
        min-height: 36px;
        padding: 6px 12px;
        border: 1px solid rgba(245, 197, 24, 0.36);
        color: var(--bat-yellow);
        font-family: "Share Tech Mono", monospace;
        font-size: 0.82rem;
        white-space: nowrap;
        background: rgba(245, 197, 24, 0.05);
      }

      .reveal {
        opacity: 0;
        transform: translateY(40px);
        transition:
          opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
          transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        will-change: opacity, transform;
      }

      .reveal.in-view {
        opacity: 1;
        transform: translateY(0);
      }

      .hero {
        min-height: calc(100vh - 3px);
        display: flex;
        align-items: stretch;
        padding: 0;
        background:
          linear-gradient(
            rgba(10, 10, 15, 0.62),
            rgba(10, 10, 15, 0.24) 52%,
            rgba(10, 10, 15, 0.68)
          ),
          url("/assets/batman/gotham.jpg") center top / cover no-repeat;
      }

      .hero::before {
        content: "";
        position: absolute;
        inset: auto 0 0;
        height: 18%;
        z-index: 2;
        background: linear-gradient(transparent, rgba(10, 10, 15, 0.62) 90%);
        pointer-events: none;
      }

      .hero-grid {
        width: min(1280px, calc(100% - 32px));
        min-height: calc(100vh - 75px);
        margin: 0 auto;
        padding-top: 80px;
        display: grid;
        grid-template-columns: minmax(240px, 30%) minmax(280px, 40%) minmax(
            240px,
            30%
          );
        align-items: end;
        gap: 20px;
      }

      .hero-copy {
        align-self: center;
        padding-bottom: 8vh;
      }

      .eyebrow {
        color: var(--bat-yellow);
        font-family: "Share Tech Mono", monospace;
        text-transform: uppercase;
        margin: 0 0 14px;
      }

      .hero h1 {
        margin: 0;
        font-family: "Stardos Stencil", "Special Elite", serif;
        font-size: clamp(2.45rem, 7vw, 6.8rem);
        line-height: 0.88;
        color: var(--bat-text-bright);
        text-transform: uppercase;
        text-shadow: 0 0 32px rgba(0, 0, 0, 0.9);
      }

      .quote {
        margin: 30px 0;
        max-width: 440px;
        color: var(--bat-text-bright);
        font-size: clamp(1.05rem, 2vw, 1.4rem);
        line-height: 1.6;
        border-left: 3px solid var(--bat-yellow);
        padding-left: 18px;
      }

      .cta-row {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
      }

      .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        min-height: 48px;
        padding: 0 18px;
        border: 1px solid rgba(245, 197, 24, 0.45);
        background: rgba(0, 0, 0, 0.46);
        color: var(--bat-yellow);
        font-family: "Share Tech Mono", monospace;
        text-transform: uppercase;
        transition:
          transform 0.22s ease,
          box-shadow 0.22s ease,
          background 0.22s ease;
      }

      .btn.primary {
        background: var(--bat-yellow);
        color: var(--bat-black);
        border-color: var(--bat-yellow);
      }

      .btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 0 26px var(--bat-glow);
      }

      .hero-figure {
        align-self: end;
        position: relative;
        min-height: 72vh;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        isolation: isolate;
      }

      .hero-figure::before {
        content: "";
        position: absolute;
        inset: 18% 12% 12%;
        z-index: -1;
        background: radial-gradient(
          circle,
          rgba(245, 197, 24, 0.08),
          transparent 62%
        );
        filter: blur(10px);
      }

      .hero-figure img {
        width: min(90%, 430px);
        max-height: 78vh;
        object-fit: contain;
        object-position: bottom;
        filter: drop-shadow(0 28px 34px rgba(0, 0, 0, 0.75));
        transform: translateY(18px);
      }

      .role-panel {
        align-self: center;
        padding-bottom: 7vh;
        font-family: "Share Tech Mono", monospace;
        color: var(--bat-text-bright);
        text-transform: uppercase;
      }

      .role-panel p {
        margin: 0 0 14px;
        color: var(--bat-text-dim);
      }
      .role-panel ul {
        list-style: none;
        padding: 0;
        margin: 0 0 28px;
      }
      .role-panel li {
        margin: 10px 0;
        color: var(--bat-text-bright);
      }
      .role-panel li::before {
        content: "- ";
        color: var(--bat-yellow);
      }

      .socials {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }

      .socials a {
        position: relative;
        min-width: 42px;
        height: 42px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(245, 197, 24, 0.28);
        background: rgba(0, 0, 0, 0.22);
        color: var(--bat-yellow);
        overflow: hidden;
        font-family: "Share Tech Mono", monospace;
        font-size: 0.78rem;
        transition:
          min-width 0.24s ease,
          box-shadow 0.24s ease;
      }

      .socials a span {
        max-width: 0;
        opacity: 0;
        white-space: nowrap;
        transition:
          max-width 0.24s ease,
          opacity 0.24s ease,
          margin 0.24s ease;
      }

      .socials a:hover {
        min-width: 112px;
        box-shadow:
          inset 0 0 0 1px var(--bat-yellow),
          0 0 18px var(--bat-glow);
      }

      .socials a:hover span {
        max-width: 80px;
        opacity: 1;
        margin-left: 8px;
      }

      .hero-mini {
        position: absolute;
        left: 2vw;
        bottom: 18px;
        width: clamp(72px, 10vw, 120px);
        transform: rotate(-6deg);
        opacity: 0.95;
        filter: drop-shadow(0 12px 18px rgba(0, 0, 0, 0.7));
      }

      .divider {
        position: relative;
        z-index: 2;
        height: 70px;
        background: var(--bat-black);
        overflow: hidden;
      }

      .divider svg {
        width: 100%;
        height: 100%;
        color: #050508;
        filter: drop-shadow(0 -1px 0 rgba(245, 197, 24, 0.16));
      }

      .about {
        background:
          repeating-linear-gradient(
            135deg,
            rgba(245, 197, 24, 0.025) 0 1px,
            transparent 1px 18px
          ),
          var(--bat-cave);
      }

      .about-grid {
        display: grid;
        grid-template-columns: minmax(160px, 280px) minmax(0, 1fr);
        gap: clamp(28px, 6vw, 86px);
        align-items: center;
      }

      .side-figure {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
      }

      .side-figure img {
        max-height: 420px;
        object-fit: contain;
        filter: drop-shadow(0 20px 28px rgba(0, 0, 0, 0.65));
      }

      .caption {
        font-family: "Share Tech Mono", monospace;
        color: var(--bat-yellow);
        border: 1px solid rgba(245, 197, 24, 0.33);
        padding: 6px 10px;
        background: rgba(0, 0, 0, 0.25);
        text-transform: uppercase;
      }

      .dossier {
        position: relative;
        padding: clamp(24px, 4vw, 42px);
        border: 1px solid rgba(245, 197, 24, 0.2);
        background: rgba(10, 10, 15, 0.42);
        box-shadow: inset 0 0 80px rgba(0, 0, 0, 0.28);
      }

      .dossier::before {
        content: "CLASSIFIED";
        position: absolute;
        right: 24px;
        top: 18px;
        transform: rotate(-18deg);
        color: rgba(139, 26, 26, 0.35);
        border: 4px solid rgba(139, 26, 26, 0.25);
        padding: 6px 12px;
        font-family: "Share Tech Mono", monospace;
        font-size: clamp(1.3rem, 4vw, 3.6rem);
      }

      .file-box {
        position: relative;
        z-index: 1;
        font-family: "Share Tech Mono", monospace;
        color: var(--bat-text-bright);
        line-height: 1.8;
        margin-bottom: 24px;
      }

      .about-copy {
        position: relative;
        z-index: 1;
        max-width: 820px;
        font-size: 1.05rem;
        line-height: 1.8;
        color: var(--bat-text-bright);
        border-left: 4px solid var(--bat-yellow);
        padding-left: 22px;
      }

      .stats {
        display: grid;
        grid-template-columns: repeat(4, minmax(120px, 1fr));
        gap: 12px;
        margin-top: 30px;
      }

      .stat {
        padding: 18px 14px;
        border: 1px solid rgba(245, 197, 24, 0.22);
        background: rgba(0, 0, 0, 0.28);
        text-align: center;
        font-family: "Share Tech Mono", monospace;
      }

      .stat strong {
        display: block;
        color: var(--bat-yellow);
        font-size: 1.9rem;
        margin-bottom: 6px;
      }

      .skills {
        background: linear-gradient(180deg, var(--bat-black), var(--bat-dark));
      }

      .skills-layout {
        position: relative;
        padding-bottom: 150px;
      }

      .skill-grid {
        position: relative;
        z-index: 2;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;
      }

      .skill-card {
        min-height: 210px;
        padding: 22px;
        background: rgba(27, 29, 28, 0.72);
        border-left: 4px solid var(--bat-yellow);
        border-top: 1px solid rgba(245, 197, 24, 0.14);
        transition:
          transform 0.24s ease,
          box-shadow 0.24s ease;
      }

      .skill-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 0 20px var(--bat-glow);
      }

      .skill-card h3 {
        margin: 0 0 18px;
        font-family: "Stardos Stencil", "Special Elite", serif;
        color: var(--bat-text-bright);
        text-transform: uppercase;
        font-size: 1rem;
      }

      .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .tag-pill {
        display: inline-flex;
        min-height: 30px;
        align-items: center;
        padding: 4px 9px;
        border: 1px solid rgba(245, 197, 24, 0.24);
        color: var(--bat-yellow);
        font-family: "Share Tech Mono", monospace;
        background: rgba(0, 0, 0, 0.22);
        transition:
          transform 0.2s ease,
          box-shadow 0.2s ease;
      }

      .tag-pill:hover {
        transform: scale(1.05);
        box-shadow: 0 0 18px var(--bat-glow-strong);
      }

      .skills-side {
        position: absolute;
        right: -18px;
        top: 10px;
        width: 130px;
        transform: rotate(5deg);
      }

      .batmobile {
        position: absolute;
        left: 50%;
        bottom: 0;
        width: min(780px, 92%);
        transform: translateX(-50%);
        z-index: 0;
        opacity: 0.14;
        filter: drop-shadow(0 -8px 16px rgba(0, 0, 0, 0.75)) saturate(0.75);
        -webkit-mask-image: linear-gradient(transparent, black 25%);
        mask-image: linear-gradient(transparent, black 25%);
      }

      .projects {
        background:
          linear-gradient(rgba(18, 18, 14, 0.78), rgba(18, 18, 14, 0.92)),
          url("/assets/batman/bnatman_journal.jpg") center / cover fixed,
          #12120e;
        color: var(--ink);
      }

      .projects .section-heading {
        color: #f1dba6;
        text-shadow: 0 3px 0 rgba(0, 0, 0, 0.45);
      }

      .projects .section-heading .tag {
        color: #101010;
        background: var(--paper);
        border-color: #3d2b16;
      }

      .journal-stack {
        display: grid;
        gap: 26px;
        max-width: 920px;
        margin: 0 auto;
      }

      .journal-page {
        position: relative;
        padding: clamp(24px, 5vw, 42px);
        background:
          radial-gradient(
            circle at 20% 8%,
            rgba(139, 26, 26, 0.11),
            transparent 20%
          ),
          radial-gradient(
            circle at 92% 80%,
            rgba(52, 28, 10, 0.16),
            transparent 18%
          ),
          linear-gradient(135deg, #e1cea2, #cdb17a);
        box-shadow:
          inset 0 0 30px rgba(81, 43, 15, 0.35),
          0 20px 44px rgba(0, 0, 0, 0.42);
        border: 1px solid rgba(43, 26, 11, 0.45);
        transform: rotate(var(--tilt));
        transition:
          transform 0.28s ease,
          box-shadow 0.28s ease;
      }

      .journal-page:hover {
        transform: rotate(var(--tilt)) perspective(900px) rotateX(2deg)
          translateY(-5px);
        box-shadow:
          inset 0 0 30px rgba(81, 43, 15, 0.35),
          0 26px 58px rgba(0, 0, 0, 0.55);
      }

      .journal-page::before,
      .journal-page::after {
        content: "";
        position: absolute;
        width: 80px;
        height: 46px;
        border: 2px solid rgba(80, 38, 17, 0.16);
        transform: rotate(-10deg);
      }

      .journal-page::before {
        left: 18px;
        top: 14px;
        border-right: 0;
        border-bottom: 0;
      }
      .journal-page::after {
        right: 18px;
        bottom: 14px;
        border-left: 0;
        border-top: 0;
      }

      .case-top {
        display: flex;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 18px;
        padding-bottom: 14px;
        border-bottom: 3px double rgba(22, 16, 12, 0.35);
        font-family: "Share Tech Mono", monospace;
        color: rgba(22, 16, 12, 0.75);
        text-transform: uppercase;
      }

      .journal-page h3 {
        margin: 0 0 16px;
        font-family: "Special Elite", serif;
        font-size: clamp(1.5rem, 3vw, 2.3rem);
        color: var(--ink);
        text-transform: uppercase;
      }

      .journal-page blockquote {
        margin: 0 0 22px;
        border-left: 5px solid rgba(22, 16, 12, 0.55);
        padding-left: 18px;
        font-size: 1.05rem;
        line-height: 1.75;
        font-style: italic;
      }

      .project-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin: 16px 0 20px;
      }

      .paper-pill {
        padding: 5px 9px;
        border: 1px solid rgba(22, 16, 12, 0.55);
        font-family: "Share Tech Mono", monospace;
        background: rgba(255, 255, 255, 0.22);
      }

      .project-links {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        font-family: "Share Tech Mono", monospace;
        text-transform: uppercase;
      }

      .project-links a {
        border: 1px solid rgba(22, 16, 12, 0.42);
        padding: 8px 12px;
        background: rgba(22, 16, 12, 0.08);
      }

      .journal-side {
        position: absolute;
        left: -6px;
        bottom: 28px;
        width: 110px;
        transform: rotate(-7deg);
        filter: drop-shadow(0 14px 18px rgba(0, 0, 0, 0.6));
      }

      .certs {
        background: linear-gradient(180deg, var(--bat-dark), var(--bat-black));
      }

      .cert-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;
        margin-right: 130px;
      }

      .cert-card {
        position: relative;
        min-height: 210px;
        padding: 26px;
        background: linear-gradient(
          135deg,
          rgba(27, 29, 28, 0.96),
          rgba(11, 12, 13, 0.96)
        );
        border-top: 4px solid var(--bat-yellow);
        box-shadow: inset 0 0 42px rgba(255, 255, 255, 0.02);
        transition:
          transform 0.24s ease,
          box-shadow 0.24s ease;
      }

      .cert-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 0 28px var(--bat-glow);
      }

      .ribbon {
        position: absolute;
        right: 18px;
        top: 14px;
        padding: 5px 8px;
        background: var(--bat-red);
        color: var(--bat-text-bright);
        font-family: "Share Tech Mono", monospace;
        font-size: 0.75rem;
      }

      .medal {
        width: 52px;
        height: 52px;
        display: grid;
        place-items: center;
        margin-bottom: 18px;
        border-radius: 50%;
        background: var(--bat-yellow);
        color: var(--bat-black);
        font-family: "Stardos Stencil", "Special Elite", serif;
        font-weight: 900;
        box-shadow: 0 0 24px var(--bat-glow);
      }

      .cert-card h3 {
        margin: 0 0 10px;
        color: var(--bat-text-bright);
        font-family: "Stardos Stencil", "Special Elite", serif;
      }

      .cert-card p {
        margin: 0;
        line-height: 1.6;
        color: var(--bat-text);
      }

      .cert-side {
        position: absolute;
        right: 0;
        bottom: 80px;
        width: 130px;
      }

      .achievements {
        background:
          linear-gradient(rgba(18, 19, 19, 0.88), rgba(10, 10, 15, 0.94)),
          repeating-linear-gradient(
            90deg,
            rgba(245, 197, 24, 0.04) 0 1px,
            transparent 1px 44px
          );
      }

      .case-banners {
        display: grid;
        gap: 18px;
      }

      .case-banner {
        position: relative;
        padding: 24px 170px 24px 24px;
        background: rgba(10, 10, 15, 0.55);
        border: 1px solid rgba(245, 197, 24, 0.18);
        border-left: 6px solid var(--bat-yellow);
        overflow: hidden;
      }

      .case-banner::after {
        content: "SOLVED";
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%) rotate(-10deg);
        color: rgba(139, 26, 26, 0.62);
        border: 3px solid rgba(139, 26, 26, 0.42);
        padding: 7px 12px;
        font-family: "Share Tech Mono", monospace;
        font-size: clamp(1rem, 2.6vw, 2rem);
      }

      .case-banner h3 {
        margin: 0 0 8px;
        color: var(--bat-text-bright);
        font-family: "Stardos Stencil", "Special Elite", serif;
      }

      .case-banner strong {
        color: var(--bat-yellow);
      }
      .case-banner p {
        margin: 0;
        font-style: italic;
        line-height: 1.6;
      }

      .contact {
        background:
          radial-gradient(
            circle at 20% 30%,
            rgba(245, 197, 24, 0.06),
            transparent 28%
          ),
          var(--bat-black);
      }

      .contact-grid {
        display: grid;
        grid-template-columns: minmax(240px, 42%) minmax(280px, 1fr);
        gap: clamp(28px, 6vw, 72px);
        align-items: center;
      }

      .signal-illustration {
        position: relative;
        min-height: 440px;
        display: grid;
        place-items: center;
      }

      .signal-illustration::before {
        content: "";
        position: absolute;
        width: 66%;
        height: 96%;
        bottom: 25%;
        background: linear-gradient(
          to top,
          rgba(245, 197, 24, 0.22),
          transparent 80%
        );
        clip-path: polygon(42% 100%, 58% 100%, 100% 0, 0 0);
        filter: blur(3px);
        animation: pulseBeam 3.4s ease-in-out infinite;
      }

      .signal-illustration img {
        width: min(88%, 390px);
        filter: drop-shadow(0 0 34px var(--bat-glow));
        animation: slowPulse 4.8s ease-in-out infinite;
      }

      @keyframes pulseBeam {
        50% {
          opacity: 0.45;
          transform: scaleX(1.05);
        }
      }

      @keyframes slowPulse {
        50% {
          filter: drop-shadow(0 0 48px var(--bat-glow-strong));
          transform: translateY(-4px);
        }
      }

      .contact-form {
        display: grid;
        gap: 18px;
        font-family: "Special Elite", serif;
      }

      .field {
        display: grid;
        gap: 6px;
      }

      label {
        color: var(--bat-yellow);
        font-family: "Share Tech Mono", monospace;
        text-transform: uppercase;
      }

      input,
      textarea {
        width: 100%;
        border: 0;
        border-bottom: 2px solid rgba(245, 197, 24, 0.5);
        background: transparent;
        color: var(--bat-text-bright);
        padding: 12px 2px;
        font:
          1rem "Special Elite",
          serif;
        outline: none;
        transition:
          border-color 0.2s ease,
          box-shadow 0.2s ease;
      }

      textarea {
        min-height: 130px;
        resize: vertical;
      }

      input:focus,
      textarea:focus {
        border-color: var(--bat-yellow);
        box-shadow: 0 12px 22px -18px var(--bat-glow-strong);
      }

      .form-status {
        min-height: 28px;
        color: var(--bat-yellow);
        font-family: "Share Tech Mono", monospace;
        text-transform: uppercase;
      }

      .contact-details {
        margin-top: 26px;
        display: grid;
        gap: 8px;
        color: var(--bat-text);
        font-family: "Share Tech Mono", monospace;
      }

      .contact-mini {
        position: absolute;
        left: 24px;
        bottom: 24px;
        width: clamp(110px, 16%, 170px);
        height: auto;
        object-fit: contain;
        aspect-ratio: 1 / 1;
        transform: none;
        animation: none !important;
        pointer-events: none;
      }

      footer {
        position: relative;
        z-index: 1;
        padding: 36px 0;
        background: var(--bat-black);
        border-top: 1px solid rgba(245, 197, 24, 0.35);
        color: var(--bat-text-dim);
      }

      .footer-inner {
        width: min(var(--max), calc(100% - 36px));
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        flex-wrap: wrap;
        font-family: "Share Tech Mono", monospace;
      }

      .footer-links {
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
        color: var(--bat-text-bright);
      }

      .footer-title {
        color: var(--bat-text-bright);
        text-transform: uppercase;
      }

      .fallback-svg {
        display: inline-block;
        background: rgba(245, 197, 24, 0.08);
        border: 1px solid rgba(245, 197, 24, 0.22);
      }

      @media (max-width: 1199px) {
        .hero-grid {
          grid-template-columns: 1fr 1fr;
          align-items: end;
        }

        .hero-copy {
          grid-column: 1;
        }
        .hero-figure {
          grid-column: 2;
          grid-row: 1 / span 2;
        }
        .role-panel {
          grid-column: 1;
          padding-bottom: 5vh;
        }
        .side-figure img {
          max-height: 340px;
        }
        .skills-side,
        .cert-side {
          width: 88px;
        }
        .cert-grid {
          margin-right: 94px;
        }
      }

      @media (max-width: 900px) {
        .nav-links {
          position: absolute;
          left: 16px;
          right: 16px;
          top: 72px;
          display: none;
          flex-direction: column;
          align-items: stretch;
          padding: 14px;
          background: rgba(10, 10, 15, 0.96);
          border: 1px solid rgba(245, 197, 24, 0.22);
        }

        .nav-links.open {
          display: flex;
        }
        .menu-toggle {
          display: inline-flex;
        }

        .hero-grid {
          min-height: auto;
          padding: 92px 0 36px;
          grid-template-columns: 1fr;
          text-align: center;
        }

        .hero-copy,
        .hero-figure,
        .role-panel {
          grid-column: 1;
          grid-row: auto;
          padding-bottom: 0;
        }

        .quote {
          margin-left: auto;
          margin-right: auto;
          text-align: left;
        }

        .cta-row,
        .socials {
          justify-content: center;
        }

        .hero-figure {
          min-height: 52vh;
        }

        .hero-figure img {
          width: min(80vw, 360px);
          max-height: 60vh;
        }

        .about-grid,
        .contact-grid {
          grid-template-columns: 1fr;
        }

        .side-figure {
          position: absolute;
          right: 0;
          top: -24px;
          opacity: 0.2;
          pointer-events: none;
        }

        .side-figure img,
        .skills-side,
        .journal-side,
        .cert-side,
        .hero-mini {
          width: 80px;
          max-height: 120px;
        }
        .contact-mini {
          width: 80px;
          height: auto;
          aspect-ratio: 1 / 1;
          max-height: none;
        }

        .side-figure .caption {
          display: none;
        }
        .skill-grid,
        .cert-grid,
        .stats {
          grid-template-columns: 1fr 1fr;
        }
        .cert-grid {
          margin-right: 0;
        }
        .case-banner {
          padding-right: 24px;
        }
        .case-banner::after {
          opacity: 0.25;
          right: 18px;
        }
      }

      @media (max-width: 640px) {
        .section {
          padding: 76px 0;
        }
        .section-heading {
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }
        .brand-name {
          font-size: 0.92rem;
        }
        .hero-grid {
          padding-top: 56px;
          gap: 22px;
        }
        .hero h1 {
          font-size: clamp(2.15rem, 12.4vw, 3.25rem);
          line-height: 0.96;
        }
        .skill-grid,
        .cert-grid,
        .stats {
          grid-template-columns: 1fr;
        }
        .journal-page {
          transform: rotate(0deg);
        }
        .journal-page:hover {
          transform: translateY(-4px);
        }
        .batmobile {
          opacity: 0.1;
        }
        .contact-details {
          font-size: 0.86rem;
          overflow-wrap: anywhere;
        }
        .footer-inner {
          align-items: flex-start;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          animation-duration: 0.001ms !important;
          animation-iteration-count: 1 !important;
          scroll-behavior: auto !important;
          transition-duration: 0.001ms !important;
        }
      }
    </style>
  </head>
  <body>
    <div class="loader" aria-hidden="true">
      <img class="loader-bat" src="/assets/batman/bat-logo.png" alt="Bat logo" />
    </div>

    <div class="progress" aria-hidden="true">
      <div class="progress-fill"></div>
    </div>
    <div class="bat-signal-bg" aria-hidden="true"></div>
    <div class="swarm-layer" aria-hidden="true"></div>

    <nav class="navbar" aria-label="Primary navigation">
      <div class="nav-inner">
        <a class="brand" href="#mission" aria-label="Devyansh home">
          <img
            class="brand-mark"
            src="/assets/batman/bat-logo.png"
            alt=""
            aria-hidden="true"
          />
          <span class="brand-name">DEVYANSH</span>
        </a>
        <button
          class="menu-toggle"
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img
            class="tiny-bat"
            src="/assets/batman/bat-logo.png"
            alt=""
            aria-hidden="true"
          />
        </button>
        <div class="nav-links">
          <a href="#mission">Mission</a>
          <a href="#about">Intel</a>
          <a href="#skills">Arsenal</a>
          <a href="#projects">Operations</a>
          <a href="#certifications">Commendations</a>
          <a href="#contact">Signal</a>
        </div>
      </div>
    </nav>

    <main>
      <section id="mission" class="section hero">
        <div class="hero-grid">
          <div class="hero-copy reveal">
            <p class="eyebrow">
              Full-Stack / AI-ML / The code that defends the city
            </p>
            <h1>Devyansh<br />Upadhyay</h1>
            <p class="quote">
              "The shadows don't stop the signal from shining."
            </p>
            <div class="cta-row">
              <a class="btn primary" href="#projects">View My Work</a>
              <a class="btn" href="/assets/batman/resume.pdf" download>Get Resume</a>
            </div>
          </div>
          <div class="hero-figure reveal" data-parallax>
            <img
              src="/assets/batman/hero-batman.png"
              alt="LEGO Batman standing guard"
              loading="eager"
            />
          </div>
          <aside class="role-panel reveal" aria-label="Developer profile">
            <p>An</p>
            <ul>
              <li>AI/ML Engineer</li>
              <li>Full-Stack Dev</li>
              <li>DSA Practitioner</li>
            </ul>
            <p>
              B.Tech AI @ NIET<br />Greater Noida, India<br />[ Enter the cave ]
            </p>
            <div class="socials" aria-label="Social links">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dupadhyay7887@gmail.com" aria-label="Email">
  @<span>Email</span>
</a>
              <a
                href="https://www.linkedin.com/in/devyanshupadhyay"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                >in<span>LinkedIn</span></a
              >
              <a
                href="https://github.com/devyansh7887"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                >GH<span>GitHub</span></a
              >
              <a
                href="https://leetcode.com/u/Devyansh_7887/"
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode"
                >LC<span>LeetCode</span></a
              >
            </div>
          </aside>
        </div>
        <img
          class="hero-mini"
          src="/assets/batman/lego-batman-1.png"
          alt=""
          loading="lazy"
        />
      </section>

      <div class="divider" aria-hidden="true">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none">
          <path
            fill="currentColor"
            d="M0 60h60V44h35V28h38v22h30V35h42v25h75V40h22V22h52v38h48V31h34v29h62V45h49v15h74V32h60v28h70V47h38V25h54v35h62V43h52v17h123v20H0z"
          />
        </svg>
      </div>

      <section id="about" class="section about">
        <div class="inner">
          <h2 class="section-heading reveal">
            <span class="tag">The Dossier</span> Intel
          </h2>
          <div class="about-grid">
            <figure class="side-figure reveal">
              <img
                src="/assets/batman/intel-batman.png"
                alt="Batman dossier side figure"
                loading="lazy"
              />
              <figcaption class="caption">Civilian Identity: Active</figcaption>
            </figure>
            <div class="dossier reveal">
              <div class="file-box">
                FILE: D-7887 | CLEARANCE: LEVEL ALPHA<br />
                SUBJECT: DEVYANSH UPADHYAY<br />
                CODENAME: The Dark Dev<br />
                STATUS: Active<br />
                BASE: Greater Noida, India<br />
                INSTITUTION: NIET - B.Tech AI
              </div>
              <div class="about-copy">
                <p>
                  I build autonomous AI agents - the kind that reason in
                  multiple steps, call tools, retrieve from vector stores, and
                  recover from their own mistakes. LangGraph orchestration,
                  RAG over Pinecone and Neo4j, evals with RAGAS and LangSmith.
                  I treat LLMs less like oracles and more like unreliable
                  interns that need scaffolding, observability, and good taste.
                </p>
                <p>
                  My stack reaches from PyTorch and Hugging Face up through
                  LangGraph, CrewAI, and the OpenAI Agents SDK, then out to
                  AWS Bedrock and SageMaker in production. I care
                  about latency budgets, eval harnesses, prompt versioning,
                  and the boring plumbing that makes agentic systems actually
                  ship.
                </p>
                <p>Some defend justice with a cape. I do it with a commit.</p>
              </div>
              <div class="stats" data-stats>
                <div class="stat">
                  <strong data-count="250" data-suffix="+">0</strong
                  ><span>Algo Solved</span>
                </div>
                <div class="stat">
                  <strong data-count="3">0</strong><span>Projects</span>
                </div>
                <div class="stat">
                  <strong data-count="4">0</strong><span>Certifications</span>
                </div>
                <div class="stat">
                  <strong data-count="96.7" data-suffix="%">0</strong
                  ><span>NCAT Score</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="divider" aria-hidden="true">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none">
          <path
            fill="currentColor"
            d="M0 20h80v20h44v-9h46v25h58V18h42v38h70V34h35v22h84V12h58v44h46V39h64v17h68V23h40v33h88V31h52v25h56V42h42V20h70v36h118v24H0z"
          />
        </svg>
      </div>

      <section id="skills" class="section skills">
        <div class="inner skills-layout">
          <h2 class="section-heading reveal">
            <span class="tag">The Utility Belt</span> Arsenal
          </h2>
          <img
            class="skills-side reveal"
            src="/assets/batman/lego-batman-3.png"
            alt=""
            loading="lazy"
          />
          <div class="skill-grid">
            <article class="skill-card reveal">
              <h3>Programming Languages</h3>
              <div class="tags">
                <span class="tag-pill">Python</span
                ><span class="tag-pill">TypeScript</span
                ><span class="tag-pill">JavaScript</span
                ><span class="tag-pill">SQL</span>
              </div>
            </article>
            <article class="skill-card reveal">
              <h3>AI/ML Frameworks</h3>
              <div class="tags">
                <span class="tag-pill">PyTorch</span
                ><span class="tag-pill">TensorFlow</span
                ><span class="tag-pill">Keras</span
                ><span class="tag-pill">scikit-learn</span
                ><span class="tag-pill">XGBoost</span
                ><span class="tag-pill">Hugging Face Transformers</span
                ><span class="tag-pill">Hugging Face Datasets</span
                ><span class="tag-pill">NumPy</span
                ><span class="tag-pill">Pandas</span>
              </div>
            </article>
            <article class="skill-card reveal">
              <h3>Agentic AI & LLM Frameworks</h3>
              <div class="tags">
                <span class="tag-pill">LangGraph</span
                ><span class="tag-pill">LangChain</span
                ><span class="tag-pill">LlamaIndex</span
                ><span class="tag-pill">CrewAI</span
                ><span class="tag-pill">OpenAI Agents SDK</span>
              </div>
            </article>
            <article class="skill-card reveal">
              <h3>Large Language Models</h3>
              <div class="tags">
                <span class="tag-pill">OpenAI GPT-4o / o3</span
                ><span class="tag-pill">Anthropic Claude 3.x / 4.x</span
                ><span class="tag-pill">Google Gemini</span
                ><span class="tag-pill">Mistral</span
                ><span class="tag-pill">LLaMA 3.x</span
                ><span class="tag-pill">Phi-4</span
                ><span class="tag-pill">Gemma</span
                ><span class="tag-pill">Whisper</span
                ><span class="tag-pill">CLIP / BLIP-2</span>
              </div>
            </article>
            <article class="skill-card reveal">
              <h3>RAG & Vector Databases</h3>
              <div class="tags">
                <span class="tag-pill">Pinecone</span
                ><span class="tag-pill">ChromaDB</span
                ><span class="tag-pill">FAISS</span
                ><span class="tag-pill">Neo4j (GraphRAG)</span
                ><span class="tag-pill">Hybrid Search</span
                ><span class="tag-pill">Re-ranking</span
                ><span class="tag-pill">Semantic Chunking</span
                ><span class="tag-pill">Agentic RAG</span
                ><span class="tag-pill">RAGAS</span
                ><span class="tag-pill">DeepEval</span>
              </div>
            </article>
            <article class="skill-card reveal">
              <h3>Cloud &amp; Databases</h3>
              <div class="tags">
                <span class="tag-pill">AWS Bedrock</span
                ><span class="tag-pill">AWS SageMaker</span
                ><span class="tag-pill">AWS Lambda</span
                ><span class="tag-pill">AWS S3</span
                ><span class="tag-pill">AWS EMR</span
                ><span class="tag-pill">PostgreSQL</span
                ><span class="tag-pill">MongoDB</span>
              </div>
            </article>
            <article class="skill-card reveal">
              <h3>Infra & APIs</h3>
              <div class="tags">
                <span class="tag-pill">Docker</span
                ><span class="tag-pill">Kubernetes (K8s)</span
                ><span class="tag-pill">GitHub Actions</span
                ><span class="tag-pill">FastAPI</span
                ><span class="tag-pill">REST APIs</span
                ><span class="tag-pill">GraphQL</span
                ><span class="tag-pill">Async Python (asyncio)</span>
              </div>
            </article>
          </div>
          <img
            class="batmobile"
            src="/assets/batman/batmobile.png"
            alt="Batmobile decoration"
            loading="lazy"
          />
        </div>
      </section>

      <div class="divider" aria-hidden="true">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none">
          <path
            fill="currentColor"
            d="M0 60h60V44h35V28h38v22h30V35h42v25h75V40h22V22h52v38h48V31h34v29h62V45h49v15h74V32h60v28h70V47h38V25h54v35h62V43h52v17h123v20H0z"
          />
        </svg>
      </div>

      <section id="projects" class="section projects">
        <div class="inner">
          <h2 class="section-heading reveal">
            <span class="tag">Case Files</span> Operations
          </h2>
          <img
            class="journal-side reveal"
            src="/assets/batman/lego-batman-4.png"
            alt=""
            loading="lazy"
          />
          <div class="journal-stack">
            <article class="journal-page reveal" style="--tilt: -1.2deg">
              <div class="case-top">
                <span>CASE #001 - CLASSIFIED</span><span>SOLVED [OK]</span>
              </div>
              <h3>AI Resume Analyser</h3>
              <div class="project-meta">
                <span class="paper-pill">Python</span
                ><span class="paper-pill">React.js</span
                ><span class="paper-pill">Claude API</span
                ><span class="paper-pill">TF-IDF</span
                ><span class="paper-pill">NLTK</span>
              </div>
              <blockquote>
                Subject needed to get past the automated gatekeepers. Built an
                intelligence that reads resumes the way a recruiter wishes they
                could - deep, fast, surgical. Match score computed in under 3
                seconds. Five targeted improvements served per scan. The machine
                now hunts opportunities.
              </blockquote>
              <div class="project-meta">
                <span class="paper-pill">ATS Match Scoring</span
                ><span class="paper-pill">5+ Targeted Suggestions</span
                ><span class="paper-pill">&lt;3s Response Time</span>
              </div>
              <div class="project-links">
                <a
                  href="https://github.com/devyansh7887/AI-RESUME-ANALYZER"
                  target="_blank"
                  rel="noreferrer"
                  >View on GitHub</a
                ><a href="https://puter.com/app/my-ai-resume-analyzer">Request Demo</a>
              </div>
            </article>

            <article class="journal-page reveal" style="--tilt: 0.8deg">
              <div class="case-top">
                <span>CASE #002 - IN FIELD</span><span>ACTIVE [OK]</span>
              </div>
              <h3>Algorithm Visualizer</h3>
              <div class="project-meta">
                <span class="paper-pill">HTML</span
                ><span class="paper-pill">CSS</span
                ><span class="paper-pill">JavaScript</span
                ><span class="paper-pill">Vanilla JS</span>
              </div>
              <blockquote>
                The algorithms were invisible - just theory and textbooks. I
                made them bleed color. 12 sorting and searching algorithms
                animated in real-time. Step-through mode. Dynamic speed control.
                95+ Lighthouse score. When students run this, they don't study -
                they watch a machine think.
              </blockquote>
              <div class="project-meta">
                <span class="paper-pill">12 Algorithms</span
                ><span class="paper-pill">95+ Lighthouse Score</span
                ><span class="paper-pill">60 FPS Rendering</span>
              </div>
              <div class="project-links">
                <a
                  href="https://github.com/devyansh7887/Algorithm_Visualizer"
                  target="_blank"
                  rel="noreferrer"
                  >View on GitHub</a
                ><a href="https://thealgorithmvisualizer.netlify.app/">Request Demo</a>
              </div>
            </article>

            <article class="journal-page reveal" style="--tilt: -0.5deg">
              <div class="case-top">
                <span>CASE #003 - ACTIVE</span><span>DEPLOYED [OK]</span>
              </div>
              <h3>Swoley-Fit</h3>
              <div class="project-meta">
                <span class="paper-pill">React.js</span
                ><span class="paper-pill">Tailwind CSS</span
                ><span class="paper-pill">Vite</span
                ><span class="paper-pill">React Hooks</span>
              </div>
              <blockquote>
                Built for the ones who train in the dark. A fitness application
                that generates custom workouts, tracks progress, and covers 3+
                muscle group categories - fully responsive across every device.
                Build size reduced 30% versus baseline. No external state
                libraries. Just discipline and clean hooks.
              </blockquote>
              <div class="project-meta">
                <span class="paper-pill">3+ Muscle Groups</span
                ><span class="paper-pill">30% Smaller Build</span
                ><span class="paper-pill">Full Responsive</span>
              </div>
              <div class="project-links">
                <a
                  href="https://github.com/devyansh7887/Swoley-fit"
                  target="_blank"
                  rel="noreferrer"
                  >View on GitHub</a
                ><a href="https://swoleyfit-vite.netlify.app/">Request Demo</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <div class="divider" aria-hidden="true">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none">
          <path
            fill="currentColor"
            d="M0 20h80v20h44v-9h46v25h58V18h42v38h70V34h35v22h84V12h58v44h46V39h64v17h68V23h40v33h88V31h52v25h56V42h42V20h70v36h118v24H0z"
          />
        </svg>
      </div>

      <section id="certifications" class="section certs">
        <div class="inner">
          <h2 class="section-heading reveal">
            <span class="tag">Commendations</span> Wayne Enterprises Awards Wall
          </h2>
          <img
            class="cert-side reveal"
            src="/assets/batman/lego-batman-5.png"
            alt=""
            loading="lazy"
          />
          <div class="cert-grid">
            <article class="cert-card reveal">
              <span class="ribbon">2025-2027</span>
              <div class="medal">O</div>
              <h3>
                Oracle Cloud Infrastructure 2025 Generative AI Professional
              </h3>
              <p>Oracle University / Sep 2025</p>
            </article>
            <article class="cert-card reveal">
              <span class="ribbon">2026</span>
              <div class="medal">AWS</div>
              <h3>AWS Cloud Practitioner Essentials</h3>
              <p>Amazon Web Services / Mar 2026</p>
            </article>
            <article class="cert-card reveal">
              <span class="ribbon">2025</span>
              <div class="medal">AI</div>
              <h3>Artificial Intelligence with Machine Learning in Java</h3>
              <p>Oracle Academy / May 2025</p>
            </article>
            <article class="cert-card reveal">
              <span class="ribbon">2023</span>
              <div class="medal">IBM</div>
              <h3>Python for Data Science, AI & Development</h3>
              <p>IBM / Coursera / Apr 2023</p>
            </article>
          </div>
        </div>
      </section>

      <section id="achievements" class="section achievements">
        <div class="inner">
          <h2 class="section-heading reveal">
            <span class="tag">Gotham's Most Wanted</span> Case Closed
          </h2>
          <div class="case-banners">
            <article class="case-banner reveal">
              <h3>eLitmus pH Test - <strong>86.5 Percentile</strong></h3>
              <p>Quantitative reasoning / Logical analysis / Problem-solving</p>
            </article>
            <article class="case-banner reveal">
              <h3>
                NCAT 2025 - <strong>96.7% in Engineering Category</strong>
              </h3>
              <p>Cleared with distinction among top engineers nationwide</p>
            </article>
            <article class="case-banner reveal">
              <h3>
                <strong>250+ DSA Problems Solved</strong> - LeetCode +
                GeeksforGeeks
              </h3>
              <p>Problem-solving accuracy improved 35% within one year</p>
            </article>
          </div>
        </div>
      </section>

      <div class="divider" aria-hidden="true">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none">
          <path
            fill="currentColor"
            d="M0 60h60V44h35V28h38v22h30V35h42v25h75V40h22V22h52v38h48V31h34v29h62V45h49v15h74V32h60v28h70V47h38V25h54v35h62V43h52v17h123v20H0z"
          />
        </svg>
      </div>

      <section id="contact" class="section contact">
        <div class="inner">
          <h2 class="section-heading reveal">
            <span class="tag">Send The Signal</span> Contact
          </h2>
          <div class="contact-grid">
            <div class="signal-illustration reveal">
              <img
                src="/assets/batman/bat-signal.png"
                alt="Bat signal"
                loading="lazy"
              />
              <img
                class="contact-mini"
                src="/assets/batman/lego-batman-6.png"
                alt=""
                loading="lazy"
              />
            </div>
            <div class="reveal">
              <form id="contact-form">
                  <input type="hidden" name="access_key" value="1601840e-85fa-4dd4-8105-1c346beb28be">
                  <input type="hidden" name="subject" value="New Message from Batman Portfolio">
                  <input type="hidden" name="from_name" value="Batman Portfolio">

                  <label for="name">Name:</label>
                  <input type="text" id="name" name="name" required>

                  <label for="email">Email:</label>
                  <input type="email" id="email" name="email" required>

                  <label for="message">Message:</label>
                  <textarea id="message" name="message" required></textarea>

                  <button class="btn primary" type="submit">
                    Send The Signal ->
                  </button>
                  <div class="form-status" role="status" aria-live="polite"></div>
                </form>
              <div class="contact-details">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dupadhyay7887@gmail.com" aria-label="Email"><span>dupadhyay7887@gmail.com</span></a>
                <a href="tel:+917906977607">+91 7906977607</a>
                <a
                  href="https://www.linkedin.com/in/devyanshupadhyay"
                  target="_blank"
                  rel="noreferrer"
                  >LinkedIn: linkedin.com/in/devyanshupadhyay</a
                >
                <a
                  href="https://github.com/devyansh7887"
                  target="_blank"
                  rel="noreferrer"
                  >GitHub: github.com/devyansh7887</a
                >
                <a
                  href="https://leetcode.com/u/Devyansh_7887/"
                  target="_blank"
                  rel="noreferrer"
                  >LeetCode: leetcode.com/u/Devyansh_7887</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="footer-inner">
        <div>
          <div class="footer-title">BAT / Devyansh Upadhyay / BAT</div>
          <div>"The Dark Dev"</div>
          <div>Built in the shadows. Shipped in the light.</div>
          <div>(c) 2026 - All Villains Warned.</div>
        </div>
        <div class="footer-links">
          <a
            href="https://www.linkedin.com/in/devyanshupadhyay"
            target="_blank"
            rel="noreferrer"
            >LinkedIn</a
          >
          <a
            href="https://github.com/devyansh7887"
            target="_blank"
            rel="noreferrer"
            >GitHub</a
          >
          <a
            href="https://leetcode.com/u/Devyansh_7887/"
            target="_blank"
            rel="noreferrer"
            >LeetCode</a
          >
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dupadhyay7887@gmail.com" aria-label="Email">@<span>Email</span></a>
        </div>
      </div>
    </footer>

    <script>


  const form = document.getElementById('contact-form');
  const status = document.querySelector('.form-status');

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      });

      const data = await res.json();

      if (data.success) {
        status.textContent = '✅ Signal sent! Batman will be in touch.';
        status.style.color = 'yellow';
        form.reset();
      } else {
        status.textContent = '❌ Something went wrong. Try again.';
        status.style.color = 'red';
      }
    } catch (error) {
      status.textContent = '❌ Network error. Please try again.';
      status.style.color = 'red';
    }

    btn.textContent = 'Send The Signal ->';
    btn.disabled = false;
  });


      const batPath =
        "M2 30c12-3 20-11 25-28 8 15 14 18 23 18S65 17 73 2c5 17 13 25 25 28-16 5-24 14-28 28-8-11-13-14-20-14s-12 3-20 14C26 44 18 35 2 30Z";
      const progressFill = document.querySelector(".progress-fill");
      const signalBg = document.querySelector(".bat-signal-bg");
      const navLinks = [...document.querySelectorAll(".nav-links a")];
      const menuToggle = document.querySelector(".menu-toggle");
      const navMenu = document.querySelector(".nav-links");

      function updateScrollEffects() {
        const max = document.documentElement.scrollHeight - innerHeight;
        const pct = max > 0 ? (scrollY / max) * 100 : 0;
        progressFill.style.width = \`\${pct}%\`;
        signalBg.style.setProperty(
          "--signal-opacity",
          String(0.04 + (Math.min(pct, 100) / 100) * 0.06),
        );
        const heroFigure = document.querySelector("[data-parallax]");
        if (heroFigure && scrollY < innerHeight * 1.2) {
          heroFigure.style.transform = \`translateY(\${scrollY * 0.2}px)\`;
        }
      }

      addEventListener("scroll", updateScrollEffects, { passive: true });
      addEventListener("resize", updateScrollEffects);
      updateScrollEffects();

      menuToggle.addEventListener("click", () => {
        const open = navMenu.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(open));
      });

      navLinks.forEach((link) =>
        link.addEventListener("click", () => {
          navMenu.classList.remove("open");
          menuToggle.setAttribute("aria-expanded", "false");
        }),
      );

      const sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              if (entry.target.matches("[data-stats]")) animateStats();
            }
          });
        },
        { threshold: 0.18 },
      );

      document
        .querySelectorAll(".reveal, [data-stats]")
        .forEach((el) => sectionObserver.observe(el));

      const sections = [...document.querySelectorAll("main section[id]")];
      const navObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            navLinks.forEach((link) =>
              link.classList.toggle(
                "active",
                link.getAttribute("href") === \`#\${entry.target.id}\`,
              ),
            );
          });
        },
        { rootMargin: "-35% 0px -55% 0px" },
      );
      sections.forEach((section) => navObserver.observe(section));

      let statsDone = false;
      function animateStats() {
        if (statsDone) return;
        statsDone = true;
        document.querySelectorAll("[data-count]").forEach((el) => {
          const target = Number(el.dataset.count);
          const suffix = el.dataset.suffix || "";
          const duration = 1400;
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = target * eased;
            el.textContent = \`\${target % 1 ? value.toFixed(1) : Math.round(value)}\${suffix}\`;
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      }

      class BatSwarm {
        constructor(layer) {
          this.layer = layer;
          this.launch();
          this.schedule();
        }

        schedule() {
          const delay = Math.random() * 2500 + 3500;
          setTimeout(() => {
            this.launch();
            this.schedule();
          }, delay);
        }

        launch() {
          const count = Math.floor(Math.random() * 8) + 16;
          const direction = Math.random() > 0.5 ? 1 : -1;
          for (let i = 0; i < count; i++) {
            setTimeout(() => this.createBat(direction), Math.random() * 800);
          }
        }

        createBat(direction) {
          const svg = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg",
          );
          svg.setAttribute("viewBox", "0 0 100 60");
          svg.classList.add("flying-bat");
          const path = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path",
          );
          path.setAttribute("d", batPath);
          path.setAttribute("fill", "currentColor");
          svg.append(path);

          const y = Math.round(Math.random() * 60 + 10);
          const duration = (Math.random() * 2.5 + 2.5).toFixed(2);
          svg.style.setProperty("--y", \`\${y}vh\`);
          svg.style.setProperty(
            "--size",
            \`\${Math.round(Math.random() * 28 + 22)}px\`,
          );
          svg.style.setProperty(
            "--alpha",
            (Math.random() * 0.3 + 0.25).toFixed(2),
          );
          svg.style.setProperty("--scale", direction === 1 ? "1" : "-1");
          svg.style.setProperty("--duration", \`\${duration}s\`);
          svg.style.setProperty(
            "--drift",
            \`\${Math.round(Math.random() * 80 - 40)}px\`,
          );
          svg.style.setProperty("--start", direction === 1 ? "-10vw" : "110vw");
          svg.style.setProperty("--end", direction === 1 ? "110vw" : "-10vw");
          this.layer.append(svg);
          setTimeout(() => svg.remove(), (Number(duration) + 0.5) * 1000);
        }
      }

      setTimeout(
        () => new BatSwarm(document.querySelector(".swarm-layer")),
        2500,
      );

      document
        .querySelector(".contact-form")
        .addEventListener("submit", (event) => {
          event.preventDefault();
          const status = event.currentTarget.querySelector(".form-status");
          status.textContent = "SIGNAL RECEIVED. I'll be in touch.";
          document.querySelector(".signal-illustration img").animate(
            [
              {
                transform: "scale(1)",
                filter: "drop-shadow(0 0 28px rgba(245,197,24,.2))",
              },
              {
                transform: "scale(1.06)",
                filter: "drop-shadow(0 0 62px rgba(245,197,24,.55))",
              },
              {
                transform: "scale(1)",
                filter: "drop-shadow(0 0 28px rgba(245,197,24,.2))",
              },
            ],
            { duration: 900, easing: "ease-out" },
          );
          event.currentTarget.reset();
        });

      function fallbackImage(img) {
        const alt = encodeURIComponent(img.alt || "Batman asset");
        const svg = \`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 420 260'><rect width='420' height='260' fill='%230a0a0f'/><path fill='%23f5c518' d='M58 130c48-12 79-44 99-112 32 60 55 72 93 72s61-12 93-72c20 68 51 100 99 112-64 20-96 56-112 112-32-44-52-56-80-56s-48 12-80 56c-16-56-48-92-112-112Z'/><text x='210' y='238' text-anchor='middle' fill='%23d4cfc0' font-family='monospace' font-size='20'>\${alt}</text></svg>\`;
        img.src = \`data:image/svg+xml,\${svg}\`;
        img.classList.add("fallback-svg");
      }

      document.querySelectorAll("img").forEach((img) => {
        img.addEventListener("error", () => fallbackImage(img), { once: true });
      });
    </script>
  </body>
</html>
`;

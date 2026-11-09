"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import CharacterReveal from "@/components/CharacterReveal";

// Hand-placed candlestick data -> reads left to right as a steady uptrend,
// the same shape as the "your trading journey" narrative the page tells.
const candles = [
  { x: 0, open: 30, close: 42, high: 22, low: 48, up: true },
  { x: 28, open: 42, close: 36, high: 30, low: 50, up: false },
  { x: 56, open: 36, close: 54, high: 30, low: 58, up: true },
  { x: 84, open: 54, close: 48, high: 40, low: 60, up: false },
  { x: 112, open: 48, close: 70, high: 42, low: 74, up: true },
  { x: 140, open: 70, close: 62, high: 56, low: 76, up: false },
  { x: 168, open: 62, close: 88, high: 56, low: 92, up: true },
  { x: 196, open: 88, close: 96, high: 82, low: 100, up: true },
  { x: 224, open: 96, close: 118, high: 90, low: 122, up: true },
];

export default function Hero() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-eyebrow", { opacity: 0, y: 10, duration: 0.5 })
        .from(
          ".hero-line",
          { opacity: 0, y: 26, duration: 0.7, stagger: 0.08 },
          "-=0.2"
        )
        .from(".hero-sub", { opacity: 0, y: 14, duration: 0.6 }, "-=0.35")
        .from(
          ".hero-cta",
          { opacity: 0, y: 10, duration: 0.5, stagger: 0.08 },
          "-=0.35"
        )
        .from(
          ".candle",
          {
            scaleY: 0,
            transformOrigin: "bottom",
            duration: 0.5,
            stagger: 0.06,
            ease: "back.out(1.6)",
          },
          "-=0.5"
        )
        .from(
          ".price-path",
          {
            drawSVG: "0%",
          },
          "<"
        )
        .from(".hero-card", { opacity: 0, y: 16, duration: 0.6 }, "-=0.4");
    },
    { scope }
  );

  return (
    <section
      id="top"
      ref={scope}
      className="relative overflow-hidden pt-30 pb-24 md:pt-30 md:pb-32"
    >
      <div className="pointer-events-none absolute -top-24 right-[-10%] h-[520px] w-[520px] rounded-full bg-brass/10 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-[1.15fr_0.85fr] items-end">
          <div>
            <p className="hero-eyebrow font-mono text-[11px] uppercase tracking-[0.16em] text-brass mb-6">
              Course Ledger · Trading Universe Academy
            </p>
            <h1 className="font-display font-extrabold text-ink text-[10vw] leading-[1] md:text-[3rem] md:leading-[0.92] tracking-tight">
              <span className="hero-line block">Every batch detail,</span>
              <span className="hero-line block">
                <em className="font-accent font-normal italic text-brass">one link.</em> No PDFs
              </span>
              <span className="hero-line block">lost in WhatsApp.</span>
            </h1>
            <div className="hero-sub mt-8 max-w-lg">
              <CharacterReveal
                paragraphs={[
                  "A working page for Shubham sir's first meeting: the same brochure content — mentor credentials, curriculum, batch fees, FAQs — rebuilt as one page a student can open in three seconds, instead of a heavy PDF forwarded chat by chat.",
                ]}
                textSize="text-[15px]"
              />
            </div>
            <div className="hero-cta mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#curriculum"
                className="rounded-full bg-ink text-parchment px-6 py-3 text-[13px] font-medium tracking-wide hover:bg-ink-deep transition-colors"
              >
                View the curriculum
              </a>
              <a
                href="#fees"
                className="rounded-full border hairline px-6 py-3 text-[13px] font-medium tracking-wide text-ink hover:bg-ink hover:text-parchment transition-colors"
              >
                Batches &amp; fees
              </a>
            </div>
          </div>

          <div className="hero-card grain rounded-2xl border hairline bg-white/50 p-6 md:p-7">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">
              <span>Nifty · illustrative</span>
              <span className="text-ledger-up">+ trend</span>
            </div>
            <svg
              viewBox="0 0 250 130"
              className="mt-4 w-full h-auto overflow-visible"
              aria-hidden="true"
            >
              <line x1="0" y1="32" x2="250" y2="32" stroke="var(--hairline)" strokeWidth="1" />
              <line x1="0" y1="72" x2="250" y2="72" stroke="var(--hairline)" strokeWidth="1" />
              <line x1="0" y1="112" x2="250" y2="112" stroke="var(--hairline)" strokeWidth="1" />

              {candles.map((c, i) => (
                <g className="candle" key={i} transform={`translate(${c.x},0)`}>
                  <line
                    x1="9"
                    x2="9"
                    y1={130 - c.high}
                    y2={130 - c.low}
                    stroke={c.up ? "var(--ledger-up)" : "var(--ledger-down)"}
                    strokeWidth="1.5"
                  />
                  <rect
                    x="2"
                    width="14"
                    y={130 - Math.max(c.open, c.close)}
                    height={Math.max(Math.abs(c.close - c.open), 3)}
                    fill={c.up ? "var(--ledger-up)" : "var(--ledger-down)"}
                    rx="1.5"
                  />
                </g>
              ))}

              <path
                className="price-path"
                d="M 9 100 L 37 88 L 65 76 L 93 82 L 121 60 L 149 68 L 177 42 L 205 34 L 233 12"
                fill="none"
                stroke="var(--brass)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="mt-5 grid grid-cols-3 gap-4 border-t hairline pt-4 font-mono text-[11px] text-ink-soft">
              <div>
                <div className="text-ink text-base font-medium">6+ yrs</div>
                mentor experience
              </div>
              <div>
                <div className="text-ink text-base font-medium">2000+</div>
                students guided
              </div>
              <div>
                <div className="text-ink text-base font-medium">NISM · RA</div>
                certified analyst
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

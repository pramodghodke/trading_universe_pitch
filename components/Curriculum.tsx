"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import AnimatedTitle from "@/components/AnimatedTitle";

const modules = [
  {
    id: "01",
    title: "Basics & Foundation",
    points: [
      "Stock market fundamentals and technical analysis",
      "How retail and institutional players think differently",
      "Candlestick patterns, in depth",
      "Support, resistance, demand, supply and market structure",
    ],
  },
  {
    id: "02",
    title: "Advanced Price Action",
    points: [
      "Breakouts, breakdowns, entries and exits",
      "Four strategies proven over 4+ years of live use",
      "Spotting fake breakouts, traps and liquidity grabs",
      "Reading institution and smart-money behaviour",
    ],
  },
  {
    id: "03",
    title: "Risk Management",
    points: [
      "Minimising risk while maximising profit potential",
      "Growing small capital without over-leveraging",
      "Building a written trading plan",
      "Live examples of risk rules turning losses into consistency",
    ],
  },
  {
    id: "04",
    title: "Self Trading Data Analysis",
    points: [
      "Maintaining a professional trade log in Excel",
      "Saving and reviewing trade screenshots",
      "Weekly and monthly performance analysis",
      "Fixing what your own data says you get wrong",
    ],
  },
  {
    id: "05",
    title: "Option Trading (F&O)",
    points: [
      "Futures & options, basics through advanced",
      "Correct strike selection and position sizing",
      "Hedging and risk management in options",
      "Option Greeks, with a focus on theta decay",
    ],
  },
  {
    id: "06",
    title: "Psychological Training",
    points: [
      "What trading psychology actually means",
      "Replacing fear- and greed-led decisions with rules",
      "Live psychology coaching inside real trading sessions",
      "Journaling, affirmations and subconscious-mind training",
    ],
  },
];

export default function Curriculum() {
  const scope = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<string>("01");

  useGSAP(
    () => {
      gsap.from(".ledger-row", {
        opacity: 0,
        y: 16,
        duration: 0.5,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: {
          trigger: scope.current,
          start: "top 80%",
        },
      });
    },
    { scope }
  );

  return (
    <section ref={scope} id="curriculum" className="py-24 md:py-32 bg-parchment-dim">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brass mb-4">
          Curriculum · Intraday Equity + Options
        </p>
        <AnimatedTitle
          title="Six modules,"
          accent="in the order they're taught."
          size="text-3xl md:text-5xl"
          className="max-w-xl mb-14"
        />

        <div className="border-t hairline">
          {modules.map((m) => {
            const isOpen = open === m.id;
            return (
              <div key={m.id} className="ledger-row border-b hairline">
                <button
                  onClick={() => setOpen(isOpen ? "" : m.id)}
                  className="w-full flex items-center gap-6 py-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-mono text-[13px] text-brass w-8 shrink-0">
                    {m.id}
                  </span>
                  <span className="font-display text-[20px] md:text-[22px] flex-1 group-hover:text-ink-soft transition-colors">
                    {m.title}
                  </span>
                  <span
                    className={`font-mono text-lg text-ink-soft transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-[400ms] ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <ul className="pb-7 pl-14 space-y-2.5">
                      {m.points.map((p) => (
                        <li
                          key={p}
                          className="text-[14px] leading-relaxed text-ink-soft flex gap-3"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ledger-up" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

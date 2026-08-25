"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import AnimatedTitle from "@/components/AnimatedTitle";

const rows = [
  {
    label: "Today",
    mono: "brochure.pdf",
    points: [
      "Re-sent to every new student, one WhatsApp chat at a time",
      "Heavy file — slow to open, easy to lose in the chat history",
      "Fee or batch changes mean resending the file all over again",
    ],
    tone: "text-ink-soft",
  },
  {
    label: "With this page",
    mono: "tradinguniverse.in/course",
    points: [
      "One link, shared once — in bio, in status, in a single text",
      "Opens instantly on any phone, no download required",
      "Update the page, and everyone's link stays current",
    ],
    tone: "text-ledger-up",
  },
];

export default function ProblemSolution() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".ps-row", {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: scope.current,
          start: "top 75%",
        },
      });
    },
    { scope }
  );

  return (
    <section ref={scope} className="border-y hairline bg-ink text-parchment">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brass-light mb-4">
          The pitch, in one comparison
        </p>
        <AnimatedTitle
          title="The brochure is right."
          accent="The delivery is the problem."
          theme="parchment"
          size="text-3xl md:text-5xl"
          className="max-w-2xl"
        />

        <div className="mt-14 grid md:grid-cols-2 gap-px bg-parchment/15 rounded-2xl overflow-hidden">
          {rows.map((r) => (
            <div key={r.label} className="ps-row bg-ink p-8 md:p-10">
              <div className="flex items-baseline justify-between border-b border-parchment/15 pb-5 mb-6">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-parchment/60">
                  {r.label}
                </span>
                <span className={`font-mono text-[13px] ${r.tone}`}>{r.mono}</span>
              </div>
              <ul className="space-y-4">
                {r.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[14.5px] leading-relaxed text-parchment/85">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brass-light" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

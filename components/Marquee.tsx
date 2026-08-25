"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

const items = [
  "NISM Certified Research Analyst",
  "6+ Years Live Market Experience",
  "2000+ Students Mentored",
  "Price Action, No Indicators",
  "Risk Management First",
];

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!trackRef.current) return;
    const el = trackRef.current;
    const loopWidth = el.scrollWidth / 2;

    gsap.to(el, {
      x: -loopWidth,
      duration: 26,
      ease: "none",
      repeat: -1,
    });
  }, []);

  const row = [...items, ...items];

  return (
    <div className="border-y hairline bg-brass overflow-hidden">
      <div ref={trackRef} className="flex w-max py-4">
        {[...row, ...row].map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="font-display font-semibold text-ink text-lg md:text-2xl tracking-tight px-6 whitespace-nowrap">
              {item}
            </span>
            <span className="text-ink/40 text-lg md:text-2xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

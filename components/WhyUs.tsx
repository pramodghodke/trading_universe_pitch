"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import AnimatedTitle from "@/components/AnimatedTitle";

const features = [
  {
    tag: "Teaching",
    title: "Logic before indicators",
    body: "Price action, market structure and four strategies tested over 4+ years — taught with the reasoning behind every trade, not a signal to copy.",
  },
  {
    tag: "Batches",
    title: "Small batches, tracked growth",
    body: "Every student's performance is tracked individually, with a growth plan built around their own trades — not a generic course pace.",
  },
  {
    tag: "Practice",
    title: "Live in the market, not just on slides",
    body: "A full week of live trading sessions plus recurring live classes, so execution is practiced in real market conditions before it's practiced with real capital.",
  },
  {
    tag: "Support",
    title: "Daily check-ins, not one-time doubts",
    body: "Homework and trades are reviewed over WhatsApp every day, with weekly doubt-clearing sessions and support that continues after the course ends.",
  },
  {
    tag: "Mindset",
    title: "Psychology gets its own module",
    body: "Fear, greed and revenge trading are named as the real reason most traders fail — and addressed directly, with dedicated psychology training.",
  },
  {
    tag: "Risk",
    title: "A risk system before a strategy",
    body: "Position sizing and capital protection are taught before advanced setups, so small capital survives long enough to compound.",
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const track = trackRef.current;
        const section = sectionRef.current;
        if (!track || !section) return;

        const distance = () => track.scrollWidth - window.innerWidth + 80;

        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance()}`,
            scrub: 0.6,
            pin: true,
            invalidateOnRefresh: true,
          },
        });

        return () => tween.kill();
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section id="why" className="pt-24 md:pt-32 pb-8">
      <div className="mx-auto max-w-6xl px-6 md:px-10 mb-14">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brass mb-4">
          Why students stay
        </p>
        <AnimatedTitle
          title="Not just a course."
          accent="A full training system."
          size="text-4xl md:text-6xl"
        />
      </div>

      <div ref={sectionRef} className="relative md:h-screen md:overflow-hidden flex md:items-center">
        <div
          ref={trackRef}
          className="flex gap-5 px-6 md:px-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-6 md:pb-0 w-max"
        >
          {features.map((f) => (
            <div
              key={f.title}
              data-cursor-grow
              className="why-card snap-start shrink-0 w-[80vw] sm:w-[360px] md:w-[400px] rounded-2xl border hairline bg-white/60 p-8 md:p-10"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-brass">
                {f.tag}
              </span>
              <h3 className="font-display font-semibold text-2xl mt-4 mb-4 leading-snug tracking-tight">
                {f.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-ink-soft">
                {f.body}
              </p>
            </div>
          ))}
          <div className="shrink-0 w-px md:w-24" />
        </div>
      </div>
    </section>
  );
}

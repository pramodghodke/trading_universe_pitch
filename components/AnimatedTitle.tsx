"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

type AnimatedTitleProps = {
  title: string;
  /** trailing words rendered in italic serif + brass, e.g. "the delivery." */
  accent?: string;
  as?: "h1" | "h2" | "h3";
  theme?: "ink" | "parchment";
  size?: string;
  className?: string;
};

export default function AnimatedTitle({
  title,
  accent,
  as = "h2",
  theme = "ink",
  size = "text-3xl md:text-[2.8rem]",
  className = "",
}: AnimatedTitleProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const Tag = as;

  useGSAP(
    () => {
      const mask = wrapRef.current?.querySelector(".at-mask");
      const line = wrapRef.current?.querySelector(".at-line");
      if (!mask || !line) return;

      gsap.set(mask, { yPercent: 105 });
      gsap.set(line, { scaleX: 0 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        })
        .to(mask, { yPercent: 0, duration: 0.9, ease: "power4.out" })
        .to(line, { scaleX: 1, duration: 0.6, ease: "power3.inOut" }, "-=0.55");
    },
    { scope: wrapRef }
  );

  const lineColor = theme === "parchment" ? "bg-parchment/40" : "bg-ink/15";
  const textColor = theme === "parchment" ? "text-parchment" : "text-ink";

  return (
    <div ref={wrapRef} className={`flex flex-col gap-4 ${className}`}>
      <div className="overflow-hidden">
        <Tag
          className={`at-mask font-display font-semibold leading-[0.98] tracking-tight ${size} ${textColor}`}
        >
          {title}
          {accent ? (
            <>
              {" "}
              <em className="font-accent font-normal italic text-brass">
                {accent}
              </em>
            </>
          ) : null}
        </Tag>
      </div>
      <div className={`at-line h-px w-full origin-left ${lineColor}`} />
    </div>
  );
}

"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

type CharacterRevealProps = {
  paragraphs: string[];
  textSize?: string;
  theme?: "ink" | "parchment";
  className?: string;
};

export default function CharacterReveal({
  paragraphs,
  textSize = "text-lg",
  theme = "ink",
  className = "",
}: CharacterRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const dim = theme === "parchment" ? "rgba(246,241,230,0.28)" : "rgba(16,35,59,0.2)";
  const lit = theme === "parchment" ? "#f6f1e6" : "#10233b";

  useGSAP(
    () => {
      const chars = containerRef.current?.querySelectorAll(".char");
      if (!chars || !chars.length) return;

      gsap.set(chars, { color: dim });

      gsap.to(chars, {
        color: lit,
        stagger: 0.02,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "bottom 55%",
          scrub: 1,
        },
      });
    },
    { scope: containerRef, dependencies: [paragraphs, theme] }
  );

  return (
    <div ref={containerRef} className={className}>
      {paragraphs.map((paragraph, i) => (
        <p key={i} className={`${textSize} leading-relaxed mb-4`}>
          {paragraph.split("").map((char, index) => (
            <span key={index} className="char">
              {char}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

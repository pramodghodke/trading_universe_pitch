"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import AnimatedTitle from "@/components/AnimatedTitle";

const faqs = [
  {
    q: "What language are the live classes in, and who joins them?",
    a: "Classes run fully in Marathi. Students range from complete beginners to working professionals, business owners and homemakers — anyone who wants to learn trading properly.",
  },
  {
    q: "Is this suitable for someone with zero market knowledge?",
    a: "Yes. The program is built for beginners from the ground up — no prior market knowledge is assumed at the start.",
  },
  {
    q: "When should I start trading for real, and with how much capital?",
    a: "Students are guided to start from the second week, with starting capital between ₹5,000 and ₹30,000 — small enough to learn from mistakes safely, then scaled up gradually.",
  },
  {
    q: "What if I miss a live session?",
    a: "Every class is recorded and kept available for 10 days, so a missed live session can always be watched back.",
  },
  {
    q: "Does this apply to Forex and crypto too?",
    a: "The core skills — technical analysis, risk management, psychology, discipline and trade data analysis — transfer to any market. Examples and practicals are taught on the Indian market.",
  },
];

export default function FAQ() {
  const scope = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<number>(0);

  useGSAP(
    () => {
      gsap.from(".faq-row", {
        opacity: 0,
        y: 14,
        duration: 0.5,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: { trigger: scope.current, start: "top 80%" },
      });
    },
    { scope }
  );

  return (
    <section ref={scope} id="faq" className="py-24 md:py-32 bg-parchment-dim">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brass mb-4">
          Questions, answered once
        </p>
        <AnimatedTitle
          title="What students"
          accent="usually ask."
          size="text-3xl md:text-5xl"
          className="mb-14"
        />

        <div className="border-t hairline">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="faq-row border-b hairline">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-start gap-5 py-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-mono text-lg text-brass mt-0.5 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                  <span className="font-display text-[18px] md:text-[19px] leading-snug flex-1 group-hover:text-ink-soft transition-colors">
                    {f.q}
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-[400ms] ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-7 pl-10 text-[14px] leading-relaxed text-ink-soft max-w-xl">
                      {f.a}
                    </p>
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

"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import AnimatedTitle from "@/components/AnimatedTitle";

const batches = [
  {
    name: "Online Batch",
    time: "Mon–Fri · 9:00–10:30 PM",
    price: "₹9,900",
    trial: "₹900 to hold your seat for the first 2 trial classes",
    rows: [
      "1 month live training over Google Meet",
      "2 months free revision classes after",
      "Live online trading sessions in the market",
      "Weekly 20-mark MCQ assessment",
      "Personal performance tracking & career guidance",
      "Lifetime post-course support",
    ],
  },
  {
    name: "Offline Batch",
    time: "Mon–Fri · 3:00–5:00 PM · Pune classroom",
    price: "₹23,700",
    trial: "₹3,700 to hold your seat for the first 2 trial classes",
    rows: [
      "1 month live classroom training",
      "2 months free revision classes after",
      "Face-to-face live trading with the mentor",
      "Weekly 20-mark MCQ assessment",
      "Personal performance tracking & career guidance",
      "3 months of classroom access + lifetime support",
    ],
    featured: true,
  },
];

export default function Fees() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".fee-card", {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: scope.current, start: "top 78%" },
      });
    },
    { scope }
  );

  return (
    <section ref={scope} id="fees" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brass mb-4">
          Batches &amp; fees
        </p>
        <AnimatedTitle
          title="Same course,"
          accent="two ways to attend."
          size="text-3xl md:text-5xl"
          className="max-w-xl mb-4"
        />
        <p className="text-[14px] text-ink-soft max-w-lg mb-14">
          Curriculum, support and mentor access are identical either way —
          the difference is classroom time versus travel-free flexibility.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {batches.map((b) => (
            <div
              key={b.name}
              className={`fee-card rounded-2xl p-8 md:p-9 border hairline ${
                b.featured ? "bg-ink text-parchment" : "bg-white/60"
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-display font-semibold text-2xl">{b.name}</h3>
                  <p
                    className={`font-mono text-[11px] mt-1.5 uppercase tracking-[0.1em] ${
                      b.featured ? "text-parchment/60" : "text-ink-soft"
                    }`}
                  >
                    {b.time}
                  </p>
                </div>
              </div>

              <div className="font-display font-bold text-4xl mb-1">{b.price}</div>
              <p
                className={`text-[12.5px] mb-7 ${
                  b.featured ? "text-parchment/70" : "text-ink-soft"
                }`}
              >
                {b.trial}
              </p>

              <ul className="space-y-3">
                {b.rows.map((r) => (
                  <li key={r} className="flex gap-3 text-[13.5px] leading-relaxed">
                    <span
                      className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${
                        b.featured ? "bg-brass-light" : "bg-brass"
                      }`}
                    />
                    <span className={b.featured ? "text-parchment/90" : "text-ink-soft"}>
                      {r}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[12.5px] text-ink-soft max-w-xl">
          Fee and course structure shown are for the upcoming batch and may
          change for future batches — seats confirmed at this structure are
          final and non-refundable, per Academy policy.
        </p>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import AnimatedTitle from "@/components/AnimatedTitle";

export default function CTA() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".cta-in", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: scope.current, start: "top 80%" },
      });
    },
    { scope }
  );

  return (
    <section ref={scope} id="cta" className="bg-ink text-parchment">
      <div className="mx-auto max-w-5xl px-6 md:px-10 py-24 md:py-32">
        <p className="cta-in font-mono text-[11px] uppercase tracking-[0.16em] text-brass-light mb-6">
          Seats are limited per batch
        </p>
        <div className="cta-in">
          <AnimatedTitle
            title="Reserve your seat,"
            accent="or send this link instead of the PDF."
            theme="parchment"
            size="text-4xl md:text-6xl"
            className="max-w-2xl"
          />
        </div>
        <p className="cta-in mt-8 max-w-lg text-[15px] leading-relaxed text-parchment/75">
          Everything from the brochure lives here now — mentor background,
          full curriculum, both batch fees, and answers to what students ask
          most. One link does the job of one PDF, sent a hundred times.
        </p>

        <div className="cta-in mt-10 flex flex-wrap gap-4">
          <a
            href="https://wa.me/917709182707"
            className="rounded-full bg-brass text-ink px-6 py-3 text-[13px] font-medium hover:bg-brass-light transition-colors"
          >
            Message on WhatsApp
          </a>
          <a
            href="#fees"
            className="rounded-full border border-parchment/25 px-6 py-3 text-[13px] font-medium hover:bg-parchment hover:text-ink transition-colors"
          >
            Compare batch fees
          </a>
        </div>

        <div className="cta-in mt-20 pt-10 border-t border-parchment/15 grid gap-8 md:grid-cols-3 font-mono text-[12px] text-parchment/60">
          <div>
            <div className="text-parchment/40 uppercase tracking-[0.12em] text-[10px] mb-2">
              Mentor
            </div>
            Shubham Bhosale
            <br />
            NISM Certified Research Analyst
          </div>
          <div>
            <div className="text-parchment/40 uppercase tracking-[0.12em] text-[10px] mb-2">
              Office
            </div>
            305–306, Aston Plaza,
            <br />
            Ambegaon Bk, Pune 411046
          </div>
          <div>
            <div className="text-parchment/40 uppercase tracking-[0.12em] text-[10px] mb-2">
              Reach
            </div>
            +91 77091 82707
            <br />
            @trading_universe_27
          </div>
        </div>
      </div>
    </section>
  );
}

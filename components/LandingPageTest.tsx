"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";


gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.to(".hero-image", {
        yPercent: 20,
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1, // Crucial: adds 1-second catch-up inertia
        },
      });
    },
    { scope: container }
  );

  return (
    <main ref={container}>
      <section className="hero-section h-screen overflow-hidden relative">
        <Image
          src="/images/hero.jpg"
          width={100}
          height={100}
          alt="Hero"
          className="hero-image w-full h-full object-cover will-change-transform"
        />
      </section>
      <section className="h-screen bg-black text-white flex items-center justify-center">
        <h2>Next Section</h2>
      </section>
    </main>
  );
}

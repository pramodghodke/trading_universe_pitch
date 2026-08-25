"use client";
import { useEffect } from "react";

export default function AnimatedCursor() {
  useEffect(() => {
    const cursorDot = document.querySelector<HTMLDivElement>("[data-cursor-dot]");
    const cursorOutline = document.querySelector<HTMLDivElement>("[data-cursor-outline]");
    if (!cursorDot || !cursorOutline) return;

    const handleMouseMove = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      cursorOutline.animate(
        { left: `${posX}px`, top: `${posY}px` },
        { duration: 400, fill: "forwards" }
      );
    };

    const growTargets = document.querySelectorAll<HTMLElement>(
      "a, button, [data-cursor-grow]"
    );
    const grow = () => document.body.classList.add("cursor-grow");
    const shrink = () => document.body.classList.remove("cursor-grow");
    growTargets.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      growTargets.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" data-cursor-dot></div>
      <div className="cursor-outline" data-cursor-outline></div>
    </>
  );
}

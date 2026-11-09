"use client";

import { useEffect } from "react";

export default function RevealMotion() {
  useEffect(() => {
    const landing = document.querySelector<HTMLElement>(".btl-landing");
    if (!landing || !("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const targets = Array.from(landing.querySelectorAll<HTMLElement>(".btl-reveal"));
    if (!targets.length) return;

    const isInViewport = (element: HTMLElement) => {
      const bounds = element.getBoundingClientRect();
      return bounds.bottom > 0 && bounds.top < window.innerHeight && bounds.right > 0 && bounds.left < window.innerWidth;
    };

    targets.forEach((target) => {
      if (isInViewport(target)) target.classList.add("is-visible");
    });
    landing.classList.add("btl-motion-ready");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    targets.forEach((target) => {
      if (!target.classList.contains("is-visible")) observer.observe(target);
    });

    return () => {
      observer.disconnect();
      landing.classList.remove("btl-motion-ready");
    };
  }, []);

  return null;
}

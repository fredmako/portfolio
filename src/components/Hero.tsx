"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
          Software Engineer
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Fredrick Makori Omwando
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-4">
          Software Engineer &bull; Frontend Engineer &bull; Full-Stack Developer
        </p>
        <p className="text-base sm:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10">
          I build modern, responsive web applications, business systems, dashboards and digital platforms using technologies such as React, Next.js, TypeScript, Node.js and PostgreSQL.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#work"
            className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            View My Work
          </a>
          <a
            href="https://github.com/Fredrickmakori"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

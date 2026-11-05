"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { testimonials } from "@/lib/content";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const count = testimonials.length;

  const go = useCallback(
    (next: number) => setIndex((next + count) % count),
    [count],
  );

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, 6000);
    return () => window.clearInterval(id);
  }, [count, reduceMotion]);

  const active = testimonials[index];

  return (
    <Section id="testimonials" aria-labelledby="testimonials-heading" className="bg-surface/30">
      <Reveal>
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Members"
          title="People are showing up"
        />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="relative mx-auto mt-12 max-w-3xl">
          <span
            aria-hidden
            className="pointer-events-none absolute -left-2 -top-8 select-none font-serif text-8xl leading-none text-oxblood"
          >
            &ldquo;
          </span>

          <div className="min-h-[200px] rounded-card-lg border border-border bg-surface p-8 shadow-soft sm:p-10">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduceMotion ? 0 : -12 }}
                transition={{ duration: reduceMotion ? 0 : 0.4 }}
              >
                <p className="text-balance text-xl font-medium leading-relaxed text-ivory sm:text-2xl">
                  {active.quote}
                </p>
                <footer className="mt-6 text-sm text-text-muted">
                  <span className="font-semibold text-champagne">
                    {active.name}
                  </span>{" "}
                  · {active.role}, {active.city}
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-champagne-muted hover:text-champagne"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="m14 7-5 5 5 5" />
              </svg>
            </button>

            <ul className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <li key={t.name}>
                  <button
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    aria-current={i === index}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      i === index
                        ? "w-6 bg-champagne"
                        : "w-2 bg-border-highlight hover:bg-champagne-muted",
                    )}
                  />
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-champagne-muted hover:text-champagne"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="m10 7 5 5-5 5" />
              </svg>
            </button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

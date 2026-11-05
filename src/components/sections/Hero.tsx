"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/Button";
import { PhoneMockup } from "@/components/PhoneMockup";
import { StoreBadges } from "@/components/StoreBadges";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="top"
      className="grain relative overflow-hidden bg-ink-oxblood px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-36"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-oxblood/25 blur-[140px]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 text-xs text-text-muted backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
            Now in 40 cities across Europe
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ivory sm:text-5xl md:text-6xl"
          >
            Meet people{" "}
            <span className="text-champagne">worth meeting.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-text-muted sm:text-lg lg:mx-0"
          >
            Let&rsquo;s Catchup is where you discover plans, host events, and
            find like-minded people near you. Less swiping, more showing up.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start"
            id="download"
          >
            <StoreBadges />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-5 text-sm text-text-faint"
          >
            Free to join · Verified members · Your area only
          </motion.p>
        </motion.div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <div className={reduceMotion ? "" : "animate-float"}>
            <PhoneMockup />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

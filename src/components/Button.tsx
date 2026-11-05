"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import type { ReactNode } from "react";
import { useRef, type MouseEvent } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "ghost" | "gold";
export type ButtonSize = "md" | "lg";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  magnetic?: boolean;
};

type ButtonAsLink = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-oxblood text-ivory hover:bg-oxblood-pressed shadow-glow-oxblood border border-oxblood/60",
  ghost:
    "bg-transparent text-ivory border border-border-highlight hover:border-champagne hover:text-champagne",
  gold: "bg-champagne text-ink hover:bg-champagne-light border border-champagne shadow-glow-champagne",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

/**
 * Magnetic, accessible link-button. Mapped to brand tokens via variants.
 * Magnetic motion is disabled under prefers-reduced-motion.
 */
export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  magnetic = true,
  target,
  rel,
}: ButtonAsLink) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 250, damping: 18 });
  const springY = useSpring(y, { stiffness: 250, damping: 18 });
  const tx = useTransform(springX, (v) => `${v}px`);
  const ty = useTransform(springY, (v) => `${v}px`);

  const enableMagnet = magnetic && !reduceMotion;

  function handleMove(e: MouseEvent<HTMLAnchorElement>) {
    if (!enableMagnet || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.25);
    y.set(relY * 0.25);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={enableMagnet ? { x: tx, y: ty } : undefined}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium",
        "transition-colors duration-200 will-change-transform",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </motion.a>
  );
}

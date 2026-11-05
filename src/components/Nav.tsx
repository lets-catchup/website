"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { navLinks } from "@/lib/content";
import { cn } from "@/lib/cn";
import { Button } from "./Button";
import { Wordmark } from "./Wordmark";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Split the links into two balanced groups around the centered wordmark.
  const mid = Math.ceil(navLinks.length / 2);
  const leftLinks = navLinks.slice(0, mid);
  const rightLinks = navLinks.slice(mid);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || menuOpen
          ? "border-b border-border bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        className="mx-auto grid h-16 w-full max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-8"
        aria-label="Primary"
      >
        {/* Left links (desktop) */}
        <ul className="hidden items-center gap-8 md:flex">
          {leftLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-text-muted transition-colors hover:text-ivory"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Centered wordmark */}
        <a
          href="#top"
          className="justify-self-start text-lg md:justify-self-center"
          aria-label="Let's Catchup home"
        >
          <Wordmark />
        </a>

        {/* Right links + CTA (desktop) */}
        <div className="hidden items-center justify-end gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {rightLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-text-muted transition-colors hover:text-ivory"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#download" size="md">
            Get the app
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 items-center justify-center justify-self-end rounded-full border border-border text-ivory md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="relative block h-3 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform duration-300",
                menuOpen && "translate-y-[5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute bottom-0 left-0 h-0.5 w-5 bg-current transition-transform duration-300",
                menuOpen && "-translate-y-[5px] -rotate-45",
              )}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-border bg-ink px-5 pb-6 pt-2 md:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block border-b border-border-light py-3.5 text-base text-text-muted transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              href="#download"
              size="lg"
              className="mt-5 w-full"
              magnetic={false}
            >
              Get the app
            </Button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

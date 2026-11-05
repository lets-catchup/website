import { steps } from "@/lib/content";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      className="bg-surface/30"
      aria-labelledby="how-heading"
    >
      <Reveal>
        <SectionHeading
          id="how-heading"
          eyebrow="How it works"
          title="Three steps to your next catch up"
          description="No endless setup. Verify once and you're discovering plans in minutes."
        />
      </Reveal>

      <ol className="relative mt-14 grid gap-8 md:grid-cols-3">
        {/* Connecting line on desktop */}
        <div
          aria-hidden
          className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border-highlight to-transparent md:block"
        />
        {steps.map((step, i) => (
          <Reveal as="li" key={step.index} delay={i * 0.12} className="relative">
            <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-champagne-muted bg-surface text-lg font-semibold text-champagne">
              {step.index}
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ivory">
              {step.title}
            </h3>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-text-muted">
              {step.description}
            </p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

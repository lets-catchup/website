import { safetyPoints } from "@/lib/content";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";

export function Safety() {
  return (
    <Section id="safety" aria-labelledby="safety-heading">
      <Reveal>
        <SectionHeading
          id="safety-heading"
          eyebrow="Safety & trust"
          title="Comfort is the whole point"
          description="We build for the quiet confidence that lets you show up as yourself. Privacy and safety come first, always."
        />
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {safetyPoints.map((point, i) => (
          <Reveal key={point.title} delay={i * 0.1} className="h-full">
            <div className="flex h-full flex-col rounded-card border border-border bg-surface-secondary p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-info-soft text-info-light">
                <Icon name={point.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ivory">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {point.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

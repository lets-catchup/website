import { features } from "@/lib/content";
import { Section, SectionHeading } from "@/components/Section";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";

export function Features() {
  return (
    <Section id="features" aria-labelledby="features-heading">
      <Reveal>
        <SectionHeading
          id="features-heading"
          eyebrow="Why Let's Catchup"
          title="Built for real connection"
          description="Everything you need to find your people and actually meet them, designed with restraint and care."
        />
      </Reveal>

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <Reveal as="li" key={feature.title} delay={(i % 3) * 0.08}>
            <Card interactive className="h-full">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-surface-secondary text-champagne">
                <Icon name={feature.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ivory">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {feature.description}
              </p>
            </Card>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

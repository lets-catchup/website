import { pricingTiers } from "@/lib/content";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/cn";

export function Pricing() {
  return (
    <Section id="pricing" aria-labelledby="pricing-heading">
      <Reveal>
        <SectionHeading
          id="pricing-heading"
          eyebrow="Premium"
          title="Pick your level of access"
          description="Start free. Upgrade when you want the best rooms, curated matches, and more control."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {pricingTiers.map((tier, i) => (
          <Reveal key={tier.name} delay={i * 0.1} className="h-full">
            <div
              className={cn(
                "relative flex h-full flex-col rounded-card-lg border p-7 shadow-soft",
                tier.featured
                  ? "border-champagne bg-oxblood-band shadow-glow-oxblood"
                  : "border-border bg-surface",
              )}
            >
              {tier.featured ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-champagne bg-ink px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-champagne">
                  Most popular
                </span>
              ) : null}

              <h3
                className={cn(
                  "text-lg font-semibold",
                  tier.featured ? "text-ivory" : "text-ivory",
                )}
              >
                {tier.name}
              </h3>
              <p
                className={cn(
                  "mt-1 text-sm",
                  tier.featured ? "text-ivory/80" : "text-text-muted",
                )}
              >
                {tier.tagline}
              </p>

              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="text-4xl font-semibold tracking-tight text-ivory">
                  {tier.price}
                </span>
                <span
                  className={cn(
                    "text-sm",
                    tier.featured ? "text-ivory/70" : "text-text-faint",
                  )}
                >
                  {tier.cadence}
                </span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Icon
                      name="verified"
                      className={cn(
                        "mt-0.5 h-4 w-4 shrink-0",
                        tier.featured ? "text-champagne-light" : "text-champagne",
                      )}
                    />
                    <span
                      className={cn(
                        "text-sm",
                        tier.featured ? "text-ivory" : "text-text",
                      )}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                href="#download"
                variant={tier.featured ? "gold" : "ghost"}
                size="lg"
                magnetic={false}
                className="mt-7 w-full"
              >
                {tier.cta}
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

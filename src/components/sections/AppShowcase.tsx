import { showcases } from "@/lib/content";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { PhoneMockup } from "@/components/PhoneMockup";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/cn";

const screens = ["discover", "plans", "profile"] as const;

export function AppShowcase() {
  return (
    <Section aria-label="App showcase">
      <div className="flex flex-col gap-24 md:gap-32">
        {showcases.map((item, i) => {
          const reversed = i % 2 === 1;
          return (
            <div
              key={item.title}
              className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
            >
              {/* Text */}
              <Reveal
                className={cn(reversed && "md:order-2")}
                delay={0.05}
              >
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-champagne">
                  {item.eyebrow}
                </p>
                <h3 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-ivory sm:text-3xl md:text-[2rem]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-text-muted">
                  {item.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-oxblood-soft text-champagne">
                        <Icon name="spark" className="h-3 w-3" />
                      </span>
                      <span className="text-sm text-text">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Phone */}
              <Reveal
                className={cn(
                  "flex justify-center",
                  reversed && "md:order-1",
                )}
                delay={0.15}
              >
                <div className="relative">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10 translate-y-6 scale-90 rounded-full bg-oxblood/20 blur-[90px]"
                  />
                  <PhoneMockup screen={screens[i % screens.length]} />
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

type PhoneMockupProps = {
  className?: string;
  /** Which in-app screen to render. */
  screen?: "discover" | "plans" | "profile";
};

type PlanRow = {
  title: string;
  meta: string;
  area: string;
};

const discoverPlans: PlanRow[] = [
  { title: "Natural wine tasting", meta: "Tonight · 19:30", area: "De Pijp" },
  { title: "Sunrise run + coffee", meta: "Sat · 07:00", area: "Vondelpark" },
  { title: "Gallery late night", meta: "Fri · 20:00", area: "Jordaan" },
];

export function PhoneMockup({ className, screen = "discover" }: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative aspect-[9/19] w-[260px] rounded-[2.75rem] border border-border-highlight bg-ink p-2.5 shadow-soft sm:w-[300px]",
        className,
      )}
      role="img"
      aria-label="Let's Catchup app preview showing a feed of nearby plans"
    >
      {/* Side buttons */}
      <span className="absolute -left-1 top-24 h-12 w-1 rounded-full bg-surface-tertiary" />
      <span className="absolute -right-1 top-20 h-8 w-1 rounded-full bg-surface-tertiary" />

      <div className="relative h-full w-full overflow-hidden rounded-[2.25rem] bg-surface">
        {/* Notch */}
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />

        {/* Screen content */}
        <div className="flex h-full flex-col bg-ink-oxblood px-4 pb-4 pt-9">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[0.6rem] uppercase tracking-widest text-champagne">
                Discover
              </p>
              <p className="text-sm font-semibold text-ivory">Near you</p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full border border-border bg-surface-secondary px-2 py-1 text-[0.6rem] text-text-muted">
              <Icon name="pin" className="h-3 w-3 text-champagne" />
              Amsterdam
            </span>
          </div>

          {/* Filter chips */}
          <div className="mt-3 flex gap-1.5">
            {["Tonight", "Dinner", "Active"].map((chip, i) => (
              <span
                key={chip}
                className={cn(
                  "rounded-full px-2.5 py-1 text-[0.6rem]",
                  i === 0
                    ? "bg-oxblood text-ivory"
                    : "border border-border bg-surface-secondary text-text-muted",
                )}
              >
                {chip}
              </span>
            ))}
          </div>

          {/* Plan cards */}
          <div className="mt-3 flex flex-1 flex-col gap-2.5">
            {discoverPlans.map((plan) => (
              <div
                key={plan.title}
                className="rounded-2xl border border-border bg-surface-secondary p-3"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold text-ivory">
                      {plan.title}
                    </p>
                    <p className="mt-0.5 text-[0.6rem] text-text-faint">
                      {plan.meta} · {plan.area}
                    </p>
                  </div>
                  <span className="rounded-full bg-oxblood-soft px-2 py-0.5 text-[0.55rem] text-champagne-light">
                    Join
                  </span>
                </div>
                <div className="mt-2 flex -space-x-1.5">
                  {[0, 1, 2, 3].map((n) => (
                    <span
                      key={n}
                      className="h-4 w-4 rounded-full border border-surface-secondary bg-oxblood-deep"
                    />
                  ))}
                  <span className="ml-2.5 text-[0.55rem] text-text-faint">
                    +6 going
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom nav */}
          <div className="mt-3 flex items-center justify-around rounded-2xl border border-border bg-surface p-2.5">
            <Icon name="compass" className="h-5 w-5 text-champagne" />
            <Icon name="calendar" className="h-5 w-5 text-text-faint" />
            <Icon name="spark" className="h-5 w-5 text-text-faint" />
            <Icon name="verified" className="h-5 w-5 text-text-faint" />
          </div>
        </div>
      </div>
    </div>
  );
}

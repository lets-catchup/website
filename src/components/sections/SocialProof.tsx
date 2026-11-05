import { stats } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function SocialProof() {
  return (
    <section
      aria-label="Trusted by members across cities"
      className="border-y border-border bg-surface/40 px-5 py-10 sm:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="text-center text-sm text-text-faint">
            Trusted by a growing community of verified members
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-3xl font-semibold tracking-tight text-ivory sm:text-4xl">
                  {stat.value}
                </dd>
                <p className="mt-1 text-xs uppercase tracking-wider text-text-faint">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/Reveal";
import { StoreBadges } from "@/components/StoreBadges";

export function FinalCTA() {
  return (
    <section className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-card-lg border border-champagne-muted/40 bg-oxblood-band px-6 py-16 text-center shadow-glow-oxblood sm:px-12 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-champagne/20 blur-[120px]"
            />
            <div className="relative z-10">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-ivory sm:text-4xl md:text-5xl">
                Your next catch up is waiting.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-ivory/80 sm:text-lg">
                Download Let&rsquo;s Catchup and find the people and plans worth
                your evening.
              </p>
              <div className="mt-8 flex justify-center">
                <StoreBadges />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

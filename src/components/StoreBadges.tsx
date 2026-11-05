import { cn } from "@/lib/cn";

type StoreBadgesProps = {
  className?: string;
};

type Badge = {
  href: string;
  label: string;
  sub: string;
  glyph: JSX.Element;
};

const appleGlyph = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-7 w-7">
    <path d="M16.4 12.9c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9s-1.8-.9-3-.8c-1.5 0-2.9.9-3.7 2.2-1.6 2.7-.4 6.8 1.1 9 .7 1.1 1.6 2.3 2.7 2.2 1.1 0 1.5-.7 2.8-.7s1.6.7 2.8.7c1.2 0 1.9-1.1 2.6-2.1.8-1.2 1.2-2.4 1.2-2.4s-2.3-.9-2.3-3.6ZM14.2 6.1c.6-.8 1-1.8.9-2.9-.9 0-2 .6-2.6 1.3-.6.7-1.1 1.7-1 2.7 1 .1 2-.5 2.7-1.1Z" />
  </svg>
);

const googleGlyph = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6">
    <path d="M3.6 2.3c-.2.2-.3.6-.3 1v17.4c0 .4.1.8.3 1l9.1-9.7L3.6 2.3Zm11 8.4 2.6-2.8L5.8 1.5c-.3-.2-.6-.2-.9-.2l9.7 9.4Zm0 2.6L5 22.7c.3 0 .6 0 .9-.2l11.3-6.4-2.6-2.8Zm6.3-3.1-2.3-1.3-2.9 3.1 2.9 3.1 2.3-1.3c.8-.5.8-2 0-2.3Z" />
  </svg>
);

const badges: Badge[] = [
  {
    href: "#",
    label: "App Store",
    sub: "Download on the",
    glyph: appleGlyph,
  },
  {
    href: "#",
    label: "Google Play",
    sub: "Get it on",
    glyph: googleGlyph,
  },
];

export function StoreBadges({ className }: StoreBadgesProps) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {badges.map((badge) => (
        <a
          key={badge.label}
          href={badge.href}
          className="group inline-flex items-center gap-3 rounded-2xl border border-border bg-surface-secondary px-4 py-2.5 text-ivory transition-colors hover:border-champagne-muted"
        >
          <span className="text-champagne">{badge.glyph}</span>
          <span className="flex flex-col leading-tight">
            <span className="text-[0.65rem] uppercase tracking-wide text-text-faint">
              {badge.sub}
            </span>
            <span className="text-sm font-semibold">{badge.label}</span>
          </span>
        </a>
      ))}
    </div>
  );
}

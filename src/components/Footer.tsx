import { Wordmark } from "./Wordmark";
import { QrCode } from "./QrCode";

type FooterLink = { label: string; href: string };

type FooterColumn = {
  heading: string;
  links: FooterLink[];
  /** Append social icons after the last link (Hinge-style). */
  withSocials?: boolean;
};

const columns: FooterColumn[] = [
  {
    heading: "Index",
    withSocials: true,
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Premium", href: "#pricing" },
      { label: "Newsroom", href: "#" },
      { label: "Success Stories", href: "#testimonials" },
      { label: "History", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Safe Dating Tips", href: "#safety" },
      { label: "FAQ", href: "#" },
      { label: "Trust & Safety", href: "#safety" },
      { label: "Press Resources", href: "#" },
      { label: "How We Connect Members", href: "#how-it-works" },
      { label: "Community Guidelines", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Security", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Your Privacy Choices", href: "#" },
      { label: "Safety Policy", href: "#safety" },
      { label: "Accessibility Statement", href: "#" },
    ],
  },
];

const socials: { label: string; href: string; glyph: JSX.Element }[] = [
  {
    label: "Instagram",
    href: "#",
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-4 w-4">
        <rect x="4" y="4" width="16" height="16" rx="4.5" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    glyph: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M17.5 3h3l-6.6 7.6L22 21h-6l-4.7-6.1L5.8 21H2.8l7.1-8.1L2 3h6.1l4.3 5.6L17.5 3Zm-1 16h1.7L7.6 4.8H5.8L16.5 19Z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface px-5 py-14 sm:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
        {/* Brand + QR (left) */}
        <div>
          <a href="#top" className="text-2xl" aria-label="Let's Catchup home">
            <Wordmark />
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-muted">
            Meet people worth meeting. Discover plans, host events, and catch up
            in real life.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <QrCode size={100} />
            <div className="max-w-[9rem]">
              <p className="text-sm font-semibold text-ivory">
                Scan to download
              </p>
              <p className="mt-1 text-xs leading-relaxed text-text-faint">
                Point your camera here to get the app.
              </p>
            </div>
          </div>
        </div>

        {/* Link columns (right) */}
        {columns.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-champagne">
              {col.heading}
            </h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {col.withSocials ? (
                <li>
                  <ul className="mt-1 flex items-center gap-2.5">
                    {socials.map((s) => (
                      <li key={s.label}>
                        <a
                          href={s.href}
                          aria-label={s.label}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-champagne-muted hover:text-champagne"
                        >
                          {s.glyph}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : null}
            </ul>
          </nav>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-14 flex w-full max-w-6xl flex-col gap-3 border-t border-border-light pt-6 sm:flex-row sm:items-center sm:gap-6">
        <p className="text-xs text-text-faint">
          © {new Date().getFullYear()} Let&rsquo;s Catchup Inc.
        </p>
        <button
          type="button"
          className="inline-flex items-center gap-1.5 text-xs text-text-faint transition-colors hover:text-ivory"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-4 w-4">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
          </svg>
          English (US)
        </button>
      </div>
    </footer>
  );
}

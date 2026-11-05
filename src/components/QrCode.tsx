import { cn } from "@/lib/cn";

type QrCodeProps = {
  className?: string;
  /** Pixel size of the rendered code. */
  size?: number;
  /** Number of modules per side (visual density only). */
  modules?: number;
  "aria-label"?: string;
};

/**
 * Decorative, self-contained QR-style code rendered as SVG.
 * It is deterministic (seeded) so it looks like a real scan code and
 * stays stable between renders, with the three finder squares in the
 * corners. This is a brand/marketing visual, not a scannable payload.
 */
export function QrCode({
  className,
  size = 96,
  modules = 21,
  "aria-label": ariaLabel = "Scan to download Let's Catchup",
}: QrCodeProps) {
  const cells: JSX.Element[] = [];

  // Finder patterns live in the three corners; keep those areas clear
  // so we can draw proper squares over them.
  const inFinder = (r: number, c: number): boolean => {
    const topLeft = r < 7 && c < 7;
    const topRight = r < 7 && c >= modules - 7;
    const bottomLeft = r >= modules - 7 && c < 7;
    return topLeft || topRight || bottomLeft;
  };

  // Seeded pseudo-random so the pattern is fixed, not flickering.
  const seeded = (r: number, c: number): boolean => {
    const v = Math.sin(r * 12.9898 + c * 78.233) * 43758.5453;
    return v - Math.floor(v) > 0.5;
  };

  for (let r = 0; r < modules; r += 1) {
    for (let c = 0; c < modules; c += 1) {
      if (inFinder(r, c)) continue;
      if (seeded(r, c)) {
        cells.push(
          <rect key={`${r}-${c}`} x={c} y={r} width={1} height={1} />,
        );
      }
    }
  }

  const finderPositions: Array<[number, number]> = [
    [0, 0],
    [0, modules - 7],
    [modules - 7, 0],
  ];

  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      viewBox={`0 0 ${modules} ${modules}`}
      width={size}
      height={size}
      className={cn("rounded-xl bg-ivory p-2 text-ink", className)}
      shapeRendering="crispEdges"
    >
      {/* Data modules */}
      <g fill="currentColor">{cells}</g>

      {/* Finder squares */}
      {finderPositions.map(([fr, fc]) => (
        <g key={`${fr}-${fc}`} fill="currentColor">
          <rect x={fc} y={fr} width={7} height={7} />
          <rect x={fc + 1} y={fr + 1} width={5} height={5} fill="#F8F3EA" />
          <rect x={fc + 2} y={fr + 2} width={3} height={3} fill="currentColor" />
        </g>
      ))}
    </svg>
  );
}

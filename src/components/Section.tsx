import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  /** Inner container className for width/padding overrides. */
  innerClassName?: string;
  as?: ElementType;
  "aria-label"?: string;
  "aria-labelledby"?: string;
};

export function Section({
  children,
  id,
  className,
  innerClassName,
  as: Tag = "section",
  ...aria
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn("relative px-5 py-20 sm:px-8 md:py-28", className)}
      {...aria}
    >
      <div className={cn("mx-auto w-full max-w-6xl", innerClassName)}>
        {children}
      </div>
    </Tag>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  id?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  id,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-champagne">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="text-balance text-3xl font-semibold tracking-tight text-ivory sm:text-4xl md:text-[2.75rem] md:leading-[1.08]"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

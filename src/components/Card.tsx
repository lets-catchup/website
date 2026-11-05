import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
  /** Adds hover lift + champagne hairline accent. */
  interactive?: boolean;
  as?: "div" | "article" | "li";
};

export function Card({
  children,
  className,
  interactive = false,
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag
      className={cn(
        "relative rounded-card border border-border bg-surface p-6 shadow-soft",
        interactive &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-champagne-muted/70 hover:shadow-glow-oxblood",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

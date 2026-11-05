import { cn } from "@/lib/cn";

type WordmarkProps = {
  className?: string;
};

export function Wordmark({ className }: WordmarkProps) {
  return (
    <span
      className={cn(
        "font-semibold tracking-tight text-ivory",
        className,
      )}
    >
      Let&rsquo;s <span className="text-champagne">Catchup</span>
    </span>
  );
}

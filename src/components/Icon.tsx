import type { SVGProps } from "react";
import type { IconName } from "@/lib/types";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

const paths: Record<IconName, JSX.Element> = {
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5 13 13l-4.5 2.5L11 11l4.5-2.5Z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.2 2.9 7.8 7 9 4.1-1.2 7-4.8 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M4 9h16M8 3v4M16 3v4" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M12 8c.6 2.2 1.8 3.4 4 4-2.2.6-3.4 1.8-4 4-.6-2.2-1.8-3.4-4-4 2.2-.6 3.4-1.8 4-4Z" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>
  ),
  crown: (
    <>
      <path d="M4 8l3.5 4L12 6l4.5 6L20 8l-1.5 10h-13L4 8Z" />
    </>
  ),
  verified: (
    <>
      <path d="m12 3 2.3 1.7 2.8-.3 1 2.6 2.4 1.5-.9 2.7.9 2.7-2.4 1.5-1 2.6-2.8-.3L12 21l-2.3-1.7-2.8.3-1-2.6-2.4-1.5.9-2.7-.9-2.7 2.4-1.5 1-2.6 2.8.3L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  flag: (
    <>
      <path d="M5 21V4M5 4h11l-2 4 2 4H5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
};

export function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

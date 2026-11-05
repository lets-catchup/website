export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: IconName;
}

export interface Step {
  index: number;
  title: string;
  description: string;
}

export interface Showcase {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  city: string;
}

export interface PricingTier {
  name: string;
  price: string;
  cadence: string;
  tagline: string;
  features: string[];
  featured: boolean;
  cta: string;
}

export interface SafetyPoint {
  title: string;
  description: string;
  icon: IconName;
}

export interface Stat {
  value: string;
  label: string;
}

export type IconName =
  | "compass"
  | "shield"
  | "calendar"
  | "spark"
  | "lock"
  | "crown"
  | "verified"
  | "flag"
  | "pin";

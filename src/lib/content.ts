import type {
  Feature,
  NavLink,
  PricingTier,
  SafetyPoint,
  Showcase,
  Stat,
  Step,
  Testimonial,
} from "./types";

export const navLinks: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Premium", href: "#pricing" },
  { label: "Safety", href: "#safety" },
];

export const stats: Stat[] = [
  { value: "250k+", label: "Members" },
  { value: "40", label: "Cities" },
  { value: "12k", label: "Plans a week" },
  { value: "4.9★", label: "App rating" },
];

export const features: Feature[] = [
  {
    title: "Discover plans nearby",
    description:
      "Browse real plans happening around you tonight, this weekend, whenever. Join with a tap.",
    icon: "compass",
  },
  {
    title: "Verified profiles",
    description:
      "Every member is identity-checked. You always know who you're catching up with.",
    icon: "verified",
  },
  {
    title: "Host your own events",
    description:
      "Spin up a dinner, a run, a gallery night. Set the vibe and let the right people find it.",
    icon: "calendar",
  },
  {
    title: "Real meetups, in person",
    description:
      "Less endless messaging, more showing up. Everything is built to get you together IRL.",
    icon: "spark",
  },
  {
    title: "Safety-first by design",
    description:
      "Granular controls, easy reporting, and a team that acts fast. Comfort is non-negotiable.",
    icon: "shield",
  },
  {
    title: "Premium matches",
    description:
      "Curated introductions based on taste and intent, not just proximity. Quality over noise.",
    icon: "crown",
  },
];

export const steps: Step[] = [
  {
    index: 1,
    title: "Create your profile",
    description:
      "Verify once, add what you're into, and set the kind of plans you're open to.",
  },
  {
    index: 2,
    title: "Discover plans",
    description:
      "See what's happening nearby or host your own. Join the ones that feel right.",
  },
  {
    index: 3,
    title: "Catch up IRL",
    description:
      "Meet the people behind the plans. Real rooms, real conversation, real connection.",
  },
];

export const showcases: Showcase[] = [
  {
    eyebrow: "Discover",
    title: "A feed of plans, not profiles",
    description:
      "Open the app and see what's actually happening around you. Filter by vibe, time, and distance to find your next catch up.",
    bullets: [
      "Tonight, this weekend, or on your schedule",
      "Vibe filters from quiet dinners to warehouse sets",
      "Only your area shows, never your exact location",
    ],
  },
  {
    eyebrow: "Plans",
    title: "Host something worth showing up to",
    description:
      "Create a plan in seconds, set the guest count, and approve who joins. Great rooms are curated, not crowded.",
    bullets: [
      "Set capacity, time, and who can request to join",
      "Approve guests with a glance at verified profiles",
      "Shared details unlock only once you both confirm",
    ],
  },
  {
    eyebrow: "Profile",
    title: "You, in the right light",
    description:
      "A profile that leads with taste and intent. Show what you're into and the kind of people you want to meet.",
    bullets: [
      "Identity verified, no catfishing",
      "Prompts that spark real conversation",
      "Control exactly what each match can see",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "I've met more interesting people in a month here than two years of swiping anywhere else.",
    name: "Priya R.",
    role: "Product designer",
    city: "Amsterdam",
  },
  {
    quote:
      "Hosted a rooftop dinner for six strangers. Four of them are close friends now.",
    name: "Marcus L.",
    role: "Chef",
    city: "Berlin",
  },
  {
    quote:
      "It feels considered. Verified profiles and privacy controls mean I actually show up relaxed.",
    name: "Sofia V.",
    role: "Architect",
    city: "Lisbon",
  },
  {
    quote:
      "The plans feed is addictive in the best way. Something good is always happening nearby.",
    name: "Daniel K.",
    role: "Founder",
    city: "London",
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Free",
    price: "€0",
    cadence: "forever",
    tagline: "Everything you need to start catching up.",
    features: [
      "Discover plans nearby",
      "Join up to 3 plans a week",
      "Verified profile",
      "Core safety controls",
    ],
    featured: false,
    cta: "Get the app",
  },
  {
    name: "Premium",
    price: "€12",
    cadence: "per month",
    tagline: "For people who want the best rooms in the city.",
    features: [
      "Unlimited plans and hosting",
      "Curated premium matches",
      "Priority on popular plans",
      "Advanced privacy controls",
      "See who's interested in you",
    ],
    featured: true,
    cta: "Go Premium",
  },
  {
    name: "Circle",
    price: "€28",
    cadence: "per month",
    tagline: "A private tier for hosts and tastemakers.",
    features: [
      "Everything in Premium",
      "Host invite-only Circles",
      "Dedicated concierge",
      "Early access to new cities",
    ],
    featured: false,
    cta: "Request access",
  },
];

export const safetyPoints: SafetyPoint[] = [
  {
    title: "Verified, every time",
    description:
      "Identity checks on every member keep the community real and accountable.",
    icon: "verified",
  },
  {
    title: "Privacy by default",
    description:
      "Only your area shows on your profile. Exact location is never shared.",
    icon: "lock",
  },
  {
    title: "Report in a tap",
    description:
      "One-tap reporting and a responsive trust team that acts quickly on every flag.",
    icon: "flag",
  },
];

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://letscatchup.app"),
  title: {
    default: "Let's Catchup — Meet people worth meeting",
    template: "%s · Let's Catchup",
  },
  description:
    "Let's Catchup is a premium social meetup and dating app. Discover plans, host events, and find like-minded people near you. Less swiping, more showing up.",
  keywords: [
    "meetup app",
    "dating app",
    "social events",
    "meet people",
    "plans nearby",
  ],
  openGraph: {
    title: "Let's Catchup — Meet people worth meeting",
    description:
      "Discover plans, host events, and find like-minded people near you.",
    url: "https://letscatchup.app",
    siteName: "Let's Catchup",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Let's Catchup — Meet people worth meeting",
    description:
      "Discover plans, host events, and find like-minded people near you.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0E0B0C",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-ink font-sans text-text antialiased">
        {children}
      </body>
    </html>
  );
}

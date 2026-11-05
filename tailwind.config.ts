import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E0B0C",
        surface: {
          DEFAULT: "#1A1115",
          secondary: "#26181E",
          tertiary: "#352129",
        },
        ivory: "#F8F3EA",
        oxblood: {
          deep: "#571C2A",
          DEFAULT: "#812B40",
          pressed: "#692235",
          soft: "#44202B",
        },
        champagne: {
          DEFAULT: "#D4AD74",
          light: "#E9CDA3",
          muted: "#A98759",
        },
        text: {
          DEFAULT: "#F8F3EA",
          muted: "#B8A9AA",
          faint: "#87777C",
        },
        border: {
          DEFAULT: "#3A2930",
          highlight: "#72505A",
          light: "rgba(58,41,48,0.6)",
        },
        success: "#72B89A",
        warning: "#E3AC61",
        danger: "#F07878",
        heart: "#F07878",
        info: {
          DEFAULT: "#86A9D6",
          light: "#A8C2E4",
          soft: "rgba(134,169,214,0.16)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "20px",
        "card-lg": "28px",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(0,0,0,0.6)",
        "glow-oxblood": "0 0 40px -8px rgba(129,43,64,0.5)",
        "glow-champagne": "0 0 32px -10px rgba(212,173,116,0.4)",
      },
      backgroundImage: {
        "ink-oxblood":
          "radial-gradient(120% 120% at 50% 0%, #2A1016 0%, #160C10 45%, #0E0B0C 100%)",
        "oxblood-band":
          "linear-gradient(135deg, #571C2A 0%, #812B40 55%, #692235 100%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

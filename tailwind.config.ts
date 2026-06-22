import type { Config } from "tailwindcss";

/**
 * Again, With Love design tokens.
 *
 * Emotional register: warm, calm, trustworthy, gentle — for stressed, often
 * older family caregivers. The opposite of slick fintech. Soft warm cream
 * canvas, generous space, large readable type, high contrast, a warm GOLD
 * accent drawn from the brand's gold infinity-heart icon, grounded by a deep
 * cocoa for footers/headings.
 *
 * Contrast is treated as a requirement, not a nice-to-have (WCAG 2.2 AA):
 *  - ink (#29241F) on canvas (#FBF7F1): ~13:1
 *  - ink-soft (#5A5048) on canvas: ~6.5:1  (body secondary text)
 *  - gold-deep (#7A4E0B) on canvas: ~5:1   (small link/accent text)
 *  - ink on gold (#C98A1B): ~5.4:1         (primary buttons use dark text)
 */
const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Surfaces
        canvas: "#FBF7F1", // warm off-white page background
        surface: "#FFFFFF", // cards
        "surface-soft": "#F5EEE2", // subtle warm panel
        hairline: "#E8DDCB", // warm borders

        // Text
        ink: "#29241F", // primary text — warm near-black
        "ink-soft": "#5A5048", // secondary text

        // Warm gold accent (from the infinity-heart icon)
        gold: {
          DEFAULT: "#C98A1B", // primary accent / buttons
          deep: "#7A4E0B", // accessible gold for small text & links on cream
          bright: "#E6AE3A", // decorative (the infinity-heart, glows)
          soft: "#F4E6C8", // tint backgrounds / chips
        },

        // Deep warm grounding tone (footer, hero accents)
        cocoa: {
          DEFAULT: "#2E2620",
          soft: "#3C322A",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1.125rem",
      },
      boxShadow: {
        // Soft, diffuse shadows — calm, not glossy.
        soft: "0 10px 30px -12px rgba(58, 42, 20, 0.18)",
        card: "0 2px 10px -4px rgba(58, 42, 20, 0.12)",
        glow: "0 0 50px -16px rgba(230, 174, 58, 0.55)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "soft-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "gentle-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        "soft-float": "soft-float 7s ease-in-out infinite",
        "gentle-glow": "gentle-glow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

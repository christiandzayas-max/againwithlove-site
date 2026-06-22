import type { Config } from "tailwindcss";

/**
 * Again, With Love design tokens.
 *
 * Emotional register: warm, calm, trustworthy, gentle — for stressed, often
 * older family caregivers. The opposite of slick fintech. Soft warm cream
 * canvas, generous space, large readable type, high contrast, a warm GOLD
 * accent from the brand's gold infinity-heart logo, plus the app's CALM BLUE
 * (#5B7FA5) as a secondary accent — on the same warm beige background the app
 * uses (#F5F0EB), with the app's cool Nord-style ink. Keeping the site and the
 * app visually consistent is intentional.
 *
 * Contrast is treated as a requirement, not a nice-to-have (WCAG 2.2 AA):
 *  - ink (#2E3440) on canvas (#F5F0EB): ~11:1
 *  - ink-soft (#4C566A) on canvas: ~6.5:1  (body secondary text)
 *  - gold-deep (#7A4E0B) on canvas: ~5:1   (small gold link/accent text)
 *  - calm-deep (#3E5C7E) on canvas: ~8:1   (blue link/accent text)
 *  - ink on gold (#C98A1B): button uses dark text on gold
 */
const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Surfaces — warm beige base shared with the app (calmer than white)
        canvas: "#F5F0EB", // the app's warmBackground — calm warm beige
        surface: "#FFFFFF", // cards
        "surface-soft": "#EFE7DA", // subtle warm panel
        hairline: "#E4DAC9", // warm borders

        // Text — the app's Nord-style ink (cool dark) for a shared look
        ink: "#2E3440", // primary text
        "ink-soft": "#4C566A", // secondary text

        // Warm gold accent (from the infinity-heart logo)
        gold: {
          DEFAULT: "#C98A1B", // primary accent / buttons
          deep: "#7A4E0B", // accessible gold for small text & links
          bright: "#E6AE3A", // decorative (the infinity-heart, glows)
          soft: "#F4E6C8", // warm tint backgrounds / chips
        },

        // Calm blue — the app's primary color, used here as a secondary accent
        // and for soft background bands that tie the site to the app.
        calm: {
          DEFAULT: "#5B7FA5", // app primary blue
          deep: "#3E5C7E", // accessible blue for text & links
          soft: "#DCE6EE", // soft blue panel / section band
          tint: "#EAF0F5", // very light blue wash
        },

        // Deep grounding tone (footer accents)
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

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      /* ---------------- Font Family ---------------- */
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "sans-serif",
        ],
      },

      /* ---------------- Font Sizes ---------------- */
      fontSize: {
        xs: "0.7rem",
        sm: "0.8rem",
        base: "0.9rem",
        lg: "1rem",
        xl: "1.1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
        "4xl": "1.8rem",
      },

      /* ---------------- Colors (HSL system + old orange) ---------------- */
      colors: {
        brandOrange: "#EC911E",
        primaryOrange: "#F7921C",
        primaryOrangeHover: "#e6831a",
        secondaryOrange: "#FFB550",

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },

      /* ---------------- Border Radius ---------------- */
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "12px",
        "2xl": "16px",
        "3xl": "24px",
      },

      /* ---------------- Spacing ---------------- */
      spacing: {
        15: "3.75rem",
        18: "4.5rem",
        22: "5.5rem",
      },

      /* ---------------- Box Shadow ---------------- */
      boxShadow: {
        modal: "0 20px 60px rgba(0, 0, 0, 0.3)",
        card: "0 10px 30px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 15px 40px rgba(0, 0, 0, 0.12)",
      },

      /* ---------------- Keyframes ---------------- */
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideUpSmooth: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px) scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        spin: {
          to: { transform: "rotate(360deg)" },
        },
      },

      /* ---------------- Animations ---------------- */
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-right": "slideRight 0.5s ease-out forwards",
        "slide-down": "slideDown 0.3s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
        spin: "spin 1s ease-in-out infinite",

        fadeIn: "fadeIn 0.8s ease-out",
        slideIn: "slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        slideUpSmooth: "slideUpSmooth 0.4s cubic-bezier(0.16, 1, 0.3, 1)",

        marquee: "marquee 85s linear infinite",
        "marquee-slow": "marquee 50s linear infinite",
        "marquee-long": "marquee 75s linear infinite",

        "pulse-slow": "pulse 2s ease-in-out infinite",
      },

      /* ---------------- Transition Duration ---------------- */
      transitionDuration: {
        600: "600ms",
        800: "800ms",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-variant": "#e2e2e2",
        "surface": "#f4f6fa",
        "surface-container-lowest": "#ffffff",
        "on-surface-variant": "#434655",
        "surface-tint": "#0053db",
        "on-tertiary-container": "#ffede6",
        "error": "#ba1a1a",
        "on-secondary-fixed-variant": "#474746",
        "on-error-container": "#93000a",
        "on-primary-fixed-variant": "#003ea8",
        "on-tertiary-fixed-variant": "#7d2d00",
        "tertiary-fixed": "#ffdbcd",
        "on-secondary-container": "#636262",
        "background": "#f4f6fa",
        "tertiary-container": "#bc4800",
        "secondary-fixed-dim": "#c8c6c5",
        "on-tertiary-fixed": "#360f00",
        "primary-fixed-dim": "#b4c5ff",
        "secondary-fixed": "#e5e2e1",
        "on-surface": "#1a1c1c",
        "on-background": "#1a1c1c",
        "primary-container": "#2563eb",
        "secondary": "#5f5e5e",
        "on-tertiary": "#ffffff",
        "primary-fixed": "#dbe1ff",
        "inverse-primary": "#b4c5ff",
        "on-secondary": "#ffffff",
        "on-primary-container": "#eeefff",
        "tertiary": "#943700",
        "primary": "#004ac6",
        "outline-variant": "#c3c6d7",
        "surface-container": "#eeeeee",
        "inverse-surface": "#2f3131",
        "surface-bright": "#f4f6fa",
        "surface-container-low": "#f3f3f3",
        "on-primary": "#ffffff",
        "outline": "#737686",
        "surface-dim": "#dadada",
        "secondary-container": "#e2dfde",
        "on-secondary-fixed": "#1c1b1b",
        "inverse-on-surface": "#f0f1f1",
        "surface-container-highest": "#e2e2e2",
        "tertiary-fixed-dim": "#ffb596",
        "on-error": "#ffffff",
        "on-primary-fixed": "#00174b",
        "error-container": "#ffdad6",
        "surface-container-high": "#e8e8e8"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "lg": "48px",
        "gutter": "24px",
        "xl": "80px",
        "md": "24px",
        "sm": "16px",
        "xs": "8px",
        "container-max": "1200px",
        "base": "4px"
      },
      maxWidth: {
        "container-max": "1200px"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        "label-md": ["Inter", "sans-serif"],
        "headline-md": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "display-lg": ["Inter", "sans-serif"],
        "display-lg-mobile": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "headline-sm": ["Inter", "sans-serif"],
        "caption": ["Inter", "sans-serif"]
      },
      fontSize: {
        "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "600" }],
        "headline-md": ["30px", { lineHeight: "38px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg-mobile": ["36px", { lineHeight: "42px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "headline-sm": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "caption": ["12px", { lineHeight: "16px", fontWeight: "400" }]
      }
    }
  },
  plugins: [],
}

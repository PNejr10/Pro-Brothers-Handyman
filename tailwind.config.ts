import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0B1F3A",
          gold: "#D4AF37",
          cream: "#F8F6F0",
          ink: "#0F172A",
          muted: "#52525B",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(11,31,58,0.08)",
      },
    },
  },
  plugins: [],
} satisfies Config;
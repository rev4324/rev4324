import type { Config } from "tailwindcss";

export default {
  content: ["src/**/*.{tsx,ts,js,jsx}"],
  theme: {
    extend: {
      colors: {
        tomatoRgb: "#d13415",
      },
    },
  },
  plugins: [],
} satisfies Config;

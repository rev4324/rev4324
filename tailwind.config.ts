import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["src/**/*.{tsx,ts,js,jsx}"],
  theme: {
    extend: {
      colors: {
        tomatoRgb: "#d13415",
      },
      fontFamily: {
        sans: ["Geist Sans Variable", ...defaultTheme.fontFamily.sans],
        mono: ["Geist Mono Variable", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
} satisfies Config;

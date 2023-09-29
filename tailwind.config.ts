import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        "mona-sans-light": ["Mona-Sans-Light", "sans-serif"],
        "mona-sans-bold": ["Mona-Sans-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

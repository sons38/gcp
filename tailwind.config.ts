import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0f19",
        card: "#121a2a",
        text: "#e5ecff",
        muted: "#93a3c7",
        primary: "#7aa2ff"
      }
    }
  },
  plugins: []
};

export default config;

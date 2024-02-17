import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "header-gradient": "linear-gradient(90deg, #79DBF0, #4E67EC)",
        "footer-gradient": "linear-gradient(180deg, #4E67EC, #79DBF0)",
      },
      colors: {
        "custom-blue-0": "#E9F4FE",
        "custom-blue-1": "#79DBF0",
        "custom-blue-2": "#6BB6EF",
        "custom-blue-3": "#4F67EC",
        "custom-blue-4": "#003A91",
      },
    },
  },
  plugins: [],
};
export default config;

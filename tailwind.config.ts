import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
        "trendy-ressource-gradient":
          "linear-gradient(180deg, #6BB6EF, #E9F4FE)",
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
      plugins: [
        plugin(function({ addVariant }) {
          addVariant('odd-2', '&>*:nth-child(3n+2)');
          addVariant('odd-1', '&>*:nth-child(2n)');
        })
      ],
};
export default config;

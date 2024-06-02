import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      slate: {
        "50": "#f6f6f6",
        "100": "#e7e7e7",
        "200": "#d1d1d1",
        "300": "#b0b0b0",
        "400": "#888888",
        "500": "#6d6d6d",
        "600": "#5d5d5d",
        "700": "#4f4f4f",
        "800": "#454545",
        "900": "#3d3d3d",
        "950": "#0d0d0d",
      },
      white: colors.white,
      "primary-1": {
        "50": "#f3f7fc",
        "100": "#e6f0f8",
        "200": "#c6dff1",
        "300": "#94c6e5",
        "400": "#5ba7d5",
        "500": "#368dc1",
        "600": "#2670a3",
        "700": "#205984",
        "800": "#1e4d6e",
        "900": "#1e415c",
        "950": "#152c40",
      },
      "primary-2": {
        "50": "#fff9eb",
        "100": "#fdeec8",
        "200": "#fbdc8c",
        "300": "#f9c450",
        "400": "#f7ad28",
        "500": "#f2921d",
        "600": "#d66709",
        "700": "#b1460c",
        "800": "#903710",
        "900": "#762d11",
        "950": "#441504",
      },
      "primary-3": {
        "50": "#f8f8f8",
        "100": "#f2f2f2",
        "200": "#dcdcdc",
        "300": "#bdbdbd",
        "400": "#989898",
        "500": "#7c7c7c",
        "600": "#656565",
        "700": "#525252",
        "800": "#464646",
        "900": "#3d3d3d",
        "950": "#292929",
      },
    },
    fontFamily: {
      display: ["Inter", "Roboto", "system-ui", "sans-serif"],
      body: ["Inter", "Roboto", "system-ui", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;

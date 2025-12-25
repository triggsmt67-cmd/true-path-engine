import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: 'class',
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#FF6B00",
                background: "#121212",
                surface: "#FFFFFF",
                ice: '#F0F5F9',
            },
            fontFamily: {
                sans: ['Geist Sans', 'sans-serif'],
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
export default config;

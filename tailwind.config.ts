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
                primary: "#B45309",
                secondary: "#C0C0C0",
                silver: "#C0C0C0",
                background: "#121417",
                surface: "#FFFFFF",
                ice: '#F0F5F9',
            },
            fontFamily: {
                sans: ['"Geist Sans"', 'sans-serif'],
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
export default config;

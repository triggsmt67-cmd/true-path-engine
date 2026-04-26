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
                brand: {
                    navy: "#0F2233", // Primary Navy
                    accent: "#4F7C7A", // Muted Teal for CTAs and trust accents
                    slate: "#6F8493", // Slate Blue for secondary buttons/icons
                    lavender: "#B7B5C4", // Lavender Gray for subtle premium notes
                },
                background: "#F7F7F5",
                mist: "#E6ECEF", // Mist Background for soft sections
                surface: "#FFFFFF",
                border: {
                    cool: "#D9DEDF", // Cool Border for cards/dividers
                },
                text: {
                    primary: "#20262C", // Ink Text for body text
                    secondary: "#6F8493", // Slate Blue for secondary text
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                serif: ['var(--font-playfair)', 'serif'],
            },
            borderRadius: {
                'standard': '0.5rem',
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
            },
            keyframes: {
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
export default config;

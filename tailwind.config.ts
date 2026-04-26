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
                    accent: "#0284C7", // Sky blue that conveys trust and pairs perfectly with navy
                    navy: "#0F2233",
                    copper: "#B87333",
                },
                background: "#F7F7F5",
                surface: "#FFFFFF",
                text: {
                    primary: "#0F2233", // Dark navy instead of black
                    secondary: "#334155", // Slate gray with blue undertones
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

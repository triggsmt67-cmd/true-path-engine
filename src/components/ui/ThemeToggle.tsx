"use client";

import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle: React.FC = () => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Check initial preference or class
        if (document.documentElement.classList.contains('dark')) {
            setIsDark(true);
        } else {
            // Default to dark if no class is present (matching the site's default)
            document.documentElement.classList.add('dark');
            setIsDark(true);
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            setIsDark(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/20 transition-all group"
            aria-label="Toggle Theme"
        >
            {isDark ? (
                <Sun className="w-6 h-6 text-yellow-400 group-hover:rotate-90 transition-transform" />
            ) : (
                <Moon className="w-6 h-6 text-primary group-hover:-rotate-12 transition-transform" />
            )}
        </button>
    );
};

export default ThemeToggle;

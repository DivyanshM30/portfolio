'use client';

import { useEffect, useState, createContext, useContext, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

interface ThemeProviderProps {
    children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>('dark');
    const [mounted, setMounted] = useState(false);

    // Initialize theme on mount
    useEffect(() => {
        // Check localStorage first
        const savedTheme = localStorage.getItem('theme') as Theme | null;

        if (savedTheme) {
            setTimeout(() => setTheme(savedTheme), 0);
            document.documentElement.dataset.theme = savedTheme;
        } else {
            // Check system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const initialTheme = prefersDark ? 'dark' : 'light';
            setTimeout(() => setTheme(initialTheme), 0);
            // Don't set data-theme if using system preference - CSS handles it
        }

        setTimeout(() => setMounted(true), 0);
    }, []);

    // Listen for system preference changes
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = (e: MediaQueryListEvent) => {
            // Only update if no explicit theme is saved
            if (!localStorage.getItem('theme')) {
                const newTheme = e.matches ? 'dark' : 'light';
                setTheme(newTheme);
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.dataset.theme = newTheme;
        localStorage.setItem('theme', newTheme);
    };

    // Prevent flash of wrong theme
    if (!mounted) {
        return null;
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

'use client';

import { createContext, useCallback, useContext, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
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

/**
 * Reads the theme that is currently in effect. `data-theme` is set pre-paint by
 * the inline script in layout.tsx when the visitor has an explicit preference;
 * when it is absent the CSS media queries follow the system, so the system
 * preference is the effective theme.
 */
function getEffectiveTheme(): Theme {
    const explicit = document.documentElement.dataset.theme;
    if (explicit === 'light' || explicit === 'dark') {
        return explicit;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * The `data-theme` attribute on <html> is the single source of truth: CSS reads
 * it directly (including the theme-toggle icon), so there is deliberately no
 * React state mirroring it. That keeps the whole tree server-renderable and
 * avoids a hydration pass that could disagree with the pre-paint script.
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
    const toggleTheme = useCallback(() => {
        const next: Theme = getEffectiveTheme() === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = next;
        try {
            localStorage.setItem('theme', next);
        } catch {
            // Private-mode / storage-disabled: the toggle still works for this page view.
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

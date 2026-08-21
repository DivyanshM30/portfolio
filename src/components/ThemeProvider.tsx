'use client';

import { createContext, useCallback, useContext, useSyncExternalStore, ReactNode } from 'react';

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

/**
 * Reads the theme that is currently in effect. The server renders dark mode and
 * the inline script in layout.tsx applies any saved preference before paint.
 * Falling back to dark keeps the default deterministic if the attribute is ever
 * removed by third-party code.
 */
function getEffectiveTheme(): Theme {
    const explicit = document.documentElement.dataset.theme;
    if (explicit === 'light' || explicit === 'dark') {
        return explicit;
    }
    return 'dark';
}

const THEME_CHANGE_EVENT = 'portfolio-theme-change';

function subscribeToTheme(onStoreChange: () => void) {
    window.addEventListener(THEME_CHANGE_EVENT, onStoreChange);
    window.addEventListener('storage', onStoreChange);

    return () => {
        window.removeEventListener(THEME_CHANGE_EVENT, onStoreChange);
        window.removeEventListener('storage', onStoreChange);
    };
}

function getServerTheme(): Theme {
    return 'dark';
}

/**
 * The `data-theme` attribute on <html> is the single source of truth: CSS reads
 * it directly (including the theme-toggle icon), so there is deliberately no
 * React state mirroring it. That keeps the whole tree server-renderable and
 * avoids a hydration pass that could disagree with the pre-paint script.
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
    const theme = useSyncExternalStore(subscribeToTheme, getEffectiveTheme, getServerTheme);

    const toggleTheme = useCallback(() => {
        const next: Theme = getEffectiveTheme() === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = next;
        try {
            localStorage.setItem('theme', next);
        } catch {
            // Private-mode / storage-disabled: the toggle still works for this page view.
        }

        window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

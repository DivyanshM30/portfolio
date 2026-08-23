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

function getHydrationTheme(): Theme {
    if (typeof document !== 'undefined') {
        return getEffectiveTheme();
    }

    return 'dark';
}

/**
 * The `data-theme` attribute on <html> is the source of truth. The external
 * store exposes it to controls that need semantic state while keeping the full
 * tree server-renderable. During hydration, the snapshot reads the theme that
 * the pre-paint script has already applied.
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
    const theme = useSyncExternalStore(subscribeToTheme, getEffectiveTheme, getHydrationTheme);

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

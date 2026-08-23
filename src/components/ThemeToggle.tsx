'use client';

import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';
    const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

    return (
        <button
            type="button"
            className="theme-switch"
            data-theme-toggle
            data-theme-state={theme}
            onClick={toggleTheme}
            role="switch"
            aria-checked={isDark}
            aria-label={label}
            title={label}
            suppressHydrationWarning
        >
            <span className="theme-switch-scene theme-switch-night" aria-hidden="true">
                <svg viewBox="0 0 64 32" focusable="false">
                    <circle cx="52" cy="16" r="26" fill="rgba(255,255,255,0.03)" />
                    <circle cx="52" cy="16" r="18" fill="rgba(255,255,255,0.04)" />
                    <circle cx="8" cy="9" r="1" fill="white" opacity="0.9" />
                    <circle cx="16" cy="22" r="0.8" fill="white" opacity="0.7" />
                    <circle cx="24" cy="7" r="0.8" fill="white" opacity="0.8" />
                    <circle cx="30" cy="17" r="1" fill="white" opacity="0.6" />
                    <circle cx="21" cy="27" r="0.7" fill="white" opacity="0.5" />
                    <circle cx="36" cy="25" r="0.8" fill="white" opacity="0.7" />
                    <path d="M12 14l1 2.4 2.4 1-2.4 1-1 2.4-1-2.4-2.4-1 2.4-1z" fill="white" opacity="0.95" />
                    <path d="M33 6l.8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8z" fill="white" opacity="0.8" />
                </svg>
            </span>

            <span className="theme-switch-scene theme-switch-day" aria-hidden="true">
                <svg viewBox="0 0 64 32" focusable="false">
                    <g fill="rgba(255,255,255,0.55)">
                        <circle cx="34" cy="30" r="9" />
                        <circle cx="45" cy="26" r="10" />
                        <circle cx="58" cy="22" r="11" />
                    </g>
                    <g fill="#fff">
                        <circle cx="38" cy="34" r="9" />
                        <circle cx="49" cy="30" r="10" />
                        <circle cx="62" cy="27" r="11" />
                    </g>
                </svg>
            </span>

            <span className="theme-switch-knob" aria-hidden="true">
                <span className="theme-switch-sun" />
                <span className="theme-switch-moon">
                    <span className="theme-switch-crater crater-one" />
                    <span className="theme-switch-crater crater-two" />
                    <span className="theme-switch-crater crater-three" />
                </span>
            </span>
        </button>
    );
}

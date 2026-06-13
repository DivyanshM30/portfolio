'use client';

import { useEffect, useState, useCallback } from 'react';
import { useTheme } from './ThemeProvider';

const NAV_SECTIONS = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [toggling, setToggling] = useState(false);
    const { theme, toggleTheme } = useTheme();

    // Scroll effect - adds 'scrolled' class on scroll > 100px
    // Also tracks which section is currently in view
    useEffect(() => {
        let ticking = false;

        const updateActiveSection = () => {
            setScrolled(window.scrollY > 100);

            // Edge case: scrolled to very bottom → contact
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
                setActiveSection('contact');
                ticking = false;
                return;
            }

            // Use getBoundingClientRect which is unaffected by CSS transforms
            let current = 'home';
            for (const id of NAV_SECTIONS) {
                const section = document.getElementById(id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    // Section is "active" when its top is above 40% of viewport
                    if (rect.top <= window.innerHeight * 0.4 && rect.bottom > 0) {
                        current = id;
                    }
                }
            }

            setActiveSection(current);
            ticking = false;
        };

        const handleScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(updateActiveSection);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Smooth scroll to section
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after clicking
            setMobileMenuOpen(false);
        }
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // Theme toggle with spin animation
    const handleToggleTheme = useCallback(() => {
        setToggling(true);
        toggleTheme();
        // Remove toggling class after animation completes
        setTimeout(() => setToggling(false), 400);
    }, [toggleTheme]);

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
            <div className="nav-container">
                <a href="#" className="logo" onClick={(e) => handleNavClick(e, '#home')}>
                    Divyansh Mishra
                </a>
                <ul className={`nav-links${mobileMenuOpen ? ' mobile-open' : ''}`}>
                    {NAV_SECTIONS.map((section) => (
                        <li key={section}>
                            <a
                                href={`#${section}`}
                                className={activeSection === section ? 'active' : ''}
                                onClick={(e) => handleNavClick(e, `#${section}`)}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
                <button
                    className={`theme-toggle${toggling ? ' toggling' : ''}`}
                    id="themeToggle"
                    title="Toggle dark mode"
                    onClick={handleToggleTheme}
                >
                    <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
                </button>
                <div
                    className={`mobile-menu${mobileMenuOpen ? ' active' : ''}`}
                    onClick={toggleMobileMenu}
                    role="button"
                    tabIndex={0}
                    aria-label="Toggle mobile menu"
                    onKeyDown={(e) => e.key === 'Enter' && toggleMobileMenu()}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {/* Mobile menu overlay */}
            {mobileMenuOpen && (
                <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)} />
            )}
        </nav>
    );
}

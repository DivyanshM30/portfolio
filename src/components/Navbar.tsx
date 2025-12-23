'use client';

import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    // Scroll effect - adds 'scrolled' class on scroll > 100px
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
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

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
            <div className="nav-container">
                <a href="#" className="logo" onClick={(e) => handleNavClick(e, '#home')}>
                    Divyansh Mishra
                </a>
                <ul className={`nav-links${mobileMenuOpen ? ' mobile-open' : ''}`}>
                    <li>
                        <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')}>
                            Experience
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
                            Contact
                        </a>
                    </li>
                </ul>
                <button
                    className="theme-toggle"
                    id="themeToggle"
                    title="Toggle dark mode"
                    onClick={toggleTheme}
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

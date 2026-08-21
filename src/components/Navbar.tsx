'use client';

import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const NAV_SECTIONS = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

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

    // Scrolling is left to the native anchor: html { scroll-behavior: smooth }
    // animates it and section[id] { scroll-margin-top } clears the fixed navbar.
    // That keeps the links working without JS and updates the URL hash, which
    // the previous preventDefault + scrollIntoView handler did neither of.
    const handleNavClick = () => {
        setMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
            <div className="nav-container">
                <a href="#home" className="logo" onClick={handleNavClick}>
                    Divyansh Mishra
                </a>
                <ul className={`nav-links${mobileMenuOpen ? ' mobile-open' : ''}`}>
                    {NAV_SECTIONS.map((section) => (
                        <li key={section}>
                            <a
                                href={`#${section}`}
                                className={activeSection === section ? 'active' : ''}
                                onClick={handleNavClick}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
                <ThemeToggle />
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

'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(() => {
                    setVisible(window.scrollY > 400);
                    ticking = false;
                });
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className={`scroll-to-top${visible ? ' visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Back to top"
        >
            <i className="fas fa-arrow-up"></i>
        </button>
    );
}

'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface SectionObserverProps {
    children: ReactNode;
}

export default function SectionObserver({ children }: SectionObserverProps) {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        // Same options as original script.js
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px',
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        observer.observe(section);

        return () => {
            observer.unobserve(section);
        };
    }, []);

    return (
        <div ref={sectionRef} className="section-fade">
            {children}
        </div>
    );
}

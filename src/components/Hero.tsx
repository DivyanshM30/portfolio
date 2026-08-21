'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import CountUp from './CountUp';

const SUBTITLE = 'Software Engineer & Full-Stack Developer';

// Resume link is read from an env var so it can be changed in Vercel
// (NEXT_PUBLIC_ is required because Hero is a client component). The
// fallback keeps the link working if the var is ever unset.
const RESUME_URL =
    process.env.NEXT_PUBLIC_RESUME_URL ||
    'https://drive.google.com/file/d/1m3e7TsVruyN8xYYz04arEtYiOlxkeGwJ/view';

export default function Hero() {
    const [typed, setTyped] = useState(SUBTITLE);

    useEffect(() => {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduce) return;

        let i = 0;
        let interval: ReturnType<typeof setInterval>;
        // Start after the hero entrance settles
        const start = setTimeout(() => {
            setTyped('');
            interval = setInterval(() => {
                i += 1;
                setTyped(SUBTITLE.slice(0, i));
                if (i >= SUBTITLE.length) clearInterval(interval);
            }, 55);
        }, 550);
        return () => {
            clearTimeout(start);
            clearInterval(interval);
        };
    }, []);

    return (
        <section className="hero scanlines dot-grid" id="home">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-top">
                        <div className="hero-text">
                            <div className="hero-anim hero-anim-delay-1" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                <div className="hero-badge">Available for Opportunities</div>
                                <a
                                    href={RESUME_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="hero-badge resume-badge">Resume ↗</div>
                                </a>
                            </div>
                            <h1 className="hero-anim hero-anim-delay-2">Divyansh Mishra</h1>
                            <h2 className="subtitle hero-anim hero-anim-delay-3 cursor-blink" aria-label={SUBTITLE}>{typed}</h2>
                            <p className="description hero-anim hero-anim-delay-4">
                                B.Tech Computer Science student specializing in building scalable full-stack applications.
                                Backed by a strong foundation in Data Structures &amp; Algorithms (500+ solved) and hands-on experience in modern web technologies.
                            </p>
                        </div>
                        <div className="hero-image hero-photo-anim">
                            <Image
                                src="/profile.png"
                                alt="Divyansh Mishra"
                                width={200}
                                height={200}
                                className="profile-photo"
                                priority
                            />
                        </div>
                    </div>
                    <div className="hero-stats hero-stats-anim">
                        <div className="hero-stat">
                            <span className="stat-value"><CountUp end={500} suffix="+" /></span>
                            <span className="stat-label">DSA Problems</span>
                        </div>
                        <div className="hero-stat">
                            <span className="stat-value"><CountUp end={15} suffix="+" /></span>
                            <span className="stat-label">Projects</span>
                        </div>
                        <div className="hero-stat">
                            <span className="stat-value"><CountUp end={3} suffix="+" /></span>
                            <span className="stat-label">Years Coding</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* HUD Status Panel — only visible on dark mode via CSS */}
            <div className="hud-panel">
                <div className="hud-row">
                    <span className="hud-label">STATUS</span>
                    <span className="hud-value hud-green">ONLINE</span>
                </div>
                <div className="hud-row">
                    <span className="hud-label">OPEN TO</span>
                    <span className="hud-value">SDE ROLES</span>
                </div>
                <div className="hud-row">
                    <span className="hud-label">RESPONSE</span>
                    <span className="hud-value">&lt; 24H</span>
                </div>
            </div>

            {/* Scroll indicator */}
            <div style={{
                position: 'absolute',
                bottom: '2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                opacity: 0.4,
                zIndex: 1
            }}>
                <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                    color: 'var(--text-secondary)', fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                    SCROLL
                </span>
                <div style={{
                    width: '1px', height: '40px',
                    background: 'linear-gradient(to bottom, var(--text-secondary), transparent)',
                    animation: 'scroll-line 1.5s ease-in-out infinite'
                }} />
            </div>
        </section>
    );
}

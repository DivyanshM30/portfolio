'use client';

import Image from 'next/image';
import ParticleCanvas from './ParticleCanvas';

export default function Hero() {
    return (
        <section className="hero" id="home">
            <ParticleCanvas />
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-top">
                        <div className="hero-text">
                            <div className="hero-badge">Available for Opportunities</div>
                            <a
                                href="https://drive.google.com/file/d/1m3e7TsVruyN8xYYz04arEtYiOlxkeGwJ/view"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="hero-badge">Resume</div>
                            </a>
                            <h1>Divyansh Mishra</h1>
                            <p className="subtitle">Developer | Problem Solver</p>
                            <p className="description">
                                B.Tech Computer Science student passionate about building scalable software solutions.
                                Experienced in full-stack development, algorithms, and problem-solving.
                            </p>
                        </div>
                        <div className="hero-image">
                            <Image
                                src={process.env.NEXT_PUBLIC_PROFILE_IMAGE_URL || "/profile.png"}
                                alt="Divyansh Mishra"
                                width={200}
                                height={200}
                                className="profile-photo"
                                priority
                                unoptimized={!!process.env.NEXT_PUBLIC_PROFILE_IMAGE_URL}
                            />
                        </div>
                    </div>
                    <div className="hero-stats">
                        <div className="hero-stat">
                            <span className="stat-value">500+</span>
                            <span className="stat-label">DSA Problems</span>
                        </div>
                        <div className="hero-stat">
                            <span className="stat-value">15+</span>
                            <span className="stat-label">Projects</span>
                        </div>
                        <div className="hero-stat">
                            <span className="stat-value">3+</span>
                            <span className="stat-label">Years Coding</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

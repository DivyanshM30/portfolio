import Link from 'next/link';
export default function Projects() {
    return (
        <section className="section projects" id="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    <div className="project-card stagger-item" style={{ '--stagger-index': 0 } as React.CSSProperties}>
                        <div className="project-header">
                            <div className="project-number">01</div>
                            <h3 className="project-title">Digital Wellbeing Tracker</h3>
                        </div>
                        <p className="project-description">
                            An intelligent, desktop-based productivity application that logs real-time system and application activity.
                            Integrated a <strong>K-Means clustering algorithm</strong> using Python (scikit-learn) to categorize digital activity profiles and detect addictive behavior patterns, generating data-driven feedback to encourage mindful technology usage.
                        </p>
                        <div className="project-tech">
                            <span className="tech-tag">Python</span>
                            <span className="tech-tag">Tkinter</span>
                            <span className="tech-tag">Matplotlib</span>
                            <span className="tech-tag">K-Means</span>
                        </div>
                        <div className="project-links">
                            <a
                                href="https://divyanshm30.github.io/digital-wellbeing-tracker/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                <span>Live Demo</span>
                                <i className="fas fa-arrow-right"></i>
                            </a>
                            <a
                                href="https://github.com/divyanshm30/digital-wellbeing-tracker"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link secondary"
                            >
                                <i className="fab fa-github"></i>
                            </a>

                            <Link href={`/projects/digital-wellbeing-tracker`} className="project-link details">
                                <span>Details</span>
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="project-card stagger-item" style={{ '--stagger-index': 1 } as React.CSSProperties}>
                        <div className="project-header">
                            <div className="project-number">02</div>
                            <h3 className="project-title">QuizForge</h3>
                        </div>
                        <p className="project-description">
                            An AI-powered assessment platform that transforms study materials such as PDFs, PPTs, and documents into topic-wise timed MCQ quizzes with instant evaluation and detailed explanations.
                            Built an end-to-end document processing pipeline for text extraction and AI-driven question generation using the <strong>Google Gemini API</strong>, with configurable settings, real-time scoring, performance analytics, and revision-focused feedback to create a personalized prep experience.
                        </p>
                        <div className="project-tech">
                            <span className="tech-tag">Next.js</span>
                            <span className="tech-tag">TypeScript</span>
                            <span className="tech-tag">Gemini API</span>
                            <span className="tech-tag">Document Parsing</span>
                            <span className="tech-tag">PDF.js / LangChain</span>
                        </div>
                        <div className="project-links">
                            <a
                                href="https://thequizforge.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                <span>Live Demo</span>
                                <i className="fas fa-arrow-right"></i>
                            </a>
                            <a
                                href="https://github.com/DivyanshM30/QuizForge"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link secondary"
                            >
                                <i className="fab fa-github"></i>
                            </a>

                            <Link href={`/projects/quizforge`} className="project-link details">
                                <span>Details</span>
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="project-card stagger-item" style={{ '--stagger-index': 2 } as React.CSSProperties}>
                        <div className="project-header">
                            <div className="project-number">03</div>
                            <h3 className="project-title">MindPalette</h3>
                        </div>
                        <p className="project-description">
                            A beautifully designed, cloud-synced mood tracking application that turns daily feelings into an expressive visual story.
                            Instead of logging emotions in traditional spreadsheets, MindPalette transforms your year into a gentle, aesthetic grid canvas—where each day becomes a brushstroke of color, emotion, and personal reflection.
                        </p>
                        <div className="project-tech">
                            <span className="tech-tag">Next.js</span>
                            <span className="tech-tag">TypeScript</span>
                            <span className="tech-tag">Supabase (Auth &amp; DB)</span>
                            <span className="tech-tag">Zustand</span>
                            <span className="tech-tag">Framer Motion</span>
                        </div>
                        <div className="project-links">
                            <a
                                href="https://themindpalette.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                <span>Live Demo</span>
                                <i className="fas fa-arrow-right"></i>
                            </a>
                            <a
                                href="https://github.com/DivyanshM30/mindpalette"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link secondary"
                            >
                                <i className="fab fa-github"></i>
                            </a>

                            <Link href={`/projects/mindpalette`} className="project-link details">
                                <span>Details</span>
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="project-card stagger-item" style={{ '--stagger-index': 3 } as React.CSSProperties}>
                        <div className="project-header">
                            <div className="project-number">04</div>
                            <h3 className="project-title">Blockchain-based Decentralized VPN</h3>
                        </div>
                        <p className="project-description">
                            A secure, decentralized networking protocol leveraging <strong>blockchain technology</strong> for censorship-resistant browsing.
                            Utilizes peer-to-peer architecture and robust cryptographic encryption to eliminate central single-points-of-failure, ensuring absolute user privacy and trustless node connectivity.
                        </p>
                        <div className="project-tech">
                            <span className="tech-tag">Blockchain</span>
                            <span className="tech-tag">Python</span>
                            <span className="tech-tag">Smart Contracts</span>
                            <span className="tech-tag">Encryption</span>
                        </div>
                        <div className="project-links">
                            <span className="project-link" style={{ opacity: 0.5, cursor: 'default' }}>
                                <span>Private Repository</span>
                                <i className="fas fa-lock"></i>
                            </span>

                            <Link href={`/projects/blockchain-vpn`} className="project-link details">
                                <span>Details</span>
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="project-card stagger-item" style={{ '--stagger-index': 4 } as React.CSSProperties}>
                        <div className="project-header">
                            <div className="project-number">05</div>
                            <h3 className="project-title">Smart Route</h3>
                        </div>
                        <p className="project-description">
                            A cloud-native navigation engine that computes optimized travel routes by evaluating real-time traffic feeds and pathfinding algorithms.
                            Integrated <strong>Google Maps API</strong> with graph optimization algorithms, deploying the service to <strong>AWS</strong> to ensure scalable, low-latency updates for routing calculations.
                        </p>
                        <div className="project-tech">
                            <span className="tech-tag">Python</span>
                            <span className="tech-tag">Flask</span>
                            <span className="tech-tag">Maps API</span>
                            <span className="tech-tag">AWS (Deployment)</span>
                        </div>
                        <div className="project-links">
                            <a
                                href="https://github.com/DivyanshM30/smartroute"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link secondary"
                            >
                                <i className="fab fa-github"></i>
                            </a>

                            <Link href={`/projects/smart-route`} className="project-link details">
                                <span>Details</span>
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="project-card stagger-item" style={{ '--stagger-index': 5 } as React.CSSProperties}>
                        <div className="project-header">
                            <div className="project-number">06</div>
                            <h3 className="project-title">Real-Time AI Based News Summarizer Web App</h3>
                        </div>
                        <p className="project-description">
                            A full-stack, responsive web application that fetches and condenses global news into bulleted summaries using the <strong>Google Gemini Pro API</strong>.
                            Designed a modular <strong>Flask backend API</strong> and integrated smart token optimization strategies, reducing query latency and API overhead. Added customized category filters (Tech, Business, Science) for personalized user feeds.
                        </p>
                        <div className="project-tech">
                            <span className="tech-tag">Python</span>
                            <span className="tech-tag">Flask</span>
                            <span className="tech-tag">Google Gemini API</span>
                            <span className="tech-tag">NLP</span>
                        </div>
                        <div className="project-links">
                            <a
                                href="https://github.com/DivyanshM30/summarizer_ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link secondary"
                            >
                                <i className="fab fa-github"></i>
                            </a>

                            <Link href={`/projects/ai-news-summarizer`} className="project-link details">
                                <span>Details</span>
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

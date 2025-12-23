export default function Projects() {
    return (
        <section className="section projects" id="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    <div className="project-card">
                        <div className="project-header">
                            <div className="project-number">01</div>
                            <h3 className="project-title">Digital Wellbeing Tracker</h3>
                        </div>
                        <p className="project-description">
                            A desktop application that tracks screen time and app usage in real-time, offering
                            visual insights and usage patterns. Utilizes K-Means clustering to identify unhealthy
                            digital behavior and promote mindful tech habits through data-driven feedback.
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
                                <span>View Project</span>
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
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="project-header">
                            <div className="project-number">02</div>
                            <h3 className="project-title">Blockchain-based Decentralized VPN</h3>
                        </div>
                        <p className="project-description">
                            A decentralized VPN leveraging <strong>blockchain technology</strong> for secure,
                            anonymous, and censorship-resistant browsing. Uses cryptographic encryption to ensure
                            data privacy while eliminating central points of failure, providing trustless
                            peer-to-peer connectivity.
                        </p>
                        <div className="project-tech">
                            <span className="tech-tag">Blockchain</span>
                            <span className="tech-tag">Python</span>
                            <span className="tech-tag">Smart Contracts</span>
                            <span className="tech-tag">Encryption</span>
                        </div>
                        <div className="project-links">
                            <span className="project-link" style={{ opacity: 0.5, cursor: 'default' }}>
                                <span>Coming Soon</span>
                                <i className="fas fa-clock"></i>
                            </span>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="project-header">
                            <div className="project-number">03</div>
                            <h3 className="project-title">Real-Time AI Based News Summarizer Web App</h3>
                        </div>
                        <p className="project-description">
                            Built a responsive web app that generates concise real-time news summaries using{' '}
                            <strong>Google Gemini API</strong>. Includes category-based filters (Tech, Politics,
                            Sports) for personalized feeds. Implemented a <strong>Flask backend</strong> for API
                            calls, user flow, and error handling, while optimizing API usage for scalability and
                            token efficiency.
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
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="project-header">
                            <div className="project-number">04</div>
                            <h3 className="project-title">Smart Route</h3>
                        </div>
                        <p className="project-description">
                            A cloud-based intelligent routing system designed to suggest optimal travel routes by
                            considering real-time traffic data, shortest paths, and dynamic conditions. Integrated{' '}
                            <strong>Maps API</strong> with AI-powered optimization algorithms for smarter
                            navigation and faster decision-making.
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

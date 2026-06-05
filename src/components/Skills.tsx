export default function Skills() {
    return (
        <section className="section skills" id="skills">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>

                {/* Skill Categories with Visual Tags */}
                <div className="skills-container">
                    <div className="skill-group">
                        <div className="skill-group-header">
                            <i className="fas fa-code"></i>
                            <h3>Languages</h3>
                        </div>
                        <div className="skill-tags">
                            <span className="skill-tag">Java</span>
                            <span className="skill-tag">Python</span>
                            <span className="skill-tag">JavaScript</span>
                            <span className="skill-tag">TypeScript</span>
                            <span className="skill-tag">C++</span>
                            <span className="skill-tag">SQL</span>
                        </div>
                    </div>

                    <div className="skill-group">
                        <div className="skill-group-header">
                            <i className="fas fa-laptop-code"></i>
                            <h3>Frontend</h3>
                        </div>
                        <div className="skill-tags">
                            <span className="skill-tag">React.js</span>
                            <span className="skill-tag">Next.js</span>
                            <span className="skill-tag">HTML5</span>
                            <span className="skill-tag">CSS3</span>
                            <span className="skill-tag">Tailwind CSS</span>
                            <span className="skill-tag">Bootstrap</span>
                            <span className="skill-tag">Framer Motion</span>
                        </div>
                    </div>

                    <div className="skill-group">
                        <div className="skill-group-header">
                            <i className="fas fa-server"></i>
                            <h3>Backend</h3>
                        </div>
                        <div className="skill-tags">
                            <span className="skill-tag">Node.js</span>
                            <span className="skill-tag">Express.js</span>
                            <span className="skill-tag">Flask</span>
                            <span className="skill-tag">Django</span>
                            <span className="skill-tag">REST APIs</span>
                            <span className="skill-tag">Authentication (JWT/Supabase Auth)</span>
                        </div>
                    </div>

                    <div className="skill-group">
                        <div className="skill-group-header">
                            <i className="fas fa-robot"></i>
                            <h3>AI &amp; GenAI</h3>
                        </div>
                        <div className="skill-tags">
                            <span className="skill-tag">Generative AI</span>
                            <span className="skill-tag">Prompt Engineering</span>
                            <span className="skill-tag">LLM Applications</span>
                            <span className="skill-tag">AI Integration</span>
                            <span className="skill-tag">Machine Learning</span>
                            <span className="skill-tag">K-Means Clustering</span>
                            <span className="skill-tag">Data Analysis</span>
                        </div>
                    </div>

                    <div className="skill-group">
                        <div className="skill-group-header">
                            <i className="fas fa-database"></i>
                            <h3>Databases</h3>
                        </div>
                        <div className="skill-tags">
                            <span className="skill-tag">MongoDB</span>
                            <span className="skill-tag">PostgreSQL</span>
                            <span className="skill-tag">MySQL</span>
                            <span className="skill-tag">Supabase</span>
                            <span className="skill-tag">Redis</span>
                        </div>
                    </div>

                    <div className="skill-group">
                        <div className="skill-group-header">
                            <i className="fas fa-tools"></i>
                            <h3>Tools &amp; Cloud</h3>
                        </div>
                        <div className="skill-tags">
                            <span className="skill-tag">Git</span>
                            <span className="skill-tag">GitHub</span>
                            <span className="skill-tag">Docker</span>
                            <span className="skill-tag">AWS</span>
                            <span className="skill-tag">Postman</span>
                            <span className="skill-tag">Figma</span>
                            <span className="skill-tag">Vercel</span>
                            <span className="skill-tag">Netlify</span>
                            <span className="skill-tag">Supabase</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

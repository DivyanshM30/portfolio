export default function About() {
    return (
        <section className="section about" id="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-stats">
                        <div className="stat-card stagger-item" style={{ '--stagger-index': 0 } as React.CSSProperties}>
                            <div className="stat-number">15+</div>
                            <div className="stat-label">Projects Completed</div>
                        </div>
                        <div className="stat-card stagger-item" style={{ '--stagger-index': 1 } as React.CSSProperties}>
                            <div className="stat-number">500+</div>
                            <div className="stat-label">DSA Problems Solved</div>
                        </div>
                        <div className="stat-card stagger-item" style={{ '--stagger-index': 2 } as React.CSSProperties}>
                            <div className="stat-number">8.5</div>
                            <div className="stat-label">CGPA</div>
                        </div>
                        <div className="stat-card stagger-item" style={{ '--stagger-index': 3 } as React.CSSProperties}>
                            <div className="stat-number">3+</div>
                            <div className="stat-label">Years Coding</div>
                        </div>
                    </div>
                    <div className="about-text stagger-item" style={{ '--stagger-index': 2 } as React.CSSProperties}>
                        <p>
                            I am a Computer Science undergraduate at Vellore Institute of Technology with a passion for software engineering and system architecture. I specialize in bridging the gap between complex backend logic and intuitive frontend interfaces, building software solutions that are both highly performant and user-centric.
                        </p>
                        <p>
                            My technical toolkit centers around modern web technologies, including React, Node.js, and Python. To support my development work with robust computational efficiency, I actively practice competitive programming, having solved over 500+ algorithmic problems across LeetCode and Codeforces. This structured analytical training enables me to write clean, optimized, and scalable code.
                        </p>
                        <p>
                            Always seeking to stay at the forefront of technology, I recently earned an IBM Certification in Generative AI, building core competencies in prompt engineering, LLM integrations, and RAG architectures. I am actively seeking SDE internship opportunities at forward-thinking companies where I can contribute to shipping production-ready systems.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

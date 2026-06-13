export default function Experience() {
    return (
        <section className="section experience" id="experience">
            <div className="container">
                <h2 className="section-title">Experience &amp; Achievements</h2>
                <div className="timeline">
                    <div className="timeline-item stagger-item" style={{ '--stagger-index': 0 } as React.CSSProperties}>
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3 className="experience-title">IBM GenAI Certification</h3>
                            <div className="experience-company">IBM watsonx.ai</div>
                            <div className="experience-date">May 2025 - July 2025</div>
                            <p className="experience-description">
                                Earned a professional certification in Generative Artificial Intelligence from IBM. Gained hands-on proficiency in prompt engineering, LLM integration, and AI application development utilizing IBM Watsonx, Python, and advanced NLP toolkits to design robust, RAG-based systems.
                            </p>
                        </div>
                    </div>

                    <div className="timeline-item stagger-item" style={{ '--stagger-index': 1 } as React.CSSProperties}>
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3 className="experience-title">AWS APAC Solutions Architecture Virtual Experience Program</h3>
                            <div className="experience-company">Completed on Forage - Hosted by AWS APAC</div>
                            <div className="experience-date">July 2025</div>
                            <ul className="experience-description" style={{ paddingLeft: '1.2rem', margin: 0 }}>
                                <li>Designed a scalable architecture using AWS Elastic Beanstalk to support a React + Flask web app under increasing user load</li>
                                <li>Addressed issues like slow response times, server crashes, and deployment downtime on a single EC2 instance</li>
                                <li>Explained architectural improvements and cost breakdown in plain language to a simulated client</li>
                            </ul>
                        </div>
                    </div>

                    <div className="timeline-item stagger-item" style={{ '--stagger-index': 2 } as React.CSSProperties}>
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3 className="experience-title">Competitive Programming</h3>
                            <div className="experience-company">Codeforces • LeetCode</div>
                            <div className="experience-date">2023 - Present</div>
                            <p className="experience-description">
                                Solved over 500+ problems across platforms (LeetCode, CodeChef, Codeforces) with a LeetCode contest rating of 1400+. Developed a strong algorithmic analytical mindset, mastery over complex data structures, and optimized coding speed under pressure.
                            </p>
                        </div>
                    </div>

                    <div className="timeline-item stagger-item" style={{ '--stagger-index': 3 } as React.CSSProperties}>
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3 className="experience-title">Development Team</h3>
                            <div className="experience-company">MIC</div>
                            <div className="experience-date">July 2024 - June 2025</div>
                            <p className="experience-description">
                                Contributed to system design discussions and event coordination as part of the student development board. Co-organized tech events during the Vibrance festival and completed 5 Microsoft Learn courses in cloud computing architectures and Azure fundamentals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

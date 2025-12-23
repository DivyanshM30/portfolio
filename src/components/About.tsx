export default function About() {
    return (
        <section className="section about" id="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-stats">
                        <div className="stat-card">
                            <div className="stat-number">15+</div>
                            <div className="stat-label">Projects Completed</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">500+</div>
                            <div className="stat-label">DSA Problems Solved</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">8.5</div>
                            <div className="stat-label">CGPA</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">3+</div>
                            <div className="stat-label">Years Coding</div>
                        </div>
                    </div>
                    <div className="about-text">
                        <p>
                            I&apos;m a Computer Science undergraduate with a solid foundation in problem-solving,
                            data structures, and full-stack development. Over the past few years, I&apos;ve built
                            real-world applications including a desktop-based Digital Wellbeing Tracker with ML
                            integration, reflecting my passion for solving meaningful problems through code.
                        </p>
                        <p>
                            I specialize in modern web technologies like React, Node.js, and Python, and I&apos;m
                            constantly refining my skills by solving 500+ DSA problems across platforms like
                            LeetCode and Codeforces. I aim to secure SDE internships at product-based companies
                            where I can build scalable, impactful software used by real users.
                        </p>
                        <p>
                            Outside of academics, I spend time building personal projects, exploring new
                            technologies, and strengthening my problem-solving skills. I enjoy building side
                            projects, staying up-to-date with industry trends in software development, AI, and
                            cloud technologies. I also like playing chess in my free time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

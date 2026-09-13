const milestones = [
  { title: 'IBM GenAI Certification', organization: 'IBM watsonx.ai', date: 'May – Jul 2025', description: 'Practical training in prompt engineering, LLM integration, and RAG-based AI applications with Python and IBM watsonx.' },
  { title: 'Solutions Architecture Virtual Experience', organization: 'AWS APAC · Forage', date: 'Jul 2025', description: 'Designed a scalable React + Flask architecture using AWS Elastic Beanstalk and explained performance, availability, and cost tradeoffs to a simulated client.' },
  { title: 'Competitive Programming', organization: 'LeetCode · Codeforces · CodeChef', date: '2023 – Present', description: '500+ problems solved and a 1400+ LeetCode contest rating, building a strong foundation in data structures, algorithms, and problem solving.' },
  { title: 'Development Team', organization: 'MIC', date: 'Jul 2024 – Jun 2025', description: 'Contributed to system design discussions, co-organized tech events during Vibrance, and completed five Microsoft Learn courses in cloud architecture and Azure fundamentals.' },
];

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <p className="eyebrow">04 / EXPERIENCE & IMPACT</p>
        <h2 className="section-title">Real teams. Real products.<br /><em>Real impact.</em></h2>
        <div className="work-experience">
          <article className="career-role current-role">
            <div className="career-meta">
              <span className="role-status">CURRENT ROLE</span>
              <p>Jun 2026 – Present</p>
              <p className="career-company">PGAGI Consultancy Pvt. Ltd.</p>
            </div>
            <div className="career-content">
              <h3>Software Development Engineer Intern</h3>
              <p className="career-intro">Shipping across AI SaaS, ed-tech, and cross-platform products, from real-time communication to the performance and reliability behind the interface.</p>
              <div className="career-impact" aria-label="PGAGI impact highlights">
                <div><strong>65+</strong><span>Merged PRs</span></div>
                <div><strong>6</strong><span>Products contributed to</span></div>
                <div><strong>24 → 11</strong><span>Blocking requests per route</span></div>
              </div>
              <ul className="career-bullets">
                <li><strong>Built real-time browser calling</strong> for a B2B SaaS, combining bidirectional audio streaming, call-state management, and live transcription. Diagnosed and resolved three release blockers, including audio connections left open after leaving a call.</li>
                <li><strong>Reduced blocking startup API requests by 54%</strong> per route, from 24 to 11, by deferring non-critical work and removing duplicate calls. Cut sequential round trips before first content from three to two.</li>
                <li><strong>Audited 187 API functions</strong> and uncovered 29 silent write-failure paths, turning invisible errors into a prioritized reliability backlog for the team.</li>
                <li><strong>Automated prototype-to-production UI conversion</strong> across 12 components and 10 screens. Expanded an application from 10 to 41 server-rendered routes and verified responsive layouts across 36 route-and-viewport combinations.</li>
                <li><strong>Delivered 65+ merged PRs across six products in three months,</strong> spanning an AI lead-generation SaaS, marketing sites, an admin panel, and a cross-platform learner app.</li>
              </ul>
              <details className="engineering-details">
                <summary>A closer look at the engineering <span aria-hidden="true">+</span></summary>
                <ul className="career-bullets">
                  <li>Integrated the Zoom Meeting SDK into an ed-tech platform, isolated a React 19 compatibility issue, and restored screen sharing with path-scoped COOP/COEP headers for SharedArrayBuffer support.</li>
                  <li>Adapted a React Native/Expo learner app for desktop with two reusable layout hooks, responsive changes across 16 components, and five bottom-sheet conversions to centered popups, supporting 16 locales across iOS, Android, and web.</li>
                </ul>
              </details>
              <div className="project-tags"><span>Next.js</span><span>React</span><span>TypeScript</span><span>React Native / Expo</span><span>AudioWorklet</span></div>
            </div>
          </article>
          <article className="career-role">
            <div className="career-meta">
              <span className="role-status completed-role">PREVIOUSLY</span>
              <p>Sep 2025 – Nov 2025</p>
              <p className="career-company">Jabsz Studios</p>
            </div>
            <div className="career-content">
              <h3>Web Development Intern</h3>
              <p className="career-intro">Helped bring Knowledge Bubble to its early users through responsive frontend development and thoughtful usability improvements.</p>
              <ul className="career-bullets">
                <li><strong>Developed and optimized frontend components for Knowledge Bubble,</strong> contributing to an experience used by 1,000+ early users.</li>
                <li><strong>Collaborated with cross-functional teams</strong> to design and deliver responsive, high-performance web interfaces.</li>
                <li><strong>Improved UI consistency and usability</strong> through clean design practices, modular components, and focused interaction improvements.</li>
              </ul>
              <div className="project-tags"><span>Frontend Development</span><span>Responsive Design</span><span>UI / UX</span></div>
            </div>
          </article>
        </div>
        <div className="career-milestones">
          <p className="eyebrow">ALONG THE WAY</p>
          <h3>Learning & community</h3>
          <div className="milestone-grid">{milestones.map(item => (
            <article className="milestone" key={item.title}>
              <p className="milestone-date">{item.date}</p>
              <h4>{item.title}</h4>
              <p className="milestone-organization">{item.organization}</p>
              <p>{item.description}</p>
            </article>
          ))}</div>
        </div>
      </div>
    </section>
  );
}

import { Project, projects } from '@/lib/projects';
import Link from 'next/link';

interface Props {
  project: Project;
}

export default function ProjectDetail({ project }: Props) {
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="pd-root">
      {/* Top bar */}
      <header className="pd-topbar">
        <div className="pd-topbar-inner">
          {/* Back */}
          <Link href="/#projects" className="pd-back-link">
            <i className="fas fa-arrow-left" />
            <span>All Projects</span>
          </Link>

          {/* Right side: prev / counter / next */}
          <div className="pd-topbar-nav">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="pd-nav-arrow"
                title={prevProject.title}
              >
                <i className="fas fa-chevron-left" />
                <span className="pd-nav-arrow-label">{prevProject.title}</span>
              </Link>
            ) : (
              <span className="pd-nav-arrow disabled">
                <i className="fas fa-chevron-left" />
              </span>
            )}

            <span className="pd-project-counter">
              {String(project.id).padStart(2, '0')}&nbsp;/&nbsp;{String(projects.length).padStart(2, '0')}
            </span>

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="pd-nav-arrow"
                title={nextProject.title}
              >
                <span className="pd-nav-arrow-label">{nextProject.title}</span>
                <i className="fas fa-chevron-right" />
              </Link>
            ) : (
              <span className="pd-nav-arrow disabled">
                <i className="fas fa-chevron-right" />
              </span>
            )}
          </div>
        </div>
      </header>

      <main className="pd-main">
        {/* Left sidebar */}
        <aside className="pd-sidebar">
          <div className="pd-sidebar-sticky">
            {/* Project identity */}
            <div className="pd-identity">
              <p className="pd-num">{String(project.id).padStart(2, '0')}</p>
              <h1 className="pd-title">{project.title}</h1>
              <p className="pd-short-desc">{project.shortDescription}</p>
            </div>

            {/* Timeline */}
            <div className="pd-sidebar-section">
              <p className="pd-sidebar-label">Timeline</p>
              <p className="pd-sidebar-value">{project.timeline}</p>
            </div>

            {/* Tech stack */}
            <div className="pd-sidebar-section">
              <p className="pd-sidebar-label">Tech Stack</p>
              <div className="pd-tech-tags">
                {project.tech.map((t) => (
                  <span key={t} className="pd-tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="pd-sidebar-section pd-links">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pd-link-btn pd-link-primary"
                >
                  <i className="fas fa-external-link-alt" />
                  <span>Live Demo</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pd-link-btn pd-link-secondary"
                >
                  <i className="fab fa-github" />
                  <span>View Code</span>
                </a>
              )}
              {project.isPrivate && (
                <span className="pd-link-btn pd-link-private">
                  <i className="fas fa-lock" />
                  <span>Private Repository</span>
                </span>
              )}
            </div>

          </div>
        </aside>

        {/* Right content */}
        <article className="pd-content">
          {/* Overview */}
          <section id="overview" className="pd-section">
            <div className="pd-section-header">
              <span className="pd-section-tag">01</span>
              <h2 className="pd-section-title">Overview</h2>
            </div>
            <div className="pd-prose">
              {project.fullDescription.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>

          {/* Bottom 3-column grid: Highlights | Challenges | Key Learnings */}
          <section className="pd-section pd-section-last">
            <div className="pd-cards-grid">
              {project.highlights && project.highlights.length > 0 && (
                <div id="highlights" className="pd-info-card">
                  <div className="pd-info-card-header">
                    <h3>Highlights</h3>
                  </div>
                  <ul className="pd-info-list">
                    {project.highlights.map((item, i) => (
                      <li key={i}>
                        <span className="pd-arrow">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div id="challenges" className="pd-info-card">
                <div className="pd-info-card-header">
                  <h3>Challenges</h3>
                </div>
                <ul className="pd-info-list">
                  {project.challenges.map((item, i) => (
                    <li key={i}>
                      <span className="pd-arrow">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div id="key-learnings" className="pd-info-card">
                <div className="pd-info-card-header">
                  <h3>Key Learnings</h3>
                </div>
                <ul className="pd-info-list">
                  {project.learnings.map((item, i) => (
                    <li key={i}>
                      <span className="pd-arrow">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Bottom project navigation */}
          <div className="pd-bottom-nav">
            <div className="pd-bottom-prev">
              {prevProject ? (
                <Link href={`/projects/${prevProject.slug}`} className="pd-bottom-link">
                  <i className="fas fa-arrow-left" />
                  <div>
                    <span className="pd-bottom-link-label">Previous</span>
                    <span className="pd-bottom-link-title">{prevProject.title}</span>
                  </div>
                </Link>
              ) : (
                <Link href="/#projects" className="pd-bottom-link">
                  <i className="fas fa-arrow-left" />
                  <div>
                    <span className="pd-bottom-link-label">Back to</span>
                    <span className="pd-bottom-link-title">All Projects</span>
                  </div>
                </Link>
              )}
            </div>

            <div className="pd-bottom-next">
              {nextProject && (
                <Link href={`/projects/${nextProject.slug}`} className="pd-bottom-link pd-bottom-link-right">
                  <div>
                    <span className="pd-bottom-link-label">Next</span>
                    <span className="pd-bottom-link-title">{nextProject.title}</span>
                  </div>
                  <i className="fas fa-arrow-right" />
                </Link>
              )}
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}

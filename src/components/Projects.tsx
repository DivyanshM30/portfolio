import Link from 'next/link';
import { projects } from '@/lib/projects';

export default function Projects() {
    return (
        <section className="section projects" id="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={project.slug}
                            className="project-card stagger-item"
                            style={{ '--stagger-index': index } as React.CSSProperties}
                        >
                            <div className="project-header">
                                <div className="project-number">
                                    {String(project.id).padStart(2, '0')}
                                </div>
                                <h3 className="project-title">{project.title}</h3>
                            </div>
                            <p className="project-description">
                                {project.cardDescription.map((segment, segmentIndex) =>
                                    segment.emphasis ? (
                                        <strong key={segmentIndex}>{segment.text}</strong>
                                    ) : (
                                        segment.text
                                    )
                                )}
                            </p>
                            <div className="project-tech">
                                {project.tech.map((technology) => (
                                    <span key={technology} className="tech-tag">
                                        {technology}
                                    </span>
                                ))}
                            </div>
                            <div className="project-links">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        <span>Live Demo</span>
                                        <i className="fas fa-arrow-right" />
                                    </a>
                                )}

                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link secondary"
                                        aria-label={`View ${project.title} on GitHub`}
                                    >
                                        <i className="fab fa-github" />
                                    </a>
                                )}

                                {project.isPrivate && (
                                    <span
                                        className="project-link"
                                        style={{ opacity: 0.5, cursor: 'default' }}
                                    >
                                        <span>Private Repository</span>
                                        <i className="fas fa-lock" />
                                    </span>
                                )}

                                <Link href={`/projects/${project.slug}`} className="project-link details">
                                    <span>Details</span>
                                    <i className="fas fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

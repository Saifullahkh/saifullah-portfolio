import React from 'react';
import { FiGlobe, FiArrowRight } from 'react-icons/fi';
import { projects } from '../data/data';
import '../App.css';

function Project() {
  return (
    <section className="projects-page-wrapper py-5">
      <div className="container py-4">

        {/* Title Block */}
        <div className="text-center mb-5">
          <span className="badge-tech mb-2">Portfolio</span>
          <h2 className="display-5 fw-bold text-dark">My <span className="text-teal">Creations</span></h2>
          <div className="title-line mx-auto"></div>
          <p className="text-muted mt-3 max-width-xs mx-auto">
            Explore my compilation of websites, dashboards, and e-commerce platforms.
          </p>
        </div>


        {/* Results grid */}
        {projects.length > 0 ? (
          <div className="d-flex flex-column gap-5 py-4">
            {projects.map((project, idx) => (
              <div key={project.id} className="project-row-wrapper">
                <div className={`row g-4 g-lg-5 align-items-center ${idx % 2 !== 0 ? 'flex-lg-row-reverse' : ''}`}>
                  {/* Left Column: Image wrapper */}
                  <div className="col-lg-6">
                    <div className="project-image-box position-relative overflow-hidden rounded-4 shadow-lg border border-light-subtle" style={{ height: '320px' }}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-100 h-100 object-fit-cover transition-all"
                      />
                      <div className="project-category-badge bg-teal text-white px-3 py-1 rounded-pill position-absolute top-3 end-3 small shadow">
                        {project.category}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Project details */}
                  <div className="col-lg-6">
                    <div className="portfolio-details-card position-relative p-2 p-lg-4">
                      {/* Sub-label */}
                      <span className="badge-tech px-2 py-1 mb-2 d-inline-block text-uppercase letter-spacing-1 small">Project {idx + 1}</span>

                      <h3 className="fw-bold project-title-highlight mb-3 text-dark">{project.title}</h3>

                      {/* Tech tags list */}
                      <div className="d-flex flex-wrap gap-2 mb-4">
                        {project.tags && project.tags.map((t, tIdx) => (
                          <span className="badge-tech fw-bold px-2 py-1 rounded-pill small" key={tIdx} style={{ fontSize: '0.75rem' }}>
                            {t}
                          </span>
                        ))}
                      </div>

                      <p className="project-desc-text text-muted mb-4" style={{ lineHeight: '1.7', fontSize: '0.95rem' }}>
                        {project.description}
                      </p>

                      {/* Bottom CTA Actions */}
                      <div className="d-flex align-items-center gap-3 pt-3 border-top">
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-send-main px-4 py-2 text-white text-decoration-none d-inline-flex align-items-center"
                          style={{ fontSize: '0.9rem' }}
                        >
                          Launch Demo
                          <FiArrowRight className="ms-2" />
                        </a>

                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noreferrer"
                          className="link-circle shadow-sm"
                          title="Open Demo Website"
                        >
                          <FiGlobe />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-5">
            <h4 className="text-muted">No projects found.</h4>
            <p className="text-secondary small">Try widening your search inputs or categories tab filter.</p>
          </div>
        )}

      </div>
    </section>
  );
}

export default Project;

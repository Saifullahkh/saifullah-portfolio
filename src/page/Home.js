import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { FiDownload, FiArrowRight, FiLayout, FiLayers, FiShoppingCart, FiGlobe, FiCpu } from 'react-icons/fi';
import '../App.css';
import saif from '../assets/saif.png';
import SocialIcons from '../component/SocialIcons';
import { projects } from '../data/data';

function Home() {
  // Capture top 3 projects as featured
  const featuredProjects = projects.slice(0, 3);

  const services = [
    {
      num: '01',
      icon: <FiLayers className="service-icon" />,
      title: "Full-Stack Web Applications",
      description: "Building scalable web solutions end-to-end. Combining powerful Laravel backends with interactive React frontends to bring web platforms to life.",
      link: "/skills"
    },
    {
      num: '02',
      icon: <FiShoppingCart className="service-icon" />,
      title: "E-Commerce Solutions & Portals",
      description: "Engineering tailored online stores, catalog systems, secure checkout flows, and Stripe payment gateway integrations with automated webhooks.",
      link: "/skills"
    },
    {
      num: '03',
      icon: <FiLayout className="service-icon" />,
      title: "Custom Web Portals & Dashboards",
      description: "Developing client/admin dashboards with Role-Based Access Control (RBAC), data management, dynamic tables, and custom analytics workflows.",
      link: "/skills"
    },
    {
      num: '04',
      icon: <FiCpu className="service-icon" />,
      title: "REST APIs & Third-Party Integration",
      description: "Designing secure RESTful APIs (Sanctum/JWT), connecting external third-party tools, and integrating automated messaging services like WhatsApp API.",
      link: "/skills"
    }
  ];

  return (
    <div className="homepage-wrapper">
      {/* 1. HERO SECTION */}
      <section className="hero-section d-flex align-items-center" id="home">
        <div className="container">
          <div className="row align-items-center min-vh-90 py-5">
            {/* Text Content */}
            <div className="col-lg-7 ps-lg-5 order-2 order-lg-1 mt-5 mt-lg-0">
              <span className="badge-tech mb-3">Welcome to my portfolio</span>
              <h1 className="hero-title mb-2">
                Hi, I'm <span className="gradient-text">Saif Ullah Khan</span>
              </h1>
              <h2 className="typewriter-container mb-4">
                <span className="me-2 text-dark font-weight-normal">And I'm a</span>
                <span className="type-writer text-teal">
                  <Typewriter
                    options={{
                      strings: ['Full Stack Developer', 'React.js Developer', 'Laravel Developer', 'UI Specialist'],
                      autoStart: true,
                      loop: true,
                      cursor: '|',
                    }}
                  />
                </span>
              </h2>

              <p className="hero-description mb-4">
                I build high-performance, interactive, and user-centric web applications.
                Specializing in turning complex problems into elegant digital solutions with modern frontend technologies.
              </p>

              <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-4 mt-5">
                <SocialIcons />
                <div className="divider d-none d-sm-block"></div>
                <button onClick={() => alert("CV Download link clicked")} className="btn-download-wrapper text-decoration-none border-0">
                  <span className="btn-download-text">Download CV</span>
                  <span className="btn-download-icon">
                    <FiDownload />
                  </span>
                </button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="col-lg-5 text-center order-1 order-lg-2">
              <div className="hero-img-wrapper">
                <img
                  src={saif}
                  alt="Saif Ullah Khan"
                  className="img-fluid hero-img"
                />
                <div className="blob-shape"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION ("What I Do") */}
      <section className="home-services-section py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <span className="badge-tech mb-2">My Services</span>
            <h2 className="section-title fw-bold">What I <span className="text-teal">Provide</span></h2>
            <div className="title-line mx-auto"></div>
            <p className="text-muted mt-3 mx-auto" style={{ maxWidth: '520px', fontSize: '0.95rem' }}>
              End-to-end development services tailored to bring your vision to life with modern technologies.
            </p>
          </div>

          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-md-6">
                <div className="svc-pro-card h-100">
                  {/* Number + Icon row */}
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <span className="svc-number">{service.num}</span>
                    <div className="service-icon-box">
                      {service.icon}
                    </div>
                  </div>
                  {/* Divider */}
                  <div className="svc-divider mb-4"></div>
                  {/* Content */}
                  <h4 className="fw-bold mb-3">{service.title}</h4>
                  <p className="text-muted mb-4" style={{ lineHeight: '1.75', fontSize: '0.93rem' }}>{service.description}</p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT SUMMARY */}
      <section className="home-about-summary py-5 bg-light-subtle">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0 text-center text-lg-start">
              <span className="badge-tech mb-2">Meet the Developer</span>
              <h2 className="section-title fw-bold mb-4">Passionate About Creating <br />Pixel-Perfect <span className="text-teal">UIs</span></h2>
              <p className="text-muted mb-4 lead" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                With over a year of experience specializing in React.js and modern frontend UI architectures, I strive to design websites that look premium, feel responsive, and function cleanly.
              </p>

              <div className="d-flex justify-content-center justify-content-lg-start gap-4 mb-4">
                <div className="stat-sm-box">
                  <h3 className="fw-bold text-teal mb-0">1+</h3>
                  <small className="text-muted">Years Exper.</small>
                </div>
                <div className="stat-sm-box">
                  <h3 className="fw-bold text-teal mb-0">20+</h3>
                  <small className="text-muted">Projects Completed</small>
                </div>
              </div>

              <Link to="/about" className="btn-read-more text-decoration-none mt-3">
                More About Me <span className="ms-1">&rarr;</span>
              </Link>
            </div>

            <div className="col-lg-6 ps-lg-5">
              <div className="terminal-preview-card shadow-lg">
                <div className="terminal-header d-flex align-items-center px-3 py-2 bg-dark">
                  <div className="dots d-flex gap-2">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <span className="text-muted ms-3 small">developer.json</span>
                </div>
                <div className="terminal-body p-4 bg-dark text-light font-monospace small">
                  <pre className="mb-0">
                    {`{
  "name": "Saif Ullah Khan",
  "role": "Full Stack Developer",
  "location": "Islamabad, Pakistan",
  "philosophy": "Write clean UI, optimize React code regularly",
  "learning": ["Next.js", "Server Component Optimization"],
  "focus": "Delivering premium aesthetics and fast layouts"
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS */}
      <section className="home-featured-projects py-5">
        <div className="container py-5">
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mb-5 text-center text-sm-start">
            <div>
              <span className="badge-tech mb-2">My Best Works</span>
              <h2 className="section-title fw-bold m-0">Featured <span className="text-teal">Projects</span></h2>
            </div>
            <Link to="/projects" className="btn-normal-link text-decoration-none mt-3 mt-sm-0">
              View All Projects <FiArrowRight className="ms-2" />
            </Link>
          </div>

          <div className="row g-4">
            {featuredProjects.map((project) => (
              <div key={project.id} className="col-md-6 col-lg-4">
                <div className="glass-project-card h-100 d-flex flex-column">
                  <div className="card-image-wrapper">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="card-img-main"
                    />
                  </div>

                  <div className="card-content-wrapper p-4 flex-grow-1 d-flex flex-column justify-content-between">
                    <div>
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h4 className="fw-bold project-title m-0">{project.title}</h4>
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noreferrer"
                          className="link-circle"
                        >
                          <FiGlobe />
                        </a>
                      </div>
                      <p className="project-desc-text text-muted small mb-4">
                        {project.description.substring(0, 110)}...
                      </p>
                    </div>

                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-modern-link mt-auto pt-3 border-top"
                    >
                      Visit Site <FiArrowRight className="ms-2 arrow-icon" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WORK WITH ME / CTA SECTION */}
      <section className="home-cta-section py-5">
        <div className="container py-4">
          <div className="cta-gradient-box text-center p-5 rounded-5 shadow-lg text-white position-relative overflow-hidden">
            <div className="cta-bubble-1"></div>
            <div className="cta-bubble-2"></div>

            <h2 className="display-5 fw-bold mb-3 position-relative z-index-2">Let's Create Something Outstanding</h2>
            <p className="lead mb-4 position-relative z-index-2 mx-auto" style={{ maxWidth: '600px', opacity: 0.9 }}>
              Have a web application concept or design that needs to be brought to life? Let's discuss details and turn it into real-world code.
            </p>
            <Link to="/contact" className="btn-cta-main position-relative z-index-2 text-decoration-none">
              Start a Conversation <FiArrowRight className="ms-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
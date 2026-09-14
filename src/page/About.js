import React from "react";
import { FiBriefcase, FiBookOpen, FiStar, FiHeart, FiCpu } from "react-icons/fi";
import "../App.css";

function About() {
  const experiences = [
    {
      role: "React.js Developer",
      company: "Contract / Freelance Projects",
      years: "2025 - Present",
      description: "Engineered high-performance Single Page Applications (SPAs) using React.js. Created dynamic frontends with state management, react hooks, and seamless integrations of RESTful services."
    },
    {
      role: "Frontend Web Apprentice",
      company: "Self-Project Implementations",
      years: "2024 - 2025",
      description: "Crafted 20+ applications range from travel guides and e-commerce stores to admin analytical dashboards. Developed modular styled systems and robust responsive UIs using Bootstrap and Tailwind."
    }
  ];

  const education = [
    {
      degree: "Academic Studies / Specialization in IT",
      institution: "Modern Computing Track & Online Certifications",
      years: "2023 - 2024",
      description: "Learned deep fundamentals of core software engineering, data structures, UI methodologies, Javascript modules, package managers, and component architectures."
    }
  ];

  const values = [
    {
      icon: <FiCpu className="value-icon" />,
      title: "Clean Code",
      text: "Writing maintainable, clean Javascript and well-documenting code systems."
    },
    {
      icon: <FiHeart className="value-icon" />,
      title: "User-First UX",
      text: "Fostering beautiful micro-interactions, layout transitions, and intuitive pathways for visitors."
    },
    {
      icon: <FiStar className="value-icon" />,
      title: "Performance Glow",
      text: "Minimizing bundle loads, lazy loading components, and compiling high-efficiency render structures."
    }
  ];

  return (
    <section className="about-page-wrapper py-5">
      <div className="container py-4">

        {/* Intro Section */}
        <div className="row align-items-center mb-5 pb-4">
          {/* Left Text Content */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <span className="badge-tech mb-2">My Biography</span>
            <h2 className="fw-bold display-5 mb-3">
              About <span className="text-teal">Me</span>
            </h2>
            <h4 className="mb-4 fw-semibold text-dark">
              Transforming ideas into <span className="text-teal">Interactive Reality</span>
            </h4>
            <p className="text-muted lh-lg mb-4">
              I am a passionate Full Stack Developer based in Pakistan. My journey started with a curiosity for how things work on the web, which turned into a career in crafting scalable web applications end-to-end. I specialize in building beautiful React frontends, powerful Laravel backends, and efficient MySQL databases — delivering complete, full-cycle digital solutions.
            </p>

            <div className="about-stats d-flex gap-4 mb-4">
              <div className="stat-card">
                <h3 className="fw-bold text-teal mb-0">1+</h3>
                <small className="text-muted font-weight-bold">Years Experience</small>
              </div>
              <div className="vr"></div>
              <div className="stat-card">
                <h3 className="fw-bold text-teal mb-0">20+</h3>
                <small className="text-muted font-weight-bold">Projects Built</small>
              </div>
            </div>
          </div>

          {/* Right Content: Professional Code Terminal */}
          <div className="col-lg-6 ps-lg-5">
            <div className="code-window shadow-lg">
              <div className="code-header d-flex align-items-center px-3">
                <div className="dots d-flex gap-2">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="tab-name text-white ms-3 small">about_me.js</div>
              </div>
              <div className="code-body p-4">
                <pre className="overflow-hidden mb-0" style={{ overflow: 'hidden' }}>
                  <code>
                    <span className="code-keyword">const</span>{" "}
                    <span className="code-var">developer</span> = {"{"}
                    <br />&nbsp;&nbsp;name: <span className="code-string">'Saif Ullah Khan'</span>,
                    <br />&nbsp;&nbsp;role: <span className="code-string">'Full Stack Developer'</span>,
                    <br />&nbsp;&nbsp;skills: [<span className="code-string">'React'</span>, <span className="code-string">'Laravel'</span>, <span className="code-string">'MySQL'</span>],
                    <br />&nbsp;&nbsp;passion: <span className="code-string">'Pixel Perfect UI'</span>,
                    <br />&nbsp;&nbsp;location: <span className="code-string">'Pakistan'</span>
                    <br />{"}"};
                    <br />
                    <br />
                    <span className="code-comment">{"// Continuous learning state"}</span>
                    <br />
                    <span className="code-var">developer</span>.learn(<span className="code-string">'Next.js'</span>);
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy / Values section */}
        <div className="row g-4 mb-5 py-4">
          <div className="text-center mb-4">
            <span className="badge-tech mb-2">My Principles</span>
            <h3 className="fw-bold">My Programming <span className="text-teal">Philosophy</span></h3>
            <div className="title-line mx-auto"></div>
          </div>
          {values.map((v, i) => (
            <div className="col-md-4" key={i}>
              <div className="service-glass-card p-4 h-100 text-center text-sm-start">
                <div className="service-icon-box mb-4 mx-auto mx-sm-0">
                  {v.icon}
                </div>
                <h4 className="fw-bold mb-3">{v.title}</h4>
                <p className="text-muted small mb-0" style={{ lineHeight: '1.7' }}>{v.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Experience & Education Timeline */}
        <div className="timeline-section pt-5 pb-4">
          <div className="text-center mb-5">
            <span className="badge-tech px-3 py-2 rounded-pill mb-2 d-inline-block text-uppercase letter-spacing-1">
              My Journey
            </span>
            <h3 className="fw-bold display-6 mb-2">
              Experience & <span className="text-teal">Education</span>
            </h3>
            <div className="title-line mx-auto rounded-pill mb-3" style={{ width: "60px", height: "4px", background: "var(--primary-gradient)" }}></div>
          </div>

          <div className="row g-4 g-lg-5">
            {/* Experience Panel */}
            <div className="col-lg-6">
              <div className="d-flex align-items-center mb-4">
                <div className="icon-wrapper p-3 rounded-3 text-white me-3 shadow-sm d-flex align-items-center justify-content-center" style={{ width: "48px", height: "48px", background: "var(--primary-gradient)" }}>
                  <FiBriefcase className="fs-4" />
                </div>
                <div>
                  <h4 className="fw-bold m-0 text-dark">Professional Experience</h4>
                  <span className="text-muted small">Hands-on industry expertise</span>
                </div>
              </div>

              <div className="custom-timeline ps-4 position-relative ms-2">
                {/* Experience Item 1 */}
                <div className="timeline-item mb-4 position-relative">
                  <div className="timeline-dot rounded-circle position-absolute start-0 translate-middle" style={{ width: "14px", height: "14px", left: "-1px", background: "var(--primary-color)" }}></div>
                  <div className="timeline-card p-4 ms-2">
                    <div className="d-flex justify-content-between align-items-start mb-3 flex-wrap gap-2">
                      <span className="badge-tech fw-bold px-3 py-2 rounded-pill small">
                        03/2025 - Present
                      </span>
                      <span className="badge bg-light-subtle text-secondary border border-light-subtle fw-normal">Full-Time</span>
                    </div>
                    <h5 className="fw-bold text-dark m-0 fs-5">Full Stack Developer</h5>
                    <span className="text-teal fw-semibold small d-block mb-3">EdenSpell Technology</span>
                    <ul className="text-muted small ps-3 mb-0 d-flex flex-column gap-2">
                      <li>Engineered dynamic web interfaces and scaled full-stack solutions using HTML, CSS, JS, Laravel, and MySQL.</li>
                      <li>Integrated payment gateway solutions with transaction processing, webhook handling, and verification flows.</li>
                      <li>Optimized database structures with Eloquent ORM to improve application responsiveness and efficiency.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Panel */}
            <div className="col-lg-6">
              <div className="d-flex align-items-center mb-4">
                <div className="icon-wrapper p-3 rounded-3 text-white me-3 shadow-sm d-flex align-items-center justify-content-center" style={{ width: "48px", height: "48px", background: "var(--primary-gradient)" }}>
                  <FiBookOpen className="fs-4" />
                </div>
                <div>
                  <h4 className="fw-bold m-0 text-dark">Education Background</h4>
                  <span className="text-muted small">Academic foundation</span>
                </div>
              </div>

              <div className="custom-timeline ps-4 position-relative ms-2">
                {/* Education Item 1 */}
                <div className="timeline-item mb-4 position-relative">
                  <div className="timeline-dot rounded-circle position-absolute start-0 translate-middle" style={{ width: "14px", height: "14px", left: "-1px", background: "var(--primary-color)" }}></div>
                  <div className="timeline-card p-4 ms-2">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <span className="badge-tech fw-bold px-3 py-2 rounded-pill small">
                        Graduated 2023
                      </span>
                    </div>
                    <h5 className="fw-bold text-dark m-0 fs-5">Bachelor of Computer Science</h5>
                    <span className="text-teal fw-semibold small d-block mb-2">Islamia College University of Peshawar</span>
                    <p className="text-muted small mb-0">
                      Focused on computer science fundamentals, algorithm design, software engineering practices, and web system development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;

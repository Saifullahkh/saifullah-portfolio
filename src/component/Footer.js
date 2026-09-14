import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiChevronRight } from 'react-icons/fi';
import SocialIcons from './SocialIcons';
import '../App.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-modern py-5 position-relative mt-5">
      {/* Top glowing orange border */}
      <div className="footer-top-border"></div>

      <div className="container pt-4">
        <div className="row g-4 g-lg-5 mb-5">
          {/* Logo & Summary */}
          <div className="col-lg-5 col-md-12">
            <div className="footer-brand mb-3">
              <Link to="/" className="text-decoration-none text-light fw-bold fs-3 letter-spacing-1">
                SAIF <span className="text-accent">ULLAH</span>
              </Link>
            </div>
            <p className="text-muted mb-4 footer-description" style={{ maxWidth: '400px', fontSize: '0.9rem', lineHeight: '1.7' }}>
              A passionate Full Stack Developer specializing in crafting end-to-end web solutions — from pixel-perfect React frontends to powerful Laravel backends and MySQL databases.
            </p>
            <div className="d-flex align-items-center">
              <SocialIcons />
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="col-lg-3 col-sm-6 col-6">
            <h5 className="text-light fw-bold mb-4 footer-section-title">Quick Links</h5>
            <ul className="list-unstyled footer-link-list d-flex flex-column gap-2">
              <li>
                <Link to="/" className="footer-link d-flex align-items-center">
                  <FiChevronRight className="me-2 link-arrow" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link d-flex align-items-center">
                  <FiChevronRight className="me-2 link-arrow" /> About Me
                </Link>
              </li>
              <li>
                <Link to="/skills" className="footer-link d-flex align-items-center">
                  <FiChevronRight className="me-2 link-arrow" /> Skills
                </Link>
              </li>
              <li>
                <Link to="/projects" className="footer-link d-flex align-items-center">
                  <FiChevronRight className="me-2 link-arrow" /> Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link d-flex align-items-center">
                  <FiChevronRight className="me-2 link-arrow" /> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Address/Contact Details */}
          <div className="col-lg-4 col-sm-6 col-6">
            <h5 className="text-light fw-bold mb-4 footer-section-title">Get In Touch</h5>
            <ul className="list-unstyled footer-contact-list d-flex flex-column gap-3 fs-6">
              <li className="d-flex align-items-center gap-3 text-muted">
                <div className="footer-contact-icon">
                  <FiMail />
                </div>
                <div>
                  <small className="d-block text-secondary" style={{ fontSize: '0.75rem' }}>Write to me</small>
                  <a href="mailto:saifullahkh484@gmail.com" className="text-light text-decoration-none contact-link">
                    saifullahkh484@gmail.com
                  </a>
                </div>
              </li>
              <li className="d-flex align-items-center gap-3 text-muted">
                <div className="footer-contact-icon">
                  <FiPhone />
                </div>
                <div>
                  <small className="d-block text-secondary" style={{ fontSize: '0.75rem' }}>WhatsApp</small>
                  <a href="tel:+923322051851" className="text-light text-decoration-none contact-link">
                    +92 332 2051851
                  </a>
                </div>
              </li>
              <li className="d-flex align-items-center gap-3 text-muted">
                <div className="footer-contact-icon">
                  <FiMapPin />
                </div>
                <div>
                  <small className="d-block text-secondary" style={{ fontSize: '0.75rem' }}>Residence</small>
                  <span className="text-light">Islamabad, Pakistan</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="footer-bottom border-top pt-4 d-flex flex-column flex-md-row align-items-center justify-content-between text-center text-md-start">
          <p className="mb-0 text-muted small">
            © {currentYear} Saif Ullah Khan. All rights reserved.
          </p>
          <p className="mb-0 text-muted small mt-2 mt-md-0">
            Crafted with passion & React
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
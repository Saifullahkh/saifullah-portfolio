import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import '../App.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Scroll effect to change header appearance (especially on Home)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'nav-scrolled' : 'nav-transparent-multi'}`}>
      <div className="container px-md-5">
        <Link className="navbar-brand fw-bold" to="/" onClick={closeMenu}>
          SAIF <span className="text-accent">ULLAH</span>
        </Link>

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <HiX className="toggle-icon" />
          ) : (
            <HiMenuAlt3 className="toggle-icon" />
          )}
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {navItems.map((item) => (
              <li className="nav-item" key={item.name}>
                <NavLink
                  className={({ isActive }) => `nav-link px-3 ${isActive ? 'active-nav-link' : ''}`}
                  to={item.path}
                  onClick={closeMenu}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li className="nav-item ms-lg-3 my-3 my-lg-0">
              <Link to="/contact" className="btn-nav-cta text-decoration-none" onClick={closeMenu}>
                Let's Talk
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
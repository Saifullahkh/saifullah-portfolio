import React from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaPhp, FaLaravel} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMysql } from 'react-icons/si';
import { MdPalette } from 'react-icons/md';
import '../App.css';

function Skill() {
    const skills = [
        { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26', level: 95, category: 'Core Languages', desc: 'Semantic tags, SEO configurations, and standard markup styling.' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6', level: 90, category: 'Core Languages', desc: 'Flexbox, CSS Grids, custom properties, styling animations.' },
        { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E', level: 88, category: 'Core Languages', desc: 'ES6+ features, asynchronous actions, DOM API integrations.' },
        { name: 'PHP', icon: <FaPhp />, color: '#777BB4', level: 85, category: 'Core Languages', desc: 'Server-side scripting, REST API development, and backend logic.' },
        { name: 'MySQL', icon: <SiMysql />, color: '#4479A1', level: 82, category: 'Core Languages', desc: 'Relational database design, queries, joins, and Eloquent ORM.' },
        { name: 'React.js', icon: <FaReact />, color: '#61DAFB', level: 92, category: 'Frameworks & Libraries', desc: 'Functional hooks, side effects, Context API logic, custom routers.' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: '#a8a8a8', level: 80, category: 'Frameworks & Libraries', desc: 'Static generation, server-rendered views, routing system folders.' },
        { name: 'Laravel', icon: <FaLaravel />, color: '#FF2D20', level: 85, category: 'Frameworks & Libraries', desc: 'MVC architecture, Eloquent ORM, RESTful APIs, and Blade templating.' },
        { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3', level: 90, category: 'Styling & Toolkits', desc: 'Responsive flex components, grid structures, layout wrappers.' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4', level: 85, category: 'Styling & Toolkits', desc: 'Atomic styles, state transitions, media break conditions.' },
        { name: 'Material UI', icon: <MdPalette />, color: '#007FFF', level: 80, category: 'Styling & Toolkits', desc: 'Pre-engineered inputs, system themes, modal templates.' },
    ];


    return (
        <section className="skill-page-wrapper py-5">
            <div className="container py-4">

                {/* Title */}
                <div className="text-center mb-5">
                    <span className="badge-tech mb-2">My Expertise</span>
                    <h2 className="display-5 fw-bold text-dark">Technical <span className="text-teal">Skills</span></h2>
                    <div className="title-line mx-auto"></div>
                    <p className="text-muted mt-3 max-width-xs mx-auto">
                        A comprehensive overview of my coding environment, frameworks, and layout engines.
                    </p>
                </div>

                <div className="row g-5 align-items-center">

                    {/* Interactive Skill Orbit visualization */}
                    <div className="col-12 text-center">
                        <div className="orbit-wrapper-box p-4 position-relative overflow-hidden">
                            <h5 className="fw-bold mb-4 text-teal text-uppercase" style={{ letterSpacing: '2px' }}>Interactive View</h5>

                            <div className="skills-orbit-container">
                                <div className="center-skill">
                                    <h4 className="center-title">Skills</h4>
                                    <small className="center-subtitle">Hover Orbit</small>
                                </div>

                                {skills.map((skill, index) => (
                                    <div className="skill-orbit" key={index} style={{ '--i': index }}>
                                        <div className="skill-card-orbit" style={{ '--skill-color': skill.color }}>
                                            <div className="icon-box" style={{ color: skill.color }}>
                                                {skill.icon}
                                            </div>
                                            <h5 className="skill-label">{skill.name}</h5>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Skill;
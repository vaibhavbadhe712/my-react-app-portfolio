import { motion } from 'framer-motion';
import { Github, Folder, ExternalLink } from 'lucide-react';
import '../styles/Projects.css';

const Projects = () => {
    const projects = [
    {
        title: "Janhit",
        desc: "A government-focused mobile application designed to manage vendors, services, and operational workflows efficiently, ensuring transparency and smooth coordination between departments.",
        tech: ["Flutter", "GetX", "Firebase"],
        bgStart: "#3b82f6",
        bgEnd: "#8b5cf6",
        link: "https://play.google.com/store/apps/details?id=com.government.janhit"
    },
    {
        title: "TreeCoin",
        desc: "A fintech mobile application that enables users to monitor investments, track crypto portfolios, and view financial insights through secure and scalable APIs.",
        tech: ["Flutter", "BLoC", "REST API"],
        bgStart: "#10b981",
        bgEnd: "#14b8a6",
        link: "https://play.google.com/store/apps/details?id=com.treecoin.app"
    },
    {
        title: "Baap CRM",
        desc: "A lightweight CRM solution built for small businesses to manage customers, leads, and sales activities with a clean UI and efficient data handling.",
        tech: ["Flutter", "Provider", "Node.js"],
        bgStart: "#a855f7",
        bgEnd: "#ec4899",
        link: "https://play.google.com/store/apps/details?id=com.baap.crm.app"
    },
    {
        title: "School Book App",
        desc: "An education-focused mobile application allowing students to access digital books, assignments, and academic resources in a structured and user-friendly way.",
        tech: ["Flutter", "Firebase", "Riverpod"],
        bgStart: "#f59e0b",
        bgEnd: "#f97316",
        link: "https://play.google.com/store/apps/details?id=com.school.book.app"
    },
    {
        title: "OfficeBook HRMS",
        desc: "A complete HRMS mobile solution for managing employee attendance, timesheets, and daily work activities, built for scalability and ease of use.",
        tech: ["Flutter", "GetX", "SQLite"],
        bgStart: "#06b6d4",
        bgEnd: "#3b82f6",
        link: "https://play.google.com/store/apps/details?id=com.baapcompany.officebook.hrms"
    }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                    style={{ marginBottom: '50px' }}
                >
                    <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '20px' }}>
                        Featured <span style={{ color: 'var(--accent-cyan)' }}>Projects</span>
                    </h2>
                    <p className="text-secondary" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        A showcase of my recent work in mobile app development.
                    </p>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div
                                className="project-image"
                                style={{ background: `linear-gradient(135deg, ${project.bgStart}, ${project.bgEnd})` }}
                            >
                                <Folder size={64} color="white" style={{ opacity: 0.5 }} />
                                <div className="project-overlay">
                                    <span style={{ color: 'white', fontWeight: 600 }}>View Details</span>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <div style={{ marginBottom: '15px' }}>
                                    <p className="project-desc">{project.desc}</p>
                                </div>

                                <div className="tech-stack">
                                    {project.tech.map((tag, i) => (
                                        <span key={i} className="tech-tag">{tag}</span>
                                    ))}
                                </div>

                                <div className="projects-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                                    <a href={project.link} className="store-btn" target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={16} /> Play Store
                                    </a>
                                    <a href="#" style={{ color: 'var(--text-secondary)' }}>
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

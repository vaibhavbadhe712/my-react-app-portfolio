import { motion } from 'framer-motion';
import '../styles/Experience.css';
const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="container" style={{ padding: '0 20px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '80px' }}
                >
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '20px' }}>
                        Professional <span style={{ color: 'var(--accent-purple)' }}>Journey</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        My career path and key achievements in the tech industry.
                    </p>
                </motion.div>

               <div className="timeline">
                <motion.div
                    className="timeline-item"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                    <span className="timeline-date">2023 – Present</span>
                    <h3 className="timeline-role">Technical Lead – Flutter</h3>
                    <h4 className="timeline-company">The BAAP Company</h4>
                    <p style={{ marginBottom: '15px' }}>
                        Leading end-to-end mobile application development while mentoring teams and
                        ensuring delivery of production-ready Flutter applications.
                    </p>
                    <ul className="timeline-responsibilities">
                        <li>Led the development of multiple production Flutter apps including HRMS, CRM, finance, and government-focused applications.</li>
                        <li>Designed and implemented scalable architectures using Clean Architecture, MVVM, and modular project structures.</li>
                        <li>Handled complete app lifecycle: requirement analysis, development, testing, Play Store deployment, and post-release support.</li>
                        <li>Integrated Firebase services, REST APIs, file uploads, notifications, and native Android features.</li>
                        <li>Reviewed code, guided junior developers, and ensured performance optimization and best coding practices.</li>
                    </ul>
                    </div>
                </motion.div>

                <motion.div
                    className="timeline-item"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="timeline-dot" style={{ background: 'var(--accent-blue)' }}></div>
                    <div className="timeline-content">
                    <span className="timeline-date" style={{ color: 'var(--accent-blue)' }}>
                        2021 – 2023
                    </span>
                    <h3 className="timeline-role">Flutter Developer</h3>
                    <h4 className="timeline-company">Freelance / Contract</h4>
                    <p style={{ marginBottom: '15px' }}>
                        Worked as an independent Flutter developer delivering custom mobile applications
                        for startups and small businesses.
                    </p>
                    <ul className="timeline-responsibilities">
                        <li>Developed and deployed multiple Flutter applications for Android and iOS platforms.</li>
                        <li>Converted Figma and UI designs into pixel-perfect, responsive Flutter interfaces.</li>
                        <li>Implemented state management using GetX, Provider, and BLoC based on project requirements.</li>
                        <li>Integrated APIs, authentication, local storage, and third-party libraries.</li>
                    </ul>
                    </div>
                </motion.div>


                </div>
            </div>
        </section>
    );
};

export default Experience;

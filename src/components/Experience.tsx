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
                            <span className="timeline-date">2023 - Present</span>
                            <h3 className="timeline-role">Technical Lead – Flutter</h3>
                            <h4 className="timeline-company">The BAAP Company</h4>
                            <p style={{ marginBottom: '15px' }}>
                                Leading the mobile development team to deliver scalable and high-performance applications.
                            </p>
                            <ul className="timeline-responsibilities">
                                <li>Architected and developed complex Flutter applications like Simply (VMS) and TreeCoin.</li>
                                <li>Implemented clean architecture principles (MVVM/Clean) ensuring code maintainability.</li>
                                <li>Optimized app performance, reducing load times by 40% and improving frame rates.</li>
                                <li>Mentored junior developers and conducted code reviews to maintain high quality standards.</li>
                                <li>Integrated advanced features using Firebase, REST APIs, and native platform channels.</li>
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
                            <span className="timeline-date" style={{ color: 'var(--accent-blue)' }}>2021 - 2023</span>
                            <h3 className="timeline-role">Flutter Developer</h3>
                            <h4 className="timeline-company">Freelance / Contract</h4>
                            <p style={{ marginBottom: '15px' }}>
                                Delivered custom mobile solutions for various clients.
                            </p>
                            <ul className="timeline-responsibilities">
                                <li>Developed and deployed 5+ mobile applications to Play Store and App Store.</li>
                                <li>Collaborated with designers to translate Figma designs into pixel-perfect code.</li>
                                <li>Implemented state management solutions using Provider and GetX.</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

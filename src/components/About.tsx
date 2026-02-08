import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Palette } from 'lucide-react';
import '../styles/About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="about-content"
                >
                    <div className="about-image">
                        <div className="placeholder-img">
                            {/* In a real app, this would be an image of Vaibhav */}
                            <User size={64} style={{ opacity: 0.2 }} />
                        </div>
                    </div>

                    <div className="about-text">
                        <h2 className="about-heading">About <span>Me</span></h2>
                        <p className="about-desc">
                            Hello! I'm Vaibhav Badhe, a passionate Flutter Developer based in Sangamner, Maharashtra.
                            I specialize in building high-performance, scalable mobile applications with a focus on clean
                            architecture and delightful user experiences.
                        </p>
                        <p className="about-desc">
                            With extensive experience in Dart, Firebase, and State Management (GetX, BLoC, Provider),
                            I turn complex problems into elegant, user-friendly solutions. I currently work as a
                            Technical Lead at The BAAP Company, mentoring teams and driving technical excellence.
                        </p>

                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">3+</span>
                                <span className="stat-label">Years Exp.</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Projects</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">5+</span>
                                <span className="stat-label">Happy Clients</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="flex justify-center gap-10 mt-16 flex-wrap"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="text-center">
                        <Code size={40} color="var(--accent-blue)" />
                        <h3 className="mt-2 text-lg font-semibold">Clean Code</h3>
                    </div>
                    <div className="text-center">
                        <Palette size={40} color="var(--accent-purple)" />
                        <h3 className="mt-2 text-lg font-semibold">Premium UI</h3>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

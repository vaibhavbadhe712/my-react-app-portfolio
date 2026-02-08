import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css';

const Skills = () => {
    const skills = [
        {
            category: "Core Technologies",
            items: ["Flutter", "Dart", "Android", "iOS", "Clean Architecture"]
        },
        {
            category: "State Management",
            items: ["GetX", "BLoC", "Cubit", "Provider"]
        },
        {
            category: "Backend & Services",
            items: ["Firebase", "REST APIs", "Cloud Functions", "GraphQL"]
        },
        {
            category: "Tools & DevOps",
            items: ["Git", "GitHub", "GitLab", "Bitbucket", "CI/CD", "Jira"]
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title text-3xl font-bold mb-4">Technical <span className="text-cyan-400">Skills</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My expertise lies in building robust mobile applications using the Flutter ecosystem.
                    </p>
                    <br />
                </motion.div>

                <div className="container skills-wrapper">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            className="skills-category"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="category-title">{skillGroup.category}</h3>
                            <div className="skills-grid">
                                {skillGroup.items.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="skill-card"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className="skill-name">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

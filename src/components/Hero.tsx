import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
    // Typing effect can be complex, for now let's use a nice fade/slide
    return (
        <section id="home" className="hero-section">
            <div className="bg-circle circle-1 animate-float"></div>
            <div className="bg-circle circle-2 animate-float" style={{ animationDelay: '2s' }}></div>

            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl text-cyan-400 font-semibold mb-4">Hello, I'm</h2>
                    <h1 className="hero-title">
                        Vaibhav Badhe
                    </h1>
                    <div className="hero-role">
                        <span className="text-gradient">Flutter Developer | Mobile App Engineer</span>
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg leading-relaxed"
                >
                    Crafting high-performance cross-platform mobile experiences with a focus on clean code and premium UI design.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="hero-cta"
                >
                    <a href="#projects" className="btn btn-primary">
                        View Projects
                    </a>

                    <a href="/Vaibhav_Badhe.pdf" className="download-btn" download>
                        <Download size={20} />
                        Resume
                    </a>

                    <a href="#contact" className="contact-btn">
                        Let's Talk
                    </a>
                </motion.div>
                <br />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="flex justify-center gap-6 mt-16 pt-4"
                >
                    <a href="https://github.com/vaibhavbadhe712" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><Github size={24} /></a>
                    <a href="https://www.linkedin.com/in/vaibhav-badhe-52513331b/" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
                    <a href="mailto:vaibhavbadhe2004@gmail.com" className="text-gray-400 hover:text-white transition-colors"><Mail size={24} /></a>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 animate-bounce"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                <ArrowDown size={24} />
            </motion.div>
        </section>
    );
};

export default Hero;

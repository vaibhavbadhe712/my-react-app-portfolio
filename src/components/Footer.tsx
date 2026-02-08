import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="footer">
            <div className="container" style={{ position: 'relative' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '30px' }}
                >
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '10px' }}>
                        Vaibhav Badhe<span style={{ color: 'var(--accent-cyan)' }}>.</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '400px', margin: '0 auto' }}>
                        Building digital experiences that matter with clean code and pixel-perfect design.
                    </p>
                </motion.div>

                <div className="footer-socials">
                    <a href="https://github.com/vaibhavbadhe712" className="social-icon" target="_blank" rel="noopener noreferrer">
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/vaibhav-badhe-52513331b/" className="social-icon" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={24} />
                    </a>
                </div>

                <div className="footer-nav">
                    <a href="#home" className="footer-link">Home</a>
                    <a href="#about" className="footer-link">About</a>
                    <a href="#projects" className="footer-link">Projects</a>
                    <a href="#contact" className="footer-link">Contact</a>
                </div>

                <div className="footer-copyright">
                    <p>&copy; {new Date().getFullYear()} Vaibhav Badhe. All rights reserved.</p>
                </div>

                <motion.button
                    onClick={scrollToTop}
                    className="scroll-top"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <ArrowUp size={24} color="white" />
                </motion.button>
            </div>
        </footer>
    );
};

export default Footer;

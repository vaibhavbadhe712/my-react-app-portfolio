import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Implement form submission logic
        alert("Thanks for reaching out! I'll get back to you soon.");
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title text-3xl font-bold mb-4">Get In <span className="text-cyan-400">Touch</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or want to discuss Flutter development? Let's chat!
                    </p>
                </motion.div>

                <div className="contact-container">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                    <h3 className="text-2xl font-bold">Let's calculate your next project</h3>
                    <br />
                        <div className="contact-detail">
                            <div className="contact-icon"><Mail size={24} /></div>
                            <div>
                                <h4 className="font-semibold">Email</h4>
                                <a href="mailto:vaibhavbadhe2004@gmail.com" className="text-gray-400 hover:text-white transition-colors">vaibhavbadhe2004@gmail.com</a>
                            </div>
                        </div>

                        <div className="contact-detail">
                            <div className="contact-icon"><Phone size={24} /></div>
                            <div>
                                <h4 className="font-semibold">Phone</h4>
                                <a href="tel:+918624872310" className="text-gray-400 hover:text-white transition-colors">+91 8624872310</a>
                            </div>
                        </div>

                        <div className="contact-detail">
                            <div className="contact-icon"><MapPin size={24} /></div>
                            <div>
                                <h4 className="font-semibold">Location</h4>
                                <p className="text-gray-400">Sangamner, Maharashtra, India</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form-wrapper"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-input" placeholder="Your Name" required />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-input" placeholder="Your Email" required />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Message</label>
                                <textarea className="form-textarea" placeholder="Project details..." required></textarea>
                            </div>

                            <button type="submit" className="submit-btn flex items-center justify-center gap-2">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-grid">
                        {/* Company Info */}
                        <div className="footer-section">
                            <div className="footer-brand">
                                <div className="brand-icon">H</div>
                                <div className="brand-text">
                                    <span className="brand-name">HRITE</span>
                                    <span className="brand-tagline">Real Estate</span>
                                </div>
                            </div>
                            <p className="footer-desc">
                                Your trusted partner in real estate. We transform dreams into reality with quality construction and innovative design solutions.
                            </p>
                            <div className="social-links">
                                <span>Follow us:</span>
                                <div className="social-icons">
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                        <Facebook size={18} />
                                    </a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                        <Instagram size={18} />
                                    </a>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                        <Twitter size={18} />
                                    </a>
                                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                        <Youtube size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Get in Touch */}
                        <div className="footer-section">
                            <h4>Get in Touch</h4>
                            <ul className="footer-contact">
                                <li>
                                    <MapPin size={18} />
                                    <span>Gardani Bagh, Patna 800001</span>
                                </li>
                                <li>
                                    <Mail size={18} />
                                    <a href="mailto:hrite.business@proton.me">hrite.business@proton.me</a>
                                </li>
                                <li>
                                    <Phone size={18} />
                                    <a href="tel:6206733818">62067 33818</a>
                                </li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-section">
                            <h4>Quick Links</h4>
                            <ul className="footer-links">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><Link to="/career">Career</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                            </ul>
                        </div>

                        {/* Our Location */}
                        <div className="footer-section">
                            <h4>Our Location</h4>
                            <div className="footer-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.714!2d85.1376!3d25.6093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM2JzMzLjUiTiA4NcKwMDgnMTUuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                                    width="100%"
                                    height="150"
                                    style={{ border: 0, borderRadius: '12px' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Office Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container footer-bottom-content">
                    <p>&copy; {new Date().getFullYear()} HRITE Real Estate. All rights reserved.</p>
                    <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
                        <ArrowUp size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

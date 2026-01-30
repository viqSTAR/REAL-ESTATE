import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    return (
        <main>
            <section className="page-header">
                <div className="container">
                    <h1>Contact <span className="text-gold">Us</span></h1>
                    <p>Get in touch with us for any inquiries</p>
                </div>
            </section>

            <section className="section contact-page">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <div className="contact-info">
                            <h2>Get In <span className="text-gold">Touch</span></h2>
                            <p className="info-intro">
                                We'd love to hear from you. Whether you have a question about our projects,
                                need assistance, or just want to say hello, feel free to reach out.
                            </p>

                            <div className="info-cards">
                                <div className="info-card glass-card">
                                    <div className="info-icon">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4>Our Office</h4>
                                        <p>Gardani Bagh, Patna 800001<br />Bihar, India</p>
                                    </div>
                                </div>

                                <div className="info-card glass-card">
                                    <div className="info-icon">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4>Phone</h4>
                                        <p><a href="tel:6206733818">62067 33818</a></p>
                                    </div>
                                </div>

                                <div className="info-card glass-card">
                                    <div className="info-icon">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4>Email</h4>
                                        <p><a href="mailto:hrite.business@proton.me">hrite.business@proton.me</a></p>
                                    </div>
                                </div>

                                <div className="info-card glass-card">
                                    <div className="info-icon">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4>Business Hours</h4>
                                        <p>Mon - Sat: 10:00 AM - 7:00 PM<br />Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper glass-card">
                            <h3>Send us a Message</h3>
                            {submitted && (
                                <div className="success-message">
                                    Thank you! Your message has been sent successfully.
                                </div>
                            )}
                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">Your Name</label>
                                        <input
                                            type="text"
                                            className="form-input"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Email Address</label>
                                        <input
                                            type="email"
                                            className="form-input"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">Phone Number</label>
                                        <input
                                            type="tel"
                                            className="form-input"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Subject</label>
                                        <select
                                            className="form-select"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            required
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="general">General Inquiry</option>
                                            <option value="project">Project Information</option>
                                            <option value="career">Career Opportunities</option>
                                            <option value="partnership">Partnership</option>
                                            <option value="feedback">Feedback</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Your Message</label>
                                    <textarea
                                        className="form-textarea"
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Send Message <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="contact-map glass-card">
                        <h3>Find Us</h3>
                        <div className="map-wrapper">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.714!2d85.1376!3d25.6093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM2JzMzLjUiTiA4NcKwMDgnMTUuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="400"
                                style={{ border: 0, borderRadius: '12px' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Office Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;

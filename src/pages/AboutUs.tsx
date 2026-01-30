import { CheckCircle, Target, Eye, Users, Award } from 'lucide-react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <main>
            <section className="page-header">
                <div className="container">
                    <h1>About <span className="text-gold">Us</span></h1>
                    <p>Discover our story, mission, and commitment to excellence</p>
                </div>
            </section>

            <section className="section about-main">
                <div className="container">
                    <div className="about-intro glass-card">
                        <h2>Welcome to HRITE Real Estate</h2>
                        <p className="intro-text">
                            We're delighted to have you explore our world of exceptional construction services.
                            Since our inception, we have upheld a commitment to quality, innovation, and integrity,
                            transforming your dreams into reality.
                        </p>
                        <p>
                            Our experienced team takes pride in crafting spaces that resonate with comfort and elegance.
                            Discover our diverse range of residential and commercial projects that reflect our dedication
                            to excellence. Step into a realm where every brick tells a story of craftsmanship and trust.
                        </p>
                    </div>

                    <div className="values-grid">
                        <div className="value-card glass-card">
                            <div className="value-icon">
                                <Target size={32} />
                            </div>
                            <h3>Our Mission</h3>
                            <p>
                                To deliver exceptional construction services that transform visions into reality,
                                while maintaining the highest standards of quality, safety, and client satisfaction.
                            </p>
                        </div>
                        <div className="value-card glass-card">
                            <div className="value-icon">
                                <Eye size={32} />
                            </div>
                            <h3>Our Vision</h3>
                            <p>
                                To be the most trusted name in real estate, recognized for our innovative designs,
                                sustainable practices, and unwavering commitment to client success.
                            </p>
                        </div>
                    </div>

                    <div className="why-choose-section">
                        <h2>Why Choose <span className="text-gold">HRITE?</span></h2>
                        <div className="features-grid">
                            <div className="feature-box glass-card">
                                <CheckCircle className="feature-check" size={24} />
                                <div>
                                    <h4>Quality Construction</h4>
                                    <p>Premium materials and superior craftsmanship in every project.</p>
                                </div>
                            </div>
                            <div className="feature-box glass-card">
                                <CheckCircle className="feature-check" size={24} />
                                <div>
                                    <h4>Experienced Team</h4>
                                    <p>Industry experts with decades of combined experience.</p>
                                </div>
                            </div>
                            <div className="feature-box glass-card">
                                <CheckCircle className="feature-check" size={24} />
                                <div>
                                    <h4>Timely Delivery</h4>
                                    <p>We respect deadlines and deliver projects on schedule.</p>
                                </div>
                            </div>
                            <div className="feature-box glass-card">
                                <CheckCircle className="feature-check" size={24} />
                                <div>
                                    <h4>Transparent Pricing</h4>
                                    <p>No hidden costs, complete transparency in all dealings.</p>
                                </div>
                            </div>
                            <div className="feature-box glass-card">
                                <CheckCircle className="feature-check" size={24} />
                                <div>
                                    <h4>After-Sales Support</h4>
                                    <p>Continued support even after project completion.</p>
                                </div>
                            </div>
                            <div className="feature-box glass-card">
                                <CheckCircle className="feature-check" size={24} />
                                <div>
                                    <h4>Legal Compliance</h4>
                                    <p>All projects comply with local regulations and standards.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="achievements-section">
                        <h2>Our <span className="text-gold">Achievements</span></h2>
                        <div className="achievements-grid">
                            <div className="achievement-card glass-card">
                                <Users size={40} />
                                <span className="achievement-number">200+</span>
                                <span className="achievement-label">Happy Clients</span>
                            </div>
                            <div className="achievement-card glass-card">
                                <Award size={40} />
                                <span className="achievement-number">50+</span>
                                <span className="achievement-label">Projects Completed</span>
                            </div>
                            <div className="achievement-card glass-card">
                                <Target size={40} />
                                <span className="achievement-number">100%</span>
                                <span className="achievement-label">Client Satisfaction</span>
                            </div>
                            <div className="achievement-card glass-card">
                                <Eye size={40} />
                                <span className="achievement-number">10+</span>
                                <span className="achievement-label">Years Experience</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutUs;

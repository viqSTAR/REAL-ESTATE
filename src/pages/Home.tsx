import HeroSection from '../components/HeroSection';
import TestimonialCarousel from '../components/TestimonialCarousel';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Building2, Home as HomeIcon, Landmark } from 'lucide-react';
import './Home.css';

const projects = [
    {
        id: 'gardani-heights',
        title: 'Gardani Heights',
        location: 'Gardani Bagh, Patna',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop',
        status: 'completed' as const,
        type: 'residential' as const,
    },
    {
        id: 'patna-business-park',
        title: 'Patna Business Park',
        location: 'Bailey Road, Patna',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
        status: 'ongoing' as const,
        type: 'commercial' as const,
    },
    {
        id: 'sunrise-residency',
        title: 'Sunrise Residency',
        location: 'Boring Road, Patna',
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop',
        status: 'upcoming' as const,
        type: 'residential' as const,
    },
];

const Home = () => {
    return (
        <main>
            {/* Hero Section */}
            <HeroSection />

            {/* About Preview Section */}
            <section className="section about-preview">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-content">
                            <span className="section-badge">About Us</span>
                            <h2>Welcome to <span className="text-gold">HRITE Real Estate</span></h2>
                            <p>
                                We're delighted to have you explore our world of exceptional construction services.
                                We uphold a commitment to quality, innovation, and integrity, transforming your dreams into reality.
                            </p>
                            <p>
                                Our experienced team takes pride in crafting spaces that resonate with comfort and elegance.
                                Discover our diverse range of residential and commercial projects that reflect our dedication to excellence.
                            </p>
                            <ul className="about-features">
                                <li><CheckCircle size={20} /> Quality Construction</li>
                                <li><CheckCircle size={20} /> Innovative Designs</li>
                                <li><CheckCircle size={20} /> Timely Delivery</li>
                                <li><CheckCircle size={20} /> Client-Centric Approach</li>
                            </ul>
                            <Link to="/about" className="btn btn-primary">
                                Learn More <ArrowRight size={18} />
                            </Link>
                        </div>
                        <div className="about-image">
                            <div className="image-wrapper glass-card">
                                <img
                                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=500&fit=crop"
                                    alt="Construction Site"
                                />
                            </div>
                            <div className="experience-badge glass-card">
                                <span className="exp-number">10+</span>
                                <span className="exp-text">Years of Excellence</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section services-section">
                <div className="container">
                    <div className="section-title">
                        <span className="section-badge">Our Services</span>
                        <h2>What We Offer</h2>
                        <p>We provide comprehensive real estate solutions tailored to your needs</p>
                    </div>
                    <div className="services-grid">
                        <Link to="/residential" className="service-card glass-card">
                            <div className="service-icon">
                                <HomeIcon size={32} />
                            </div>
                            <h3>Residential Projects</h3>
                            <p>Luxury homes and apartments designed for modern living with premium amenities.</p>
                            <span className="service-link">
                                Explore <ArrowRight size={16} />
                            </span>
                        </Link>
                        <Link to="/commercial" className="service-card glass-card">
                            <div className="service-icon">
                                <Building2 size={32} />
                            </div>
                            <h3>Commercial Projects</h3>
                            <p>Modern office spaces and retail complexes built for business success.</p>
                            <span className="service-link">
                                Explore <ArrowRight size={16} />
                            </span>
                        </Link>
                        <Link to="/government" className="service-card glass-card">
                            <div className="service-icon">
                                <Landmark size={32} />
                            </div>
                            <h3>Government Projects</h3>
                            <p>Infrastructure and public works delivered with precision and compliance.</p>
                            <span className="service-link">
                                Explore <ArrowRight size={16} />
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="section projects-section">
                <div className="container">
                    <div className="section-title">
                        <span className="section-badge">Our Portfolio</span>
                        <h2>Featured Projects</h2>
                        <p>Explore our dedication to quality and innovation</p>
                    </div>
                    <div className="projects-grid">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} {...project} />
                        ))}
                    </div>
                    <div className="text-center mt-xl">
                        <Link to="/projects" className="btn btn-outline">
                            View All Projects <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="section why-us-section">
                <div className="container">
                    <div className="why-us-grid">
                        <div className="why-us-content">
                            <span className="section-badge">Why Choose Us</span>
                            <h2>We Build Buildings with <span className="text-gold">Trust!</span></h2>
                            <p>
                                Our commitment to excellence sets us apart. We combine expertise,
                                innovation, and dedication to deliver projects that exceed expectations.
                            </p>
                            <div className="why-us-features">
                                <div className="feature-item glass-card">
                                    <h4>Expertise & Experience</h4>
                                    <p>Decades of combined experience in construction and real estate development.</p>
                                </div>
                                <div className="feature-item glass-card">
                                    <h4>Innovative Design Solutions</h4>
                                    <p>Cutting-edge architectural designs that blend aesthetics with functionality.</p>
                                </div>
                                <div className="feature-item glass-card">
                                    <h4>Quality Assurance</h4>
                                    <p>Rigorous quality control at every stage of the construction process.</p>
                                </div>
                                <div className="feature-item glass-card">
                                    <h4>On-Time Delivery</h4>
                                    <p>We respect your time and deliver projects within committed timelines.</p>
                                </div>
                            </div>
                        </div>
                        <div className="why-us-image">
                            <img
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=700&fit=crop"
                                alt="Modern Building"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section testimonials-section">
                <div className="container">
                    <div className="section-title">
                        <span className="section-badge">Testimonials</span>
                        <h2>What Our Clients Say</h2>
                        <p>Don't just take our word for it - hear from our satisfied clients</p>
                    </div>
                    <TestimonialCarousel />
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-content glass-card">
                        <h2>Ready to Build Your Dream?</h2>
                        <p>Let's discuss your project and turn your vision into reality.</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary">
                                Get in Touch <ArrowRight size={18} />
                            </Link>
                            <a href="tel:6206733818" className="btn btn-outline">
                                Call Us: 62067 33818
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;

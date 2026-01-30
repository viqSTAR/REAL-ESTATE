import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Users, Award, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
            badge: "Featured Project",
            title: "Premium Residences",
            desc: "Discover our latest luxury residential projects designed for modern living.",
            link: "/residential"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
            badge: "Modern Apartments",
            title: "Urban Heights",
            desc: "Contemporary apartments in the heart of the city with world-class amenities.",
            link: "/residential"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
            badge: "Commercial Hub",
            title: "Tech Park Plaza",
            desc: "State-of-the-art office spaces designed for next-gen businesses.",
            link: "/commercial"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero">
            {/* Background Decorations */}
            <div className="hero-bg-decoration hero-bg-1"></div>
            <div className="hero-bg-decoration hero-bg-2"></div>
            <div className="hero-bg-decoration hero-bg-3"></div>

            {/* Floating Shapes */}
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>

            <div className="container hero-container">
                <div className="hero-content">
                    <span className="hero-badge animate-fade-in-up">
                        ✨ Your Trusted Real Estate Partner
                    </span>
                    <h1 className="hero-title animate-fade-in-up">
                        Where Quality Meets <span className="text-gold">Innovation</span>
                    </h1>
                    <p className="hero-subtitle animate-fade-in-up">
                        HRITE Real Estate - Building dreams into reality with excellence,
                        integrity, and innovative design solutions since day one.
                    </p>
                    <div className="hero-buttons animate-fade-in-up">
                        <Link to="/projects" className="btn btn-primary">
                            View Projects <ArrowRight size={18} />
                        </Link>
                        <Link to="/contact" className="btn btn-outline">
                            Contact Us
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="hero-stats animate-fade-in-up">
                        <div className="stat-item">
                            <div className="stat-icon">
                                <Building2 size={24} />
                            </div>
                            <div className="stat-info">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Projects Completed</span>
                            </div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-icon">
                                <Users size={24} />
                            </div>
                            <div className="stat-info">
                                <span className="stat-number">200+</span>
                                <span className="stat-label">Happy Clients</span>
                            </div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-icon">
                                <Award size={24} />
                            </div>
                            <div className="stat-info">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-icon">
                                <Briefcase size={24} />
                            </div>
                            <div className="stat-info">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Client Satisfaction</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero Image/Card Slider */}
                <div className="hero-visual">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`hero-card glass-card ${index === currentSlide ? 'active' : ''}`}
                        >
                            <div className="hero-card-image">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                />
                                <div className="hero-card-overlay">
                                    <span className="card-badge">{slide.badge}</span>
                                </div>

                                {/* Navigation Arrows - Embedded in Image */}
                                <button
                                    className="slider-arrow prev"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        prevSlide();
                                    }}
                                    aria-label="Previous Slide"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    className="slider-arrow next"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        nextSlide();
                                    }}
                                    aria-label="Next Slide"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                            <div className="hero-card-content">
                                <h3>{slide.title}</h3>
                                <p>{slide.desc}</p>
                                <Link to={slide.link} className="card-link">
                                    Explore <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}

                    {/* Slider Dots */}
                    <div className="slider-dots" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        marginTop: '1.5rem',
                        position: 'absolute',
                        bottom: '-40px',
                        left: '0',
                        right: '0'
                    }}>
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                style={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    border: 'none',
                                    background: index === currentSlide ? 'var(--secondary)' : 'rgba(0,0,0,0.2)',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

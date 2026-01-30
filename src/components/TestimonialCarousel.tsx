import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import './TestimonialCarousel.css';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Rajesh Verma',
        role: 'Homeowner',
        content: 'As a first-time homebuyer, I was apprehensive about the whole process. But HRITE made it seamless. Their professionalism, transparency, and commitment to quality ensured that our dream home became a reality.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    },
    {
        id: 2,
        name: 'Sneha Gupta',
        role: 'Business Owner',
        content: 'I wanted a commercial space that was not just functional but also aesthetically pleasing. HRITE Real Estate delivered exactly that. Their efficient planning and timely execution truly impressed me.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    },
    {
        id: 3,
        name: 'Amit Kumar',
        role: 'Property Investor',
        content: "I can't thank HRITE enough for making our renovation project hassle-free. Their team managed the entire process smoothly, and the final outcome was beyond what we imagined.",
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    },
    {
        id: 4,
        name: 'Pooja Sharma',
        role: 'Homeowner',
        content: "HRITE's approach is truly client-centric. They took the time to understand our preferences and integrated them flawlessly into the design. The end result was a home that truly felt like 'ours'.",
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    },
    {
        id: 5,
        name: 'Naveen Choudhary',
        role: 'Homeowner',
        content: "HRITE Real Estate made our dream of a beautiful home a reality. Their expertise and attention to detail were evident throughout the project. The team's dedication to quality and timely completion ensured a stress-free experience.",
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    },
];

const TestimonialCarousel = () => {
    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            goToNext();
        }, 5000);
        return () => clearInterval(timer);
    }, [current]);

    const goToNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const goToPrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    return (
        <div className="testimonial-carousel">
            <div className="testimonial-container">
                <button className="carousel-btn prev" onClick={goToPrev} aria-label="Previous testimonial">
                    <ChevronLeft size={24} />
                </button>

                <div className="testimonial-wrapper">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`testimonial-slide glass-card ${index === current ? 'active' : ''}`}
                        >
                            <div className="quote-icon">
                                <Quote size={40} />
                            </div>
                            <p className="testimonial-content">{testimonial.content}</p>
                            <div className="testimonial-author">
                                <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                                <div className="author-info">
                                    <h4 className="author-name">{testimonial.name}</h4>
                                    <span className="author-role">{testimonial.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="carousel-btn next" onClick={goToNext} aria-label="Next testimonial">
                    <ChevronRight size={24} />
                </button>
            </div>

            <div className="carousel-dots">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === current ? 'active' : ''}`}
                        onClick={() => setCurrent(index)}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialCarousel;

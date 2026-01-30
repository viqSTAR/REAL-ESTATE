import { Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        name: 'Rajesh Verma',
        role: 'Homeowner',
        content: 'As a first-time homebuyer, I was apprehensive about the whole process. But HRITE made it seamless. Their professionalism, transparency, and commitment to quality ensured that our dream home became a reality.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    },
    {
        id: 2,
        name: 'Sneha Gupta',
        role: 'Business Owner',
        content: 'I wanted a commercial space that was not just functional but also aesthetically pleasing. HRITE Real Estate delivered exactly that. Their efficient planning and timely execution truly impressed me.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    },
    {
        id: 3,
        name: 'Amit Kumar',
        role: 'Property Investor',
        content: "I can't thank HRITE enough for making our renovation project hassle-free. Their team managed the entire process smoothly, and the final outcome was beyond what we imagined.",
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    },
    {
        id: 4,
        name: 'Pooja Sharma',
        role: 'Homeowner',
        content: "HRITE's approach is truly client-centric. They took the time to understand our preferences and integrated them flawlessly into the design. The end result was a home that truly felt like 'ours'.",
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
    {
        id: 5,
        name: 'Naveen Choudhary',
        role: 'Homeowner',
        content: "HRITE Real Estate made our dream of a beautiful home a reality. Their expertise and attention to detail were evident throughout the project. The team's dedication to quality and timely completion ensured a stress-free experience.",
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    },
    {
        id: 6,
        name: 'Kavita Singh',
        role: 'Business Owner',
        content: 'Exceptional service from start to finish. The team at HRITE understood our vision and executed it perfectly. Our new office space has received countless compliments from visitors and employees alike.',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    },
];

const Testimonials = () => {
    return (
        <main>
            <section className="page-header">
                <div className="container">
                    <h1>Client <span className="text-gold">Testimonials</span></h1>
                    <p>What our valued clients say about us</p>
                </div>
            </section>

            <section className="section testimonials-page">
                <div className="container">
                    <div className="testimonials-grid">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="testimonial-card glass-card">
                                <Quote size={30} className="quote-icon" />
                                <p className="testimonial-text">{testimonial.content}</p>
                                <div className="testimonial-author">
                                    <img src={testimonial.image} alt={testimonial.name} />
                                    <div>
                                        <h4>{testimonial.name}</h4>
                                        <span>{testimonial.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Testimonials;

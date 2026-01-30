import { Quote } from 'lucide-react';
import './DirectorMessage.css';

const DirectorMessage = () => {
    return (
        <main>
            <section className="page-header">
                <div className="container">
                    <h1>Director's <span className="text-gold">Message</span></h1>
                    <p>A word from our leadership</p>
                </div>
            </section>

            <section className="section director-section">
                <div className="container">
                    <div className="director-content">
                        <div className="director-image-wrapper">
                            <div className="director-image glass-card">
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop"
                                    alt="Director"
                                />
                            </div>
                            <div className="director-info glass-card">
                                <h3>Rajendra Kumar</h3>
                                <p>Founder & Managing Director</p>
                            </div>
                        </div>

                        <div className="message-content glass-card">
                            <Quote size={50} className="quote-icon" />
                            <div className="message-text">
                                <p>
                                    Dear Valued Clients and Partners,
                                </p>
                                <p>
                                    Welcome to HRITE Real Estate. It is with immense pride and gratitude that I
                                    address you today as the Managing Director of this esteemed organization.
                                </p>
                                <p>
                                    Since our inception, we have been driven by a singular vision: to transform
                                    the real estate landscape through unwavering commitment to quality, innovation,
                                    and customer satisfaction. Every brick we lay, every structure we build, tells a
                                    story of dedication, expertise, and the trust our clients place in us.
                                </p>
                                <p>
                                    Our journey has been remarkable, marked by numerous successful projects that
                                    stand as testaments to our craftsmanship. But what truly defines us is not just
                                    the buildings we create—it's the dreams we help fulfill, the communities we
                                    build, and the lasting relationships we forge with our clients.
                                </p>
                                <p>
                                    As we continue to grow and evolve, our core values remain unchanged. We believe
                                    in transparency, quality, and delivering value that exceeds expectations. Our
                                    team of dedicated professionals works tirelessly to ensure that every project,
                                    regardless of its scale, receives the attention and excellence it deserves.
                                </p>
                                <p>
                                    I invite you to explore our portfolio, meet our team, and experience firsthand
                                    what makes HRITE Real Estate your ideal partner in turning visions into reality.
                                </p>
                                <p>
                                    Thank you for your trust and continued support.
                                </p>
                                <div className="signature">
                                    <span className="sign-name">Rajendra Kumar</span>
                                    <span className="sign-title">Founder & Managing Director</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default DirectorMessage;

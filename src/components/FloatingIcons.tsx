import { Phone, MessageCircle, Mail, ArrowUp } from 'lucide-react';
import './FloatingIcons.css';

const FloatingIcons = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="floating-icons">
            <a
                href="https://wa.me/916206733818"
                target="_blank"
                rel="noopener noreferrer"
                className="floating-icon whatsapp"
                aria-label="WhatsApp"
            >
                <MessageCircle size={24} />
            </a>
            <a
                href="tel:6206733818"
                className="floating-icon phone"
                aria-label="Call Us"
            >
                <Phone size={24} />
            </a>
            <a
                href="mailto:hrite.business@proton.me"
                className="floating-icon email"
                aria-label="Email Us"
            >
                <Mail size={24} />
            </a>
            <button
                onClick={scrollToTop}
                className="floating-icon scroll-top"
                aria-label="Scroll to Top"
            >
                <ArrowUp size={24} />
            </button>
        </div>
    );
};

export default FloatingIcons;

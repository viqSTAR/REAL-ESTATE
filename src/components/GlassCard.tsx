import type { ReactNode } from 'react';
import './GlassCard.css';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
    onClick?: () => void;
}

const GlassCard = ({ children, className = '', hoverEffect = true, onClick }: GlassCardProps) => {
    return (
        <div
            className={`glass-card-component ${hoverEffect ? 'hover-effect' : ''} ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default GlassCard;

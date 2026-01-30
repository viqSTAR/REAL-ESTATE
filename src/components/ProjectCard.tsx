import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import './ProjectCard.css';

interface ProjectCardProps {
    id: string;
    title: string;
    location: string;
    image: string;
    status: 'completed' | 'ongoing' | 'upcoming';
    type: 'residential' | 'commercial' | 'government';
}

const ProjectCard = ({ id, title, location, image, status, type }: ProjectCardProps) => {
    const statusColors = {
        completed: 'status-completed',
        ongoing: 'status-ongoing',
        upcoming: 'status-upcoming',
    };

    const statusLabels = {
        completed: 'Completed',
        ongoing: 'Ongoing',
        upcoming: 'Upcoming',
    };

    return (
        <Link to={`/project/${id}`} className="project-card glass-card">
            <div className="project-image">
                <img src={image} alt={title} loading="lazy" />
                <div className="project-overlay">
                    <span className={`project-status ${statusColors[status]}`}>
                        {statusLabels[status]}
                    </span>
                    <span className="project-type">{type}</span>
                </div>
            </div>
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <div className="project-location">
                    <MapPin size={16} />
                    <span>{location}</span>
                </div>
                <div className="project-link">
                    Learn More <ArrowRight size={16} />
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;

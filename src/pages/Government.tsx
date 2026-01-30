import ProjectCard from '../components/ProjectCard';
import './ServicePages.css';

const governmentProjects = [
    {
        id: 'government-complex',
        title: 'Government Office Complex',
        location: 'Secretariat, Patna',
        image: 'https://images.unsplash.com/photo-1464938050520-ef2571f6a5e3?w=600&h=400&fit=crop',
        status: 'completed' as const,
        type: 'government' as const,
    },
    {
        id: 'public-library',
        title: 'State Public Library',
        location: 'Gandhi Maidan, Patna',
        image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop',
        status: 'completed' as const,
        type: 'government' as const,
    },
    {
        id: 'district-hospital',
        title: 'District Hospital Extension',
        location: 'Gardani Bagh, Patna',
        image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop',
        status: 'ongoing' as const,
        type: 'government' as const,
    },
    {
        id: 'sports-stadium',
        title: 'Multi-Purpose Stadium',
        location: 'Rajendra Nagar, Patna',
        image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=600&h=400&fit=crop',
        status: 'upcoming' as const,
        type: 'government' as const,
    },
];

const Government = () => {
    return (
        <main>
            <section className="page-header">
                <div className="container">
                    <h1>Government <span className="text-gold">Projects</span></h1>
                    <p>Infrastructure and public works delivered with precision</p>
                </div>
            </section>

            <section className="section service-intro">
                <div className="container">
                    <div className="intro-content glass-card">
                        <h2>Building for the Nation</h2>
                        <p>
                            We take pride in contributing to public infrastructure. Our government projects
                            are executed with the highest standards of compliance, transparency, and quality,
                            serving communities across the region.
                        </p>
                        <div className="features-list">
                            <span className="feature-tag">Compliance Assured</span>
                            <span className="feature-tag">Transparent Process</span>
                            <span className="feature-tag">Timely Execution</span>
                            <span className="feature-tag">Quality Materials</span>
                            <span className="feature-tag">Safety Standards</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section projects-listing">
                <div className="container">
                    <h2 className="text-center mb-xl">Our Government <span className="text-gold">Portfolio</span></h2>
                    <div className="projects-grid">
                        {governmentProjects.map((project) => (
                            <ProjectCard key={project.id} {...project} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Government;

import ProjectCard from '../components/ProjectCard';
import './ServicePages.css';

const commercialProjects = [
    {
        id: 'patna-business-park',
        title: 'Patna Business Park',
        location: 'Bailey Road, Patna',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
        status: 'ongoing' as const,
        type: 'commercial' as const,
    },
    {
        id: 'city-center-plaza',
        title: 'City Center Plaza',
        location: 'Kankarbagh, Patna',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
        status: 'completed' as const,
        type: 'commercial' as const,
    },
    {
        id: 'tech-park',
        title: 'Bihar Tech Park',
        location: 'Patliputra, Patna',
        image: 'https://images.unsplash.com/photo-1554435493-93422e8220c8?w=600&h=400&fit=crop',
        status: 'upcoming' as const,
        type: 'commercial' as const,
    },
    {
        id: 'corporate-tower',
        title: 'Corporate Tower',
        location: 'Exhibition Road, Patna',
        image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=600&h=400&fit=crop',
        status: 'completed' as const,
        type: 'commercial' as const,
    },
];

const Commercial = () => {
    return (
        <main>
            <section className="page-header">
                <div className="container">
                    <h1>Commercial <span className="text-gold">Projects</span></h1>
                    <p>Modern office spaces and retail complexes built for success</p>
                </div>
            </section>

            <section className="section service-intro">
                <div className="container">
                    <div className="intro-content glass-card">
                        <h2>Empowering Businesses</h2>
                        <p>
                            Our commercial projects are designed to foster productivity and success. From
                            state-of-the-art office buildings to premium retail spaces, we create environments
                            that inspire innovation and growth.
                        </p>
                        <div className="features-list">
                            <span className="feature-tag">Prime Locations</span>
                            <span className="feature-tag">Modern Infrastructure</span>
                            <span className="feature-tag">Ample Parking</span>
                            <span className="feature-tag">High-Speed Connectivity</span>
                            <span className="feature-tag">Power Backup</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section projects-listing">
                <div className="container">
                    <h2 className="text-center mb-xl">Our Commercial <span className="text-gold">Portfolio</span></h2>
                    <div className="projects-grid">
                        {commercialProjects.map((project) => (
                            <ProjectCard key={project.id} {...project} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Commercial;

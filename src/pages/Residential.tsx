import ProjectCard from '../components/ProjectCard';
import './ServicePages.css';

const residentialProjects = [
    {
        id: 'gardani-heights',
        title: 'Gardani Heights',
        location: 'Gardani Bagh, Patna',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop',
        status: 'completed' as const,
        type: 'residential' as const,
    },
    {
        id: 'sunrise-residency',
        title: 'Sunrise Residency',
        location: 'Boring Road, Patna',
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop',
        status: 'upcoming' as const,
        type: 'residential' as const,
    },
    {
        id: 'lakshmi-enclave',
        title: 'Lakshmi Enclave',
        location: 'Danapur, Patna',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop',
        status: 'ongoing' as const,
        type: 'residential' as const,
    },
    {
        id: 'royal-villa',
        title: 'Royal Villa Heights',
        location: 'Patliputra, Patna',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
        status: 'completed' as const,
        type: 'residential' as const,
    },
];

const Residential = () => {
    return (
        <main>
            <section className="page-header">
                <div className="container">
                    <h1>Residential <span className="text-gold">Projects</span></h1>
                    <p>Luxury homes and apartments designed for modern living</p>
                </div>
            </section>

            <section className="section service-intro">
                <div className="container">
                    <div className="intro-content glass-card">
                        <h2>Creating Dream Homes</h2>
                        <p>
                            At HRITE Real Estate, we understand that a home is more than just a structure—it's where
                            memories are made and families grow. Our residential projects combine contemporary design
                            with practical functionality, ensuring you get a space that truly feels like home.
                        </p>
                        <div className="features-list">
                            <span className="feature-tag">Premium Locations</span>
                            <span className="feature-tag">Modern Amenities</span>
                            <span className="feature-tag">Quality Construction</span>
                            <span className="feature-tag">Vastu Compliant</span>
                            <span className="feature-tag">24/7 Security</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section projects-listing">
                <div className="container">
                    <h2 className="text-center mb-xl">Our Residential <span className="text-gold">Portfolio</span></h2>
                    <div className="projects-grid">
                        {residentialProjects.map((project) => (
                            <ProjectCard key={project.id} {...project} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Residential;

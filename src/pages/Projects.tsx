import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const allProjects = [
    {
        id: 'gardani-heights',
        title: 'Gardani Heights',
        location: 'Gardani Bagh, Patna',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop',
        status: 'completed' as const,
        type: 'residential' as const,
    },
    {
        id: 'patna-business-park',
        title: 'Patna Business Park',
        location: 'Bailey Road, Patna',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
        status: 'ongoing' as const,
        type: 'commercial' as const,
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
        id: 'city-center-plaza',
        title: 'City Center Plaza',
        location: 'Kankarbagh, Patna',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
        status: 'completed' as const,
        type: 'commercial' as const,
    },
    {
        id: 'government-complex',
        title: 'Government Office Complex',
        location: 'Secretariat, Patna',
        image: 'https://images.unsplash.com/photo-1464938050520-ef2571f6a5e3?w=600&h=400&fit=crop',
        status: 'completed' as const,
        type: 'government' as const,
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
        id: 'tech-park',
        title: 'Bihar Tech Park',
        location: 'Patliputra, Patna',
        image: 'https://images.unsplash.com/photo-1554435493-93422e8220c8?w=600&h=400&fit=crop',
        status: 'upcoming' as const,
        type: 'commercial' as const,
    },
    {
        id: 'public-library',
        title: 'State Public Library',
        location: 'Gandhi Maidan, Patna',
        image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop',
        status: 'completed' as const,
        type: 'government' as const,
    },
];

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = [
        { key: 'all', label: 'All Projects' },
        { key: 'residential', label: 'Residential' },
        { key: 'commercial', label: 'Commercial' },
        { key: 'government', label: 'Government' },
    ];

    const filteredProjects = activeFilter === 'all'
        ? allProjects
        : allProjects.filter(p => p.type === activeFilter);

    return (
        <main>
            <section className="page-header">
                <div className="container">
                    <h1>Our <span className="text-gold">Projects</span></h1>
                    <p>Explore our portfolio of completed and ongoing projects</p>
                </div>
            </section>

            <section className="section projects-main">
                <div className="container">
                    <div className="filter-tabs">
                        {filters.map((filter) => (
                            <button
                                key={filter.key}
                                className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                                onClick={() => setActiveFilter(filter.key)}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>

                    <div className="projects-grid">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} {...project} />
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="no-projects glass-card">
                            <p>No projects found in this category.</p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Projects;

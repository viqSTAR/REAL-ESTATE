import { useState } from 'react';
import { Briefcase, MapPin, Clock, Send } from 'lucide-react';
import './Career.css';

const jobOpenings = [
    {
        id: 1,
        title: 'Civil Engineer',
        location: 'Patna, Bihar',
        type: 'Full-time',
        experience: '3-5 years',
        description: 'We are looking for an experienced Civil Engineer to oversee construction projects and ensure quality standards.',
    },
    {
        id: 2,
        title: 'Project Manager',
        location: 'Patna, Bihar',
        type: 'Full-time',
        experience: '5-7 years',
        description: 'Seeking a dynamic Project Manager to lead our construction projects from planning to completion.',
    },
    {
        id: 3,
        title: 'Sales Executive',
        location: 'Patna, Bihar',
        type: 'Full-time',
        experience: '2-4 years',
        description: 'Join our sales team to help clients find their dream properties and drive business growth.',
    },
    {
        id: 4,
        title: 'Interior Designer',
        location: 'Patna, Bihar',
        type: 'Full-time',
        experience: '2-4 years',
        description: 'Creative interior designer needed to bring innovative design concepts to our residential projects.',
    },
];

const Career = () => {
    const [selectedJob, setSelectedJob] = useState<number | null>(null);

    return (
        <main>
            <section className="page-header">
                <div className="container">
                    <h1>Career <span className="text-gold">Opportunities</span></h1>
                    <p>Join our team and build the future with us</p>
                </div>
            </section>

            <section className="section career-page">
                <div className="container">
                    <div className="career-intro glass-card">
                        <h2>Why Work With Us?</h2>
                        <p>
                            At HRITE Real Estate, we believe our people are our greatest asset. We offer a
                            dynamic work environment, competitive compensation, and opportunities for growth.
                            Join us in shaping the future of real estate.
                        </p>
                        <div className="benefits-list">
                            <span className="benefit-tag">Competitive Salary</span>
                            <span className="benefit-tag">Health Benefits</span>
                            <span className="benefit-tag">Career Growth</span>
                            <span className="benefit-tag">Training Programs</span>
                            <span className="benefit-tag">Work-Life Balance</span>
                        </div>
                    </div>

                    <h2 className="text-center mb-xl">Current <span className="text-gold">Openings</span></h2>

                    <div className="jobs-grid">
                        {jobOpenings.map((job) => (
                            <div key={job.id} className="job-card glass-card">
                                <div className="job-header">
                                    <h3>{job.title}</h3>
                                    <div className="job-meta">
                                        <span><MapPin size={14} /> {job.location}</span>
                                        <span><Clock size={14} /> {job.type}</span>
                                        <span><Briefcase size={14} /> {job.experience}</span>
                                    </div>
                                </div>
                                <p className="job-desc">{job.description}</p>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => setSelectedJob(job.id)}
                                >
                                    Apply Now <Send size={16} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="career-contact glass-card">
                        <h3>Don't See a Suitable Position?</h3>
                        <p>
                            We're always looking for talented individuals. Send your resume to
                            <a href="mailto:hrite.business@proton.me"> hrite.business@proton.me</a> and
                            we'll keep you in mind for future opportunities.
                        </p>
                    </div>
                </div>
            </section>

            {/* Application Modal */}
            {selectedJob && (
                <div className="modal-overlay" onClick={() => setSelectedJob(null)}>
                    <div className="modal glass-card" onClick={(e) => e.stopPropagation()}>
                        <h3>Apply for {jobOpenings.find(j => j.id === selectedJob)?.title}</h3>
                        <form onSubmit={(e) => { e.preventDefault(); setSelectedJob(null); }}>
                            <div className="form-group">
                                <label className="form-label">Full Name</label>
                                <input type="text" className="form-input" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-input" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Phone</label>
                                <input type="tel" className="form-input" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Cover Letter</label>
                                <textarea className="form-textarea" rows={4}></textarea>
                            </div>
                            <div className="modal-actions">
                                <button type="button" className="btn btn-outline" onClick={() => setSelectedJob(null)}>
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Submit Application
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Career;

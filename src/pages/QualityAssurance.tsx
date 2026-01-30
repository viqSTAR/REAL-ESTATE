import { ShieldCheck, Award, FileCheck, CheckCircle } from 'lucide-react';
import './QualityAssurance.css';

const QualityAssurance = () => {
    return (
        <main>
            <section className="page-header">
                <div className="container">
                    <h1>Quality <span className="text-gold">Assurance</span></h1>
                    <p>Our commitment to excellence in every project</p>
                </div>
            </section>

            <section className="section quality-content">
                <div className="container">
                    <div className="quality-intro glass-card">
                        <ShieldCheck size={60} className="intro-icon" />
                        <h2>Our Quality Promise</h2>
                        <p>
                            At HRITE Real Estate, quality is not just a standard—it's our foundation.
                            We implement rigorous quality control measures at every stage of construction
                            to ensure that every project meets the highest industry standards.
                        </p>
                    </div>

                    <div className="quality-pillars">
                        <h2>Our Quality <span className="text-gold">Pillars</span></h2>
                        <div className="pillars-grid">
                            <div className="pillar-card glass-card">
                                <div className="pillar-number">01</div>
                                <h3>Material Selection</h3>
                                <p>
                                    We source only premium-grade materials from certified suppliers,
                                    ensuring durability and longevity of every structure we build.
                                </p>
                            </div>
                            <div className="pillar-card glass-card">
                                <div className="pillar-number">02</div>
                                <h3>Expert Workforce</h3>
                                <p>
                                    Our team consists of skilled professionals with extensive experience
                                    in construction, architecture, and project management.
                                </p>
                            </div>
                            <div className="pillar-card glass-card">
                                <div className="pillar-number">03</div>
                                <h3>Regular Inspections</h3>
                                <p>
                                    Multi-level quality checks at every construction phase ensure
                                    adherence to specifications and safety standards.
                                </p>
                            </div>
                            <div className="pillar-card glass-card">
                                <div className="pillar-number">04</div>
                                <h3>Modern Technology</h3>
                                <p>
                                    Implementation of latest construction technologies and methods
                                    for precision and efficiency.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="certifications-section">
                        <h2>Certifications & <span className="text-gold">Standards</span></h2>
                        <div className="certifications-grid">
                            <div className="cert-card glass-card">
                                <Award size={40} />
                                <h4>ISO Certified</h4>
                                <p>Quality management systems</p>
                            </div>
                            <div className="cert-card glass-card">
                                <FileCheck size={40} />
                                <h4>RERA Registered</h4>
                                <p>All projects legally compliant</p>
                            </div>
                            <div className="cert-card glass-card">
                                <ShieldCheck size={40} />
                                <h4>Safety Standards</h4>
                                <p>Workplace safety protocols</p>
                            </div>
                            <div className="cert-card glass-card">
                                <CheckCircle size={40} />
                                <h4>Green Building</h4>
                                <p>Sustainable construction practices</p>
                            </div>
                        </div>
                    </div>

                    <div className="quality-process">
                        <h2>Our Quality <span className="text-gold">Process</span></h2>
                        <div className="process-timeline">
                            <div className="process-item glass-card">
                                <div className="process-step">1</div>
                                <h4>Planning & Design Review</h4>
                                <p>Thorough review of architectural plans and material specifications</p>
                            </div>
                            <div className="process-item glass-card">
                                <div className="process-step">2</div>
                                <h4>Material Testing</h4>
                                <p>Laboratory testing of all construction materials before use</p>
                            </div>
                            <div className="process-item glass-card">
                                <div className="process-step">3</div>
                                <h4>Construction Monitoring</h4>
                                <p>Continuous supervision by qualified engineers during construction</p>
                            </div>
                            <div className="process-item glass-card">
                                <div className="process-step">4</div>
                                <h4>Final Inspection</h4>
                                <p>Comprehensive quality audit before project handover</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default QualityAssurance;

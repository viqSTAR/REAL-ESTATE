import { FileText, Download, Eye } from 'lucide-react';
import './Documents.css';

const documents = [
    {
        id: 1,
        title: 'Company Registration Certificate',
        category: 'Legal',
        date: '2024',
        icon: FileText,
    },
    {
        id: 2,
        title: 'RERA Registration',
        category: 'Legal',
        date: '2024',
        icon: FileText,
    },
    {
        id: 3,
        title: 'ISO 9001:2015 Certificate',
        category: 'Certification',
        date: '2024',
        icon: FileText,
    },
    {
        id: 4,
        title: 'GST Registration',
        category: 'Tax',
        date: '2024',
        icon: FileText,
    },
    {
        id: 5,
        title: 'PAN Card',
        category: 'Tax',
        date: '2024',
        icon: FileText,
    },
    {
        id: 6,
        title: 'Trade License',
        category: 'Legal',
        date: '2024',
        icon: FileText,
    },
];

const Documents = () => {
    return (
        <main>
            <section className="page-header">
                <div className="container">
                    <h1>Legal <span className="text-gold">Documents</span></h1>
                    <p>Our certifications and legal compliance documents</p>
                </div>
            </section>

            <section className="section documents-page">
                <div className="container">
                    <div className="documents-intro glass-card">
                        <h2>Transparency & Compliance</h2>
                        <p>
                            At HRITE Real Estate, we believe in complete transparency. All our operations
                            are fully compliant with legal regulations. Below are our key certifications
                            and documents that demonstrate our commitment to ethical business practices.
                        </p>
                    </div>

                    <div className="documents-grid">
                        {documents.map((doc) => (
                            <div key={doc.id} className="document-card glass-card">
                                <div className="doc-icon">
                                    <doc.icon size={32} />
                                </div>
                                <div className="doc-info">
                                    <h4>{doc.title}</h4>
                                    <span className="doc-category">{doc.category}</span>
                                    <span className="doc-date">{doc.date}</span>
                                </div>
                                <div className="doc-actions">
                                    <button className="doc-btn" title="View Document">
                                        <Eye size={18} />
                                    </button>
                                    <button className="doc-btn" title="Download">
                                        <Download size={18} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="documents-note glass-card">
                        <p>
                            <strong>Note:</strong> For verification of any documents or additional information,
                            please contact us at <a href="mailto:hrite.business@proton.me">hrite.business@proton.me</a>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Documents;

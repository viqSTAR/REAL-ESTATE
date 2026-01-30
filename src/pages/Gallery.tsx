import { useState } from 'react';
import { X } from 'lucide-react';
import './Gallery.css';

const galleryImages = [
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
        title: 'Luxury Villa Exterior',
        category: 'completed',
    },
    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
        title: 'Modern Home Design',
        category: 'completed',
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
        title: 'Commercial Tower',
        category: 'ongoing',
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
        title: 'Apartment Complex',
        category: 'completed',
    },
    {
        id: 5,
        src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop',
        title: 'Estate Property',
        category: 'completed',
    },
    {
        id: 6,
        src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
        title: 'Office Interior',
        category: 'completed',
    },
    {
        id: 7,
        src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
        title: 'Construction Progress',
        category: 'ongoing',
    },
    {
        id: 8,
        src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
        title: 'Building Facade',
        category: 'completed',
    },
    {
        id: 9,
        src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
        title: 'Residential Interior',
        category: 'completed',
    },
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

    return (
        <main>
            <section className="page-header">
                <div className="container">
                    <h1>Photo <span className="text-gold">Gallery</span></h1>
                    <p>A visual journey through our projects</p>
                </div>
            </section>

            <section className="section gallery-page">
                <div className="container">
                    <div className="gallery-grid">
                        {galleryImages.map((image) => (
                            <div
                                key={image.id}
                                className="gallery-item glass-card"
                                onClick={() => setSelectedImage(image)}
                            >
                                <img src={image.src} alt={image.title} loading="lazy" />
                                <div className="gallery-overlay">
                                    <h4>{image.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {selectedImage && (
                <div className="lightbox" onClick={() => setSelectedImage(null)}>
                    <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
                        <X size={30} />
                    </button>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage.src} alt={selectedImage.title} />
                        <h3>{selectedImage.title}</h3>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Gallery;

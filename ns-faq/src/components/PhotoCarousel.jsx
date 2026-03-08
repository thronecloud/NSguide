import { useRef } from 'react';
import { lifeAtNSImages } from '../data/carouselData';

export default function PhotoCarousel() {
    const trackRef = useRef(null);

    const scrollLeft = () => {
        if (trackRef.current) {
            trackRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (trackRef.current) {
            trackRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <section className="photo-carousel-section">
            <div className="photo-carousel-header">
                <div className="photo-carousel-title-group">
                    <h2 className="photo-carousel-title">Life at Network School</h2>
                    <p className="photo-carousel-subtitle">Real moments from the campus in Forest City.</p>
                </div>
                <div className="photo-carousel-controls">
                    <button className="carousel-control-btn" onClick={scrollLeft} aria-label="Scroll left">←</button>
                    <button className="carousel-control-btn" onClick={scrollRight} aria-label="Scroll right">→</button>
                </div>
            </div>
            <div className="photo-carousel-container" ref={trackRef}>
                <div className="photo-carousel-track">
                    {lifeAtNSImages.map((image, index) => (
                        <div key={index} className="photo-carousel-slide">
                            <img
                                src={image.src}
                                alt={image.alt}
                                loading="lazy"
                                className="photo-carousel-img"
                            />
                            <div className="photo-carousel-caption">{image.alt}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { lifeAtNSImages } from '../data/carouselData';

export default function PhotoCarousel() {
    return (
        <section className="photo-carousel-section">
            <div className="photo-carousel-header">
                <h2 className="photo-carousel-title">Life at Network School</h2>
                <p className="photo-carousel-subtitle">Real moments from the campus in Forest City.</p>
            </div>
            <div className="photo-carousel-container">
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

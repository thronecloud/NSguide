import { lifeAtNSImages } from '../data/carouselData';

export default function PhotoGrid() {
  return (
    <section className="photo-grid-section" aria-label="Life at Network School">
      <div className="section-header">
        <h2 className="section-display-title">Life at Network School</h2>
        <p className="section-subtitle">Real moments from the campus in Forest City, Malaysia</p>
      </div>
      <div className="photo-grid">
        {lifeAtNSImages.map((image, index) => (
          <div
            key={index}
            className={`photo-grid-item ${index === 0 || index === 5 || index === 10 ? 'photo-grid-item--large' : ''}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="photo-grid-img"
            />
            <div className="photo-grid-caption">{image.alt}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

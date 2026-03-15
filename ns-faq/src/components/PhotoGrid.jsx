import { useRef, useState, useEffect } from 'react';
import { lifeAtNSImages } from '../data/carouselData';

export default function PhotoGrid() {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  const scroll = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    const slideWidth = el.querySelector('.gallery-slide')?.offsetWidth || 300;
    const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 2;
    if (direction === 1 && atEnd) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: direction * (slideWidth + 12), behavior: 'smooth' });
    }
  };

  // Auto-scroll every 4 seconds, pause on hover
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let paused = false;
    const interval = setInterval(() => {
      if (!paused) scroll(1);
    }, 4000);
    const pause = () => { paused = true; };
    const resume = () => { paused = false; };
    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', resume);
    el.addEventListener('touchstart', pause, { passive: true });
    el.addEventListener('touchend', resume);
    return () => {
      clearInterval(interval);
      el.removeEventListener('mouseenter', pause);
      el.removeEventListener('mouseleave', resume);
      el.removeEventListener('touchstart', pause);
      el.removeEventListener('touchend', resume);
    };
  }, []);

  return (
    <section className="gallery-section" aria-label="Life at Network School">
      <div className="gallery-header">
        <div>
          <h2 className="section-display-title">Life at Network School</h2>
          <p className="section-subtitle">Real moments from the campus in Forest City, Malaysia</p>
        </div>
        <div className="gallery-controls">
          <button
            className={`gallery-btn ${!canScrollLeft ? 'gallery-btn--disabled' : ''}`}
            onClick={() => scroll(-1)}
            disabled={!canScrollLeft}
            aria-label="Previous photos"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            className={`gallery-btn ${!canScrollRight ? 'gallery-btn--disabled' : ''}`}
            onClick={() => scroll(1)}
            disabled={!canScrollRight}
            aria-label="Next photos"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
      <div className="gallery-track" ref={trackRef}>
        {lifeAtNSImages.map((image, index) => (
          <div key={index} className="gallery-slide">
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="gallery-img"
            />
            <div className="gallery-caption">{image.alt}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

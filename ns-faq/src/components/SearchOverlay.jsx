import { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { faqItems } from '../data/faqData';
import { articles } from '../data/articleData';

// Extract a snippet around the matched keyword so the highlight is always visible
function getSnippet(text, query, maxLen = 120) {
  const q = query.toLowerCase();
  const idx = text.toLowerCase().indexOf(q);
  if (idx === -1) return text.slice(0, maxLen) + (text.length > maxLen ? '...' : '');

  // Show context around the match
  const padding = Math.floor((maxLen - query.length) / 2);
  let start = Math.max(0, idx - padding);
  let end = Math.min(text.length, idx + query.length + padding);

  // Adjust to avoid cutting words
  if (start > 0) {
    const spaceIdx = text.indexOf(' ', start);
    if (spaceIdx !== -1 && spaceIdx < idx) start = spaceIdx + 1;
  }
  if (end < text.length) {
    const spaceIdx = text.lastIndexOf(' ', end);
    if (spaceIdx > idx + query.length) end = spaceIdx;
  }

  let snippet = text.slice(start, end);
  if (start > 0) snippet = '...' + snippet;
  if (end < text.length) snippet = snippet + '...';
  return snippet;
}

export default function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const resultsRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setActiveIndex(0);
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const faqResults = faqItems
      .filter(item =>
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q)
      )
      .slice(0, 6)
      .map(item => ({
        type: 'faq',
        title: item.question,
        subtitle: getSnippet(item.answer, query),
        url: `/faq/${item.slug}`,
      }));

    const articleResults = articles
      .filter(article =>
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q)
      )
      .slice(0, 3)
      .map(article => ({
        type: 'guide',
        title: article.title,
        subtitle: getSnippet(article.excerpt, query),
        url: `/articles/${article.slug}`,
      }));

    return [...faqResults, ...articleResults];
  }, [query]);

  const handleSelect = (result) => {
    onClose();
    navigate(result.url);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') { onClose(); return; }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(i => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(i => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && results[activeIndex]) {
      handleSelect(results[activeIndex]);
    }
  };

  useEffect(() => {
    if (resultsRef.current) {
      const active = resultsRef.current.querySelector('.search-result--active');
      if (active) active.scrollIntoView({ block: 'nearest' });
    }
  }, [activeIndex]);

  if (!isOpen) return null;

  const highlight = (text, q) => {
    if (!q.trim()) return text;
    const idx = text.toLowerCase().indexOf(q.toLowerCase());
    if (idx === -1) return text;
    return (
      <>
        {text.slice(0, idx)}
        <mark className="search-highlight">{text.slice(idx, idx + q.length)}</mark>
        {text.slice(idx + q.length)}
      </>
    );
  };

  const typeLabels = { faq: 'FAQs', guide: 'Guides' };

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-modal" onClick={e => e.stopPropagation()}>
        <div className="search-input-wrapper">
          <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            className="search-input"
            placeholder="Search FAQs, guides..."
            value={query}
            onChange={e => { setQuery(e.target.value); setActiveIndex(0); }}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            spellCheck="false"
          />
          <button className="search-close-btn" onClick={onClose} aria-label="Close search">
            <kbd>ESC</kbd>
          </button>
        </div>

        <div className="search-body" ref={resultsRef}>
          {query.trim() && results.length === 0 && (
            <div className="search-empty">
              <p>No results for &ldquo;{query}&rdquo;</p>
              <p className="search-empty-hint">Try different keywords or browse categories on the homepage</p>
            </div>
          )}

          {query.trim() && results.length > 0 && (
            <>
              {['faq', 'guide'].map(type => {
                const typeResults = results.filter(r => r.type === type);
                if (typeResults.length === 0) return null;
                return (
                  <div key={type} className="search-group">
                    <div className="search-group-label">{typeLabels[type]}</div>
                    {typeResults.map((result, i) => {
                      const globalIndex = results.indexOf(result);
                      return (
                        <button
                          key={i}
                          className={`search-result ${globalIndex === activeIndex ? 'search-result--active' : ''}`}
                          onClick={() => handleSelect(result)}
                          onMouseEnter={() => setActiveIndex(globalIndex)}
                        >
                          <div className="search-result-content">
                            <div className="search-result-title">{highlight(result.title, query)}</div>
                            <div className="search-result-subtitle">{highlight(result.subtitle, query)}</div>
                          </div>
                          <svg className="search-result-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </button>
                      );
                    })}
                  </div>
                );
              })}
              <div className="search-footer">
                <span className="search-footer-hint">
                  <kbd>&uarr;</kbd><kbd>&darr;</kbd> to navigate &middot; <kbd>Enter</kbd> to select
                </span>
              </div>
            </>
          )}

          {!query.trim() && (
            <div className="search-hints">
              <p className="search-hints-title">Popular searches</p>
              <div className="search-hints-tags">
                {['cost', 'visa', 'food', 'gym', 'internet', 'rooms', 'apply', 'location'].map(tag => (
                  <button key={tag} className="search-hint-tag" onClick={() => setQuery(tag)}>
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

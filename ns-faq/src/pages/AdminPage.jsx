import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { faqItems as initialFaqItems, FAQ_CATEGORIES } from '../data/faqData';
import { REFERRAL_URL } from '../config';
import '../styles/Admin.css';

const STORAGE_KEY = 'ns-faq-admin-draft';
const AUTH_KEY = 'ns-faq-admin-auth';

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function generateFaqDataJs(items) {
  const itemStr = items
    .map((item) => {
      const j = (s) => JSON.stringify(s ?? '');
      const base = `  {
    id: ${j(item.id)},
    category: ${j(item.category || 'basics')},
    slug: ${j(item.slug)},
    question: ${j(item.question)},
    answer: ${j(item.answer)},
    seo: {
      title: ${j(item.seo?.title)},
      description: ${j(item.seo?.description)},
      keywords: ${j(item.seo?.keywords)},
    },`;
      const cta =
        item.ctaText && item.ctaUrl
          ? `
    ctaText: ${j(item.ctaText)},
    ctaUrl: REFERRAL_URL,`
          : '';
      return base + cta + '\n  },';
    })
    .join('\n');

  return `import { REFERRAL_URL } from '../config.js';

/**
 * FAQ content for Network School landing page.
 * Each item has its own page at /faq/{slug} for programmatic SEO.
 * Tone: conversational and personal. Includes honest downsides.
 *
 * To add a new question, add an object with:
 *   id, slug (URL-friendly), question, answer, category,
 *   seo: { title, description, keywords }
 * Optional: ctaText, ctaUrl for apply-related FAQs
 */
export const FAQ_CATEGORIES = [
  { id: 'basics', label: 'Basics & Costs' },
  { id: 'travel', label: 'Travel & Location' },
  { id: 'working', label: 'Working & Learning' },
  { id: 'health', label: 'Health & Fitness' },
  { id: 'living', label: 'Living & Accommodation' },
  { id: 'application', label: 'Application & Admissions' },
  { id: 'community', label: 'Community & Culture' },
  { id: 'visas', label: 'Visas & Legal' },
];

export const faqItems = [
${itemStr}
];

export function getFaqBySlug(slug) {
  return faqItems.find((item) => item.slug === slug) ?? null;
}

export function getFaqByCategory(categoryId) {
  return faqItems.filter((item) => item.category === categoryId);
}

export function getAllFaqSlugs() {
  return faqItems.map((item) => item.slug);
}

/**
 * Generate FAQPage JSON-LD schema for a single question (for question pages)
 */
export function getQuestionSchema(item, siteUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      },
    ],
  };
}

/**
 * Generate FAQPage JSON-LD schema for the index (lists all questions)
 */
export function getFaqSchema(siteUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
`;
}

const emptyItem = () => ({
  id: '',
  slug: '',
  question: '',
  answer: '',
  category: 'basics',
  seo: { title: '', description: '', keywords: '' },
  ctaText: '',
  ctaUrl: '',
});

function normalizeItem(item) {
  const ctaUrl = item.ctaUrl === REFERRAL_URL || item.ctaUrl === 'REFERRAL_URL' ? REFERRAL_URL : item.ctaUrl || '';
  return {
    ...item,
    id: item.id || slugify(item.question) || 'new-faq',
    slug: item.slug || slugify(item.question) || 'new-faq',
    category: item.category || 'basics',
    seo: {
      title: item.seo?.title || '',
      description: item.seo?.description || '',
      keywords: item.seo?.keywords || '',
    },
    ctaText: item.ctaText || '',
    ctaUrl: item.ctaText ? ctaUrl : '',
  };
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null);
  const [formData, setFormData] = useState(emptyItem());
  const [hasChanges, setHasChanges] = useState(false);

  const adminSecret = import.meta.env.VITE_ADMIN_SECRET || '';

  useEffect(() => {
    const stored = sessionStorage.getItem(AUTH_KEY);
    if (adminSecret && stored === adminSecret) {
      setAuthenticated(true);
    }
    const draft = localStorage.getItem(STORAGE_KEY);
    if (draft) {
      try {
        const parsed = JSON.parse(draft);
        setItems(parsed.map(normalizeItem));
        setHasChanges(true);
      } catch {
        setItems(initialFaqItems.map(normalizeItem));
      }
    } else {
      setItems(initialFaqItems.map(normalizeItem));
    }
  }, []);

  useEffect(() => {
    if (hasChanges && items.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, hasChanges]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!adminSecret) {
      setAuthError('Admin not configured. Set VITE_ADMIN_SECRET in .env');
      return;
    }
    if (password === adminSecret) {
      sessionStorage.setItem(AUTH_KEY, password);
      setAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Invalid password');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(AUTH_KEY);
    setAuthenticated(false);
  };

  const openAdd = () => {
    setEditing('new');
    setFormData(emptyItem());
  };

  const openEdit = (item) => {
    setEditing(item.id);
    setFormData({
      ...item,
      ctaUrl: item.ctaUrl && item.ctaText ? REFERRAL_URL : '',
    });
  };

  const closeForm = () => {
    setEditing(null);
    setFormData(emptyItem());
  };

  const handleSave = (e) => {
    e.preventDefault();
    const normalized = normalizeItem({
      ...formData,
      id: formData.id || slugify(formData.question),
      slug: formData.slug || slugify(formData.question),
      ctaUrl: formData.ctaText ? REFERRAL_URL : '',
    });

    if (editing === 'new') {
      setItems((prev) => [...prev, normalized]);
    } else {
      setItems((prev) =>
        prev.map((i) => (i.id === editing ? normalized : i))
      );
    }
    setHasChanges(true);
    closeForm();
  };

  const handleDelete = (id) => {
    if (confirm('Delete this FAQ?')) {
      setItems((prev) => prev.filter((i) => i.id !== id));
      setHasChanges(true);
      closeForm();
    }
  };

  const handleExport = () => {
    const content = generateFaqDataJs(items);
    const blob = new Blob([content], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'faqData.js';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDiscard = () => {
    if (confirm('Discard all unsaved changes?')) {
      localStorage.removeItem(STORAGE_KEY);
      setItems(initialFaqItems.map(normalizeItem));
      setHasChanges(false);
      closeForm();
    }
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', String(index));
    e.currentTarget.classList.add('admin-item--dragging');
  };

  const handleDragEnd = (e) => {
    e.currentTarget.classList.remove('admin-item--dragging');
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    const dragIndex = Number(e.dataTransfer.getData('text/plain'));
    if (dragIndex === dropIndex) return;
    setItems((prev) => {
      const next = [...prev];
      const [removed] = next.splice(dragIndex, 1);
      next.splice(dropIndex, 0, removed);
      return next;
    });
    setHasChanges(true);
  };

  const updateForm = (field, value) => {
    setFormData((prev) => {
      const next = { ...prev };
      if (field.startsWith('seo.')) {
        const key = field.split('.')[1];
        next.seo = { ...prev.seo, [key]: value };
      } else {
        next[field] = value;
      }
      if (field === 'question' && !prev.slug) {
        next.slug = slugify(value);
      }
      if (field === 'question' && !prev.id) {
        next.id = slugify(value);
      }
      return next;
    });
  };

  if (!authenticated) {
    return (
      <div className="admin">
        <div className="admin-login">
          <h1>FAQ Admin</h1>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
            <button type="submit">Log in</button>
          </form>
          {authError && <p className="admin-error">{authError}</p>}
          {!adminSecret && (
            <p className="admin-hint">
              Add VITE_ADMIN_SECRET=yourpassword to .env to enable admin.
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="admin">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <header className="admin-header">
        <h1>FAQ Admin</h1>
        <div className="admin-actions">
          <Link to="/">View site</Link>
          <button onClick={openAdd}>Add FAQ</button>
          {hasChanges && (
            <>
              <button onClick={handleDiscard} className="btn-secondary">
                Discard
              </button>
              <button onClick={handleExport} className="btn-primary">
                Export faqData.js
              </button>
            </>
          )}
          <button onClick={handleLogout} className="btn-ghost">
            Log out
          </button>
        </div>
      </header>

      <main className="admin-main">
        {editing && (
          <div className="admin-form-overlay" onClick={closeForm}>
            <form
              className="admin-form"
              onClick={(e) => e.stopPropagation()}
              onSubmit={handleSave}
            >
              <h2>{editing === 'new' ? 'Add FAQ' : 'Edit FAQ'}</h2>
              <div className="form-group">
                <label>Question</label>
                <input
                  value={formData.question}
                  onChange={(e) => updateForm('question', e.target.value)}
                  required
                  placeholder="What is Network School?"
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <select
                  value={formData.category || 'basics'}
                  onChange={(e) => updateForm('category', e.target.value)}
                >
                  {FAQ_CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>ID (URL-friendly)</label>
                  <input
                    value={formData.id}
                    onChange={(e) => updateForm('id', e.target.value)}
                    placeholder="what-is-network-school"
                  />
                </div>
                <div className="form-group">
                  <label>Slug</label>
                  <input
                    value={formData.slug}
                    onChange={(e) => updateForm('slug', e.target.value)}
                    placeholder="what-is-network-school"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Answer</label>
                <textarea
                  value={formData.answer}
                  onChange={(e) => updateForm('answer', e.target.value)}
                  required
                  rows={5}
                  placeholder="Your answer..."
                />
              </div>
              <div className="form-group">
                <label>SEO Title</label>
                <input
                  value={formData.seo?.title || ''}
                  onChange={(e) => updateForm('seo.title', e.target.value)}
                  placeholder="What is Network School? | NS FAQ 2026"
                />
              </div>
              <div className="form-group">
                <label>SEO Description</label>
                <input
                  value={formData.seo?.description || ''}
                  onChange={(e) => updateForm('seo.description', e.target.value)}
                  placeholder="Meta description..."
                />
              </div>
              <div className="form-group">
                <label>SEO Keywords</label>
                <input
                  value={formData.seo?.keywords || ''}
                  onChange={(e) => updateForm('seo.keywords', e.target.value)}
                  placeholder="keyword1, keyword2, keyword3"
                />
              </div>
              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    checked={!!formData.ctaText}
                    onChange={(e) =>
                      updateForm('ctaText', e.target.checked ? 'Apply now' : '')
                    }
                  />
                  Add CTA link (uses referral URL)
                </label>
                {formData.ctaText && (
                  <input
                    value={formData.ctaText}
                    onChange={(e) => updateForm('ctaText', e.target.value)}
                    placeholder="Apply now to join"
                  />
                )}
              </div>
              <div className="form-actions">
                <button type="button" onClick={closeForm}>
                  Cancel
                </button>
                {editing !== 'new' && (
                  <button
                    type="button"
                    onClick={() => handleDelete(formData.id)}
                    className="btn-danger"
                  >
                    Delete
                  </button>
                )}
                <button type="submit">Save</button>
              </div>
            </form>
          </div>
        )}

        <div className="admin-list">
          <button
            type="button"
            className="admin-add-card"
            onClick={openAdd}
          >
            <span className="admin-add-icon">+</span>
            <span>Add new FAQ</span>
          </button>
          <p className="admin-drag-hint">Drag items to reorder. Order is preserved when you export.</p>
          {items.map((item, index) => (
            <div
              key={item.id}
              className="admin-item"
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragEnd={handleDragEnd}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
            >
              <span className="admin-item-drag" aria-label="Drag to reorder">⋮⋮</span>
              <div className="admin-item-content">
                <strong>{item.question}</strong>
                <span className="admin-item-slug">/faq/{item.slug}</span>
              </div>
              <div className="admin-item-actions">
                <button onClick={() => openEdit(item)}>Edit</button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="btn-danger-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {hasChanges && (
          <div className="admin-export-hint">
            <strong>You have unsaved changes.</strong> Click &quot;Export faqData.js&quot; to
            download the updated file, then replace <code>src/data/faqData.js</code> and
            run <code>npm run build</code>.
          </div>
        )}
      </main>
    </div>
  );
}

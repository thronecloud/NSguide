import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { faqItems as initialFaqItems, FAQ_CATEGORIES } from '../data/faqData';
import { quizQuestions as initialQuizQuestions, getQuizResult } from '../data/quizData';
import { REFERRAL_URL } from '../config';
import '../styles/Admin.css';

const STORAGE_KEY = 'ns-faq-admin-draft';
const QUIZ_STORAGE_KEY = 'ns-quiz-admin-draft';
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
    category: ${j(item.category || 'basics')},
    slug: ${j(item.slug)},
    image: ${j(item.image)},
    imageAlt: ${j(item.imageAlt)},
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
 *   slug (URL-friendly), question, answer, category,
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
export function getQuestionSchema(item) {
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
export function getFaqSchema() {
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

function generateQuizDataJs(questions) {
  const questionsStr = questions
    .map((q) => {
      const optionsStr = q.options
        .map((o) => `            { text: ${JSON.stringify(o.text)}, score: ${o.score} }`)
        .join(',\n');
      return `    {
        id: ${q.id},
        question: ${JSON.stringify(q.question)},
        options: [
${optionsStr}
        ]
    }`;
    })
    .join(',\n');

  return `export const quizQuestions = [
${questionsStr}
];

export function getQuizResult(score) {
    // Max score is 100
    if (score >= 85) {
        return {
            title: "The Founder (Perfect Fit)",
            description: "Pack your bags. You are exactly who Network School was built for. You thrive on autonomy, peer-to-peer learning, and high-intensity building. You won't care about the isolation of Forest City because your focus is entirely on your startup, your fitness, and the community.",
            callToAction: "Apply for the Fellowship",
            link: "https://ns.com",
            statusColor: "var(--color-accent)"
        };
    } else if (score >= 50) {
        return {
            title: "The Explorer (Solid Fit)",
            description: "You'll likely have a great time here, but you should temper your expectations. The community will be fantastic for you, but you might occasionally struggle with the isolation, the unstructured schedule, or the lack of traditional city infrastructure. Come for 30 days before committing to a year.",
            callToAction: "Read What to Expect",
            link: "#faq-where-located",
            statusColor: "#4caf50"
        };
    } else {
        return {
            title: "The Urbanite (Probably Not For You)",
            description: "Honestly... you might hate it here. And that's okay! If you need constant city energy, massive social separation from your workspace, or traditional vacation amenities, the intensity of Network School isn't the right vibe for you right now.",
            callToAction: "Read the Downsides",
            link: "#faq-downsides",
            statusColor: "#f44336"
        };
    }
}
`;
}

const emptyItem = () => ({
  slug: '',
  question: '',
  answer: '',
  category: 'basics',
  seo: { title: '', description: '', keywords: '' },
  image: '',
  imageAlt: '',
  ctaText: '',
  ctaUrl: '',
});

function normalizeItem(item) {
  const ctaUrl = item.ctaUrl === REFERRAL_URL || item.ctaUrl === 'REFERRAL_URL' ? REFERRAL_URL : item.ctaUrl || '';
  return {
    ...item,
    slug: item.slug || slugify(item.question) || 'new-faq',
    category: item.category || 'basics',
    seo: {
      title: item.seo?.title || '',
      description: item.seo?.description || '',
      keywords: item.seo?.keywords || '',
    },
    image: item.image || '',
    imageAlt: item.imageAlt || '',
    ctaText: item.ctaText || '',
    ctaUrl: item.ctaText ? ctaUrl : '',
  };
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState('faq');
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null);
  const [formData, setFormData] = useState(emptyItem());
  const [hasChanges, setHasChanges] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [hasQuizChanges, setHasQuizChanges] = useState(false);

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
    const quizDraft = localStorage.getItem(QUIZ_STORAGE_KEY);
    if (quizDraft) {
      try {
        setQuizQuestions(JSON.parse(quizDraft));
        setHasQuizChanges(true);
      } catch {
        setQuizQuestions(JSON.parse(JSON.stringify(initialQuizQuestions)));
      }
    } else {
      setQuizQuestions(JSON.parse(JSON.stringify(initialQuizQuestions)));
    }
  }, []);

  useEffect(() => {
    if (hasChanges && items.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, hasChanges]);

  useEffect(() => {
    if (hasQuizChanges && quizQuestions.length > 0) {
      localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(quizQuestions));
    }
  }, [quizQuestions, hasQuizChanges]);

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
    setEditing(item.slug);
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
      slug: formData.slug || slugify(formData.question),
      ctaUrl: formData.ctaText ? REFERRAL_URL : '',
    });

    if (editing === 'new') {
      setItems((prev) => [...prev, normalized]);
    } else {
      setItems((prev) =>
        prev.map((i) => (i.slug === editing ? normalized : i))
      );
    }
    setHasChanges(true);
    closeForm();
  };

  const handleDelete = (slug) => {
    if (confirm('Delete this FAQ?')) {
      setItems((prev) => prev.filter((i) => i.slug !== slug));
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

  const handleQuizScoreChange = (questionIndex, optionIndex, newScore) => {
    const parsed = parseInt(newScore, 10);
    if (isNaN(parsed) || parsed < 0) return;
    setQuizQuestions((prev) => {
      const next = JSON.parse(JSON.stringify(prev));
      next[questionIndex].options[optionIndex].score = parsed;
      return next;
    });
    setHasQuizChanges(true);
  };

  const handleQuizExport = () => {
    const content = generateQuizDataJs(quizQuestions);
    const blob = new Blob([content], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'quizData.js';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleQuizDiscard = () => {
    if (confirm('Discard all quiz changes?')) {
      localStorage.removeItem(QUIZ_STORAGE_KEY);
      setQuizQuestions(JSON.parse(JSON.stringify(initialQuizQuestions)));
      setHasQuizChanges(false);
    }
  };

  const getMaxQuizScore = () => {
    return quizQuestions.reduce((total, q) => {
      const maxOption = Math.max(...q.options.map((o) => o.score));
      return total + maxOption;
    }, 0);
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
        <h1>Admin</h1>
        <div className="admin-actions">
          <Link to="/">View site</Link>
          <button onClick={handleLogout} className="btn-ghost">
            Log out
          </button>
        </div>
      </header>
      <div className="admin-tabs">
        <button
          className={`admin-tab ${activeTab === 'faq' ? 'admin-tab--active' : ''}`}
          onClick={() => setActiveTab('faq')}
        >
          FAQ Manager
        </button>
        <button
          className={`admin-tab ${activeTab === 'quiz' ? 'admin-tab--active' : ''}`}
          onClick={() => setActiveTab('quiz')}
        >
          Quiz Manager
        </button>
      </div>

      <main className="admin-main">
        {activeTab === 'quiz' && (
          <div className="quiz-manager">
            <div className="quiz-manager-header">
              <h2>Quiz Scoring</h2>
              <div className="quiz-manager-actions">
                {hasQuizChanges && (
                  <>
                    <button onClick={handleQuizDiscard} className="btn-secondary">
                      Discard
                    </button>
                    <button onClick={handleQuizExport} className="btn-primary">
                      Export quizData.js
                    </button>
                  </>
                )}
              </div>
            </div>
            <p className="quiz-manager-info">
              Max possible score: <strong>{getMaxQuizScore()}</strong> (sum of highest-scoring option per question)
            </p>
            {quizQuestions.map((q, qi) => (
              <div key={q.id} className="quiz-question-card">
                <div className="quiz-question-card-header">
                  <span className="quiz-question-number-badge">Q{q.id}</span>
                  <span className="quiz-question-card-text">{q.question}</span>
                </div>
                <div className="quiz-options-list">
                  {q.options.map((opt, oi) => (
                    <div key={oi} className="quiz-option-row">
                      <span className="quiz-option-text">{opt.text}</span>
                      <div className="quiz-score-input-group">
                        <label>Score:</label>
                        <input
                          type="number"
                          min="0"
                          value={opt.score}
                          onChange={(e) => handleQuizScoreChange(qi, oi, e.target.value)}
                          className="quiz-score-input"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {hasQuizChanges && (
              <div className="admin-export-hint">
                <strong>You have unsaved quiz changes.</strong> Click &quot;Export quizData.js&quot; to
                download the updated file, then replace <code>src/data/quizData.js</code> and
                run <code>npm run build</code>.
              </div>
            )}
          </div>
        )}

        {activeTab === 'faq' && editing && (
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
              <div className="form-group">
                <label>Slug (URL-friendly)</label>
                <input
                  value={formData.slug}
                  onChange={(e) => updateForm('slug', e.target.value)}
                  placeholder="what-is-network-school"
                />
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
                <label>Image URL</label>
                <input
                  value={formData.image || ''}
                  onChange={(e) => updateForm('image', e.target.value)}
                  placeholder="/images/faq-illustrations/example.png"
                />
              </div>
              <div className="form-group">
                <label>Image Alt Text</label>
                <input
                  value={formData.imageAlt || ''}
                  onChange={(e) => updateForm('imageAlt', e.target.value)}
                  placeholder="Illustration describing the FAQ"
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
                    onClick={() => handleDelete(formData.slug)}
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

        {activeTab === 'faq' && (
          <>
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
                  key={item.slug}
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
                      onClick={() => handleDelete(item.slug)}
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
          </>
        )}
      </main>
    </div>
  );
}

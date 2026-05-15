import { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import SearchOverlay from './components/SearchOverlay';
import HomePage from './pages/HomePage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const QuizPage = lazy(() => import('./pages/QuizPage'));
const QuestionPage = lazy(() => import('./pages/QuestionPage'));
const ArticlesListPage = lazy(() => import('./pages/ArticlesListPage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const ReviewPage = lazy(() => import('./pages/ReviewPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const AdminPage = lazy(() => import('./pages/AdminPage'));

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    const handleCustom = () => setSearchOpen(true);
    window.addEventListener('keydown', handleKey);
    window.addEventListener('open-search', handleCustom);
    return () => {
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('open-search', handleCustom);
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/faq/:slug" element={<QuestionPage />} />
          <Route path="/articles" element={<ArticlesListPage />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

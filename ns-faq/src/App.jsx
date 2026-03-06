import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuestionPage from './pages/QuestionPage';
import NotFoundPage from './pages/NotFoundPage';

const AdminPage = lazy(() => import('./pages/AdminPage'));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq/:slug" element={<QuestionPage />} />
        <Route
          path="/admin"
          element={
            <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading admin...</div>}>
              <AdminPage />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

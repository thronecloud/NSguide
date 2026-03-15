import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '../config';
import Header from '../components/Header';
import NSQuiz from '../components/NSQuiz';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function QuizPage() {
  return (
    <>
      <Helmet>
        <title>Is Network School Right For You? | Compatibility Quiz — attendNS</title>
        <meta name="description" content="Take this brutally honest compatibility quiz to find out if Network School in Forest City, Malaysia is the right fit for you. 10 questions, instant results." />
        <meta name="keywords" content="Network School quiz, NS compatibility test, is Network School right for me, NS Forest City quiz" />
        <link rel="canonical" href={`${SITE_URL}/quiz`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Is Network School Right For You? | Compatibility Quiz" />
        <meta property="og:description" content="Take this brutally honest compatibility quiz to find out if Network School is the right fit for you." />
        <meta property="og:url" content={`${SITE_URL}/quiz`} />
      </Helmet>
      <div className="app">
        <Header />
        <main className="main" style={{ paddingTop: '2rem' }}>
          <NSQuiz />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}

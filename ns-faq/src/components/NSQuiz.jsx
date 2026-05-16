import { useState, useEffect } from 'react';
import { getQuizResult } from '../data/quizData';
import { REFERRAL_URL, trackReferralClick } from '../config';

export default function NSQuiz() {
    const [questions, setQuestions] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        fetch('/api/quiz')
            .then(r => r.json())
            .then(data => setQuestions(data.questions))
            .catch(() => {
                // Fallback to static data if API is unavailable
                import('../data/quizData').then(m => setQuestions(m.quizQuestions));
            });
    }, []);

    const startQuiz = () => setHasStarted(true);

    const handleOptionSelect = (optionScore) => {
        const newScore = score + optionScore;

        if (currentQuestionIndex + 1 < questions.length) {
            setScore(newScore);
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setScore(newScore);
            setShowResults(true);
        }
    };

    const resetQuiz = () => {
        setScore(0);
        setCurrentQuestionIndex(0);
        setShowResults(false);
        setHasStarted(false);
    };

    if (!questions) {
        return (
            <section className="quiz-container quiz-intro">
                <h2 className="quiz-title">Check your NS Compatibility</h2>
                <p className="quiz-description">Loading quiz...</p>
            </section>
        );
    }

    if (!hasStarted) {
        return (
            <section className="quiz-container quiz-intro">
                <h2 className="quiz-title">Check your NS Compatibility</h2>
                <p className="quiz-description">
                    Network School isn't a traditional vacation—it's an intense, focused environment.
                    Take this brutally honest {questions.length}-question compatibility test to see if you'll thrive in Forest City or if you should look elsewhere.
                </p>
                <button className="quiz-btn quiz-btn-primary" onClick={startQuiz}>
                    Take the Compatibility Test
                </button>
            </section>
        );
    }

    if (showResults) {
        const result = getQuizResult(score);
        return (
            <section className="quiz-container quiz-results" style={{ borderTop: `6px solid ${result.statusColor}` }}>
                <h3 className="quiz-result-title">{result.title}</h3>
                <p className="quiz-result-score">Compatibility Score: {score}%</p>
                <p className="quiz-result-description">{result.description}</p>
                <div className="quiz-actions">
                    <a href={REFERRAL_URL} className="quiz-btn quiz-btn-primary"
                        target="_blank" rel="noopener noreferrer" onClick={trackReferralClick}>
                        Apply Now &rarr;
                    </a>
                    <button className="quiz-btn quiz-btn-secondary" onClick={resetQuiz}>
                        Retake Quiz
                    </button>
                </div>
            </section>
        );
    }

    // Simple array shuffle (Fisher-Yates)
    const shuffleOptions = (options) => {
        const shuffled = [...options];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    const currentQuestion = questions[currentQuestionIndex];
    const shuffledOptions = shuffleOptions(currentQuestion.options);

    const progressPercentage = ((currentQuestionIndex) / questions.length) * 100;

    return (
        <section className="quiz-container">
            <h2 className="quiz-title" style={{ marginBottom: '1.5rem' }}>Check your NS Compatibility</h2>
            <div className="quiz-progress-bar">
                <div className="quiz-progress-fill" style={{ width: `${progressPercentage}%` }}></div>
            </div>
            <div className="quiz-question-header">
                <span className="quiz-question-number">Question {currentQuestionIndex + 1} of {questions.length}</span>
            </div>
            <h3 className="quiz-question-text">{currentQuestion.question}</h3>
            <div className="quiz-options">
                {shuffledOptions.map((option, index) => (
                    <button
                        key={index}
                        className="quiz-option-btn"
                        onClick={() => handleOptionSelect(option.score)}
                    >
                        {option.text}
                    </button>
                ))}
            </div>
        </section>
    );
}

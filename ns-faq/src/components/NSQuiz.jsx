import { useState } from 'react';
import { quizQuestions, getQuizResult } from '../data/quizData';

export default function NSQuiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);

    const startQuiz = () => setHasStarted(true);

    const handleOptionSelect = (optionScore) => {
        const newScore = score + optionScore;

        if (currentQuestionIndex + 1 < quizQuestions.length) {
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

    if (!hasStarted) {
        return (
            <section className="quiz-container quiz-intro">
                <h2 className="quiz-title">Is NS Right For You?</h2>
                <p className="quiz-description">
                    Network School isn't a traditional vacation—it's an intense, focused environment.
                    Take this brutally honest 10-question compatibility test to see if you'll thrive in Forest City or if you should look elsewhere.
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
                    <a href={result.link} className="quiz-btn quiz-btn-primary"
                        {...(result.link.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                        {result.callToAction} &rarr;
                    </a>
                    <button className="quiz-btn quiz-btn-secondary" onClick={resetQuiz}>
                        Retake Quiz
                    </button>
                </div>
            </section>
        );
    }

    const currentQuestion = quizQuestions[currentQuestionIndex];
    const progressPercentage = ((currentQuestionIndex) / quizQuestions.length) * 100;

    return (
        <section className="quiz-container">
            <div className="quiz-progress-bar">
                <div className="quiz-progress-fill" style={{ width: `${progressPercentage}%` }}></div>
            </div>
            <div className="quiz-question-header">
                <span className="quiz-question-number">Question {currentQuestionIndex + 1} of {quizQuestions.length}</span>
            </div>
            <h3 className="quiz-question-text">{currentQuestion.question}</h3>
            <div className="quiz-options">
                {currentQuestion.options.map((option, index) => (
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

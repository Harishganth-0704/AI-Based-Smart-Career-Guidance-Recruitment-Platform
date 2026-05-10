import React, { useState, useEffect } from 'react';
import { generateSkillQuiz } from '../services/api';
import './SkillQuiz.css';

const SkillQuiz = () => {
    const [topic, setTopic] = useState('');
    const [quiz, setQuiz] = useState(null);
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [isGenerating, setIsGenerating] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [score, setScore] = useState(0);
    const [error, setError] = useState('');

    const handleStart = async (e) => {
        e.preventDefault();
        if (!topic) return;

        setIsGenerating(true);
        setError('');
        setQuiz(null);
        setCurrentStep(0);
        setAnswers({});
        setIsFinished(false);

        try {
            const response = await generateSkillQuiz(topic);
            if (response.success) {
                setQuiz(response.quiz);
            } else {
                setError('Failed to generate quiz.');
            }
        } catch (err) {
            setError('AI service unavailable. Try again.');
        } finally {
            setIsGenerating(false);
        }
    };

    const handleAnswer = (optionIndex) => {
        setAnswers({ ...answers, [currentStep]: optionIndex });
    };

    const handleNext = () => {
        if (currentStep < quiz.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            calculateScore();
        }
    };

    const calculateScore = () => {
        let correct = 0;
        quiz.forEach((q, index) => {
            if (parseInt(answers[index]) === parseInt(q.correctAnswer)) {
                correct++;
            }
        });
        const finalScore = (correct / quiz.length) * 100;
        setScore(finalScore);
        setIsFinished(true);

        // Update badges if score is high
        if (finalScore >= 80) {
            const stored = localStorage.getItem('careerCraftGamification');
            if (stored) {
                const parsed = JSON.parse(stored);
                const badge = `${topic} Master 🏅`;
                if (!parsed.badges.includes(badge)) {
                    parsed.badges.push(badge);
                    parsed.points += 200;
                    localStorage.setItem('careerCraftGamification', JSON.stringify(parsed));
                }
            }
        }
    };

    return (
        <div className="skill-quiz-page">
            <header className="page-header">
                <h1>🧠 AI Skill Assessment</h1>
                <p>Earn Gold Badges by passing AI-generated technical quizzes.</p>
            </header>

            {!quiz && !isFinished && (
                <div className="quiz-setup glass fade-in">
                    <h2>Choose a Skill to Verify</h2>
                    <form onSubmit={handleStart}>
                        <div className="form-group">
                            <input 
                                type="text" 
                                placeholder="e.g. React, Python, AWS, Docker..." 
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="start-btn" disabled={isGenerating}>
                            {isGenerating ? 'Generating Unique Quiz...' : 'Start Assessment'}
                        </button>
                    </form>
                    {error && <p className="error">{error}</p>}
                </div>
            )}

            {quiz && !isFinished && (
                <div className="quiz-box glass fade-in">
                    <div className="quiz-progress">
                        Question {currentStep + 1} of {quiz.length}
                        <div className="progress-bar">
                            <div className="progress-fill" style={{width: `${((currentStep + 1) / quiz.length) * 100}%`}}></div>
                        </div>
                    </div>

                    <div className="question-container">
                        <h3>{quiz[currentStep].question}</h3>
                        <div className="options-grid">
                            {quiz[currentStep].options.map((option, index) => (
                                <button 
                                    key={index} 
                                    className={`option-btn ${answers[currentStep] === index ? 'selected' : ''}`}
                                    onClick={() => handleAnswer(index)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button 
                        className="next-btn" 
                        disabled={answers[currentStep] === undefined}
                        onClick={handleNext}
                    >
                        {currentStep === quiz.length - 1 ? 'Finish Quiz' : 'Next Question'}
                    </button>
                </div>
            )}

            {isFinished && (
                <div className="result-box glass fade-in">
                    <div className="result-icon">{score >= 80 ? '🏆' : '📚'}</div>
                    <h2>Assessment Complete!</h2>
                    <div className="score-display">
                        Your Score: <span>{score}%</span>
                    </div>
                    {score >= 80 ? (
                        <p className="success-msg">Congratulations! You've earned the <strong>{topic} Master 🏅</strong> badge. Check your Achievements!</p>
                    ) : (
                        <p className="fail-msg">Great effort! Aim for 80% to earn a verified badge. Keep learning!</p>
                    )}
                    <button className="retry-btn" onClick={() => {setQuiz(null); setIsFinished(false);}}>Try Another Topic</button>
                </div>
            )}
        </div>
    );
};

export default SkillQuiz;

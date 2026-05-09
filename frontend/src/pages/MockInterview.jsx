// src/pages/MockInterview.jsx

import React, { useState, useRef, useEffect } from 'react';
import './MockInterview.css';

const careerRoles = [
  'Data Scientist',
  'AI Engineer',
  'Machine Learning Engineer',
  'Cloud Architect',
  'Cybersecurity',
  'Game Developer',
  'Mobile UI Designer',
  'Full-Stack Developer',
  'Python Developer',
  'JavaScript Developer',
  'React Developer',
  'SQL Developer',
  'Java Developer',
  'C++ Developer',
  'Write your own...'
];

const MockInterview = () => {
  const [selectedRole, setSelectedRole] = useState(careerRoles[0]);
  const [customRole, setCustomRole] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  
  // 1. CHANGED: Feedback is now an object, not just a string
  const [feedbackData, setFeedbackData] = useState(null);
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [sessionHistory, setSessionHistory] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = false;
      
      recognitionRef.current.onresult = (event) => {
        let currentTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          currentTranscript += event.results[i][0].transcript + ' ';
        }
        setUserAnswer(prev => prev + ' ' + currentTranscript.trim());
      };

      recognitionRef.current.onerror = (event) => {
        console.error("Speech recognition error", event.error);
        setIsRecording(false);
      };

      recognitionRef.current.onend = () => {
        setIsRecording(false);
      };
    }
    
    return () => {
        if (recognitionRef.current) {
            recognitionRef.current.stop();
        }
    };
  }, []);

  const toggleRecording = () => {
    if (!recognitionRef.current) {
      alert("Your browser does not support Voice Recording. Please use Google Chrome.");
      return;
    }

    if (isRecording) {
      recognitionRef.current.stop();
      setIsRecording(false);
    } else {
      recognitionRef.current.start();
      setIsRecording(true);
    }
  };

  const getTargetRole = () =>
    selectedRole === 'Write your own...' ? customRole : selectedRole;

  const startInterview = async () => {
    const finalTargetRole = getTargetRole();
    if (!finalTargetRole.trim()) {
      setError('Please select or enter a job role to start.');
      return;
    }

    setIsLoading(true);
    setInterviewStarted(true);
    setCurrentQuestion('');
    setFeedbackData(null);
    setUserAnswer('');
    setSessionHistory([]);

    try {
      const { startInterview: apiStartInterview } = await import('../services/api');
      const response = await apiStartInterview(finalTargetRole, '');

      if (response.success && response.question) {
        setCurrentQuestion(response.question);
        setSessionHistory([{ question: response.question }]);
        speakText(response.question); // Automatically speak the first question
      } else {
        throw new Error('Failed to get interview question');
      }
    } catch (err) {
      setError('Failed to start interview. Please check your backend connection.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9; // Slightly slower for clarity
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  };

  const submitAnswer = async () => {
    const finalTargetRole = getTargetRole();
    setIsLoading(true);

    try {
      const { submitInterviewAnswer } = await import('../services/api');
      const response = await submitInterviewAnswer(finalTargetRole, currentQuestion, userAnswer);

      if (response) {
        setFeedbackData(response);
      } else {
        throw new Error('Failed to get feedback');
      }
    } catch (err) {
      setError('Failed to submit answer. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const getNextQuestion = async () => {
    setFeedbackData(null);
    setUserAnswer('');
    setIsLoading(true);
    const finalTargetRole = getTargetRole();
    const historyText = sessionHistory.map((s) => `Q: ${s.question}`).join('\n');

    try {
      const { startInterview: apiStartInterview } = await import('../services/api');
      const response = await apiStartInterview(finalTargetRole, historyText);

      if (response.success && response.question) {
        setCurrentQuestion(response.question);
        setSessionHistory((prev) => [...prev, { question: response.question }]);
        speakText(response.question); // Speak the next question
      } else {
        throw new Error('Failed to get next question');
      }
    } catch (err) {
      setError('Failed to get next question. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mock-interview-page">
      <header className="mock-interview-header">
        <h1>AI Mock Interview Simulator</h1>
        <p>Practice coding and theory questions with real-time feedback.</p>
      </header>

      {!interviewStarted ? (
        <div className="setup-container">
          <h2>Prepare for Your Interview</h2>
          <div className="form-group">
            <label htmlFor="role-select">Select your target role:</label>
            <select
              id="role-select"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              {careerRoles.map((role) => (
                <option key={role}>{role}</option>
              ))}
            </select>
          </div>

          {selectedRole === 'Write your own...' && (
            <div className="form-group custom-role-input">
              <label htmlFor="custom-role-input">Enter your custom role:</label>
              <input
                type="text"
                id="custom-role-input"
                value={customRole}
                onChange={(e) => setCustomRole(e.target.value)}
                placeholder="e.g., DevOps Engineer"
              />
            </div>
          )}

          {error && <p className="error-message">{error}</p>}

          <button onClick={startInterview} className="start-button" disabled={isLoading}>
            {isLoading ? 'Preparing...' : 'Start Interview'}
          </button>
        </div>
      ) : (
        <div className="interview-container">
          {error && <p className="error-message">{error}</p>}

          {currentQuestion && (
            <div className="question-section">
              <div className="question-box">
                <h3>Question for {getTargetRole()}:</h3>
                <p className="question-text">{currentQuestion}</p>
                <button 
                  onClick={() => speakText(currentQuestion)}
                  className="speak-btn"
                  title="Hear question"
                >
                  🔊 Re-play Question
                </button>
              </div>

              <div className="answer-section">
                <div className="answer-header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem'}}>
                    <label htmlFor="user-answer">Your Answer:</label>
                    <button 
                        onClick={toggleRecording} 
                        className={`record-btn ${isRecording ? 'recording' : ''}`}
                        title={isRecording ? 'Stop Recording' : 'Start Recording'}
                    >
                        {isRecording ? '🛑 Stop Recording' : '🎤 Use Voice Answer'}
                    </button>
                </div>
                <textarea
                  id="user-answer"
                  rows="8"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Type your answer here or click 'Use Voice Answer' to speak..."
                ></textarea>
                <button
                  onClick={submitAnswer}
                  className="submit-answer-btn"
                  disabled={isLoading || !userAnswer}
                >
                  {isLoading ? 'Getting Feedback...' : 'Get Feedback'}
                </button>
              </div>
            </div>
          )}

          {/* 4. CHANGED: Render formatted feedback (Score, Suggestions, Ideal Answer) */}
          {feedbackData && (
            <div className="feedback-section">
              <div className="feedback-header">
                <h3>AI Feedback</h3>
                <span className={`score-badge ${feedbackData.score >= 7 ? 'good' : 'improve'}`}>
                  Score: {feedbackData.score}/10
                </span>
              </div>

              <div className="feedback-content">
                <h4>Suggestions for Improvement:</h4>
                <ul>
                  {feedbackData.feedback.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                <div className="ideal-answer-box">
                  <h4>Ideal Answer:</h4>
                  <p>{feedbackData.ideal_answer}</p>
                </div>
              </div>

              <button onClick={getNextQuestion} className="next-question-btn" disabled={isLoading}>
                {isLoading ? 'Thinking...' : 'Next Question'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MockInterview;
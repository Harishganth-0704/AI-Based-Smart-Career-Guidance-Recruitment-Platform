const express = require('express');
const router = express.Router();
const careerController = require('../controllers/careerController');
const { protect } = require('../middleware/authMiddleware');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

// Route to get career recommendations based on skills
router.post('/recommend', protect, careerController.getRecommendations);

// Route for the chatbot
router.post('/chat', careerController.chat);

// Route to get jobs from JSearch API
router.get('/jobs', careerController.getJobs);

// Route to analyze resume
router.post('/resume/analyze', upload.single('resume'), careerController.analyzeResume);

// Route to get assessment history
router.get('/history', protect, careerController.getHistory);

// Routes for Mock Interview
router.post('/interview/start', careerController.startInterview);
router.post('/interview/feedback', careerController.submitAnswer);

// Route for AI Cover Letter
router.post('/cover-letter', careerController.generateCoverLetter);

// Route for AI Study Plan
router.post('/study-plan', careerController.generateStudyPlan);

// Route for Daily Tip
router.get('/daily-tip', careerController.getDailyTip);

// Route for Video Resume Script
router.post('/video-script', careerController.generateVideoScript);

// Route for Company Cheat Sheet
router.post('/cheat-sheet', careerController.getCompanyCheatSheet);

// Route for Salary Insight
router.post('/salary-insight', careerController.getSalaryInsight);

// Route for Networking Outreach
router.post('/outreach', careerController.generateOutreach);

// Route for Skill Quiz
router.post('/skill-quiz', careerController.generateSkillQuiz);

module.exports = router;

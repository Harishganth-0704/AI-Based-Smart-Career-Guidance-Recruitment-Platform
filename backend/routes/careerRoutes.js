const express = require('express');
const router = express.Router();
const careerController = require('../controllers/careerController');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

// Route to get career recommendations based on skills
router.post('/recommend', careerController.getRecommendations);

// Route for the chatbot
router.post('/chat', careerController.chat);

// Route to get jobs from JSearch API
router.get('/jobs', careerController.getJobs);

// Route to analyze resume
router.post('/resume/analyze', upload.single('resume'), careerController.analyzeResume);

// Route to get assessment history
router.get('/history', careerController.getHistory);

// Routes for Mock Interview
router.post('/interview/start', careerController.startInterview);
router.post('/interview/feedback', careerController.submitAnswer);

module.exports = router;

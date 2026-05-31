const express = require('express');
const router = express.Router();
const { register, login, getMe, updateStats, getLeaderboard, updateProgress, forgotPassword, resetPassword } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.put('/stats', protect, updateStats);
router.put('/progress', protect, updateProgress);
router.get('/leaderboard', getLeaderboard);
router.post('/forgot-password', forgotPassword);
router.put('/reset-password/:token', resetPassword);

module.exports = router;

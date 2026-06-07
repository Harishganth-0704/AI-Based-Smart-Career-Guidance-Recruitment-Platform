const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Trust proxy - REQUIRED for Render.com (behind reverse proxy)
app.set('trust proxy', 1);

// CORS Configuration - Allow Vercel frontend
const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:5175',
    'http://localhost:3000',
    process.env.FRONTEND_URL,
    'https://ai-based-smart-career-guidance-recr.vercel.app'
].filter(Boolean);

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (mobile apps, curl, etc.)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Security Middleware
app.use(helmet());
app.use(express.json());

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    standardHeaders: true,
    legacyHeaders: false,
});
app.use('/api', limiter);

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/careercraft';
mongoose.connect(MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB Connection Error:', err));

// Health Check Route
app.get('/', (req, res) => {
    res.json({ status: 'ok', message: 'CareerCraft API is running...' });
});

// Import Routes
const authRoutes = require('./routes/authRoutes');
const careerRoutes = require('./routes/careerRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/career', careerRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

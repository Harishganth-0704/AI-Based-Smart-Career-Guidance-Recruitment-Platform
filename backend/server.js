const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Security Middleware
app.use(helmet()); // Sets various HTTP headers for security
app.use(cors());
app.use(express.json());

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api', limiter);

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/careercraft';
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB Connection Error:', err));

// Routes
app.get('/', (req, res) => {
    res.send('CareerCraft API is running...');
});

// Import Routes
const authRoutes = require('./routes/authRoutes');
const careerRoutes = require('./routes/careerRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/career', careerRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

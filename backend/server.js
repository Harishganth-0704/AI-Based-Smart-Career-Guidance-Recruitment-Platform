const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/careercraft';
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB Connection Error:', err));

// Routes Placeholder
app.get('/', (req, res) => {
    res.send('CareerCraft API is running...');
});

// Import Routes
const careerRoutes = require('./routes/careerRoutes');
app.use('/api/career', careerRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

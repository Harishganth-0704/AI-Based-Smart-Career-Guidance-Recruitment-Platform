const mongoose = require('mongoose');

const assessmentSchema = new mongoose.Schema({
    skills: String,
    interests: String,
    analysis: String,
    recommendations: [
        {
            role: String,
            match: String,
            roadmap: String
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Assessment', assessmentSchema);

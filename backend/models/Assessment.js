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
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Assessment', assessmentSchema);

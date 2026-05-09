const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// Load env vars from backend/.env
dotenv.config({ path: path.join(__dirname, '.env') });

const Assessment = require('./models/Assessment');

async function checkDatabase() {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected successfully!\n');

        const data = await Assessment.find().sort({ createdAt: -1 }).limit(5);
        
        if (data.length === 0) {
            console.log('No data found in the database yet. Try running an assessment on the website first!');
        } else {
            console.log(`Found ${data.length} recent entries in "assessments" collection:\n`);
            data.forEach((item, index) => {
                console.log(`--- Entry #${index + 1} ---`);
                console.log(`Type: ${item.skills.includes('Resume') ? 'Resume Analysis' : 'Career Assessment'}`);
                console.log(`Target: ${item.interests}`);
                console.log(`Analysis: ${item.analysis.substring(0, 100)}...`);
                console.log(`Date: ${item.createdAt}`);
                console.log('------------------------\n');
            });
        }

        await mongoose.disconnect();
        console.log('Disconnected from MongoDB.');
    } catch (error) {
        console.error('Error connecting to database:', error.message);
    }
}

checkDatabase();

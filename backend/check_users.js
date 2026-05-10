const mongoose = require('mongoose');
require('dotenv').config();

// Define User Schema structure for the script
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    points: Number,
    streak: Number,
    badges: [String],
    createdAt: Date
});

const User = mongoose.model('User', userSchema);

async function checkDatabase() {
    try {
        const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://Harishganth:harish123@careercraft-cluster.ugto02u.mongodb.net/careercraft?appName=careercraft-cluster';
        
        console.log('Connecting to MongoDB Atlas...');
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected Successfully!\n');

        console.log('--- FETCHING USERS FROM DATABASE ---');
        const users = await User.find().select('-__v'); // Exclude version key
        
        if (users.length === 0) {
            console.log('No users found in the database. Please Signup on the frontend first.');
        } else {
            users.forEach((user, index) => {
                console.log(`\nUser #${index + 1}:`);
                console.log(`Name    : ${user.name}`);
                console.log(`Email   : ${user.email}`);
                console.log(`Points  : ${user.points}`);
                console.log(`Streak  : ${user.streak}`);
                console.log(`Badges  : ${user.badges.join(', ')}`);
                console.log(`Joined  : ${user.createdAt}`);
            });
            console.log(`\nTotal Users Registered: ${users.length}`);
        }

    } catch (error) {
        console.error('Error connecting or fetching data:', error);
    } finally {
        await mongoose.disconnect();
        console.log('\nDisconnected from MongoDB.');
    }
}

checkDatabase();

const axios = require('axios');

async function testBackend() {
    try {
        const response = await axios.post('http://localhost:5001/api/career/chat', {
            message: "Hello, what's your name?",
            history: []
        });
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}

testBackend();

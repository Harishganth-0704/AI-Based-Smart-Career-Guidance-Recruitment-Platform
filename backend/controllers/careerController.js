const { GoogleGenerativeAI } = require("@google/generative-ai");
const Assessment = require("../models/Assessment");

exports.getRecommendations = async (req, res) => {
    try {
        const { skills, interests } = req.body;
        
        // Initialize Gemini API
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const prompt = `
            As a career counselor, analyze the following user profile and provide career recommendations.
            Skills: ${skills}
            Interests: ${interests}

            Return your response ONLY as a JSON object with the following structure:
            {
                "success": true,
                "analysis": "A brief explanation of why these careers fit.",
                "recommendations": [
                    { "role": "Career Name", "match": "Percentage", "roadmap": "relevant roadmap path like /data-scientist or /ai-engineer" }
                ]
            }

            Roadmap paths available: /data-scientist, /ai-engineer, /cloud-architect, /cybersecurity, /game-developer, /ml-engineer, /mobile-ui-designer, /skills/python, /skills/javascript, /skills/react.
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        
        // Extract JSON from the response (sometimes AI adds markdown)
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        const data = jsonMatch ? JSON.parse(jsonMatch[0]) : { success: false, message: "Failed to parse AI response" };

        // Save to Database
        if (data.success) {
            try {
                const newAssessment = new Assessment({
                    skills,
                    interests,
                    analysis: data.analysis,
                    recommendations: data.recommendations
                });
                await newAssessment.save();
                data.assessmentId = newAssessment._id;
            } catch (dbError) {
                console.error('Database Save Error:', dbError);
            }
        }

        res.json(data);
    } catch (error) {
        console.error('Gemini API Error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.chat = async (req, res) => {
    try {
        const { message, history } = req.body;
        
        // Initialize Gemini API
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        // Gemini requires the history to start with a 'user' message
        const chatHistory = (history || []).filter(h => h.text).map(h => ({
            role: h.sender === 'bot' ? 'model' : 'user',
            parts: [{ text: h.text }]
        }));

        // If history starts with model, remove it
        if (chatHistory.length > 0 && chatHistory[0].role === 'model') {
            chatHistory.shift();
        }

        const chat = model.startChat({
            history: chatHistory
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        const text = response.text();

        res.json({ success: true, text });
    } catch (error) {
        console.error('Gemini Chat Error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.getJobs = async (req, res) => {
    try {
        const { query, location } = req.query;
        const apiKey = process.env.JSEARCH_API_KEY;

        if (!apiKey) {
            // Fallback realistic mock data
            return res.json({
                success: true,
                data: [
                    {
                        job_id: 'm1',
                        job_title: `${query || 'Software Engineer'}`,
                        employer_name: 'Google',
                        job_city: location || 'Bangalore',
                        job_country: 'IN',
                        job_employment_type: 'FULLTIME',
                        job_apply_link: 'https://careers.google.com',
                        job_description: 'Join our team to build next-generation applications and scale our infrastructure globally.'
                    },
                    {
                        job_id: 'm2',
                        job_title: `Senior ${query || 'Developer'}`,
                        employer_name: 'Microsoft',
                        job_city: location || 'Hyderabad',
                        job_country: 'IN',
                        job_employment_type: 'FULLTIME',
                        job_apply_link: 'https://careers.microsoft.com',
                        job_description: 'We are looking for an experienced professional to lead our cloud integration projects.'
                    },
                    {
                        job_id: 'm3',
                        job_title: `Junior ${query || 'Specialist'}`,
                        employer_name: 'Amazon',
                        job_city: location || 'Chennai',
                        job_country: 'IN',
                        job_employment_type: 'INTERN',
                        job_apply_link: 'https://amazon.jobs',
                        job_description: 'Exciting opportunity for freshers to start their career in a fast-paced tech environment.'
                    }
                ]
            });
        }

        const axios = require('axios');
        const response = await axios.get('https://jsearch.p.rapidapi.com/search', {
            params: { query: `${query} in ${location}`, num_pages: 1 },
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
            }
        });

        res.json({ success: true, data: response.data.data });
    } catch (error) {
        console.error('JSearch API Error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.analyzeResume = async (req, res) => {
    try {
        const { targetRole } = req.body;
        const file = req.file;

        if (!file) {
            return res.status(400).json({ success: false, message: 'No resume file uploaded.' });
        }

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const prompt = `
            You are an expert career coach. Analyze the attached resume and compare it against the target role: "${targetRole}".
            Return a JSON object with:
            {
                "bestFitRole": "The role that best fits the resume",
                "matchAnalysis": "A 2-3 sentence analysis of how well they fit the target role.",
                "gapAnalysis": ["List of missing skills/experience"],
                "learningSuggestions": ["Specific steps to improve"]
            }
        `;

        const result = await model.generateContent([
            prompt,
            {
                inlineData: {
                    data: file.buffer.toString('base64'),
                    mimeType: file.mimetype
                }
            }
        ]);

        const response = await result.response;
        const text = response.text();
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        const data = jsonMatch ? JSON.parse(jsonMatch[0]) : { success: false, message: "Failed to parse AI response" };

        // Save to Database
        if (data.success) {
            try {
                const newAssessment = new Assessment({
                    skills: `Resume Analysis for ${targetRole}`,
                    interests: targetRole,
                    analysis: data.matchAnalysis,
                    recommendations: [{ role: data.bestFitRole, match: "N/A", roadmap: "N/A" }]
                });
                await newAssessment.save();
            } catch (dbError) {
                console.error('Database Save Error:', dbError);
            }
        }

        res.json(data);
    } catch (error) {
        console.error('Resume Analysis Error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.getHistory = async (req, res) => {
    try {
        const assessments = await Assessment.find().sort({ createdAt: -1 });
        res.json({ success: true, assessments });
    } catch (error) {
        console.error('History Fetch Error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.startInterview = async (req, res) => {
    try {
        const { targetRole, history } = req.body;
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const prompt = `
            You are a professional technical interviewer for a "${targetRole}" role.
            Ask one concise technical or behavioral question relevant to this role.
            Output ONLY the question text (no greetings, no formatting).
            Previous questions asked: ${history || 'None'}
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text().trim();

        res.json({ success: true, question: text });
    } catch (error) {
        console.error('Interview Start Error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.submitAnswer = async (req, res) => {
    try {
        const { targetRole, question, answer } = req.body;
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const prompt = `
            Evaluate this interview answer for a "${targetRole}" role.
            Question: "${question}"
            Answer: "${answer}"

            Return a strict JSON object:
            {
              "score": "Integer 1-10",
              "feedback": ["Suggestion 1", "Suggestion 2", "Suggestion 3"],
              "ideal_answer": "A complete professional answer."
            }
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        const data = jsonMatch ? JSON.parse(jsonMatch[0]) : { success: false, message: "Failed to parse feedback" };

        res.json(data);
    } catch (error) {
        console.error('Interview Feedback Error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

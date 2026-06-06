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

        // Save to Database only if user is logged in
        if (data.success && req.user) {
            try {
                const newAssessment = new Assessment({
                    user: req.user._id,
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
            You are an expert career coach and resume reviewer.
            A candidate has submitted a resume for the target role: "${targetRole}".
            
            Provide a professional analysis for the target role "${targetRole}".
            Return ONLY a valid JSON object with no markdown formatting:
            {
                "bestFitRole": "The role that best fits this candidate",
                "matchAnalysis": "A 2-3 sentence analysis of how well they fit the target role.",
                "gapAnalysis": ["Missing skill 1", "Missing skill 2", "Missing skill 3"],
                "learningSuggestions": ["Improvement step 1", "Improvement step 2", "Improvement step 3"]
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

        // Save to Database only if user is logged in
        if (data.bestFitRole && req.user) {
            try {
                const newAssessment = new Assessment({
                    user: req.user._id,
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
        // If no user (guest), return empty history
        if (!req.user) {
            return res.json({ success: true, assessments: [] });
        }
        const assessments = await Assessment.find({ user: req.user._id }).sort({ createdAt: -1 });
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

exports.generateCoverLetter = async (req, res) => {
    try {
        const { targetRole, resumeContent } = req.body;
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const prompt = `
            You are a professional hiring manager. Create a high-quality, persuasive cover letter for a candidate.
            Target Role: "${targetRole}"
            Candidate Resume Details: "${resumeContent || 'Use general professional skills'}"

            Instructions:
            - Make it professional and enthusiastic.
            - Focus on how the candidate's skills match the target role.
            - Keep it around 300-400 words.
            - Return ONLY the text of the cover letter.
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text().trim();

        res.json({ success: true, coverLetter: text });
    } catch (error) {
        console.error('Cover Letter Generation Error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.generateStudyPlan = async (req, res) => {
    try {
        const { targetRole, missingSkills } = req.body;
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const prompt = `
            A candidate wants to become a "${targetRole}" but lacks these skills: "${missingSkills.join(', ')}".
            Create a structured 7-day intensive study plan to bridge these gaps.
            For each day, provide:
            - Focus Topic
            - Key concepts to learn
            - A specific YouTube search query for tutorials.

            Return the response as a valid JSON array of objects:
            [
              {
                "day": 1,
                "topic": "Topic Name",
                "concepts": ["Concept 1", "Concept 2"],
                "youtubeSearch": "Search query"
              }
            ]
            Return ONLY the JSON array.
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        const jsonMatch = text.match(/\[[\s\S]*\]/);
        const data = jsonMatch ? JSON.parse(jsonMatch[0]) : [];

        res.json({ success: true, studyPlan: data });
    } catch (error) {
        console.error('Study Plan Error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.getDailyTip = async (req, res) => {
    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const prompt = `
            Give a single, powerful career advice or job market insight for a tech student in 2026.
            It should be 2 sentences max. 
            Also provide a "Market Pulse" emoji.
            Format: "TIP: [Advice] | PULSE: [Emoji]"
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text().trim();

        res.json({ success: true, tip: text });
    } catch (error) {
        res.json({ success: false, tip: "TIP: Keep building projects and learning new tech! | PULSE: 🚀" });
    }
};

exports.generateVideoScript = async (req, res) => {
    try {
        const { targetRole, skills } = req.body;
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const prompt = `
            Generate a professional 60-second video resume script for a candidate applying for: "${targetRole}".
            The candidate has these skills: "${skills}".
            
            The script should have:
            1. **The Hook (0-10s):** Engaging introduction.
            2. **The Value (10-40s):** Highlighting skills and achievements.
            3. **The Call to Action (40-60s):** Professional closing.

            Provide the output as a clear script with timing markers.
            Format:
            [00:00 - 00:10] Introduction: ...
            [00:10 - 00:40] Core Skills: ...
            [00:40 - 01:00] Conclusion: ...
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text().trim();

        res.json({ success: true, script: text });
    } catch (error) {
        console.error('Video Script Error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.getCompanyCheatSheet = async (req, res) => {
    try {
        const { companyName, targetRole } = req.body;
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const prompt = `
            You are an expert interview coach. Generate an "Interview Cheat Sheet" for a candidate interviewing at "${companyName}" for the role of "${targetRole}".
            Provide:
            1. **Company DNA:** 2 sentences about their culture/values.
            2. **Top 5 Technical/Behavioral Questions:** Specific to this company and role.
            3. **The Winning Strategy:** One unique tip to stand out in their interview.

            Format the response clearly with headings.
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text().trim();

        res.json({ success: true, cheatSheet: text });
    } catch (error) {
        console.error('Cheat Sheet Error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.getSalaryInsight = async (req, res) => {
    try {
        const { targetRole, location } = req.body;
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const prompt = `
            Act as a Compensation Expert. Provide salary insights for "${targetRole}" in "${location}".
            Return the following:
            1. **Market Range:** Approximate annual salary for Entry, Mid, and Senior levels.
            2. **Top Paying Skills:** 3 skills that increase salary for this role.
            3. **Negotiation Script:** A 2-sentence professional script to use when an HR offers a lower salary.

            Format the response clearly.
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text().trim();

        res.json({ success: true, salaryInsight: text });
    } catch (error) {
        console.error('Salary Error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.generateOutreach = async (req, res) => {
    try {
        const { targetRole, purpose } = req.body;
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const prompt = `
            Act as a Networking Expert. Write a professional outreach message for a candidate interested in a "${targetRole}" role.
            Purpose: "${purpose}"
            
            Provide two versions:
            1. **LinkedIn Message:** (Short, max 300 characters for connection request).
            2. **Professional Email:** (Clear subject line and body).

            Keep the tone professional yet engaging.
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text().trim();

        res.json({ success: true, outreach: text });
    } catch (error) {
        console.error('Outreach Error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.generateSkillQuiz = async (req, res) => {
    try {
        const { topic } = req.body;
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const prompt = `
            Generate a technical MCQ quiz on the topic: "${topic}".
            Provide exactly 5 questions.
            Each question must have 4 options and 1 correct answer.
            Return ONLY a valid JSON array of objects with this structure:
            [
              {
                "id": 1,
                "question": "...",
                "options": ["A", "B", "C", "D"],
                "correctAnswer": "index of correct option (0-3)"
              }
            ]
            Do not include markdown backticks.
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text().trim();
        
        // Clean up text in case AI adds markdown
        text = text.replace(/```json/g, '').replace(/```/g, '').trim();

        const quizData = JSON.parse(text);
        res.json({ success: true, quiz: quizData });
    } catch (error) {
        console.error('Quiz Error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    AI Job Match Score — Compare resume skills vs job description
// @route   POST /api/career/job-match
// @access  Public
exports.getJobMatchScore = async (req, res) => {
    try {
        const { mySkills, jobDescription } = req.body;
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const prompt = `
            You are an expert ATS (Applicant Tracking System) and career coach.
            A candidate has the following skills: "${mySkills}"
            They are applying for a job with this description: "${jobDescription}"

            Analyze the match and return ONLY a valid JSON object with this exact structure:
            {
                "matchScore": <integer 0-100>,
                "matchedSkills": ["skill1", "skill2", "skill3"],
                "missingSkills": ["gap1", "gap2", "gap3"],
                "verdict": "One-sentence verdict on their candidacy strength.",
                "improvementTip": "One actionable tip to improve their profile for this role."
            }
            Do not include markdown or backticks.
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text().trim().replace(/```json/g, '').replace(/```/g, '').trim();
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        const data = jsonMatch ? JSON.parse(jsonMatch[0]) : { success: false, message: "Failed to parse AI response" };

        res.json({ success: true, ...data });
    } catch (error) {
        console.error('Job Match Score Error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    AI Resume Content Suggestions — Generate bullet points for a resume section
// @route   POST /api/career/resume/suggestions
// @access  Private (protected)
exports.getResumeSuggestions = async (req, res) => {
    try {
        const { targetRole, section, context } = req.body;

        if (!targetRole || !section) {
            return res.status(400).json({ success: false, message: 'targetRole and section are required.' });
        }

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

        const prompt = `
            You are an expert resume writer and career coach.
            Generate exactly 5 powerful, ATS-optimized resume bullet points for the "${section}" section of a resume targeting the role: "${targetRole}".
            ${context ? `Additional context from the user: "${context}"` : ''}

            Requirements:
            - Start each bullet with a strong action verb (e.g., Developed, Led, Architected, Optimized)
            - Include quantifiable achievements where possible (%, $, time saved, etc.)
            - Keep each bullet to 1-2 lines max
            - Tailor specifically for ${targetRole}

            Return ONLY a valid JSON array of exactly 5 strings. No markdown, no explanation.
            Example format: ["Bullet 1...", "Bullet 2...", "Bullet 3...", "Bullet 4...", "Bullet 5..."]
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text().trim().replace(/```json/g, '').replace(/```/g, '').trim();

        const jsonMatch = text.match(/\[[\s\S]*\]/);
        const suggestions = jsonMatch ? JSON.parse(jsonMatch[0]) : [];

        res.json({ success: true, suggestions });
    } catch (error) {
        console.error('Resume Suggestions Error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const getCareerRecommendations = async (skills, interests) => {
    try {
        const response = await api.post('/career/recommend', { skills, interests });
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

export const sendChatMessage = async (message, history) => {
    try {
        const response = await api.post('/career/chat', { message, history });
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

export const getJobs = async (query, location) => {
    try {
        const response = await api.get('/career/jobs', {
            params: { query, location }
        });
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

export const analyzeResume = async (file, targetRole) => {
    try {
        const formData = new FormData();
        formData.append('resume', file);
        formData.append('targetRole', targetRole);

        const response = await api.post('/career/resume/analyze', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

export const startInterview = async (targetRole, history) => {
    try {
        const response = await api.post('/career/interview/start', { targetRole, history });
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

export const submitInterviewAnswer = async (targetRole, question, answer) => {
    try {
        const response = await api.post('/career/interview/feedback', { targetRole, question, answer });
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

export const generateCoverLetter = async (targetRole, resumeContent) => {
    try {
        const response = await api.post('/career/cover-letter', { targetRole, resumeContent });
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

export const generateStudyPlan = async (targetRole, missingSkills) => {
    try {
        const response = await api.post('/career/study-plan', { targetRole, missingSkills });
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

export const generateVideoScript = async (targetRole, skills) => {
    try {
        const response = await api.post('/career/video-script', { targetRole, skills });
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

export const getCompanyCheatSheet = async (companyName, targetRole) => {
    try {
        const response = await api.post('/career/cheat-sheet', { companyName, targetRole });
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

export const getSalaryInsight = async (targetRole, location) => {
    try {
        const response = await api.post('/career/salary-insight', { targetRole, location });
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

export const generateOutreach = async (targetRole, purpose) => {
    try {
        const response = await api.post('/career/outreach', { targetRole, purpose });
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

export const generateSkillQuiz = async (topic) => {
    try {
        const response = await api.post('/career/skill-quiz', { topic });
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

export const getHistory = async () => {
    try {
        const response = await api.get('/career/history');
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

export const updateStats = async (stats) => {
    try {
        const response = await api.put('/auth/stats', stats);
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

export const getLeaderboard = async () => {
    try {
        const response = await api.get('/auth/leaderboard');
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

export default api;

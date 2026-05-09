import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

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

export default api;

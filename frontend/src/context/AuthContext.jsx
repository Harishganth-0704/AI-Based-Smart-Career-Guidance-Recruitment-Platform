import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkLoggedIn = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const res = await axios.get('http://localhost:5001/api/auth/me', {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    setUser(res.data.data);
                } catch (err) {
                    localStorage.removeItem('token');
                    setUser(null);
                }
            }
            setLoading(false);
        };
        checkLoggedIn();
    }, []);

    const login = async (email, password) => {
        const res = await axios.post('http://localhost:5001/api/auth/login', { email, password });
        localStorage.setItem('token', res.data.token);
        setUser(res.data);
        return res.data;
    };

    const signup = async (name, email, password) => {
        const res = await axios.post('http://localhost:5001/api/auth/register', { name, email, password });
        localStorage.setItem('token', res.data.token);
        setUser(res.data);
        return res.data;
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    const updateProgress = async (moduleId) => {
        if (!user) return;
        try {
            const { toggleModuleProgress } = await import('../services/api');
            const data = await toggleModuleProgress(moduleId);
            if (data.success) {
                setUser({ ...user, completedModules: data.completedModules });
                return data.completedModules;
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, signup, logout, updateProgress }}>
            {children}
        </AuthContext.Provider>
    );
};

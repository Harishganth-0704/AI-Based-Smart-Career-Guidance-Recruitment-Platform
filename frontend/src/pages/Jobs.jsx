// src/pages/Jobs.jsx

import React, { useState, useEffect } from 'react';
import './Jobs.css';

const careerRoles = [
    'Data Scientist',
    'AI Engineer',
    'Machine Learning Engineer',
    'Cloud Architect',
    'Cybersecurity',
    'Game Developer',
    'Mobile UI Designer',
    'Full-Stack Developer',
    'Python Developer',
    'JavaScript Developer',
    'React Developer',
    'SQL Developer',
    'Java Developer',
    'C++ Developer',
    'Write your own...' // Added new option
];

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState(careerRoles[0]);
    const [customSearchTerm, setCustomSearchTerm] = useState(''); // New state for custom input
    const [location, setLocation] = useState('India');

    const fetchJobs = async (query, loc) => {
        setIsLoading(true);
        setError('');
        setJobs([]);

        try {
            const { getJobs } = await import('../services/api');
            const response = await getJobs(query, loc);

            if (response.success && response.data) {
                setJobs(response.data);
            } else {
                setError('No jobs found for this search. Please try another role or location.');
            }
        } catch (err) {
            setError('Failed to fetch job listings. Please check your backend connection.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchJobs(searchTerm, location);
    }, []); // Fetch initial jobs on component mount

    const handleSearch = (e) => {
        e.preventDefault();
        const finalSearchTerm = searchTerm === 'Write your own...' ? customSearchTerm : searchTerm;
        if (!finalSearchTerm.trim()) {
            setError('Please select or enter a job role to search.');
            return;
        }
        fetchJobs(finalSearchTerm, location);
    };
    
    return (
        <div className="jobs-page">
            <header className="jobs-header">
                <h1>Find Your Next Opportunity</h1>
                <p>Search for jobs that match your skills and career goals.</p>
            </header>

            <form className="search-form" onSubmit={handleSearch}>
                <div className="search-input-group">
                    <label htmlFor="role-select">Role</label>
                    <select id="role-select" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}>
                        {careerRoles.map(role => <option key={role} value={role}>{role}</option>)}
                    </select>
                </div>

                {searchTerm === 'Write your own...' && (
                    <div className="search-input-group custom-role-input">
                        <label htmlFor="custom-role-input">Custom Role</label>
                        <input
                            type="text"
                            id="custom-role-input"
                            value={customSearchTerm}
                            onChange={(e) => setCustomSearchTerm(e.target.value)}
                            placeholder="e.g., DevOps Engineer"
                        />
                    </div>
                )}

                <div className="search-input-group">
                    <label htmlFor="location-input">Location</label>
                    <input
                        type="text"
                        id="location-input"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g., Bangalore, India"
                    />
                </div>
                <button type="submit" className="search-button" disabled={isLoading}>Search</button>
            </form>

            {isLoading && (
                <div className="loading-container">
                    <div className="spinner"></div>
                    <p>Fetching job listings...</p>
                </div>
            )}

            {error && <p className="error-message">{error}</p>}

            <div className="job-listings-container">
                {jobs.map((job) => (
                    <div key={job.job_id} className="job-card">
                        <div className="job-card-header">
                            <img 
                                src={job.employer_logo || `https://placehold.co/50x50/ffffff/33334d?text=${job.employer_name?.charAt(0)}`} 
                                alt={`${job.employer_name} logo`} 
                                className="company-logo"
                            />
                            <div className="job-title-company">
                                <h4>{job.job_title}</h4>
                                <p>{job.employer_name}</p>
                            </div>
                        </div>
                        <div className="job-card-details">
                            <span>{job.job_city}, {job.job_country}</span>
                            <span>{job.job_employment_type}</span>
                        </div>
                        <p className="job-description">
                            {job.job_description?.substring(0, 150)}...
                        </p>
                        <a href={job.job_apply_link} target="_blank" rel="noopener noreferrer" className="apply-button">
                            View & Apply
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Jobs;


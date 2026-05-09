// src/pages/Phase10Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const Phase10Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 10: Big Data</h1>
                <p>Exploring tools and frameworks designed to process, store, and analyze large datasets efficiently.</p>
                <Link to="/data-scientist" className="back-link">← Back to Data Scientist Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Tools & Frameworks:
                            <ul>
                                <li>Apache Hadoop (HDFS, MapReduce)</li>
                                <li>Apache Spark (for fast, general-purpose cluster computing)</li>
                                <li>Apache Kafka (for real-time data streaming)</li>
                            </ul>
                        </li>
                        <li>Cloud/Managed Services:
                            <ul>
                                <li>Databricks (unified data analytics platform built on Spark)</li>
                                <li>Snowflake (cloud data warehousing)</li>
                            </ul>
                        </li>
                        <li>Querying/Data Warehousing:
                            <ul>
                                <li>Hive (SQL-like interface for Hadoop)</li>
                                <li>Pig (high-level platform for creating MapReduce programs)</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                <div className="resource-item">
                    <h3>📗 Book: Hadoop: The Definitive Guide – Tom White</h3>
                    <p>The essential guide to Apache Hadoop, covering its components and how to use them for big data processing.</p>
                    <a href="https://www.amazon.in/Hadoop-Definitive-Guide-Tom-White/dp/9352133897" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                <div className="resource-item">
                    <h3>🎓 Course: Big Data Fundamentals – Coursera (UC San Diego)</h3>
                    <p>An introductory course to the world of Big Data, covering key concepts, technologies, and applications.</p>
                    <a href="https://www.coursera.org/learn/big-data-introduction" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera</a>
                </div>

                <div className="resource-item">
                    <h3>▶️ YouTube: Apache Spark Full Course (Simplilearn)</h3>
                    <p>A comprehensive tutorial on Apache Spark, covering its architecture, programming, and various use cases.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/_C8kWso4ne4?si=4PEhW2eNNBnaXW_t"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default Phase10Resources;
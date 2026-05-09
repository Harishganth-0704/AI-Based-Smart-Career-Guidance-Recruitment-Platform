// src/pages/CloudPhase9Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const CloudPhase9Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 9: Observability, Monitoring & Logging</h1>
                <p>Establishing comprehensive observability practices, including metrics, logging, and tracing, to ensure the health and performance of cloud-based systems.</p>
                <Link to="/cloud-architect" className="back-link">← Back to Cloud Architect Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>CloudWatch metrics/logs/alarms, CloudWatch Logs Insights, CloudWatch Synthetics</li>
                        <li>Distributed tracing: X-Ray, OpenTelemetry; integration with APMs</li>
                        <li>Centralized logging (Kinesis Firehose → S3/Elasticsearch/OpenSearch) and retention policies</li>
                        <li>SRE principles: SLIs, SLOs, alerting fatigue management</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Guide --- */}
                <div className="resource-item">
                    <h3>📄 Guide: Cloud Observability: Logging, Metrics, Tracing, and SLOs</h3>
                    <p>A practical guide covering the pillars of cloud observability to build robust monitoring and logging strategies.</p>
                    <a href="https://www.amazon.in/dp/B0FTGM4762/ref=sr_1_2?crid=LRW8BKKW83T9&dib=eyJ2IjoiMSJ9.6wpXWBrl_JtF-mhyNzhoFU-1GK5GJDWeuiDgien41FtT6bxqxmB7AGUbSXG4fU6WIgybGzU8vxhX6J9_UsnYlI8qoQKUlVzpvxGwqm1pMHJu5kWiIFrrF4hiahXyfags_sie4Jq764R9F6zRT9YLJRzJe9OrrUgoi7c-QsNxFTuSwreFnA_3w4v_2nXNYlio.ws6RMScBqQYL_IavOgxiqY9GYcSX7i-82qKB2H8wWDk&dib_tag=se&keywords=cloud+Observability%2C+Monitoring+%26+Logging&qid=1760196639&sprefix=loud+observability%2C+monitoring+%26+logging%2Caps%2C210&sr=8-2" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Logging, Monitoring and Observability in Google Cloud (Coursera)</h3>
                    <p>Learn how to implement effective logging, monitoring, and observability solutions specifically within the Google Cloud Platform.</p>
                    <a href="https://www.coursera.org/learn/logging-monitoring-observability-google-cloud-fr" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Coursera Course</a>
                </div>

                {/* --- YouTube Video 1 --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Observability vs. Monitoring</h3>
                    <p>Understand the key differences and relationship between observability and monitoring in modern systems.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/vY61h6cSkVA?si=dWp9DTMfDrnoiIxe"
                        title="YouTube video player (Observability vs. Monitoring)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>

                {/* --- YouTube Video 2 --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: AWS re:Invent - Observability best practices at Amazon</h3>
                    <p>Gain insights into how Amazon implements observability best practices for its large-scale cloud infrastructure.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/zZPzXEBW4P8?si=XI3zw8pUKhy-blyK"
                        title="YouTube video player (AWS re:Invent Observability)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                
                {/* --- YouTube Video 3 (New) --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Cloud logging</h3>
                    <p>An introduction to cloud logging services, demonstrating how to collect, store, and analyze logs in a cloud environment.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/gyDp-Cl_MdA?si=f0l45Jn6vT9m-eOo"
                        title="YouTube video player (Cloud logging)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default CloudPhase9Resources;
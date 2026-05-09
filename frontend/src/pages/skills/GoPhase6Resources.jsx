import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming this is in src/pages/

const GoPhase6Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 6: Portfolio & Resume Strategy (Golang Developer)</h1>
                <p>Showcase hands-on Go expertise, backend development strength, concurrency knowledge, and real-world problem-solving.</p>
                <Link to="/skills/golang" className="back-link">← Back to Golang Roadmap</Link>
            </header>

            {/* Section for Portfolio Strategy */}
            <div className="resource-section">
                <h2>1) Portfolio Strategy (Golang Developer)</h2>
                <div className="resource-item">
                    <h3>✅ What to Include (Core Projects 3–5)</h3>
                    <ul>
                        <li>Must highlight concurrency, networking, APIs, and performance.</li>
                        <li>Suggested project types:
                            <ul>
                                <li>RESTful API service (Gin/Fiber)</li>
                                <li>CLI automation tool</li>
                                <li>Distributed system (gRPC)</li>
                                <li>Real-time chat app (WebSockets)</li>
                                <li>Caching system (Redis integration)</li>
                                <li>Microservices demo</li>
                                <li>Log monitor / system tool</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="resource-item">
                    <h3>Project Depth</h3>
                    <ul>
                        <li>Explain:
                            <ul>
                                <li>What problem it solves</li>
                                <li>Tech stack used (Go, Gin, gRPC, Docker, SQL, Redis, etc.)</li>
                                <li>Key features (concurrency, memory optimization)</li>
                                <li>Architecture diagram (optional) </li>
                                <li>Benchmarks / load testing results</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="resource-item">
                    <h3>Code Quality & Public Presence</h3>
                    <ul>
                        <li>Strong folder structure, Unit tests, Interfaces for abstractions</li>
                        <li>Comments + documentation, Error handling</li>
                        <li>GitHub with active commits & README with:
                            <ul>
                                <li>Features, Setup instructions, Screenshots, Contribution guide</li>
                            </ul>
                        </li>
                        <li>Good Extras:
                            <ul>
                                <li>Technical blogs on Go ("How I built X with Goroutines")</li>
                                <li>Contribution to open source</li>
                                <li>Dockerized projects & CI/CD workflow (GitHub Actions)</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Resume Strategy */}
            <div className="resource-section">
                <h2>2) Resume Strategy (Golang Developer)</h2>
                <div className="resource-item">
                    <h3>✅ Format & Focus</h3>
                    <ul>
                        <li>Header: Name, Email, GitHub, LinkedIn, Portfolio</li>
                        <li>Skills Section:
                            <ul>
                                <li>Languages: Go, SQL</li>
                                <li>Frameworks: Gin, Fiber, Echo</li>
                                <li>Tools: Docker, Kubernetes, Git, Redis, RabbitMQ</li>
                                <li>Cloud: AWS / GCP</li>
                                <li>Concepts: Concurrency (goroutines, channels), Microservices, REST, gRPC</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="resource-item">
                    <h3>Experience / Projects (Use Impact-based bullet points)</h3>
                    <ul>
                        <li>Mention impact with numbers: *“Built scalable Go microservice handling 50k req/sec using Gin & Redis with less than 20ms latency.”*</li>
                        <li>Project Description Style: Action + Tech + Result
                            <ul>
                                <li>Developed REST APIs using Go + Gin, improving response time by 30%.</li>
                                <li>Implemented worker pool with goroutines → increased throughput 40%.</li>
                                <li>Reduced DB latency by 25% using Redis caching.</li>
                                <li>Wrote unit tests → 85% coverage.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="resource-item">
                    <h3>Education & Keywords</h3>
                    <ul>
                        <li>Education: Degree + certifications (Go specialization, Cloud)</li>
                        <li>Keywords (ATS Friendly): Golang, Cloud-native, Microservices, Distributed systems, Concurrency, REST/gRPC, Docker / Kubernetes, PostgreSQL / MongoDB</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
);

export default GoPhase6Resources;
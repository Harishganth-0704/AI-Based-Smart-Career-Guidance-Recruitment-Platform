import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming this is in src/pages/

const GoPhase5Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 5: Real-World Projects</h1>
                <p>Apply your Go skills to build complete, high-quality projects that demonstrate proficiency in concurrency, web services, and systems programming.</p>
                <Link to="/skills/golang" className="back-link">← Back to Golang Roadmap</Link>
            </header>

            {/* Section for Key Topics (REMOVED) */}

            {/* Section for Project Ideas - UPDATED */}
            <div className="resource-section">
                <h2>✅ Golang Project Ideas</h2>
                
                <div className="resource-item">
                    <h3>1) URL Shortener Service</h3>
                    <p>Generate short links that redirect to long URLs. Tech: Gin/Fiber, Redis/PostgreSQL. Concepts: REST, caching. </p>
                </div>
                <div className="resource-item">
                    <h3>2) Real-Time Chat Application</h3>
                    <p>A WebSocket-based messaging application. Tech: Gorilla WebSocket, Redis pub/sub. Concepts: concurrency, networking. </p>
                </div>
                <div className="resource-item">
                    <h3>3) Job Scheduler / Cron System</h3>
                    <p>Schedule and manage recurring jobs or tasks. Concepts: goroutines, worker pool, time package.</p>
                </div>
                <div className="resource-item">
                    <h3>4) CLI Password Manager</h3>
                    <p>A command-line tool to store encrypted passwords locally. Concepts: crypto package, file I/O.</p>
                </div>
                <div className="resource-item">
                    <h3>5) E-commerce Backend</h3>
                    <p>APIs for products, users, checkout, and orders. Tech: Fiber/Gin, PostgreSQL. Concepts: REST, clean architecture, database/sql.</p>
                </div>
                <div className="resource-item">
                    <h3>6) Log Monitoring & Alert System</h3>
                    <p>A service that consumes log streams and triggers alerts based on rules. Concepts: streaming, goroutines, `strings` package.</p>
                </div>
                <div className="resource-item">
                    <h3>7) Microservices Demo App</h3>
                    <p>Multiple small services that communicate via gRPC. Concepts: distributed systems, gRPC, protocol buffers. [Image of gRPC microservices communication]</p>
                </div>
                <div className="resource-item">
                    <h3>8) File Sharing Server</h3>
                    <p>An HTTP server to handle file uploads and downloads securely. Concepts: `net/http`, concurrency.</p>
                </div>
                <div className="resource-item">
                    <h3>9) Distributed Cache System</h3>
                    <p>A simplified version of Redis with cache nodes and replication. Tech: gRPC. Concepts: consistent hashing, distributed systems.</p>
                </div>
                <div className="resource-item">
                    <h3>10) Real-Time Stock Price Tracker</h3>
                    <p>Fetches stock data from an API and visualizes it in real-time via a UI or CLI. Concepts: goroutines, WebSockets, API integration.</p>
                </div>
            </div>

            {/* Section for Curated Resources - UPDATED */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- New Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: Top 10 Golang Project Ideas with Source Code in 2025</h3>
                    <p>A list of Go project ideas from GeeksforGeeks to provide inspiration and, in some cases, source code examples.</p>
                    <a href="https://www.geeksforgeeks.org/go-language/golang-project-ideas/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to GeeksforGeeks</a>
                </div>

                {/* --- New Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Building a Massive Golang Microservices Project</h3>
                    <p>A comprehensive video on building a large-scale microservices project with Go, GraphQL, gRPC, Docker, Postgres, and Elasticsearch. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/5UIh1dV7aZ8?si=1wXdRpTEZVZZqnpQ"
                        title="YouTube video player (Golang Microservices Project)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>

                {/* --- Original Video (Kept as requested) --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Golang Projects (Playlist)</h3>
                    <p>A playlist of various Golang projects to provide inspiration and guidance for your own portfolio pieces. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/videoseries?list=PLXE2Bj4edhg5t-WNV_0PeMC_1A8sn1Ev-"
                        title="YouTube video player (Golang Projects Playlist)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default GoPhase5Resources;
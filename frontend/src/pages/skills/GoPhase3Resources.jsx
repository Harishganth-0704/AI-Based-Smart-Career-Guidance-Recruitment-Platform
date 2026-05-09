import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming this is in src/pages/

const GoPhase3Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 3: Intermediate/Advanced Go + Concurrency + Web + DB + Testing</h1>
                <p>A deep dive into Go's most powerful features: concurrency, web development, database interaction, and robust testing practices.</p>
                <Link to="/skills/golang" className="back-link">← Back to Golang Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Intermediate:
                            <ul>
                                <li>Methods + interfaces deep-dive</li>
                                <li>Pointers</li>
                                <li>Composition</li>
                                <li>Error patterns</li>
                                <li>Context</li>
                            </ul>
                        </li>
                        <li>Concurrency:
                            <ul>
                                <li>Goroutines </li>
                                <li>Channels (Buffered and Unbuffered)</li>
                                <li>`select` statement</li>
                                <li>`WaitGroup`, `Mutex` </li>
                                <li>Race conditions</li>
                            </ul>
                        </li>
                        <li>Web:
                            <ul>
                                <li>`net/http` package</li>
                                <li>Building REST APIs</li>
                                <li>JSON encoding/decoding</li>
                                <li>Middleware</li>
                                <li>Templating (`html/template`)</li>
                                <li>API patterns</li>
                            </ul>
                        </li>
                        <li>Databases:
                            <ul>
                                <li>`database/sql` package</li>
                                <li>PostgreSQL/MySQL integration</li>
                                <li>GORM (Go's most popular ORM)</li>
                                <li>CRUD Operations</li>
                                <li>Connection pooling</li>
                            </ul>
                        </li>
                        <li>Testing:
                            <ul>
                                <li>Unit tests (`go test`)</li>
                                <li>Benchmarks</li>
                                <li>Table-driven testing</li>
                                <li>`go fmt` / `go vet` / `go lint`</li>
                                <li>Profiling</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: Go Web Programming</h3>
                    <p>A book that teaches you how to build scalable, high-performance web applications in Go using modern best practices. </p>
                    <a href="https://www.manning.com/books/go-web-programming" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Manning</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: Concurrency (Effective Go)</h3>
                    <p>The official Go documentation explaining the idiomatic approach to concurrency, including goroutines and channels.</p>
                    <a href="https://go.dev/doc/effective_go#concurrency" target="_blank" rel="noopener noreferrer" className="resource-link">Read Effective Go Docs</a>
                </div>
                <div className="resource-item">
                    <h3>📝 Notes: Web Dev (Tutorial: Developing a RESTful API with Go and Gin)</h3>
                    <p>The official Go tutorial for building a basic RESTful API, a great hands-on starting point for web development.</p>
                    <a href="https://go.dev/doc/tutorial/web-service-gin" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Go.dev Tutorial</a>
                </div>
                <div className="resource-item">
                    <h3>📝 Notes: How to Work with SQL Databases in Go (freeCodeCamp)</h3>
                    <p>A practical article on how to use Go's built-in `database/sql` package to interact with SQL databases.</p>
                    <a href="https://www.freecodecamp.org/news/how-to-work-with-sql-databases-in-go/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to freeCodeCamp</a>
                </div>

                {/* --- Courses --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Building Modern Web Applications with Go (Golang) (Udemy)</h3>
                    <p>Learn to build modern, professional web applications with Go, covering topics from templating to database integration. </p>
                    <a href="https://www.udemy.com/course/building-modern-web-applications-with-go/?couponCode=MT251103G2" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>
                <div className="resource-item">
                    <h3>🎓 Course: Working with Concurrency in Go (Golang) (Udemy)</h3>
                    <p>A course dedicated to mastering Go's powerful concurrency model, including goroutines, channels, and common patterns. </p>
                    <a href="https://www.udemy.com/course/working-with-concurrency-in-go-golang/?couponCode=MT251103G2" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>
                <div className="resource-item">
                    <h3>🎓 Course: Backend Engineering with Go (Udemy)</h3>
                    <p>A comprehensive guide to backend development using Go, covering APIs, databases, and more. [Image of backend system design]</p>
                    <a href="https://www.udemy.com/course/backend-engineering-with-go/?couponCode=MT251103G2" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Videos --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Master Go Programming With These Concurrency Patterns (in 40 minutes). Note: Video is Available.</h3>
                    <p>A concise video covering common and effective concurrency patterns in Go to write efficient parallel code. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/qyM8Pi1KiiM?si=RrCAnXUV4svlRZYq"
                        title="YouTube video player (Go Concurrency Patterns)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="resource-item">
                    <h3>▶️ YouTube: Build Web Apps with Go Language (golang)</h3>
                    <p>A tutorial on building web applications from scratch using Go's standard library. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Vlie-srOU8c?si=HCLiIXXTCZY-RrrQ"
                        title="YouTube video player (Build Web Apps with Go)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="resource-item">
                    <h3>▶️ YouTube: Go - SQL Databases in Golang with the database/sql package</h3>
                    <p>Learn how to connect to and interact with SQL databases in Go using the standard `database/sql` package. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Y7a0sNKdoQk?si=kn-YwKz9n5-omBdG"
                        title="YouTube video player (Go SQL Databases)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="resource-item">
                    <h3>▶️ YouTube: A hands-on guide for proper Unit Testing in Go!</h3>
                    <p>A practical, hands-on video guide to writing effective unit tests in Go using the built-in testing package. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/W4njY-VzkUU?si=yHQ6aJpL9msknm2E"
                        title="YouTube video player (Go Unit Testing)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default GoPhase3Resources;
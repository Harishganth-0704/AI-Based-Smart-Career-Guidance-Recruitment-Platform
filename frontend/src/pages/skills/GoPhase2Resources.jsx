import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming this is in src/pages/

const GoPhase2Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 2: Data Handling + OOP-Style Concepts + Data Structures</h1>
                <p>Learn Go's core data types, its unique approach to object-oriented programming with structs and interfaces, and fundamental data structures.</p>
                <Link to="/skills/golang" className="back-link">← Back to Golang Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Data Handling:
                            <ul>
                                <li>Arrays, Slices (very important)</li>
                                <li>Maps</li>
                                <li>Strings & runes</li>
                                <li>`for-range` loop</li>
                                <li>Copy vs Reference semantics</li>
                            </ul>
                        </li>
                        <li>OOP-Style Concepts:
                            <ul>
                                <li>Structs (Go's "classes")</li>
                                <li>Methods (with receiver)</li>
                                <li>Encapsulation (managing exported/unexported fields)</li>
                                <li>Composition (struct embedding)</li>
                                <li>Interfaces (implicit implementation) [Image of Go struct vs interface diagram]</li>
                                <li>Polymorphism</li>
                                <li>Generics (Go 1.18+)</li>
                            </ul>
                        </li>
                        <li>Data Structures (Implementation):
                            <ul>
                                <li>Stack, Queue, Linked List </li>
                                <li>HashMap (using Go's built-in `map`)</li>
                                <li>Tree (basic implementation)</li>
                                <li>Graph (basic implementation)</li>
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
                    <h3>📘 Book: The Go Programming Language (Alan Donovan)</h3>
                    <p>Often called the "Go Bible," this is a comprehensive guide to the language, its core concepts, and idioms. </p>
                    <a href="https://www.gopl.io/" target="_blank" rel="noopener noreferrer" className="resource-link">View Book Website</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: Structs & Interfaces (Effective Go)</h3>
                    <p>Official documentation from the Go team explaining the idiomatic way to use structs and interfaces in Go.</p>
                    <a href="https://go.dev/doc/effective_go" target="_blank" rel="noopener noreferrer" className="resource-link">Read Effective Go Docs</a>
                </div>
                <div className="resource-item">
                    <h3>📝 Notes: Generics (Go Docs)</h3>
                    <p>The official tutorial on how to use Go's generic programming features, introduced in version 1.18.</p>
                    <a href="https://go.dev/doc/tutorial/generics" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Generics Tutorial</a>
                </div>
                <div className="resource-item">
                    <h3>📝 Notes: Data Structures in Go (GitHub)</h3>
                    <p>A GitHub repository containing examples and implementations of various algorithms and data structures in Go.</p>
                    <a href="https://github.com/arnauddri/algorithms" target="_blank" rel="noopener noreferrer" className="resource-link">Go to GitHub Repo</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Mastering DS & Algorithms with Golang – Arrays Top 10 (Udemy)</h3>
                    <p>A course focused on mastering data structures and algorithms, specifically using Golang, starting with arrays. </p>
                    <a href="https://www.udemy.com/course/mastering-ds-algorithms-with-golang-arrays-top-10/?couponCode=MT251103G2" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Videos --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Learn Object-Oriented Programming In Golang</h3>
                    <p>A video tutorial explaining Go's unique approach to object-oriented programming using structs and interfaces. </p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/6JcPRFEENVs?si=wvzAeOrlLawnzXgf"
                        title="YouTube video player (Learn OOP In Golang)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="resource-item">
                    <h3>▶️ YouTube: Stacks And Queues In Go (Data Structures and Algorithms - Golang)</h3>
                    <p>A practical video demonstrating how to implement stack and queue data structures in Go. [Image of stack vs queue diagram]</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/5fp8Bzp_olk?si=m1n-_PKCIcVpLbMq"
                        title="YouTube video player (Stacks And Queues In Go)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default GoPhase2Resources;
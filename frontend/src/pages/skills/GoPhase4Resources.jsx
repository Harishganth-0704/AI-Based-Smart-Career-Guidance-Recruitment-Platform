import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming this is in src/pages/

const GoPhase4Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 4: Professional Tooling, Packaging & Deployment</h1>
                <p>Learn to structure, package, build, and deploy production-ready Go applications using modules, Docker, and CI/CD pipelines.</p>
                <Link to="/skills/golang" className="back-link">← Back to Golang Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Go Modules deep dive </li>
                        <li>Application structure best practices (e.g., project layout)</li>
                        <li>Dependency management (`go mod tidy`, `go get`)</li>
                        <li>Build + versioning (`go build`)</li>
                        <li>Docker (containerizing Go apps) </li>
                        <li>CI/CD (e.g., GitHub Actions for Go) </li>
                        <li>Logging/monitoring (e.g., `log` package, Prometheus)</li>
                        <li>Deployment to:
                            <ul>
                                <li>Linux servers</li>
                                <li>Cloud platforms (AWS, GCP, Azure)</li>
                                <li>Kubernetes</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Notes: Hands-On Dependency Management in Go</h3>
                    <p>The official Go documentation on how to manage dependencies for your projects using Go modules.</p>
                    <a href="https://go.dev/doc/modules/managing-dependencies" target="_blank" rel="noopener noreferrer" className="resource-link">Read Go Docs</a>
                </div>
                <div className="resource-item">
                    <h3>📝 Notes: Go Modules (Official Docs)</h3>
                    <p>More in-depth official documentation on Go modules, a key concept for modern Go development.</p>
                    <a href="https://go.dev/doc/modules/" target="_blank" rel="noopener noreferrer" className="resource-link">Read Go Docs</a>
                </div>
                <div className="resource-item">
                    <h3>📝 Notes: Building and Deployment in GO</h3>
                    <p>A tutorial covering the basics of building and deploying Go applications.</p>
                    <a href="https://www.mytectra.com/tutorials/golang/building-and-deployment" target="_blank" rel="noopener noreferrer" className="resource-link">Go to MyTectra</a>
                </div>
                <div className="resource-item">
                    <h3>📝 Notes: DevOpsifying a Go Web Application: An End-to-End Guide</h3>
                    <p>A practical guide on applying DevOps principles to a Go web application, including CI/CD and deployment.</p>
                    <a href="https://dev.to/iamamash/devopsifying-a-go-web-application-an-end-to-end-guide-17bm" target="_blank" rel="noopener noreferrer" className="resource-link">Read on dev.to</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Complete Microservices with Go (Udemy)</h3>
                    <p>Learn how to build and deploy microservices using Go, a common use case for the language in backend systems. [Image of microservices architecture diagram]</p>
                    <a href="https://www.udemy.com/course/complete-microservices-with-go/?couponCode=MT251103G2" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>
            </div>
        </div>
    </>
);

export default GoPhase4Resources;
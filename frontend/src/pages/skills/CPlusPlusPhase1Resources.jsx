import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from '../ResourceStyles'; // Assuming styles are in the parent directory (src/pages/)

const CPlusPlusPhase1Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 1: Introduction, Setup & Core Basics</h1>
                <p>Setting up your C++ development environment and learning the fundamental syntax, data types, control structures, and functions of the language.</p>
                <Link to="/skills/cplusplus" className="back-link">← Back to C++ Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Intro to C++: compiler, IDE setup (VS Code, Code::Blocks, GCC/Clang)</li>
                        <li>Syntax basics: variables, data types, operators, input/output (cin/cout)</li>
                        <li>Control structures: if-else, switch, loops</li>
                        <li>Functions: declaration, parameters, recursion, overloading</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: C++ for Beginners : A Step-by-Step Guide</h3>
                    <p>A Step-by-Step Guide on C++ Programming Language Fundamentals with Practical Explanations. </p>
                    <a href="https://www.amazon.in/Beginners-Step-Step-Fundamentals-Explanations/dp/B0BHDGL198/ref=sr_1_1?adgrpid=1312818493103072&dib=eyJ2IjoiMSJ9._Ac0oLgpPvW3Qv4qIx2T_TzfITSj-vmwZ24JmrW169EVWk1h1auEXlc5jWs0k86DHfjYGcH8v9R2uROhjZDcRVYzWxeCK6DmV_WfzrSBnqFREiO51E9XAg8_scYSP7oGLepw_HmmWTmWmw4a1mpc1CV2ArdzOWb9F2DJi20keS7kJvj2ImrEJ9gTC4F5dtGdvSxnGeD_aYAnBv-F85TAwjrV9TMO1gx7X_NYxBxfChY.yMXLnGlLrWgBOkx2Qs2Ce7CwFxeIVyAUR1Drk3pphBw&dib_tag=se&hvadid=82051425592539&hvbmt=bb&hvdev=c&hvlocphy=116072&hvnetw=o&hvqmt=b&hvtargid=kwd-82052037950471%3Aloc-90&hydadcr=25366_2784052&keywords=c%2B%2B+best+book+for+beginners&mcid=a0f90e98367430fc818a6e0b73be2c2f&msclkid=bd8044c5f2a01b242ec42dcd3d858cce&qid=1762185002&sr=8-1" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                {/* --- Notes --- */}
                <div className="resource-item">
                    <h3>📝 Free Notes: Tutorialspoint C++</h3>
                    <p>A comprehensive text-based tutorial covering C++ from basics to advanced topics, with examples. (Note: You mentioned LearnCpp.com, but linked Tutorialspoint).</p>
                    <a href="https://www.tutorialspoint.com/cplusplus/index.htm" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Tutorialspoint</a>
                </div>

                {/* --- Course --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Beginning C++ Programming - From Beginner to Beyond (Udemy)</h3>
                    <p>A comprehensive, hands-on course designed to take you from zero to hero in C++ programming. </p>
                    <a href="https://www.udemy.com/course/beginning-c-plus-plus-programming/?kw=C%2B%2B&src=sac&couponCode=MT251103G2" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Video --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: C++ Programming Course - Beginner to Advanced</h3>
                    <p>A full-length video course covering C++ programming concepts from the absolute basics to more advanced topics. [Image of C++ programming concepts diagram]</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/8jLOx1hD3_o?si=f15ig7RLBhxccBhb"
                        title="YouTube video player (C++ Programming Course)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default CPlusPlusPhase1Resources;

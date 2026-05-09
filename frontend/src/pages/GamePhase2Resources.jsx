// src/pages/GamePhase2Resources.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceStyles from './ResourceStyles'; // Assuming styles are in the same location

const GamePhase2Resources = () => (
    <>
        <style>{ResourceStyles}</style>
        <div className="resource-container">
            <header className="resource-header">
                <h1>Stage 2: Programming and Math Foundations</h1>
                <p>Building strong programming skills in C++ and C#, along with the essential mathematical understanding for game development.</p>
                <Link to="/game-developer" className="back-link">← Back to Game Developer Roadmap</Link>
            </header>

            {/* Section for Key Topics */}
            <div className="resource-section">
                <h2>Key Topics</h2>
                <div className="resource-item">
                    <ul>
                        <li>Language → C++ (Industry Standard) & C# (Unity)</li>
                        <li>Math for Games → Vectors, Matrices, Quaternions, Linear Algebra, Trigonometry</li>
                    </ul>
                </div>
            </div>

            {/* Section for Curated Resources */}
            <div className="resource-section">
                <h2>Resources</h2>
                {/* --- Free Notes --- */}
                <div className="resource-item">
                    <h3>📝 Free Notes: Codecademy - Learn C++</h3>
                    <p>An interactive platform to learn the fundamentals of C++ programming, a core language for game development.</p>
                    <a href="https://www.codecademy.com/learn/learn-c-plus-plus" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Codecademy</a>
                </div>
                <div className="resource-item">
                    <h3>📝 Free Notes: LearnCpp.com</h3>
                    <p>A comprehensive free tutorial site for learning C++ from basic concepts to advanced features.</p>
                    <a href="https://www.learncpp.com/" target="_blank" rel="noopener noreferrer" className="resource-link">Go to LearnCpp.com</a>
                </div>

                {/* --- Book --- */}
                <div className="resource-item">
                    <h3>📘 Book: Mathematics for Game Programming and Computer Graphics</h3>
                    <p>Explore the essential mathematics for creating, rendering, and manipulating 3D virtual environments.</p>
                    <a href="https://www.amazon.in/Mathematics-Game-Programming-Computer-Graphics/dp/1801077339/ref=sr_1_1?crid=9FDZED5U3BFW&dib=eyJ2IjoiMSJ9.XNttvemRyYesNKx-Kopr1bT6TtZnm-UTfEDa9TPJ1aEu5muJ1ZT37cSXcFK6W2Mvk8DF1zrsO5tUzx8wRk81o-UH7RD_zNQONRbh40ZeF_92odISXvHw8gl3vkVMDKIXqWu__5yZLB5YVlqn1BZQqa18ilwbcL6dBf-LLdDL_U3HH64FaG7HFOgK6IPs6gU-wn0qegfTQB7IqXBT0ygFfVEBPRBuZFt0b9b7b_UcH0E.5bYmzDR5Gqmb4JNFrx68avYl3zBEaHv8zQDoF7GLZzs&dib_tag=se&keywords=Mathematics+for+3D+Game+Programming+and+Computer+Graphics&nsdOptOutParam=true&qid=1760383809&sprefix=mathematics+for+3d+game+programming+and+computer+graphics%2Caps%2C400&sr=8-1" target="_blank" rel="noopener noreferrer" className="resource-link">Find on Amazon</a>
                </div>

                {/* --- Courses --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Unreal Engine 5 C++ Game Development (Udemy)</h3>
                    <p>A comprehensive course to learn game development using C++ within the powerful Unreal Engine 5.</p>
                    <a href="https://www.udemy.com/course/unrealcourse/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>
                
                <div className="resource-item">
                    <h3>🎓 Course: Complete C# Unity 2D Game Development (Udemy)</h3>
                    <p>Learn C# programming from scratch while creating engaging 2D games in the popular Unity engine.</p>
                    <a href="https://www.udemy.com/course/unitycourse/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- ADDED NEW COURSE --- */}
                <div className="resource-item">
                    <h3>🎓 Course: Mathematics for Game Development - Unity 6 Compatible (Udemy)</h3>
                    <p>Learn the essential math concepts for game development, specifically tailored for Unity 6 compatibility.</p>
                    <a href="https://www.udemy.com/course/games_mathematics/?couponCode=KEEPLEARNING" target="_blank" rel="noopener noreferrer" className="resource-link">Go to Udemy Course</a>
                </div>

                {/* --- YouTube Videos --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: C++ Programming Course - Beginner to Advanced</h3>
                    <p>A full video course guiding you from the basics of C++ to advanced programming concepts, essential for game development.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/8jLOx1hD3_o?si=LU8WEPE6Sdkygu7I"
                        title="YouTube video player (C++ Programming Course)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>

                {/* --- ADDED NEW YOUTUBE VIDEO --- */}
                <div className="resource-item">
                    <h3>▶️ YouTube: Math for Game Developers - Character Movement</h3>
                    <p>A focused video tutorial explaining key mathematical concepts applied to character movement in game development.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/sKCF8A3XGxQ?si=yrgZLcgXBTilhZLr"
                        title="YouTube video player (Math for Game Developers - Character Movement)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    </>
);

export default GamePhase2Resources;
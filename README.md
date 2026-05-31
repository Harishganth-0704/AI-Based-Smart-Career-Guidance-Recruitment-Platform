<div align="center">
  <img src="https://raw.githubusercontent.com/Harishganth-0704/AI-Based-Smart-Career-Guidance-Recruitment-Platform/main/frontend/public/vite.svg" width="100" height="100" alt="CareerCraft Logo" />
  
  # 🚀 CareerCraft: AI-Powered Career Path Recommendation
  
  **The Ultimate AI Career Compass & B2B Recruitment Ecosystem**
  
  [![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
  [![Vite](https://img.shields.io/badge/Vite-7.0-purple?style=for-the-badge&logo=vite)](https://vitejs.dev/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-Ready-brightgreen?style=for-the-badge&logo=mongodb)](https://mongodb.com/)
  [![Gemini AI](https://img.shields.io/badge/AI-Google_Gemini-orange?style=for-the-badge&logo=google)](https://ai.google.dev/)
</div>

<br />

CareerCraft is an **AI-powered "Super App"** designed to bridge the gap between job seekers and recruiters. It acts as a comprehensive ecosystem that helps students, graduates, and career switchers explore tech roles, prepare for interviews, and build stunning portfolios—all while giving HR professionals a dedicated portal for smart candidate matchmaking.

Built specifically to solve real-world career confusion through dynamic roadmaps and AI-driven gamification.

---

## 📸 Platform Sneak Peek

<div align="center">
  <img src="home_screenshot.png" width="800" alt="CareerCraft Home Page" style="border-radius: 10px; margin-bottom: 20px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);" />
  <br/>
  <img src="dashboard_screenshot.png" width="390" alt="Dashboard" style="border-radius: 10px; margin-right: 10px;" />
  <img src="roadmaps_screenshot.png" width="390" alt="Roadmaps" style="border-radius: 10px;" />
</div>

---

## ✨ Key Features (The Super App Ecosystem)

### 📚 For Students & Job Seekers
- **🧠 AI Career Assessment & Chatbot:** Get personalized career recommendations using Google Gemini AI.
- **🗺️ Interactive Roadmaps & Progress Tracking:** Step-by-step paths for Data Science, AI Engineering, Full Stack, Cybersecurity, etc. **Now with dynamic progress bars and completion checkmarks!**
- **🏆 Gamified Dashboard:** Earn points, maintain streaks, and collect badges (`Newcomer 🎯`, `Fast Learner ⚡`) by completing modules.
- **📄 AI Resume Builder & ATS PDF Generator:** Create stunning, ATS-friendly resumes in seconds.
- **💼 1-Click Portfolio Generator:** Instantly generate a live portfolio website from your profile data.
- **🛠️ AI Career Toolbox:** 
  - *GitHub Analyzer* (Code quality checks)
  - *Video Resume Script Generator* (Perfect 60-second intros)
  - *Salary Insight & Negotiation* (AI-powered market range)
  - *Networking Suite* (Draft professional LinkedIn outreach)
- **🔐 Secure Authentication:** JWT-based login, rate limiting, and an Email-based **Forgot Password** recovery system. New users even get an automated **Welcome Email**!

### 🏢 For HR & Recruiters (B2B Portal)
- **🔍 Smart Candidate Matchmaking:** Easily filter and find candidates who have completed specific roadmaps and verified skills.
- **📊 Analytics Dashboard:** Track candidate progress, test scores, and overall platform engagement.

---

## 🚀 Tech Stack & Architecture

- **Frontend:** React 19, Vite 7, React Router 7, Vanilla CSS (Glassmorphism & Neon UI aesthetics)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ORM)
- **AI Integration:** Google Gemini AI API
- **Security:** `bcryptjs` (Password Hashing), `jsonwebtoken` (Auth), `helmet` (HTTP Headers), `express-rate-limit` (Anti-DDoS)
- **Utilities:** `nodemailer` (Automated Emails), `python-pptx` & `reportlab` (Auto-generated Documentation)

---

## 🛠️ Quick Start Guide

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (Local instance or MongoDB Atlas URI)
- A Google Gemini API Key
- A Gmail App Password (for email features)

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Harishganth-0704/AI-Based-Smart-Career-Guidance-Recruitment-Platform.git
cd AI-Based-Smart-Career-Guidance-Recruitment-Platform
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in the `backend/` directory:
```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
JWT_SECRET=your_jwt_super_secret_key
FRONTEND_URL=http://localhost:5174
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_16_char_gmail_app_password
```
Start the backend server:
```bash
npm run dev
# Server will run at http://localhost:5001
```

### 3️⃣ Frontend Setup
Open a new terminal window:
```bash
cd frontend
npm install
npm run dev
```
*Frontend will run at `http://localhost:5174` (or 5173)*

---

## 📂 Project Structure

```text
AI-Based-Smart-Career-Guidance-Recruitment-Platform/
├── backend/                  # Node.js & Express API
│   ├── controllers/          # API Logic (Auth, Roadmap progress)
│   ├── middleware/           # JWT Protection & Rate Limiters
│   ├── models/               # MongoDB Schemas (User)
│   ├── routes/               # API Endpoints
│   └── server.js             # Entry Point
├── frontend/                 # React UI
│   ├── src/
│   │   ├── components/       # Reusable UI (Navbar, Chatbot)
│   │   ├── context/          # Global State (AuthContext)
│   │   ├── pages/            # Dashboards, Roadmaps, AI Tools
│   │   ├── services/         # Axios API Configuration
│   │   └── App.jsx           # Main Router
│   └── vite.config.js
└── docs/                     # Auto-generated PPT & PDF Reports
```

---

## 👨‍💻 Developer Profile

<div align="center">
  <img src="https://github.com/Harishganth-0704.png" width="150" height="150" alt="Harish Ganth" style="border-radius: 50%; border: 4px solid #00e676;" />
  
  ### Harish Ganth
  **Full Stack Developer | B.E. CSE (Honors)**
  
  [GitHub](https://github.com/Harishganth-0704) | [LinkedIn](https://linkedin.com/in/harishganth07)
</div>

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

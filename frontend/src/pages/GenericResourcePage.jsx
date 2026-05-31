import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import ResourceStyles from './ResourceStyles';

// Dynamic data for hackathon presentation to make each stage look realistic
const dynamicData = {
    'python': {
        1: { topics: ['Python Installation', 'Variables', 'Data Types', 'Loops', 'Conditions', 'Functions Basics'], books: ['Python Crash Course', 'Automate the Boring Stuff'], courses: ['CS50 Python', 'Python for Everybody'], videos: [{ title: 'freeCodeCamp Python Full Course', id: 'rfscVS0vtbw' }, { title: 'Programming with Mosh Python Tutorial', id: '_uQrJ0TkZlc' }, { title: 'Bro Code Python Full Course', id: 'XKHEtdqhLK8' }] },
        2: { topics: ['Lists', 'Tuples', 'Dictionaries', 'Sets', 'Functions', 'Recursion', 'Searching', 'Sorting'], books: ['Grokking Algorithms', 'Think Python'], courses: ['Data Structures in Python', 'Problem Solving with Python'], videos: [{ title: 'CodeWithHarry Python DSA', id: 'videos' }, { title: 'NeetCode DSA Playlist', id: 'playlist' }, { title: 'freeCodeCamp Data Structures in Python', id: 'pkYVOmU3MgA' }] },
        3: { topics: ['OOP', 'Classes', 'Objects', 'Inheritance', 'File Handling', 'OS Module', 'Stack', 'Queue'], books: ['Head First OOP', 'Python Object-Oriented Programming'], courses: ['OOP in Python', 'Python File Handling Masterclass'], videos: [{ title: 'Corey Schafer OOP Playlist', id: 'PL-osiE80TeTsqhIuOqKhwlXsIBIdSeYtc', isPlaylist: true }, { title: 'freeCodeCamp OOP Python', id: 'Ej_02ICOIgs' }, { title: 'Tech With Tim File Handling', id: 'videos' }] },
        4: { topics: ['itertools', 'collections', 'functools', 'lambda', 'decorators', 'generators'], books: ['Fluent Python'], courses: ['Advanced Python Programming'], videos: [{ title: 'Corey Schafer – Decorators in Python', id: 'FsAPt_9Bf3U' }, { title: 'Tech With Tim – Advanced Python', id: 'HGOBQPFzWKo' }, { title: 'Corey Schafer – Generators', id: 'bD05uGo_sVI' }] },
        5: { topics: ['Multithreading', 'Multiprocessing', 'Asyncio', 'Context Managers', 'Type Hinting'], books: ['Effective Python'], courses: ['Advanced Python by Educative'], videos: [{ title: 'Corey Schafer – AsyncIO Complete Guide', id: 'oAkLSJNr5zY' }, { title: 'Tech With Tim – Asyncio Full Tutorial', id: 'Qb9s3UiMSTA' }, { title: 'Socratica – Python AsyncIO', id: 'K56nNuBEd0c' }] },
        6: { topics: ['Flask', 'FastAPI', 'Django', 'APIs', 'MongoDB', 'PostgreSQL'], books: ['Flask Web Development', 'Django for APIs'], courses: ['Full Stack Python', 'FastAPI Complete Course'], videos: [{ title: 'Traversy Media Flask Course', id: 'Z1RJmh_OqeA' }, { title: 'freeCodeCamp FastAPI Course', id: '0sOvCWFmrtA' }, { title: 'Django Full Course', id: 'F5mRW0jo-U4' }] },
        7: { topics: ['Web Development', 'AI/ML', 'Data Science', 'Automation', 'Cybersecurity'], books: [], courses: ['Machine Learning by Andrew Ng', 'Python for Ethical Hacking'], videos: [{ title: 'Krish Naik Machine Learning Playlist', id: 'playlist' }, { title: 'Sentdex Python AI Playlist', id: 'playlist' }, { title: 'freeCodeCamp Data Science', id: 'ua-CiDNNj30' }] },
        8: { topics: ['Git', 'GitHub', 'Docker', 'Testing', 'CI/CD'], books: ['Pro Git'], courses: ['Docker for Developers'], videos: [{ title: 'Kunal Kushwaha Git & GitHub', id: 'apGV9Kg7ics' }, { title: 'Docker Tutorial Nana', id: '3c-iBn73dDE' }, { title: 'Pytest Tutorial', id: 'cHYq1MRoyI0' }] },
        9: { topics: ['AI Career Assistant', 'Chat App', 'Task Manager', 'E-commerce Backend', 'Expense Tracker'], books: [], courses: [], videos: [{ title: 'Python Projects freeCodeCamp', id: '8ext9G7xspg' }, { title: 'Build 10 Python Projects', id: 'NpmFbWO6HPU' }] },
        10: { topics: ['GitHub', 'Resume', 'LinkedIn', 'Technical Blogging'], books: [], courses: [], videos: [{ title: 'Tech Resume Tips', id: 'Tt08KmFfIYQ' }, { title: 'GitHub Portfolio Guide', id: 'nLRL_NcnK-4' }] },
        11: { topics: ['Python Interview Questions', 'DSA', 'SQL Basics', 'System Design'], books: [], courses: [], videos: [{ title: 'Python Interview Questions', id: 'DEwgZNC-KyE' }, { title: 'NeetCode Interview Prep', id: 'playlist' }, { title: 'System Design Basics', id: 'UzLMhqg3_Wc' }] }
    },
    'sql': {
        1: { topics: ['Database Foundations & Setup', 'DBMS Basics', 'RDBMS', 'Tables', 'Rows', 'Columns', 'Constraints'], books: ['Learning SQL', 'SQL Queries for Mere Mortals'], courses: ['SQLBolt', 'Meta SQL Course'], videos: [{ title: 'freeCodeCamp SQL Full Course', id: 'HXV3zeQKqGY' }, { title: 'Programming with Mosh SQL Tutorial', id: '7S_tz1z_5bA' }, { title: 'Harvard CS50 SQL', id: 'WXV4m128k5Y' }] },
        2: { topics: ['Querying, Filtering & Relationships', 'SELECT', 'WHERE', 'GROUP BY', 'HAVING', 'ORDER BY', 'JOINs'], books: ['Practical SQL'], courses: ['SQL Intermediate Queries'], videos: [{ title: 'Kudvenkat SQL Playlist', id: 'playlist' }, { title: 'SQL Joins Explained', id: '9yeOJ0ZMUYw' }] },
        3: { topics: ['Advanced SQL Concepts & Optimization', 'Indexing', 'Views', 'Triggers', 'Stored Procedures', 'Window Functions', 'Optimization'], books: ['High Performance MySQL'], courses: ['Advanced SQL for Data Engineers'], videos: [{ title: 'Hussein Nasser SQL Internals', id: 'playlist' }, { title: 'Advanced SQL Tutorial', id: 'q_HlP6POf3g' }] },
        4: { topics: ['Data Engineering', 'ETL', 'Spark SQL', 'BigQuery', 'Snowflake', 'Airflow'], books: [], courses: ['Data Engineering Zoomcamp'], videos: [{ title: 'DataTalksClub Data Engineering', id: 'playlist' }, { title: 'Seattle Data Guy', id: 'playlist' }] },
        5: { topics: ['Real-World Projects', 'Student Management System', 'Banking Database', 'Inventory System', 'Netflix Analytics Dashboard'], books: [], courses: [], videos: [{ title: 'SQL Projects Tutorial', id: 'hlGoQC332VM' }] },
        6: { topics: ['Portfolio & Resume Strategy', 'SQL Portfolio', 'Dashboard Projects', 'GitHub Documentation'], books: [], courses: [], videos: [{ title: 'Data Analyst Portfolio Guide', id: 'd7f4ATJlsUQ' }] },
        7: { topics: ['Interview Preparation', 'LeetCode SQL', 'DataLemur', 'StrataScratch'], books: [], courses: [], videos: [{ title: 'SQL Interview Questions', id: 't_w0D0H4V18' }] }
    },
    'cplusplus': {
        1: { topics: ['Syntax', 'Variables', 'Functions', 'Loops', 'Compilation'], books: ['C++ Primer', 'Programming Principles and Practice Using C++'], courses: [], videos: [{ title: 'freeCodeCamp C++ Full Course', id: 'vLnPwxZdW4Y' }, { title: 'CodeBeauty C++ Tutorial', id: 'GQp1zzTwrIg' }] },
        2: { topics: ['Arrays', 'Strings', 'Pointers', 'References', 'Dynamic Memory'], books: ['Understanding Pointers in C'], courses: [], videos: [{ title: 'Pointers in C++', id: 'zuegQmMdy8M' }, { title: 'Apna College C++ Playlist', id: 'playlist' }] },
        3: { topics: ['Classes', 'Objects', 'Inheritance', 'Polymorphism', 'SOLID Principles'], books: ['Head First Object-Oriented Design'], courses: [], videos: [{ title: 'OOP in C++', id: 'wN0x9eZLix4' }] },
        4: { topics: ['Vector', 'Map', 'Set', 'Templates', 'Lambda', 'Smart Pointers'], books: ['Effective Modern C++'], courses: [], videos: [{ title: 'STL Full Course', id: 'RRVYpIET_RU' }, { title: 'Modern C++ Tutorial', id: 'Rub-JsjMhWY' }] },
        5: { topics: ['Trees', 'Graphs', 'DP', 'Complexity Analysis'], books: [], courses: [], videos: [{ title: 'NeetCode DSA', id: 'playlist' }, { title: 'Abdul Bari Algorithms', id: 'playlist' }] },
        6: { topics: ['Banking System', 'Chat Application', 'File Compression Tool', 'Mini Game Engine'], books: [], courses: [], videos: [{ title: 'C++ Projects Tutorial', id: 'PfYnvDL0Qcw' }] },
        7: { topics: ['Competitive Coding', 'GitHub', 'Open Source'], books: [], courses: [], videos: [{ title: 'take U forward – C++ DSA One Shot', id: 'EAR7De6Goz4' }] },
        8: { topics: ['DSA', 'STL Questions', 'Memory Management'], books: [], courses: [], videos: [{ title: 'C++ Interview Questions', id: 'YrtFtdTTfv0' }] }
    },
    'javascript': {
        1: { topics: ['Variables', 'Functions', 'Arrays', 'Loops', 'Objects'], books: ['Eloquent JavaScript'], courses: [], videos: [{ title: 'freeCodeCamp JavaScript Full Course', id: 'PkZNo7MFNFg' }, { title: 'Namaste JavaScript', id: 'PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP', isPlaylist: true }] },
        2: { topics: ['Closures', 'Hoisting', 'Scope', 'Event Loop'], books: [], courses: [], videos: [{ title: 'JavaScript Concepts Playlist', id: 'ap-6PPAuK1Y' }] },
        3: { topics: ['DOM', 'Events', 'Local Storage', 'Fetch API'], books: [], courses: [], videos: [{ title: 'DOM Manipulation Tutorial', id: '5fb2aPlgoys' }] },
        4: { topics: ['Promises', 'Async/Await', 'APIs'], books: [], courses: [], videos: [{ title: 'Async JavaScript Tutorial', id: 'PoRJizFvM7s' }] },
        5: { topics: ['Classes', 'Inheritance', 'Higher Order Functions'], books: [], courses: [], videos: [{ title: 'JavaScript OOP Tutorial', id: 'PFmuCDHHpwk' }] },
        6: { topics: ['Debouncing', 'Throttling', 'Currying', 'Memoization'], books: [], courses: [], videos: [{ title: 'RoadsideCoder – Debouncing & Throttling in JS', id: 'kCfTEoeQvQw' }] },
        7: { topics: ['Express.js', 'APIs', 'Authentication'], books: [], courses: [], videos: [{ title: 'Node.js Full Course', id: 'Oe421EPjeBE' }] },
        8: { topics: ['Arrow Functions', 'Modules', 'Spread Operator', 'Destructuring'], books: [], courses: [], videos: [{ title: 'ES6 JavaScript Tutorial', id: 'NCwa_xi0Uuc' }] },
        9: { topics: ['Components', 'Hooks', 'Props', 'State'], books: [], courses: [], videos: [{ title: 'React Full Course', id: 'bMknfKXIFA8' }, { title: 'Codevolution React Playlist', id: 'playlist' }] },
        10: { topics: ['Redux', 'Context API', 'Zustand'], books: [], courses: [], videos: [{ title: 'Redux Toolkit Tutorial', id: 'poQXNp9ItL4' }] },
        11: { topics: ['Jest', 'Debugging', 'React Testing Library'], books: [], courses: [], videos: [{ title: 'Jest Testing Tutorial', id: '7r4xVDI2vho' }] },
        12: { topics: ['Vite', 'Webpack', 'Lazy Loading'], books: [], courses: [], videos: [{ title: 'Vite Crash Course', id: '89NJdbYTgJ8' }] },
        13: { topics: ['Netlify', 'Vercel', 'Docker'], books: [], courses: [], videos: [{ title: 'Deploy React App Tutorial', id: 'l134cBAJCuc' }] },
        14: { topics: ['Social Media App', 'Trello Clone', 'E-commerce Website'], books: [], courses: [], videos: [{ title: 'JavaScript Projects', id: '3PHXvlpOkf4' }] },
        15: { topics: ['Frontend Developer Portfolio Guide'], books: [], courses: [], videos: [{ title: 'Frontend Developer Portfolio Guide', id: 'oYjseP_Qhv4' }] },
        16: { topics: ['JavaScript Interview Questions'], books: [], courses: [], videos: [{ title: 'JavaScript Interview Questions', id: '2Ji-clqUYnA' }] }
    },
    'docker': {
        1: { topics: ['Foundations of Containers & Docker Setup', 'Docker Installation', 'Images', 'Containers', 'Docker Hub'], books: ['Docker Deep Dive'], courses: [], videos: [{ title: 'Docker Full Course freeCodeCamp', id: 'fqMOX6JJhGo' }, { title: 'TechWorld with Nana Docker Tutorial', id: '3c-iBn73dDE' }] },
        2: { topics: ['Dockerfile', 'Layers', 'Volumes', 'Networking'], books: [], courses: [], videos: [{ title: 'Dockerfile Tutorial', id: 'JSLpG_spOBM' }] },
        3: { topics: ['Docker Compose', 'Multi-container Apps', 'Bind Mounts'], books: [], courses: [], videos: [{ title: 'Docker Compose Tutorial', id: 'HG6yIjZapSA' }] },
        4: { topics: ['CI/CD', 'GitHub Actions', 'Docker Security'], books: [], courses: [], videos: [{ title: 'GitHub Actions CI/CD', id: 'R8_veQiYBjI' }] },
        5: { topics: ['Logs', 'Monitoring', 'Optimization'], books: [], courses: [], videos: [{ title: 'Docker Logs Explained – Master Container Debugging', id: '0_oj282om8w' }] },
        6: { topics: ['MERN Docker Deployment', 'Flask Docker App', 'Microservices Setup'], books: [], courses: [], videos: [{ title: 'Docker Projects Tutorial', id: 'pTFZFxd4hOI' }] },
        7: { topics: ['DevOps Portfolio Guide'], books: [], courses: [], videos: [{ title: 'DevOps Portfolio Guide', id: 'YJZCUhxNCv8' }] },
        8: { topics: ['Docker Interview Questions'], books: [], courses: [], videos: [{ title: 'Cloud Champ – Top Docker Interview Questions 2025', id: 'HHcgzhfuaWc' }] }
    },
    'bash': {
        1: { topics: ['Shell Basics & Core Linux Commands', 'ls', 'cd', 'pwd', 'chmod', 'grep'], books: [], courses: ['Linux Journey'], videos: [{ title: 'Linux Full Course freeCodeCamp', id: 'sWbUDq4S6Y8' }] },
        2: { topics: ['Text Processing, Redirection & Filters', 'awk', 'sed', 'pipes', 'redirection'], books: [], courses: [], videos: [{ title: 'awk and sed Tutorial', id: '9YOZmI-zWok' }] },
        3: { topics: ['Bash Scripting Foundations', 'Variables', 'Loops', 'Conditions', 'Functions'], books: [], courses: [], videos: [{ title: 'Bash Scripting Full Course', id: 'tK9Oc6AEnR4' }] },
        4: { topics: ['Structuring & Advanced Scripting', 'Arrays', 'Cron Jobs', 'Error Handling'], books: [], courses: [], videos: [{ title: 'Advanced Bash Scripting', id: 'v-F3YLd6oMw' }] },
        5: { topics: ['Automation & Real-World Integrations', 'Automation Scripts', 'Monitoring', 'DevOps Scripts'], books: [], courses: [], videos: [{ title: 'Linux Automation Projects', id: 'SPwyp2NG-bE' }] },
        6: { topics: ['Backup Automation', 'Log Analyzer', 'Deployment Script'], books: [], courses: [], videos: [{ title: 'Bash Projects Tutorial', id: 'cyq5-StPISU' }] },
        7: { topics: ['Linux Portfolio Projects'], books: [], courses: [], videos: [{ title: 'Abhishek Veeramalla – Shell Scripting Real Project', id: 'OuyNM5-r8P8' }] },
        8: { topics: ['Linux Interview Questions'], books: [], courses: [], videos: [{ title: 'Linux Interview Questions', id: 'l0QGLMwR-lY' }] }
    },
    'golang': {
        1: { topics: ['Go Setup, Core Fundamentals & Programming Constructs', 'Variables', 'Functions', 'Structs', 'Packages'], books: ['The Go Programming Language'], courses: [], videos: [{ title: 'freeCodeCamp Golang Full Course', id: 'YS4e4q9oBaU' }, { title: 'TechWorld with Nana Golang', id: 'yyUHQIec83I' }] },
        2: { topics: ['Data Handling + OOP Concepts + Data Structures', 'Maps', 'Slices', 'Interfaces', 'Struct Embedding'], books: [], courses: [], videos: [{ title: 'Go Data Structures Tutorial', id: 'yyUHQIec83I' }] },
        3: { topics: ['Intermediate/Advanced Go + Concurrency + Web + DB + Testing', 'Goroutines', 'Channels', 'Gin Framework', 'PostgreSQL', 'Testing'], books: [], courses: [], videos: [{ title: 'Go Concurrency Tutorial', id: 'LvgVSSpwND8' }, { title: 'Build REST API in Go', id: 'SonwZ6MF5BE' }] },
        4: { topics: ['Professional Tooling, Packaging & Deployment', 'Docker', 'CI/CD', 'Build Tools'], books: [], courses: [], videos: [{ title: 'Deploy Golang App with Docker', id: '8uiZC0l4Ajw' }] },
        5: { topics: ['URL Shortener', 'Chat Server', 'REST API'], books: [], courses: [], videos: [{ title: 'Go Projects Tutorial', id: 'jFfo23yIWac' }] },
        6: { topics: ['Backend Developer Portfolio'], books: [], courses: [], videos: [{ title: 'Akhil Sharma – Build CRUD API With Golang 2024', id: 'TkbhQQS3m_o' }] },
        7: { topics: ['Golang Interview Questions'], books: [], courses: [], videos: [{ title: 'Golang Interview Questions', id: '7VLmLOiQ3ck' }] }
    },
    'react': {
        1: { topics: ['HTML', 'CSS', 'JavaScript Basics', 'ES6+'], books: ['Eloquent JavaScript'], courses: [], videos: [{ title: 'Traversy Media – HTML Crash Course', id: 'UB1O30fR-EE' }, { title: 'Traversy Media – CSS Crash Course', id: 'yfoY53QXEnI' }] },
        2: { topics: ['JSX', 'Components', 'Props', 'State', 'Events'], books: ['Learning React'], courses: [], videos: [{ title: 'Codevolution – React JS Tutorial (Full Playlist)', id: 'PLC3y8-rFXvWQ8udwIp_H56s1oN69v1O-N', isPlaylist: true }, { title: 'freeCodeCamp – React Full Course', id: 'bMknfKXIFA8' }] },
        3: { topics: ['useState', 'useEffect', 'useRef', 'useMemo', 'useCallback', 'Custom Hooks'], books: [], courses: [], videos: [{ title: 'Codevolution – React Hooks (Full Playlist)', id: 'PLC3y8-rFHvwisvxhZ135gogtX7_qe3Q3L', isPlaylist: true }, { title: 'Web Dev Simplified – Every React Hook Explained', id: 'LDB4uaJ87e0' }] },
        4: { topics: ['Redux Toolkit', 'Context API', 'Zustand', 'Recoil'], books: [], courses: [], videos: [{ title: 'Redux Toolkit – Complete Tutorial 2024', id: 'S5G3g213Z2c' }, { title: 'Codevolution – Redux Toolkit', id: 'poQXNp9ItL4' }] },
        5: { topics: ['React Router v6', 'Nested Routes', 'Dynamic Routes', 'Protected Routes'], books: [], courses: [], videos: [{ title: 'Codevolution – React Router v6 (Full Playlist)', id: 'PLC3y8-rFHvwjf_aUAqEqotv_M_4Y_aP-n', isPlaylist: true }] },
        6: { topics: ['Controlled Inputs', 'React Hook Form', 'Zod Validation', 'Form Submission'], books: [], courses: [], videos: [{ title: 'RoadsideCoder – React Hook Form with Zod', id: 'kCfTEoeQvQw' }] },
        7: { topics: ['Fetch API', 'Axios', 'SWR', 'React Query', 'Error Handling'], books: [], courses: [], videos: [{ title: 'Traversy Media – Axios Crash Course', id: '6LyagkoRWgw' }, { title: 'Traversy Media – Async JS Crash Course', id: 'PoRJizFvM7s' }] },
        8: { topics: ['Folder Structure', 'Component Design Patterns', 'Prop Drilling', 'HOC', 'Compound Components'], books: [], courses: [], videos: [{ title: 'Web Dev Simplified – React Folder Structure', id: 'UjHgDKlBGJQ' }] },
        9: { topics: ['Tailwind CSS', 'Styled Components', 'CSS Modules', 'Chakra UI'], books: [], courses: [], videos: [{ title: 'Traversy Media – Tailwind CSS Crash Course', id: 'ft30zcMlFao' }] },
        10: { topics: ['useMemo', 'useCallback', 'React.memo', 'Code Splitting', 'Lazy Loading'], books: [], courses: [], videos: [{ title: 'Web Dev Simplified – Learn useMemo', id: 'THL1OPn72vo' }, { title: 'Web Dev Simplified – Learn useCallback', id: '_Ay_S0Grjj8' }] },
        11: { topics: ['Jest', 'React Testing Library', 'Unit Tests', 'Integration Tests'], books: [], courses: [], videos: [{ title: 'Traversy Media – Jest Crash Course', id: '7r4xVDI2vho' }] },
        12: { topics: ['Express.js', 'MongoDB', 'JWT Auth', 'REST API', 'MERN Stack'], books: [], courses: [], videos: [{ title: 'freeCodeCamp – MERN Stack Full Course', id: 'kY3EslaBu24' }] },
        13: { topics: ['TypeScript with React', 'Interfaces', 'Generics', 'Type Definitions'], books: [], courses: [], videos: [{ title: 'Codevolution – React TypeScript Tutorial', id: 'jrKcJxF0lAU' }] },
        14: { topics: ['Next.js', 'SSR', 'SSG', 'App Router', 'Server Components'], books: [], courses: [], videos: [{ title: 'JavaScript Mastery – Next.js 14 Full Course', id: 'I1V9YWqRIeI' }] },
        15: { topics: ['E-commerce', 'Social App', 'Dashboard', 'Admin Panel'], books: [], courses: [], videos: [{ title: 'JavaScript Mastery – Build & Deploy 5 React Projects', id: 'f7T1f-H76Rg' }] },
        16: { topics: ['Vercel', 'Netlify', 'GitHub Actions', 'CI/CD'], books: [], courses: [], videos: [{ title: 'Traversy Media – Deploy React App', id: 'l134cBAJCuc' }] },
        17: { topics: ['Portfolio Website', 'Resume', 'LinkedIn', 'GitHub Profile'], books: [], courses: [], videos: [{ title: 'Traversy Media – React Portfolio Tutorial', id: 'oYjseP_Qhv4' }] },
        18: { topics: ['React Interview Questions', 'Coding Rounds', 'DSA for Frontend'], books: [], courses: [], videos: [{ title: 'React Interview Questions 2024', id: 'R9K1u9Q5h5k' }, { title: 'Web Dev Simplified – React Interview Questions', id: 'SqcY0GlETPk' }] }
    },

    'c': {
        1: { topics: ['Basics, Compilation & Fundamentals'], books: ['The C Programming Language'], courses: [], videos: [{ title: 'freeCodeCamp C Programming Course', id: 'KJgsSFOSQv0' }, { title: 'Neso Academy C Playlist', id: 'playlist' }] },
        2: { topics: ['Basics, Compilation & Fundamentals'], books: ['The C Programming Language'], courses: [], videos: [{ title: 'freeCodeCamp C Programming Course', id: 'KJgsSFOSQv0' }] },
        3: { topics: ['Basics, Compilation & Fundamentals'], books: ['The C Programming Language'], courses: [], videos: [{ title: 'freeCodeCamp C Programming Course', id: 'KJgsSFOSQv0' }] },
        4: { topics: ['Basics, Compilation & Fundamentals'], books: ['The C Programming Language'], courses: [], videos: [{ title: 'freeCodeCamp C Programming Course', id: 'KJgsSFOSQv0' }] },
        5: { topics: ['Pointers, Memory & Dynamic Allocation'], books: [], courses: [], videos: [{ title: 'Pointers in C Tutorial', id: 'zuegQmMdy8M' }] },
        6: { topics: ['Pointers, Memory & Dynamic Allocation'], books: [], courses: [], videos: [{ title: 'Pointers in C Tutorial', id: 'zuegQmMdy8M' }] },
        7: { topics: ['Pointers, Memory & Dynamic Allocation'], books: [], courses: [], videos: [{ title: 'Pointers in C Tutorial', id: 'zuegQmMdy8M' }] },
        8: { topics: ['Pointers, Memory & Dynamic Allocation'], books: [], courses: [], videos: [{ title: 'Pointers in C Tutorial', id: 'zuegQmMdy8M' }] },
        9: { topics: ['Pointers, Memory & Dynamic Allocation'], books: [], courses: [], videos: [{ title: 'Pointers in C Tutorial', id: 'zuegQmMdy8M' }] },
        10: { topics: ['Pointers, Memory & Dynamic Allocation'], books: [], courses: [], videos: [{ title: 'Pointers in C Tutorial', id: 'zuegQmMdy8M' }] },
        11: { topics: ['Structures, File Handling & Data Structures'], books: [], courses: [], videos: [{ title: 'Data Structures in C', id: 'B31LgI4Y4DQ' }] },
        12: { topics: ['Structures, File Handling & Data Structures'], books: [], courses: [], videos: [{ title: 'Data Structures in C', id: 'B31LgI4Y4DQ' }] },
        13: { topics: ['Structures, File Handling & Data Structures'], books: [], courses: [], videos: [{ title: 'Data Structures in C', id: 'B31LgI4Y4DQ' }] },
        14: { topics: ['Structures, File Handling & Data Structures'], books: [], courses: [], videos: [{ title: 'Data Structures in C', id: 'B31LgI4Y4DQ' }] },
        15: { topics: ['Debugging, Projects & Interviews'], books: [], courses: [], videos: [{ title: 'C Interview Questions', id: 'irqbmMNs2Bo' }] },
        16: { topics: ['Debugging, Projects & Interviews'], books: [], courses: [], videos: [{ title: 'C Interview Questions', id: 'irqbmMNs2Bo' }] },
        17: { topics: ['Debugging, Projects & Interviews'], books: [], courses: [], videos: [{ title: 'C Interview Questions', id: 'irqbmMNs2Bo' }] }
    },
    'java': {
        1: { topics: ['Java Foundations'], books: ['Head First Java'], courses: [], videos: [{ title: 'Java Full Course freeCodeCamp', id: 'GoXwIVyNvX0' }, { title: 'Telusko Java Playlist', id: 'playlist' }] },
        2: { topics: ['Java Foundations'], books: ['Head First Java'], courses: [], videos: [{ title: 'Java Full Course freeCodeCamp', id: 'GoXwIVyNvX0' }] },
        3: { topics: ['Java Foundations'], books: ['Head First Java'], courses: [], videos: [{ title: 'Java Full Course freeCodeCamp', id: 'GoXwIVyNvX0' }] },
        4: { topics: ['Java Foundations'], books: ['Head First Java'], courses: [], videos: [{ title: 'Java Full Course freeCodeCamp', id: 'GoXwIVyNvX0' }] },
        5: { topics: ['OOP Mastery'], books: [], courses: [], videos: [{ title: 'Java OOP Tutorial', id: 'BSVKUk58K6U' }] },
        6: { topics: ['OOP Mastery'], books: [], courses: [], videos: [{ title: 'Java OOP Tutorial', id: 'BSVKUk58K6U' }] },
        7: { topics: ['OOP Mastery'], books: [], courses: [], videos: [{ title: 'Java OOP Tutorial', id: 'BSVKUk58K6U' }] },
        8: { topics: ['Collections', 'Exception Handling', 'Generics'], books: [], courses: [], videos: [{ title: 'Java Collections Framework', id: 'rzA7UJ-hQn4' }] },
        9: { topics: ['Collections', 'Exception Handling', 'Generics'], books: [], courses: [], videos: [{ title: 'Java Collections Framework', id: 'rzA7UJ-hQn4' }] },
        10: { topics: ['Collections', 'Exception Handling', 'Generics'], books: [], courses: [], videos: [{ title: 'Java Collections Framework', id: 'rzA7UJ-hQn4' }] },
        11: { topics: ['Collections', 'Exception Handling', 'Generics'], books: [], courses: [], videos: [{ title: 'Java Collections Framework', id: 'rzA7UJ-hQn4' }] },
        12: { topics: ['Collections', 'Exception Handling', 'Generics'], books: [], courses: [], videos: [{ title: 'Java Collections Framework', id: 'rzA7UJ-hQn4' }] },
        13: { topics: ['File I/O', 'Multithreading', 'JVM', 'Java 8+'], books: [], courses: [], videos: [{ title: 'Java Multithreading Tutorial', id: 'r_MbozD32eo' }, { title: 'Java 8 Features', id: 'QgrFS0M68Vc' }] },
        14: { topics: ['File I/O', 'Multithreading', 'JVM', 'Java 8+'], books: [], courses: [], videos: [{ title: 'Java Multithreading Tutorial', id: 'r_MbozD32eo' }] },
        15: { topics: ['File I/O', 'Multithreading', 'JVM', 'Java 8+'], books: [], courses: [], videos: [{ title: 'Java Multithreading Tutorial', id: 'r_MbozD32eo' }] },
        16: { topics: ['File I/O', 'Multithreading', 'JVM', 'Java 8+'], books: [], courses: [], videos: [{ title: 'Java Multithreading Tutorial', id: 'r_MbozD32eo' }] },
        '17A': { topics: ['Spring Boot Backend'], books: [], courses: [], videos: [{ title: 'Amigoscode Spring Boot', id: 'playlist' }, { title: 'Spring Boot Full Course', id: '9SGDpanrc8U' }] },
        '17B': { topics: ['Android Development'], books: [], courses: [], videos: [{ title: 'Android Development Java', id: 'fis26HvvDII' }] },
        18: { topics: ['Build Tools, Testing & Best Practices'], books: [], courses: [], videos: [{ title: 'Maven Tutorial', id: 'Xatr8AZLOsE' }, { title: 'JUnit Tutorial', id: 'vZm0lHciFsQ' }] },
        19: { topics: ['Build Tools, Testing & Best Practices'], books: [], courses: [], videos: [{ title: 'Maven Tutorial', id: 'Xatr8AZLOsE' }] },
        20: { topics: ['Build Tools, Testing & Best Practices'], books: [], courses: [], videos: [{ title: 'Maven Tutorial', id: 'Xatr8AZLOsE' }] },
        21: { topics: ['Projects & Interview Preparation'], books: [], courses: [], videos: [{ title: 'Java Interview Questions', id: 'UmnCZ7-9yDY' }] },
        22: { topics: ['Projects & Interview Preparation'], books: [], courses: [], videos: [{ title: 'Java Interview Questions', id: 'UmnCZ7-9yDY' }] }
    },
    'aws': {
        1: { topics: ['Cloud Basics', 'IAM', 'Regions', 'Pricing'], books: [], courses: [], videos: [{ title: 'AWS Full Course freeCodeCamp', id: 'SOTamWNgDKc' }, { title: 'AWS Cloud Practitioner', id: 'NhDYbskXRgc' }] },
        2: { topics: ['EC2', 'S3', 'RDS', 'Lambda', 'VPC'], books: [], courses: [], videos: [{ title: 'Be A Better Dev – Most Important AWS Services', id: 'OGYEXGy8ca4' }] },
        3: { topics: ['Load Balancer', 'Auto Scaling', 'Monitoring'], books: [], courses: [], videos: [{ title: 'AWS Architecture Tutorial', id: 'Ia-UEYYR44s' }] },
        4: { topics: ['API Gateway', 'DynamoDB', 'Lambda'], books: [], courses: [], videos: [{ title: 'AWS Serverless Tutorial', id: '7m_q1ldzw0U' }] },
        5: { topics: ['ECS', 'EKS', 'Docker', 'Kubernetes'], books: [], courses: [], videos: [{ title: 'Kubernetes Full Course', id: 'X48VuDVv0do' }] },
        6: { topics: ['Terraform', 'CloudFormation', 'CI/CD'], books: [], courses: [], videos: [{ title: 'Terraform Tutorial', id: 'SLB_c_ayRMo' }] },
        7: { topics: ['Security Best Practices', 'Logging', 'Cost Optimization'], books: [], courses: [], videos: [{ title: 'AWS Security Best Practices', id: '8nV6hF4Q3vI' }] },
        8: { topics: ['AWS Interview Questions', 'AWS Solutions Architect Prep'], books: [], courses: [], videos: [{ title: 'Intellipaat – AWS Interview Questions 2025', id: 'y1sCHWOAZgU' }] }
    }
};

const GenericResourcePage = () => {
    const { roadmapId, skillId, stageId } = useParams();
    
    const idToUse = skillId || roadmapId || 'career';
    const basePath = skillId ? `/skills/${skillId}` : `/${roadmapId}`;
    
    const formattedTitle = idToUse.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    const { user, updateProgress } = useContext(AuthContext);
    const moduleId = `${idToUse}-${stageId}`;
    const isCompleted = user?.completedModules?.includes(moduleId) || false;

    const handleToggleComplete = async () => {
        if (!user) {
            alert('Please login to track your progress!');
            return;
        }
        await updateProgress(moduleId);
    };

    const defaultData = {
        topics: [
            `Core principles of ${formattedTitle} (Stage ${stageId})`,
            'Industry standard tools and frameworks configuration',
            'Best practices for implementation and design',
            'Real-world debugging and troubleshooting techniques',
            'Performance optimization and scaling strategies'
        ],
        notes: `In this stage of ${formattedTitle}, you will focus on mastering the core concepts and tools that are essential for professional development. Pay attention to industry standards and best practices.`,
        videos: [{ title: `${formattedTitle} Breakdown`, id: 'xJYlhhT7hyE' }],
        books: [`Mastering ${formattedTitle} Concepts`],
        courses: [`Advanced ${formattedTitle} — Specialized Path`]
    };

    const topCreators = {
        'python': [
            { name: 'Corey Schafer', url: 'https://youtube.com/@coreyms' },
            { name: 'Programming with Mosh', url: 'https://youtube.com/@programmingwithmosh' },
            { name: 'freeCodeCamp', url: 'https://youtube.com/@freecodecamp' },
            { name: 'Tech With Tim', url: 'https://youtube.com/@TechWithTim' }
        ],
        'sql': [
            { name: 'Kudvenkat', url: 'https://youtube.com/@Kudvenkat' },
            { name: 'Hussein Nasser', url: 'https://youtube.com/@HusseinNasser-software-engineering' },
            { name: 'DataTalksClub', url: 'https://youtube.com/@DataTalksClub' }
        ],
        'cplusplus': [
            { name: 'CodeBeauty', url: 'https://youtube.com/@CodeBeauty' },
            { name: 'Apna College', url: 'https://youtube.com/@ApnaCollegeOfficial' },
            { name: 'Abdul Bari', url: 'https://youtube.com/@abdul_bari' },
            { name: 'NeetCode', url: 'https://youtube.com/@NeetCode' }
        ],
        'javascript': [
            { name: 'Akshay Saini', url: 'https://youtube.com/@akshaymarch7' },
            { name: 'Traversy Media', url: 'https://youtube.com/@TraversyMedia' },
            { name: 'JavaScript Mastery', url: 'https://youtube.com/@javascriptmastery' }
        ],
        'react': [
            { name: 'Codevolution', url: 'https://youtube.com/@Codevolution' },
            { name: 'Harkirat Singh', url: 'https://youtube.com/@HarkiratSingh' },
            { name: 'Web Dev Simplified', url: 'https://youtube.com/@WebDevSimplified' }
        ],
        'docker': [
            { name: 'TechWorld with Nana', url: 'https://youtube.com/@TechWorldwithNana' },
            { name: 'KodeKloud', url: 'https://youtube.com/@KodeKloud' },
            { name: 'DevOps Directive', url: 'https://youtube.com/@DevOpsDirective' }
        ],
        'bash': [
            { name: 'NetworkChuck', url: 'https://youtube.com/@NetworkChuck' },
            { name: 'LearnLinuxTV', url: 'https://youtube.com/@LearnLinuxTV' }
        ],
        'golang': [
            { name: 'Hitesh Choudhary', url: 'https://youtube.com/@HiteshCodeLab' },
            { name: 'Nic Jackson', url: 'https://youtube.com/@nicjackson' }
        ],
        'c': [
            { name: 'Neso Academy', url: 'https://youtube.com/@nesoacademy' },
            { name: 'Jenny’s Lectures', url: 'https://youtube.com/@JennyslecturesCSIT' }
        ],
        'java': [
            { name: 'Telusko', url: 'https://youtube.com/@Telusko' },
            { name: 'Amigoscode', url: 'https://youtube.com/@amigoscode' }
        ],
        'aws': [
            { name: 'AWS Official', url: 'https://youtube.com/@amazonwebservices' },
            { name: 'Stephane Maarek', url: 'https://youtube.com/@StephaneMaarek' },
            { name: 'TechWorld with Nana', url: 'https://youtube.com/@TechWorldwithNana' }
        ]
    };

    const stageData = (dynamicData[idToUse] && dynamicData[idToUse][stageId]) || defaultData;
    const creators = topCreators[idToUse] || [];

    return (
        <>
            <style>{ResourceStyles}</style>
            <div className="resource-container">
                <header className="resource-header" style={{ position: 'relative' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <h1>Stage {stageId}: {formattedTitle} Mastery</h1>
                            <p>Curated resources, tutorials, and practical guides to master Stage {stageId} of the {formattedTitle} roadmap.</p>
                            <Link to={basePath} className="back-link">← Back to {formattedTitle} Roadmap</Link>
                        </div>
                        {user && (
                            <button 
                                onClick={handleToggleComplete}
                                style={{
                                    padding: '0.8rem 1.5rem',
                                    borderRadius: '8px',
                                    border: 'none',
                                    background: isCompleted ? 'rgba(34, 197, 94, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                                    color: isCompleted ? '#4ade80' : '#fff',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    border: isCompleted ? '1px solid rgba(34, 197, 94, 0.5)' : '1px solid rgba(255, 255, 255, 0.2)'
                                }}
                            >
                                {isCompleted ? '✅ Completed' : 'Mark as Complete'}
                            </button>
                        )}
                    </div>
                </header>

                <div className="resource-grid">
                    <div className="resource-section">
                        <h2>Key Topics</h2>
                        <div className="resource-item topics-list">
                            <ul>
                                {(stageData.topics || defaultData.topics).map((topic, index) => (
                                    <li key={index}>{topic}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="resource-section">
                        <h2>Learning Notes</h2>
                        <div className="resource-item notes-card">
                            <p>{stageData.notes || defaultData.notes}</p>
                        </div>
                    </div>
                </div>

                <div className="resource-section">
                    <h2>Curated Resources</h2>
                    <div className="resources-flex">
                        <div className="resource-item">
                            <h3>📗 Recommended Books</h3>
                            {(stageData.books || []).length > 0 ? (
                                stageData.books.map((book, idx) => (
                                    <div key={idx} style={{ marginBottom: '1rem' }}>
                                        <p><strong>{book}</strong></p>
                                        <a href={`https://www.amazon.com/s?k=${book.replace(/ /g, '+')}`} target="_blank" rel="noopener noreferrer" className="resource-link" style={{ fontSize: '0.8rem', padding: '0.3rem 1rem' }}>Find on Amazon</a>
                                    </div>
                                ))
                            ) : <p>No specific books recommended for this stage yet.</p>}
                        </div>

                        <div className="resource-item">
                            <h3>🎓 Online Courses</h3>
                            {(stageData.courses || []).length > 0 ? (
                                stageData.courses.map((course, idx) => (
                                    <div key={idx} style={{ marginBottom: '1rem' }}>
                                        <p><strong>{course}</strong></p>
                                        <a href={`https://www.coursera.org/search?query=${course.replace(/ /g, '%20')}`} target="_blank" rel="noopener noreferrer" className="resource-link" style={{ fontSize: '0.8rem', padding: '0.3rem 1rem' }}>Go to Course</a>
                                    </div>
                                ))
                            ) : <p>No specific courses recommended for this stage yet.</p>}
                        </div>
                    </div>

                    {creators.length > 0 && (
                        <div className="resource-section">
                            <h2>🏅 Recommended Channels for {formattedTitle}</h2>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                                {creators.map((creator, idx) => (
                                    <a 
                                        key={idx} 
                                        href={creator.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="resource-item" 
                                        style={{ 
                                            flex: '1 1 200px', 
                                            textDecoration: 'none', 
                                            textAlign: 'center',
                                            padding: '1.5rem',
                                            transition: 'transform 0.3s ease',
                                            border: '1px solid var(--border-color)',
                                            background: 'rgba(255,255,255,0.02)'
                                        }}
                                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                    >
                                        <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{creator.name}</h3>
                                        <p style={{ margin: '0.5rem 0 0', fontSize: '0.85rem', color: 'var(--accent-primary)' }}>Official Channel →</p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="resource-section">
                        <h2>▶️ Expert Video Tutorials</h2>
                        <div className="video-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            {(stageData.videos || defaultData.videos).map((video, idx) => (
                                <div key={idx} className="resource-item video-section" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <h3>{video.title}</h3>
                                    {video.id ? (
                                        <div className="video-wrapper" style={{ width: '100%', maxWidth: '100%' }}>
                                            <iframe
                                                width="100%"
                                                height="315"
                                                src={video.isPlaylist ? `https://www.youtube.com/embed/videoseries?list=${video.id}` : `https://www.youtube.com/embed/${video.id}`}
                                                title={video.title}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen>
                                            </iframe>
                                        </div>
                                    ) : (
                                        <a href={video.url} target="_blank" rel="noopener noreferrer" className="resource-link">Watch Tutorial</a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default GenericResourcePage;


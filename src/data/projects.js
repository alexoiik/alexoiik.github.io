export const projects = [
    {
        id: 1,
        title: "Personal Portfolio Website",
        description:
            "A modern, responsive portfolio built with React and TailwindCSS to showcase my projects, skills, and experience.",
        technologies: ["React", "JavaScript", "HTML", "TailwindCSS", "Vite"],
        filters: {
            type: "Personal",
            language: ["React", "JavaScript", "HTML", "TailwindCSS"],
            platform: ["Web"],
            role: ["Software Engineer", "Designer"],
        },
        details: {
            type: "Personal",
            period: "Jul 2026 - Aug 2026 · 2 mos",
            role: ["Software Engineer", "Designer"],
            languages: ["React", "JavaScript", "HTML", "TailwindCSS"],
            platforms: ["Web"],
            teamSize: "1",
            contribution:
                "Independently designed and developed the entire website, from the user interface and responsive layouts to the project filtering system and interactive project details modal.",
            highlights: [
                "Designed the complete website interface and visual system in Figma",
                "Independently designed and developed the entire website from scratch",
                "Built the frontend using React, JavaScript, HTML, and TailwindCSS",
                "Created a responsive layout optimized for desktop, tablet, and mobile",
                "Implemented reusable React components across the website",
                "Developed dynamic project filtering by type, language, platform, and role",
                "Built interactive project cards with detailed project information modals",
                "Implemented responsive desktop and mobile navigation with a collapsible menu",
                "Designed and implemented the complete project data structure",
                "Added keyboard support and interactive modal behavior",
                "Implemented smooth hover, transition, and interaction states throughout the interface",
                "Focused on clean component structure, maintainability, and responsive design",
            ],
            features: [
                "Responsive portfolio design",
                "Sticky navigation with desktop and mobile layouts",
                "Mobile navigation with expandable menu",
                "Hero section with developer introduction and code editor interface",
                "About section with profile, introduction, skills, and technologies",
                "Project filtering by type, language, platform, and role",
                "Interactive project cards with image previews",
                "Detailed project information modal",
                "Project metadata including role, languages, platform, team size, and period",
                "Technology and tech stack tags",
                "Project highlights, features, contribution, and development approach",
                "Experience timeline with roles, companies, periods, and responsibilities",
                "Education section with degree and institution information",
                "Resume access from desktop and mobile navigation",
                "GitHub and external project links",
                "Responsive layouts across desktop, tablet, and mobile devices",
                "Keyboard-accessible project modal with Escape-to-close support",
            ],
            techStack: [
                "React",
                "JavaScript",
                "HTML",
                "TailwindCSS",
                "Vite",
            ],
            approach:
                "Focused on building a clean, responsive, and maintainable portfolio using reusable React components, a data-driven project structure, and TailwindCSS for consistent styling and responsive layouts.",
            links: {
                github: "https://github.com/alexoiik/alexoiik.github.io",
                web: "https://alexoiik.github.io",
            },
        },
    },
    {
        id: 2,
        title: "Tourvisto",
        description:
            "A modern, AI-enhanced dashboard built for travel agencies to manage destinations, bookings, customers, analytics, and AI-powered assistance.",
        technologies: ["React", "TypeScript", "Syncfusion", "TailwindCSS", "Appwrite", "Google Gemini API", "Vite"],
        filters: {
            type: "Personal",
            language: ["React", "TypeScript", "HTML", "TailwindCSS"],
            platform: ["Web"],
            role: ["Software Engineer", "Designer"],
        },
        details: {
            type: "Personal",
            period: "Oct 2025 - Nov 2025 · 2 mos",
            role: ["Software Engineer", "Designer"],
            languages: ["React", "TypeScript", "HTML", "TailwindCSS"],
            platforms: ["Web"],
            teamSize: "1",
            contribution:
                "Designed and developed the entire web application, including responsive dashboard interfaces, Appwrite database integration, and Google Gemini API integration for automated trip generation.",
            highlights: [
                "Integrated Google Gemini API to generate customized, multi-day travel itineraries complete with locations, estimated budgets, and travel style tagging.",
                "Built interactive visual analytics using Syncfusion data visualization components to monitor user growth, active trips, and booking trends in real time.",
                "Implemented full role-based user access management and secure Appwrite backend integration for signups, profile data, and trip record storage.",
            ],
            features: [
                "AI Trip Generator: Interactive trip creation wizard allowing custom inputs for destination, duration, travel style, group type, budget, and interest areas.",
                "Real-Time Analytics Dashboard: High-level overview cards tracking metrics like total users, active users, total trips, and visual trend line charts.",
                "User & Access Management: Comprehensive user management table displaying email addresses, join dates, and role tags (Admin vs. User).",
                "Detailed Itinerary Views: Rich trip detail screens displaying image galleries, pricing breakdowns, star ratings, and tagged categories (e.g., Luxury, Family, Nightlife).",
            ],
            techStack: [
                "React",
                "TypeScript",
                "Syncfusion",
                "TailwindCSS",
                "Appwrite",
                "Google Gemini API",
                "Vite",
            ],
            approach:
                "Adopted a component-driven architecture using React, TypeScript, and Vite for fast builds and modular development. Integrated Syncfusion UI controls alongside Tailwind CSS for clean layout design and responsive data visualizers. Connected Appwrite for lightweight database management and user auth, while utilizing the Google Gemini API to dynamically structure and return AI-generated trip proposals based on user preference inputs.",
            links: {
                github: "https://github.com/alexoiik/travel-agency",
            },
        },
    },
    {
        id: 3,
        title: "MultilabelDTree",
        description:
            "An Automated Machine Learning Web Application for Classifying Multi-Label Data through Decision Trees, incorporating the famous techniques of Problem Transformation Approaches.",
        technologies: ["JavaScript", "HTML", "CSS", "JQuery", "AJAX", "PHP", "Python", "SQL"],
        filters: {
            type: "Academic",
            language: ["JavaScript", "HTML", "CSS", "PHP", "Python", "SQL"],
            platform: ["Web"],
            role: ["Software Engineer", "Designer", "Researcher"],
        },
        details: {
            type: "Academic",
            period: "Jun 2024 - Feb 2025 · 9 mos",
            role: ["Software Engineer", "Designer", "Researcher"],
            languages: ["JavaScript", "HTML", "CSS", "PHP", "Python", "SQL"],
            platforms: ["Web"],
            teamSize: "1",
            contribution:
                "Developed the complete web application and AutoML pipeline for multi-label classification, handling everything from front-end interactivity and user authentication to Python back-end machine learning integrations.",
            highlights: [
                "Implemented Binary Relevance, Label Powerset, and Classifier Chain problem transformation methods combined with Decision Trees for multi-label classification.",
                "Engineered an automated hyperparameter tuning (AutoML) system that automatically discovers optimal parameters to maximize accuracy metrics.",
                "Built interactive visualization tools for structural Decision Tree graphs alongside export capabilities for PKL model binaries and CSV prediction outputs.",
            ],
            features: [
                "AutoML Optimization & Evaluation: Allows users to run manual parameter testing or enable Auto mode to automatically tune model parameters on pre-uploaded or custom datasets.",
                "Pretrained Model Management: Secure user account system to save, view, inspect feature/label parameters, and manage trained classification models.",
                "Dataset Classification & Prediction: Upload unclassified datasets to generate predictions using stored models, with detailed performance metrics and downloadable CSV reports.",
                "Visual Decision Tree Graphs: Interactive visual representation of trained Decision Trees to help users interpret model structure and decision boundaries.",
            ],
            techStack: [
                "JavaScript",
                "HTML",
                "CSS",
                "JQuery",
                "AJAX",
                "PHP",
                "Python",
                "SQL"
            ],
            approach:
                "Constructed an asynchronous front-end interface using jQuery and AJAX to deliver a seamless user experience without full page reloads. Built the server layer using PHP for session handling, database interactions, and PHPMailer workflows, while executing Python backend scripts to process multi-label algorithms, compute evaluation metrics, and generate serializable decision tree models.",
            links: {
                github: "https://github.com/alexoiik/MultilabelDTree",
                paper: "https://link.springer.com/chapter/10.1007/978-3-032-10824-1_3"
            },
        },
    },
];
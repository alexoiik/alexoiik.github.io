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
                "Designed the complete website interface and visual system in Figma.",
                "Independently designed and developed the entire website from scratch.",
                "Built the frontend using React, JavaScript, HTML, and TailwindCSS.",
                "Created a responsive layout optimized for desktop, tablet, and mobile.",
                "Implemented reusable React components across the website.",
                "Developed dynamic project filtering by type, language, platform, and role.",
                "Built interactive project cards with detailed project information modals.",
                "Implemented responsive desktop and mobile navigation with a collapsible menu.",
                "Designed and implemented the complete project data structure.",
                "Added keyboard support and interactive modal behavior.",
                "Implemented smooth hover, transition, and interaction states throughout the interface.",
                "Focused on clean component structure, maintainability, and responsive design.",
            ],
            features: [
                "Responsive portfolio design.",
                "Sticky navigation with desktop and mobile layouts.",
                "Mobile navigation with expandable menu.",
                "Hero section with developer introduction and code editor interface.",
                "About section with profile, introduction, skills, and technologies.",
                "Project filtering by type, language, platform, and role.",
                "Interactive project cards with image previews.",
                "Detailed project information modal.",
                "Project metadata including role, languages, platform, team size, and period.",
                "Technology and tech stack tags.",
                "Project highlights, features, contribution, and development approach.",
                "Experience timeline with roles, companies, periods, and responsibilities.",
                "Education section with degree and institution information.",
                "Resume access from desktop and mobile navigation.",
                "GitHub and external project links.",
                "Responsive layouts across desktop, tablet, and mobile devices.",
                "Keyboard-accessible project modal with Escape-to-close support.",
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
                web: "https://kclusterhub.iee.ihu.gr/multilabeldtree/",
                paper: "https://link.springer.com/chapter/10.1007/978-3-032-10824-1_3"
            },
        },
    },
    {
        id: 4,
        title: "DataBoard",
        description:
            "A Dashboard that offers data and comprehensive information about videos. DataBoard provides a holistic overview of video performance, including users, views and durations.",
        technologies: ["JavaScript", "HTML", "CSS", "PHP", "SQL"],
        filters: {
            type: "Professional",
            language: ["JavaScript", "HTML", "CSS", "PHP", "SQL"],
            platform: ["Web"],
            role: ["Software Engineer", "Designer", "Team Lead"],
        },
        details: {
            type: "Professional",
            period: "Nov 2023 - Feb 2024 · 4 mos",
            role: ["Software Engineer", "Designer", "Team Lead"],
            languages: ["JavaScript", "HTML", "CSS", "PHP", "SQL"],
            platforms: ["Web"],
            teamSize: "2",
            contribution:
                "Worked as a Full-Stack Engineer, Designer and Team Leader in a 2-person team, responsible for designing the modern dark-themed UI/UX, implementing front-end dashboard components, and building back-end endpoints to query and render video performance metrics.",
            highlights: [
                "Designed and developed a sleek, modern dark-mode dashboard interface for seamless video analytics tracking.",
                "Integrated real-time search functionality allowing users to filter recent activity records dynamically by User ID.",
                "Implemented comprehensive data visualization widgets tracking core platform KPIs, top-performing content, and user metrics.",
            ],
            features: [
                "Recent Data: Tabular view of real-time user activities, complete with User ID search, pagination, video titles, and duration metrics.",
                "Top Videos: Ranked leaderboard highlighting top-performing video content by view counts.",
                "Analytics & Snapshot Metrics: Detailed summary widgets providing instant visibility into max/min video durations, total views, active users, and view times.",
            ],
            techStack: [
                "JavaScript",
                "HTML",
                "CSS",
                "PHP",
                "SQL",
            ],
            approach:
                "Built using a full-stack web architecture with PHP handling backend data processing and database queries, paired with custom JavaScript, HTML, and CSS to power the dashboard's component-driven layout and dark-themed user interface.",
            links: {
                pdf: "https://drive.google.com/file/d/1otCJFh1zX-q1VBGHFtihw4r1VVqnUOVs/view?usp=sharing"
            },
        },
    },
    {
        id: 5,
        title: "Battleship Game",
        description:
            "A web-based implementation of the classic Battleship naval strategy board game. Players strategically deploy a fleet across coordinate grids and take turns targeting enemy waters to sink opposing ships in both Singleplayer and Multiplayer modes.",
        technologies: ["JavaScript", "HTML", "CSS", "JQuery", "AJAX", "PHP", "SQL"],
        filters: {
            type: "Academic",
            language: ["JavaScript", "HTML", "CSS", "PHP", "SQL"],
            platform: ["Web"],
            role: ["Software Engineer", "Game Designer", "Team Lead", "Designer"],
        },
        details: {
            type: "Academic",
            period: "Oct 2023 - Jan 2024 · 4 mos",
            role: ["Software Engineer", "Game Designer", "Team Lead", "Designer"],
            languages: ["JavaScript", "HTML", "CSS", "PHP", "SQL"],
            platforms: ["Web"],
            teamSize: "4",
            contribution:
                "Served as Team Lead, Software Engineer, and Designer across a 4-person team, guiding overall project execution, designing the responsive naval-themed UI/UX, and implementing dynamic game state synchronization, AJAX interaction logic, and database integrations for both singleplayer and real-time multiplayer modes.",
            highlights: [
                "Led a 4-person development team in building an interactive, full-stack web implementation of Battleship featuring real-time state tracking and smooth browser interaction.",
                "Engineered robust turn-based game logic and automated grid checks to handle real-time hit/miss validations, ship targeting, and fleet destruction rules.",
                "Designed a custom thematic front-end experience complete with interactive dual-radar grids, light/dark theme toggling, and dedicated gameplay flow screens.",
            ],
            features: [
                "Flexible Gameplay Modes: Supports both Singleplayer (player vs. computer bot) and real-time Multiplayer modes.",
                "Dynamic Dual-Grid UI: Interactive radar-style ocean grids for managing fleet placement and recording targeted shots with visual hit (red) and miss (white) feedback.",
                "Fleet Strategy Mechanics: Complete ship setup system supporting 5 unique vessel classes (Carrier, Battleship, Cruiser, Submarine, Destroyer) with vertical and horizontal positioning validation.",
            ],
            techStack: [
                "JavaScript", "HTML", "CSS", "JQuery", "AJAX", "PHP", "SQL"
            ],
            approach:
                "Built using a modular client-server framework where PHP and MySQL manage persistent game states, move histories, and player matchmaking, while jQuery and AJAX handle asynchronous front-end requests to update grid coordinates dynamically without page refreshes.",
            links: {
                github: "https://github.com/iee-ihu-gr-course1941/ADISE23_BattleshipGame",
                web: "https://users.iee.ihu.gr/~iee2019119/ADISE23_BattleshipGame/"
            },
        },
    },
    {
        id: 6,
        title: "AI Graph Search",
        description:
            "A smart graph search based on the fundamental AI algorithms: BFS (Breadth-First Search) and DFS (Depth First Search).",
        technologies: ["Python"],
        filters: {
            type: "Academic",
            language: ["Python"],
            platform: ["Desktop"],
            role: ["Software Engineer"],
        },
        details: {
            type: "Academic",
            period: "Dec 2023 · 1 mo",
            role: ["Software Engineer"],
            languages: ["Python"],
            platforms: ["Desktop"],
            teamSize: "1",
            contribution:
                "Responsible for architecting, building, and testing the command-line tool in Python, implementing fundamental AI search algorithms to solve graph traversal and pathfinding challenges.",
            highlights: [
                "Implemented core artificial intelligence search algorithms (BFS and DFS) to perform blind search traversals across directed graph structures.",
                "Built a clear terminal interface that outputs node expansion order, target node discovery, and optimal solution paths.",
                "Engineered state-space exploration logic utilizing Queue and Stack data structures for systematic node processing.",
            ],
            features: [
                "Dual Execution Scripts: Independent terminal entry points allowing users to execute either Breadth-First Search (BFS) or Depth-First Search (DFS).",
                "Detailed Output Metrics: Displays the specific goal node reached (G1, G2, or G3), the exact sequence of the final path, and the complete visit order of all evaluated nodes.",
                "Multi-Goal Pathfinding: Traverses from an Initial State (Node I) across a weighted, directed graph targeting multiple destination states.",
            ],
            techStack: [
                "Python"
            ],
            approach:
                "Built as a lightweight Python CLI application using custom Queue (FIFO) and Stack (LIFO) data structures to model search-front expansions. The program processes directed adjacency models to systematically traverse states and extract optimal paths directly to the console.",
            links: {
                github: "https://github.com/alexoiik/AI-Graph-Search"
            },
        },
    },
    {
        id: 7,
        title: "Prompt Genius",
        description:
            "A revolutionary open-source AI prompting tool that empowers users to unlock their creativity and imagination. This innovative web application provides an accessible platform for individuals of all backgrounds to explore, generate, and share brilliant AI prompts.",
        technologies: ["React", "NextJS", "NodeJS", "MongoDB", "JavaScript", "HTML", "TailwindCSS", "NoSQL"],
        filters: {
            type: "Personal",
            language: ["React", "JavaScript", "HTML", "TailwindCSS", "NoSQL"],
            platform: ["Web"],
            role: ["Software Engineer", "Designer"],
        },
        details: {
            type: "Personal",
            period: "Oct 2023 · 1 mo",
            role: ["Software Engineer", "Designer"],
            languages: ["React", "JavaScript", "HTML", "TailwindCSS", "NoSQL"],
            platforms: ["Web"],
            teamSize: "1",
            contribution:
                "Designed and developed the application end-to-end using Next.js and MongoDB, managing everything from UI/UX design and responsive styling to backend API development and authentication.",
            highlights: [
                "Developed a full-stack open-source platform for discovering, creating, editing, and sharing AI prompts.",
                "Integrated dynamic tagging and search capabilities to filter prompts instantly by username or topic tags.",
                "Engineered personalized user profiles enabling creators to view, edit, and delete their submitted prompts.",
            ],

            features: [
                "Prompt Management (CRUD): Users can easily publish, update, and remove personalized AI prompts tagged by category.",
                "Interactive Feed & Search: Dynamic landing page with a global search bar to explore prompts by targeted tags or specific creators.",
                "Personalized Dashboard: Dedicated user profile area displaying custom prompt cards equipped with quick-copy capabilities and editing tools.",
            ],
            techStack: [
                "React", "NextJS", "NodeJS", "MongoDB", "JavaScript", "HTML", "TailwindCSS", "NoSQL"
            ],
            approach:
                "Built with a modern serverless full-stack architecture leveraging Next.js App Router for server-side rendering and internal API routes, coupled with MongoDB via Mongoose for flexible document storage. Styled using Tailwind CSS to deliver a sleek, modern, and accessible user interface.",
            links: {
                github: "https://github.com/alexoiik/prompt-genius"
            },
        },
    },
    {
        id: 8,
        title: "Petrun Stories",
        description:
            "The official web platform for Petrun Stories, Greece's YouTube channel dedicated to Sports Science and Physical Education. The site bridges science communication and athletic education by offering scientifically backed articles, diary posts, and multimedia resources in an accessible format.",
        technologies: ["JavaScript", "HTML", "CSS"],
        filters: {
            type: "Professional",
            language: ["JavaScript", "HTML", "CSS"],
            platform: ["Web"],
            role: ["Software Engineer", "Designer"],
        },
        details: {
            type: "Professional",
            period: "Jul 2023 - Aug 2023 · 2 mos",
            role: ["Software Engineer", "Designer"],
            languages: ["JavaScript", "HTML", "CSS"],
            platforms: ["Web"],
            teamSize: "1",
            contribution:
                "Designed and built the website from scratch as the sole developer, delivering a responsive dark-themed interface, interactive touch-slider carousel, dynamic bilingual support, and integrated contact channels.",
            highlights: [
                "Designed and built a modern, responsive web application to promote evidence-based sports science content to the public.",
                "Integrated a hardware-accelerated touch slider (Swiper.js) for an interactive, fluid diary post browsing experience.",
                "Implemented dynamic, client-side bilingual support enabling seamless real-time toggling between Greek and English.",
            ],
            features: [
                "Interactive Diary Carousel: Swiper-powered touch slider allowing users to easily swipe through and select athletic diary posts.",
                "Dynamic Language Switcher: One-click header flag toggle to instantly translate page content between Greek and English.",
                "Content & Contact Hub: Dedicated section detailing the platform's educational mission along with integrated social media channels and a direct message form.",
            ],
            techStack: [
                "JavaScript", "HTML", "CSS"
            ],
            approach:
                "Built with a lightweight vanilla front-end architecture utilizing modern HTML5, CSS3, and JavaScript. Focused on optimal mobile responsiveness and smooth visual feedback by integrating Swiper.js for hardware-accelerated transitions and client-side DOM manipulation for instant language switching.",
            links: {
                github: "https://github.com/petrunstories/petrunstories.github.io",
                web: "https://petrunstories.gr/"
            },
        },
    },
    {
        id: 9,
        title: "Breakfast in the Dining Room",
        description:
            "A 3D scene that presents a realistic depiction of a breakfast in the dining room, inside a house. Created with Blender from scratch.",
        technologies: ["Blender"],
        filters: {
            type: "Academic",
            language: [""],
            platform: ["Desktop"],
            role: ["3D Artist", "3D Designer"],
        },
        details: {
            type: "Academic",
            period: "Mar 2023 - May 2023 · 3 mos",
            role: ["3D Artist", "3D Designer"],
            languages: [""],
            platforms: ["Desktop"],
            teamSize: "1",
            contribution:
                "Sole designer and artist responsible for modeling, texturing, shading, lighting, and animating the 3D interior environment from scratch using Blender.",
            highlights: [
                "Modeled a complete, detailed interior scene featuring custom assets, realistic material shaders, and realistic environmental lighting.",
                "Applied advanced texture mapping techniques including displacement, bump mapping, transparency, and high reflectivity across glass, wood, and fabric surfaces.",
                "Engineered multiple animation styles within the scene, combining keyframe movement, rigid body physics simulations, and shape key deformations.",
            ],
            features: [
                "Realistic Shading & Materials: Features high-reflectivity mirrors, transparent glassware, bump-mapped fabric chairs, and displacement-mapped wooden surfaces.",
                "Multi-Technique Animations: Integrates keyframe movement for silverware, rigid body physics for dynamic object drops, and Shape Keys for mesh deformations like the deflating basketball.",
                "Environmental Lighting & Atmosphere: Utilizes volumetric fog, ambient occlusion, screen-space reflections, and outdoor background imagery to establish a realistic morning ambiance.",
            ],
            techStack: [
                "Blender"
            ],
            approach:
                "Constructed the 3D environment entirely within Blender starting from basic geometry modeling to advanced nodal material creation. Configured realistic light paths and volumetric fog, and implemented keyframe and physics animation tracks to bring movement to the indoor setup.",
            links: {
                github: "https://github.com/alexoiik/3D-Graphics"
            },
        },
    },
    {
        id: 10,
        title: "Data Mining Investigation",
        description:
            "Costumers' churn rate investigation of a telecommunication company, using python, scikit-learn and a two-dimensional dataset. This investigation was an assessment by university's course 'Data Organization and Data Mining' and completed through Visual Studio Code with classification and clustering algorithms.",
        technologies: ["Python", "VSCode"],
        filters: {
            type: "Academic",
            language: ["Python"],
            platform: ["Desktop"],
            role: ["Data Scientist", "Data Analyst"],
        },
        details: {
            type: "Academic",
            period: "May 2023 · 1 mo",
            role: ["Data Scientist", "Data Analyst"],
            languages: ["Python"],
            platforms: ["Desktop"],
            teamSize: "1",
            contribution:
                "Executed the full data science lifecycle end-to-end handling dataset processing, model development, algorithm evaluation, and performance benchmarking using Python and scikit-learn in Visual Studio Code.",
            highlights: [
                "Investigated telecom customer churn by implementing both supervised classification and unsupervised clustering techniques on a two-dimensional dataset.",
                "Executed and annotated cluster boundaries across K-Means, Agglomerative Hierarchical Clustering, and DBSCAN algorithms to detect natural customer groupings.",
                "Benchmarked Decision Tree and K-Nearest Neighbors (kNN) classification models to identify the optimal predictive architecture for churn risk.",
            ],
            features: [
                "Unsupervised Churn Segmentation: Applied K-Means, Agglomerative, and DBSCAN clustering algorithms with custom parameter tuning to annotate distinct customer groups.",
                "Comparative Model Evaluation: Performed side-by-side performance benchmarking between Decision Trees and K-Nearest Neighbors (kNN) classifiers.",
                "Data Mining Workflow: Built a modular Python pipeline in Visual Studio Code utilizing scikit-learn for dataset processing, modeling, and evaluation metrics.",
            ],
            techStack: [
                "Python", "VSCode"
            ],
            approach:
                "Developed a modular Python workflow in Visual Studio Code using scikit-learn to analyze telecom churn dynamics. Partitioned the investigation into two distinct phases: Case A focused on comparative clustering (K-Means, Agglomerative, DBSCAN) to analyze spatial distribution patterns, while Case B evaluated supervised classifiers (Decision Trees vs. kNN) to measure prediction metrics and select the best-performing model.",
            links: {
                github: "https://github.com/alexoiik/Data-Mining-Investigation"
            },
        },
    },
    {
        id: 11,
        title: "Public Key Cryptography with RSA",
        description:
            "A simple implementation of Public Key Cryptography, using RSA Cryptographic Algorithm (with Java).",
        technologies: ["Java", "NetBeans"],
        filters: {
            type: "Academic",
            language: ["Java"],
            platform: ["Desktop"],
            role: ["Software Engineer", "Security Engineer"],
        },
        details: {
            type: "Academic",
            period: "Apr 2023 · 1 mo",
            role: ["Software Engineer", "Security Engineer"],
            languages: ["Java"],
            platforms: ["Desktop"],
            teamSize: "1",
            contribution:
                "Implemented the core cryptographic logic, key pair generation, and data encryption/decryption workflows in Java to establish a secure communication pipeline.",
            highlights: [
                "Developed a pure Java implementation of the RSA algorithm to demonstrate public-key cryptography and asymmetric encryption mechanics.",
                "Simulated a secure message-passing pipeline ensuring data confidentiality between sender and receiver entities.",
                "Handled large prime number generation, key creation, and modular arithmetic operations for asymmetric encryption and decryption.",
            ],
            features: [
                "Asymmetric Key Generation: Creates paired public and private keys using mathematical prime-factorization operations.",
                "End-to-End Encryption: Encrypts plain-text payload on the sender side using the recipient's public key.",
                "Decryption & Verification: Restores original message confidentiality on the receiver side exclusively via the corresponding private key.",
            ],
            techStack: [
                "Java", "NetBeans"
            ],
            approach:
                "Designed an object-oriented Java application to model asymmetric encryption principles. Structured the workflow into distinct key generation, encryption, and decryption modules utilizing mathematical operations over large numbers to guarantee secure message exchange and confidentiality over untrusted channels.",
            links: {
                github: "https://github.com/alexoiik/RSA"
            },
        },
    },
    {
        id: 12,
        title: "Recommender System",
        description:
            "A book recommender system built in R that predicts potential user ratings based on historical preference data. Developed as part of the 'Data Analytics' course using the K-Nearest Neighbors (kNN) algorithm on e-commerce reader evaluation datasets.",
        technologies: ["R", "RStudio"],
        filters: {
            type: "Academic",
            language: ["R"],
            platform: ["Desktop"],
            role: ["Data Scientist", "Data Analyst"],
        },
        details: {
            type: "Academic",
            period: "Nov 2022 - Dec 2022 · 2 mos",
            role: ["Data Scientist", "Data Analyst"],
            languages: ["R"],
            platforms: ["Desktop"],
            teamSize: "1",
            contribution:
                "Executed the end-to-end data analytics workflow in RStudio, handling dataset preprocessing, matrix transformation, kNN algorithm implementation, and rating prediction evaluation.",
            highlights: [
                "Engineered a collaborative filtering recommender system using the K-Nearest Neighbors algorithm in R to predict reader ratings.",
                "Processed and transformed e-commerce bookstore user-item evaluation datasets to uncover user similarity profiles.",
                "Optimized distance metrics and neighborhood parameters to improve rating prediction accuracy for unread books.",
            ],
            features: [
                "Predictive Rating Engine: Calculates potential book ratings for users based on historical similarity scores of neighboring readers.",
                "User-Item Collaborative Filtering: Analyzes reader behavior patterns across an e-commerce bookstore evaluation dataset.",
                "Data Pipeline & Analytics: Built in RStudio using R scripts for dataset cleaning, sparse matrix transformation, and algorithmic evaluation.",
            ],
            techStack: [
                "R", "RStudio"
            ],
            approach:
                "Constructed a collaborative filtering workflow in RStudio using the K-Nearest Neighbors (kNN) algorithm. Structured the project by loading raw reader review data, building a user-item matrix, measuring similarity metrics between readers, and projecting estimated scores onto unrated books to deliver personalized recommendations.",
            links: {
                github: "https://github.com/alexoiik/Recommender-System"
            },
        },
    },
];
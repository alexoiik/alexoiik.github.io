import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GlobeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const GithubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-7 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 18.13V22" />
  </svg>
);

const PdfIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const PresentationIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 text-[#edf0f8]"
  >
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 text-[#edf0f8]"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const Projects = () => {
  const projects = [
    {
      id: "01",
      category: "Frontend",
      year: "Jul 2026 - Aug 2026",
      title: "Frequency X",
      description:
        "A modern single-page website for promoting exclusive pool parties hosted at private luxury villas, built with React, Vite, JavaScript, and Tailwind CSS.",
      contribution:
        "Architected and designed the entire single-page web application from scratch as a solo developer, handling end-to-end UI/UX design, component engineering, custom Tailwind animations, and deployment via Vercel.",
      tools: ["React", "JavaScript", "HTML5", "TailwindCSS", "Vite"],
      type: "Professional",
      teamSize: "1 engineer",
      keyFeatures: [
        "Interactive DJ Roster with hover micro-interactions and animated equalizer visualizers.",
        "Secret Location Drop section complete with entry protocols and integrated Instagram RSVP access.",
        "Event Series Timeline with live status pills (COMPLETED vs UPCOMING).",
        "Responsive, single-page cyber-themed layout optimized across mobile, tablet, and desktop viewports.",
      ],
      approach:
        "Focused on creating an immersive, dark-mode visual experience by configuring custom Tailwind CSS color extensions, dynamic utility classes, and inline SVGs. Leveraged Vite and React's modular structure to maintain lightweight performance, smooth UI transitions, and clean code scalability without reliance on heavy external UI libraries.",
      liveUrl: "https://frequency-x.vercel.app",
      githubUrl: "https://github.com/alexoiik/frequency-x",
      bgGradient: "from-blue-950/40 via-[#080c16] to-[#080c16]",
    },
    {
      id: "02",
      category: "Full-Stack",
      year: "Oct 2025 - Nov 2025",
      title: "Tourvisto",
      description:
        "A modern, AI-enhanced dashboard built for travel agencies to manage destinations, bookings, customers, analytics, and AI-powered assistance.",
      contribution:
        "Designed and developed the entire web application, including responsive dashboard interfaces, Appwrite database integration, and Google Gemini API integration for automated trip generation.",
      tools: [
        "React",
        "TypeScript",
        "HTML5",
        "TailwindCSS",
        "Syncfusion",
        "Appwrite",
        "Google Gemini API",
        "Vite",
      ],
      type: "Personal",
      teamSize: "1 engineer",
      keyFeatures: [
        "AI Trip Generator: Interactive trip creation wizard allowing custom inputs for destination, duration, travel style, group type, budget, and interest areas.",
        "Real-Time Analytics Dashboard: High-level overview cards tracking metrics like total users, active users, total trips, and visual trend line charts.",
        "User & Access Management: Comprehensive user management table displaying email addresses, join dates, and role tags (Admin vs. User).",
        "Detailed Itinerary Views: Rich trip detail screens displaying image galleries, pricing breakdowns, star ratings, and tagged categories (e.g., Luxury, Family, Nightlife).",
      ],
      approach:
        "Adopted a component-driven architecture using React, TypeScript, and Vite for fast builds and modular development. Integrated Syncfusion UI controls alongside Tailwind CSS for clean layout design and responsive data visualizers. Connected Appwrite for lightweight database management and user auth, while utilizing the Google Gemini API to dynamically structure and return AI-generated trip proposals based on user preference inputs.",
      githubUrl: "https://github.com/alexoiik/travel-agency",
      bgGradient: "from-blue-950/40 via-[#080c16] to-[#080c16]",
    },
    {
      id: "03",
      category: "Full-Stack",
      year: "Jun 2024 - Feb 2025",
      title: "MultilabelDTree",
      description:
        "An Automated Machine Learning Web Application for Classifying Multi-Label Data through Decision Trees, incorporating the famous techniques of Problem Transformation Approaches.",
      contribution:
        "Developed the complete web application and AutoML pipeline for multi-label classification, handling everything from front-end interactivity and user authentication to Python back-end machine learning integrations.",
      tools: [
        "JavaScript",
        "HTML5 / CSS3",
        "JQuery",
        "AJAX",
        "PHP",
        "Python",
        "SQL",
      ],
      type: "Academic",
      teamSize: "1 engineer",
      keyFeatures: [
        "AutoML Optimization & Evaluation: Allows users to run manual parameter testing or enable Auto mode to automatically tune model parameters on pre-uploaded or custom datasets.",
        "Pretrained Model Management: Secure user account system to save, view, inspect feature/label parameters, and manage trained classification models.",
        "Dataset Classification & Prediction: Upload unclassified datasets to generate predictions using stored models, with detailed performance metrics and downloadable CSV reports.",
        "Visual Decision Tree Graphs: Interactive visual representation of trained Decision Trees to help users interpret model structure and decision boundaries.",
      ],
      approach:
        "Constructed an asynchronous front-end interface using jQuery and AJAX to deliver a seamless user experience without full page reloads. Built the server layer using PHP for session handling, database interactions, and PHPMailer workflows, while executing Python backend scripts to process multi-label algorithms, compute evaluation metrics, and generate serializable decision tree models.",
      liveUrl: "https://kclusterhub.iee.ihu.gr/multilabeldtree/",
      githubUrl: "https://github.com/alexoiik/MultilabelDTree",
      paperUrl: "https://link.springer.com/chapter/10.1007/978-3-032-10824-1_3",
      bgGradient: "from-cyan-950/40 via-[#080c16] to-[#080c16]",
    },
    {
      id: "04",
      category: "Full-Stack",
      year: "Nov 2023 - Feb 2024",
      title: "DataBoard",
      description:
        "A Dashboard that offers data and comprehensive information about videos. DataBoard provides a holistic overview of video performance, including users, views and durations.",
      contribution:
        "Worked as a Full-Stack Engineer, Designer and Team Leader in a 2-person team, responsible for designing the modern dark-themed UI/UX, implementing front-end dashboard components, and building back-end endpoints to query and render video performance metrics.",
      tools: ["JavaScript", "HTML5 / CSS3", "PHP", "SQL"],
      type: "Professional",
      teamSize: "2 engineers",
      keyFeatures: [
        "Recent Data: Tabular view of real-time user activities, complete with User ID search, pagination, video titles, and duration metrics.",
        "Top Videos: Ranked leaderboard highlighting top-performing video content by view counts.",
        "Analytics & Snapshot Metrics: Detailed summary widgets providing instant visibility into max/min video durations, total views, active users, and view times.",
      ],
      approach:
        "Built using a full-stack web architecture with PHP handling backend data processing and database queries, paired with custom JavaScript, HTML, and CSS to power the dashboard's component-driven layout and dark-themed user interface.",
      presentationUrl:
        "https://drive.google.com/file/d/1otCJFh1zX-q1VBGHFtihw4r1VVqnUOVs/view?pli=1",
      bgGradient: "from-indigo-950/40 via-[#080c16] to-[#080c16]",
    },
    {
      id: "05",
      category: "Full-Stack",
      year: "Oct 2023 - Jan 2024",
      title: "Battleship Game",
      description:
        "A web-based implementation of the classic Battleship naval strategy board game. Players strategically deploy a fleet across coordinate grids and take turns targeting enemy waters to sink opposing ships in both Singleplayer and Multiplayer modes.",
      contribution:
        "Served as Team Lead, Software Engineer, and Designer across a 4-person team, guiding overall project execution, designing the responsive naval-themed UI/UX, and implementing dynamic game state synchronization, AJAX interaction logic, and database integrations for both singleplayer and real-time multiplayer modes.",
      tools: ["JavaScript", "HTML5 / CSS3", "JQuery", "AJAX", "PHP", "SQL"],
      type: "Academic",
      teamSize: "4 engineers",
      keyFeatures: [
        "Flexible Gameplay Modes: Supports both Singleplayer (player vs. computer bot) and real-time Multiplayer modes.",
        "Dynamic Dual-Grid UI: Interactive radar-style ocean grids for managing fleet placement and recording targeted shots with visual hit (red) and miss (white) feedback.",
        "Fleet Strategy Mechanics: Complete ship setup system supporting 5 unique vessel classes (Carrier, Battleship, Cruiser, Submarine, Destroyer) with vertical and horizontal positioning validation.",
      ],
      approach:
        "Built using a modular client-server framework where PHP and MySQL manage persistent game states, move histories, and player matchmaking, while jQuery and AJAX handle asynchronous front-end requests to update grid coordinates dynamically without page refreshes.",
      liveUrl: "https://users.iee.ihu.gr/~iee2019119/ADISE23_BattleshipGame/",
      githubUrl:
        "https://github.com/iee-ihu-gr-course1941/ADISE23_BattleshipGame",
      bgGradient: "from-blue-950/40 via-[#080c16] to-[#080c16]",
    },
    {
      id: "06",
      category: "Full-Stack",
      year: "Oct 2023",
      title: "Prompt Genius",
      description:
        "A revolutionary open-source AI prompting tool that empowers users to unlock their creativity and imagination. This innovative web application provides an accessible platform for individuals of all backgrounds to explore, generate, and share brilliant AI prompts.",
      contribution:
        "Designed and developed the application end-to-end using Next.js and MongoDB, managing everything from UI/UX design and responsive styling to backend API development and authentication.",
      tools: [
        "React",
        "Next.js",
        "Node.js",
        "MongoDB",
        "JavaScript",
        "HTML5",
        "TailwindCSS",
        "NoSQL",
      ],
      type: "Personal",
      teamSize: "1 engineer",
      keyFeatures: [
        "Prompt Management (CRUD): Users can easily publish, update, and remove personalized AI prompts tagged by category.",
        "Interactive Feed & Search: Dynamic landing page with a global search bar to explore prompts by targeted tags or specific creators",
        "Personalized Dashboard: Dedicated user profile area displaying custom prompt cards equipped with quick-copy capabilities and editing tools.",
      ],
      approach:
        "Built with a modern serverless full-stack architecture leveraging Next.js App Router for server-side rendering and internal API routes, coupled with MongoDB via Mongoose for flexible document storage. Styled using Tailwind CSS to deliver a sleek, modern, and accessible user interface.",
      githubUrl: "https://github.com/alexoiik/prompt-genius",
      bgGradient: "from-blue-950/40 via-[#080c16] to-[#080c16]",
    },
    {
      id: "07",
      category: "Frontend",
      year: "Jul 2023 - Aug 2023",
      title: "Petrun Stories",
      description:
        "The official web platform for Petrun Stories, Greece's YouTube channel dedicated to Sports Science and Physical Education. The site bridges science communication and athletic education by offering scientifically backed articles, diary posts, and multimedia resources in an accessible format.",
      contribution:
        "Designed and built the website from scratch as a solo developer, delivering a responsive dark-themed interface, interactive touch-slider carousel, dynamic bilingual support, and integrated contact channels.",
      tools: ["JavaScript", "HTML5 / CSS3"],
      type: "Professional",
      teamSize: "1 engineer",
      keyFeatures: [
        "Interactive Diary Carousel: Swiper-powered touch slider allowing users to easily swipe through and select athletic diary posts.",
        "Dynamic Language Switcher: One-click header flag toggle to instantly translate page content between Greek and English.",
        "Content & Contact Hub: Dedicated section detailing the platform's educational mission along with integrated social media channels and a direct message form.",
      ],
      approach:
        "Built with a lightweight vanilla front-end architecture utilizing modern HTML5, CSS3, and JavaScript. Focused on optimal mobile responsiveness and smooth visual feedback by integrating Swiper.js for hardware-accelerated transitions and client-side DOM manipulation for instant language switching.",
      liveUrl: "https://petrunstories.gr",
      githubUrl: "https://github.com/petrunstories/petrunstories.github.io",
      bgGradient: "from-blue-950/40 via-[#080c16] to-[#080c16]",
    },
    {
      id: "08",
      category: "Full-Stack",
      year: "May 2022 - Jun 2022",
      title: "Trip Assistant",
      description:
        "An Android travel application designed to streamline trip planning and booking. Built with Java in Android Studio, featuring XML UI design, hybrid data storage via Room and Firebase Cloud Firestore, and Google Maps SDK integration for destination tracking.",
      contribution:
        "Guided a 3-person team in building an Android travel application, managing architectural decisions, implementing local Room persistence, configuring remote Firebase synchronization, and integrating Google Maps SDK.",
      tools: ["Java", "XML", "ROOM", "Firebase", "Maps SDK", "Android Studio"],
      type: "Academic",
      teamSize: "3 engineers",
      keyFeatures: [
        "Destination Browsing & Reservations: Enables users to explore international travel spots, view pricing details, and organize trip bookings.",
        "Local Room Database: Utilizes Room DAO interfaces and entities for offline persistence and CRUD operations on local user preferences.",
        "Cloud Sync with Firestore: Connects to Firebase Cloud Firestore for real-time remote storage and cross-device data backup.",
        "Interactive Location Mapping: Integrates Google Maps SDK to map precise coordinates and locations for featured destinations.",
      ],
      approach:
        "Led the design of a native Android architecture using Java and XML in Android Studio. Implemented a robust dual-storage strategy by pairing Room for fast local SQLite persistence with Firebase Cloud Firestore for cloud backup. Embedded Google Maps SDK to handle location-based rendering, ensuring smooth UI navigation for trip browsing and booking management.",
      presentationUrl:
        "https://drive.google.com/file/d/1FM1A3yfgvndBZdWd7kKZ_R_I8xgee0dE/view",
      bgGradient: "from-indigo-950/40 via-[#080c16] to-[#080c16]",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  const renderRibbonBadges = (project) => {
    const ribbonStyle = {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 84%, 0 100%)",
    };

    return (
      <div className="absolute top-0 right-4 sm:right-6 flex items-start gap-1.5 sm:gap-2 z-20">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            title="Live Preview"
            style={ribbonStyle}
            className="w-8 sm:w-9 h-11 sm:h-13 bg-[#38bdf8] border border-[#38bdf8] border-t-0 flex items-center justify-center text-[#070a12] transition-all duration-200 hover:bg-[#0ea5e9] hover:translate-y-1 shadow-[0_4px_12px_rgba(56,189,248,0.3)] cursor-pointer"
          >
            <div className="mb-2">
              <GlobeIcon />
            </div>
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            title="Source Code"
            style={ribbonStyle}
            className="w-8 sm:w-9 h-11 sm:h-13 bg-[#0c1322] border border-[#1e293b] border-t-0 flex items-center justify-center text-[#edf0f8] transition-all duration-200 hover:border-[#38bdf8]/50 hover:text-[#38bdf8] hover:translate-y-1 shadow-md cursor-pointer"
          >
            <div className="mb-2">
              <GithubIcon />
            </div>
          </a>
        )}

        {project.paperUrl && (
          <a
            href={project.paperUrl}
            target="_blank"
            rel="noreferrer"
            title="Paper"
            style={ribbonStyle}
            className="w-8 sm:w-9 h-11 sm:h-13 bg-[#111827] border border-[#1e293b] border-t-0 flex items-center justify-center text-[#94a3b8] transition-all duration-200 hover:border-[#38bdf8]/50 hover:text-[#38bdf8] hover:translate-y-1 shadow-md cursor-pointer"
          >
            <div className="mb-2">
              <PdfIcon />
            </div>
          </a>
        )}

        {project.presentationUrl && (
          <a
            href={project.presentationUrl}
            target="_blank"
            rel="noreferrer"
            title="Slides PDF"
            style={ribbonStyle}
            className="w-8 sm:w-9 h-11 sm:h-13 bg-[#111827] border border-[#1e293b] border-t-0 flex items-center justify-center text-[#94a3b8] transition-all duration-200 hover:border-[#38bdf8]/50 hover:text-[#38bdf8] hover:translate-y-1 shadow-md cursor-pointer"
          >
            <div className="mb-2">
              <PresentationIcon />
            </div>
          </a>
        )}
      </div>
    );
  };

  return (
    <section id="projects" className="relative z-10 w-full py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-wider text-[#38bdf8]">
            <span>03</span>
            <span className="h-px w-6 bg-[#38bdf8]/40" />
            <span className="text-[#a0aec0]">SELECTED PROJECTS</span>
          </div>

          <div className="hidden sm:flex items-center gap-3 mt-3 sm:mt-0">
            <button
              onClick={handlePrev}
              aria-label="Previous project"
              className="w-10 h-10 rounded-full border border-[#1e293b] bg-[#0c1322] flex items-center justify-center transition-all hover:border-[#38bdf8]/50 hover:bg-[#131d31] cursor-pointer"
            >
              <ArrowLeftIcon />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next project"
              className="w-10 h-10 rounded-full border border-[#1e293b] bg-[#38bdf8] flex items-center justify-center transition-all hover:bg-[#0ea5e9] cursor-pointer"
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#f1f5f9] leading-[1.1]">
              Ideas, made tangible.
            </h2>
            <p className="mt-2 text-xs sm:text-[15px] leading-relaxed text-[#94a3b8] font-normal">
              A few things I’ve built.
            </p>
          </div>

          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous project"
              className="w-10 h-10 rounded-full border border-[#1e293b] bg-[#0c1322] flex items-center justify-center"
            >
              <ArrowLeftIcon />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next project"
              className="w-10 h-10 rounded-full border border-[#1e293b] bg-[#38bdf8] flex items-center justify-center"
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
          >
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className={`relative lg:col-span-7 rounded-xl border border-[#1e293b] bg-linear-to-br ${currentProject.bgGradient} overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-[0_12px_30px_rgba(56,189,248,0.1)] hover:border-[#38bdf8]/40 transition-shadow duration-300 p-6 sm:p-8 min-h-[360px]`}
            >
              {renderRibbonBadges(currentProject)}

              <div>
                <div className="mb-4 pr-36 sm:pr-44 flex flex-col gap-1 font-mono text-xs tracking-wider">
                  <span className="text-[#edf0f8] font-medium">
                    {currentProject.id} / {currentProject.category}
                  </span>
                  <span className="text-[#718096]">{currentProject.year}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-medium text-[#f1f5f9] mb-3">
                  {currentProject.title}
                </h3>

                <p className="text-xs sm:text-[14px] leading-relaxed text-[#94a3b8] mb-6 font-normal">
                  {currentProject.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {currentProject.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded border border-[#1e293b] bg-[#0c1322]/80 px-2.5 py-1 font-mono text-xs text-[#a0aec0]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#1b202a]">
                  <button
                    onClick={() => setSelectedProject(currentProject)}
                    className="inline-flex items-center gap-2 rounded border border-[#1e293b] bg-[#0c1322] px-3.5 py-2 font-mono text-xs font-medium text-[#edf0f8] transition-all hover:border-[#38bdf8]/50 hover:bg-[#111827] hover:text-[#38bdf8] cursor-pointer"
                  >
                    <span>View Details</span>
                    <span className="text-xs">→</span>
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative hidden lg:flex lg:col-span-5 rounded-xl border border-[#1e293b] bg-linear-to-br from-[#0c1322]/50 via-[#080c16] to-[#080c16] overflow-hidden flex-col justify-between shadow-xl hover:shadow-[0_12px_30px_rgba(56,189,248,0.08)] hover:border-[#38bdf8]/30 transition-all duration-300 p-6 sm:p-8 min-h-[360px] opacity-80 hover:opacity-100"
            >
              {(() => {
                const nextProject =
                  projects[(currentIndex + 1) % projects.length];
                return (
                  <>
                    {renderRibbonBadges(nextProject)}

                    <div>
                      <div className="mb-4 pr-36 sm:pr-44 flex flex-col gap-1 font-mono text-xs tracking-wider">
                        <span className="text-[#edf0f8] font-medium">
                          {nextProject.id} / {nextProject.category}
                        </span>
                        <span className="text-[#718096]">
                          {nextProject.year}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-medium text-[#f1f5f9] mb-3">
                        {nextProject.title}
                      </h3>

                      <p className="text-xs sm:text-[14px] leading-relaxed text-[#94a3b8] mb-6 font-normal line-clamp-3">
                        {nextProject.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {nextProject.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded border border-[#1e293b] bg-[#0c1322]/80 px-2.5 py-1 font-mono text-xs text-[#a0aec0]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-[#1b202a]">
                        <button
                          onClick={() => setSelectedProject(nextProject)}
                          className="inline-flex items-center gap-2 rounded border border-[#1e293b] bg-[#0c1322] px-3.5 py-2 font-mono text-xs font-medium text-[#edf0f8] transition-all hover:border-[#38bdf8]/50 hover:bg-[#111827] hover:text-[#38bdf8] cursor-pointer"
                        >
                          <span>View Details</span>
                          <span className="text-xs">→</span>
                        </button>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 pt-5 border-t border-[#1b202a] flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between font-mono text-xs">
          <div className="flex items-center gap-4 w-full lg:w-auto lg:flex-1 lg:max-w-xs">
            <span className="text-[#edf0f8]">{currentProject.id}</span>

            <div className="relative flex-1 h-px bg-[#1e293b]">
              <div
                className="absolute top-0 left-0 h-full bg-[#38bdf8] transition-all duration-300"
                style={{
                  width: `${((currentIndex + 1) / projects.length) * 100}%`,
                }}
              />
            </div>

            <span className="text-[#718096]">
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>

          <div className="w-full min-w-0 lg:w-auto lg:max-w-[70%]">
            <div
              className="
                grid grid-cols-2 sm:grid-cols-4 lg:flex
                lg:flex-wrap lg:justify-end
                gap-x-4 gap-y-3 lg:gap-x-5
            "
            >
              {projects.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setCurrentIndex(idx)}
                  aria-current={currentIndex === idx ? "true" : undefined}
                  className={`
                        min-w-0 text-left lg:text-right
                        text-[12px] sm:text-xs
                        transition-colors duration-200
                        cursor-pointer
                        wrap-break-word
                        ${
                          currentIndex === idx
                            ? "text-[#38bdf8] font-bold"
                            : "text-[#718096] hover:text-[#edf0f8]"
                        }
                    `}
                >
                  <span className="mr-1">{p.id}</span>
                  <span>{p.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 pt-24 sm:pt-28 pb-10 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-[#070a12]/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 w-full max-w-2xl max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl border border-[#1e293b] bg-[#080d1a] p-6 sm:p-8 shadow-2xl"
            >
              <div className="flex items-start justify-between border-b border-[#1b202a] pb-4 mb-6">
                <div>
                  <div className="font-mono text-xs text-[#38bdf8] mb-1">
                    {selectedProject.id} / {selectedProject.category}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-medium text-[#f1f5f9]">
                    {selectedProject.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-lg border border-[#1e293b] bg-[#0c1322] p-2 text-[#a0aec0] hover:text-white hover:border-[#38bdf8]/40 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <CloseIcon />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 font-mono text-xs">
                <div className="bg-[#0c1322] border border-[#1e293b] p-3 rounded-lg">
                  <span className="text-[#718096] block text-[10px] uppercase mb-0.5">
                    PERIOD
                  </span>
                  <span className="text-[#edf0f8] font-medium">
                    {selectedProject.year}
                  </span>
                </div>
                <div className="bg-[#0c1322] border border-[#1e293b] p-3 rounded-lg">
                  <span className="text-[#718096] block text-[10px] uppercase mb-0.5">
                    TYPE
                  </span>
                  <span className="text-[#edf0f8] font-medium">
                    {selectedProject.type}
                  </span>
                </div>
                <div className="bg-[#0c1322] border border-[#1e293b] p-3 rounded-lg">
                  <span className="text-[#718096] block text-[10px] uppercase mb-0.5">
                    TEAM SIZE
                  </span>
                  <span className="text-[#edf0f8] font-medium">
                    {selectedProject.teamSize}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-mono text-[11px] text-[#718096] uppercase tracking-wider mb-2">
                  OVERVIEW
                </h4>
                <p className="text-sm text-[#94a3b8] leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-mono text-[11px] text-[#718096] uppercase tracking-wider mb-2">
                  MY CONTRIBUTION
                </h4>
                <p className="text-sm text-[#94a3b8] leading-relaxed">
                  {selectedProject.contribution}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-mono text-[11px] text-[#718096] uppercase tracking-wider mb-2">
                  TECHNOLOGIES BUILT WITH
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded border border-[#1e293b] bg-[#0c1322] px-3 py-1 font-mono text-xs text-[#a0aec0]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.keyFeatures && (
                <div className="mb-6">
                  <h4 className="font-mono text-[11px] text-[#718096] uppercase tracking-wider mb-2">
                    KEY FEATURES
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#94a3b8]">
                    {selectedProject.keyFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#38bdf8] font-mono mt-0.5">
                          •
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.approach && (
                <div className="mb-6">
                  <h4 className="font-mono text-[11px] text-[#718096] uppercase tracking-wider mb-2">
                    ENGINEERING APPROACH
                  </h4>
                  <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                    {selectedProject.approach}
                  </p>
                </div>
              )}

              <div className="pt-4 border-t border-[#1b202a] flex flex-wrap gap-3 font-mono text-xs">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#38bdf8] px-4 py-2 font-medium text-[#070a12] transition-colors hover:bg-[#0ea5e9]"
                  >
                    <GlobeIcon />
                    <span>Live Preview</span>
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#1e293b] bg-[#0c1322] px-4 py-2 text-[#edf0f8] transition-colors hover:border-[#38bdf8]/40"
                  >
                    <GithubIcon />
                    <span>Source Code</span>
                  </a>
                )}
                {selectedProject.paperUrl && (
                  <a
                    href={selectedProject.paperUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#1e293b] bg-[#0c1322] px-4 py-2 text-[#edf0f8] transition-colors hover:border-[#38bdf8]/40 hover:text-[#38bdf8]"
                  >
                    <PdfIcon />
                    <span>Paper</span>
                  </a>
                )}
                {selectedProject.presentationUrl && (
                  <a
                    href={selectedProject.presentationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#1e293b] bg-[#0c1322] px-4 py-2 text-[#edf0f8] transition-colors hover:border-[#38bdf8]/40 hover:text-[#38bdf8]"
                  >
                    <PresentationIcon />
                    <span>Slides PDF</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

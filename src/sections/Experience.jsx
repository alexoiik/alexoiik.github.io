import { useRef } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";

const ExperienceItem = ({ item }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, {
    margin: "0px 0px -55% 0px",
  });

  return (
    <div ref={itemRef} className="relative pl-6 sm:pl-10 group">
      <motion.div
        className={`absolute -left-1 top-1.5 z-10 h-2.5 w-2.5 rounded-full border-2 transition-all duration-300 ${
          isInView || item.isCurrent
            ? "border-[#38bdf8] bg-[#38bdf8]"
            : "border-[#334155] bg-[#070a12]"
        }`}
        style={{
          boxShadow:
            isInView || item.isCurrent
              ? "0 0 8px rgba(56,189,248,0.5)"
              : "none",
        }}
      />

      <div className="absolute -left-32 sm:-left-36 top-0 hidden sm:flex flex-col text-right w-30">
        <span className="text-xl font-medium text-[#f1f5f9] tracking-tight">
          {item.period}
        </span>
        <span className="font-mono text-[10px] tracking-wider text-[#718096] mt-0.5">
          {item.dateRange}
        </span>
      </div>

      <div className="sm:hidden mb-2">
        <span className="text-lg font-medium text-[#f1f5f9] mr-2">
          {item.period}
        </span>
        <span className="font-mono text-[10px] tracking-wider text-[#718096]">
          {item.dateRange}
        </span>
      </div>

      <div className="flex flex-col items-start">
        <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
          <h3 className="text-lg sm:text-xl font-medium text-[#f1f5f9]">
            {item.role}
          </h3>

          {item.isCurrent && (
            <span className="self-start sm:self-auto rounded border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-2 py-0.5 font-mono text-[10px] tracking-wider text-[#38bdf8]">
              CURRENT
            </span>
          )}
        </div>

        <div className="font-mono text-xs text-[#94a3b8] mb-3">
          <span className="text-[#edf0f8] font-medium">{item.company}</span>
          <span className="text-[#475569] mx-2">·</span>
          <span>{item.details}</span>
        </div>

        <p className="text-xs sm:text-[15px] leading-relaxed text-[#94a3b8] font-normal mb-3">
          {item.description}
        </p>

        <div className="flex flex-col gap-2 mb-4">
          {item.achievements.map((achievement, achIndex) => (
            <div
              key={achIndex}
              className="flex items-start gap-2 text-xs sm:text-[14px] text-[#cbd5e1]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 mt-0.5 shrink-0 text-[#38bdf8]"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>

              <span>{achievement}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {item.tools.map((tool) => (
            <span
              key={tool}
              className="rounded border border-[#1e293b] bg-[#0c1322] px-2.5 py-1 font-mono text-xs text-[#a0aec0] transition-colors hover:border-[#38bdf8]/40 hover:text-[#edf0f8]"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      period: "2025 - 2026",
      dateRange: "Dec 2025 – Aug 2026",
      isCurrent: false,
      role: "Full-Stack Developer (IoT Developer)",
      company: "Teleglobal Telecommunications LP",
      details: "Ioannina, Epirus, Greece · Hybrid · Full-time",
      description:
        "Contributed to the Teleglobal IoT application by implementing major features and enhancing core product functionalities.",
      achievements: [
        "Implemented responsive full-stack IoT dashboards using React, TypeScript, TailwindCSS, and Shadcn UI, visualizing live data through custom interactive charts and interactive Mapbox geospatial mapping",
        "Created real-time backend data flows in Python and Django, using Redis, Celery, and WebSockets to stream low-latency IoT device telemetry to thousands of concurrent connections.",
        "Integrated enterprise Wi-Fi APIs (Ruijie/Aruba) alongside FCM-powered real-time notifications, SMS, and email alerts for instantaneous system event reporting.",
        "Collaborated using Agile/Scrum methodologies in Jira for sprint management (To-Do/Review/Done) and Notion for project timelines, task prioritization, and technical documentation.",
      ],
      tools: ["React", "TypeScript", "TailwindCSS", "Django"],
    },
    {
      period: "2024 - 2025",
      dateRange: "Apr 2024 – Jan 2025",
      isCurrent: false,
      role: "Frontend Developer (React Developer)",
      company: "ARX.NET",
      details: "Thessaloniki, Central Macedonia, Greece · Hybrid · Full-time",
      description:
        "Developed and maintained core features for Cyta's Content Management System (CMS), delivering scalable admin interfaces for telecommunications management.",
      achievements: [
        "Built responsive web interfaces using React, JavaScript, and Tailwind CSS, leveraging PrimeReact for advanced UI components.",
        "Consumed Swagger-documented REST APIs to handle data fetching, UI state management, and user submission flows.",
        "Implemented complex data management features, including multi-level nested tables, dynamic popups, custom forms, and navigation bars.",
        "Optimized UI performance and component reusability across key CMS modules to improve daily content workflows.",
      ],
      tools: ["React", "JavaScript", "TailwindCSS"],
    },
  ];

  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 60%", "end 60%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="relative z-10 w-full py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-wider text-[#38bdf8]">
            <span>02</span>
            <span className="h-px w-6 bg-[#38bdf8]/40" />
            <span className="text-[#a0aec0]">EXPERIENCE</span>
          </div>

          <div className="mt-2 sm:mt-0 font-mono text-[10px] tracking-wider text-[#718096]">
            THE JOURNEY SO FAR / 2024 – NOW
          </div>
        </div>

        <div ref={timelineRef} className="relative ml-4 sm:ml-32 space-y-12">
          <div className="absolute left-0 top-1.5 bottom-0 w-px bg-[#1e293b]" />

          <motion.div
            className="absolute left-0 top-1.5 bottom-0 z-0 w-0.5 origin-top bg-linear-to-b from-[#38bdf8] via-[#0ea5e9] to-[#38bdf8] shadow-[0_0_10px_#38bdf8,0_0_20px_#0ea5e9]"
            style={{
              scaleY: smoothProgress,
            }}
          />

          {experiences.map((item, index) => (
            <ExperienceItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

import { useState } from "react";

const ArrowDown = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-3 w-3 shrink-0"
  >
    <path d="M12 5v14m-7-7 7 7 7-7" />
  </svg>
);

const ArrowUpRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-3 w-3 shrink-0"
  >
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);

const MapPin = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-3 w-3 shrink-0"
  >
    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const FullHumanoidCodingBot = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center w-full bg-transparent overflow-visible select-none py-2 lg:py-4">
      <div className="relative z-10 w-85 sm:w-120 lg:w-140 h-80 sm:h-107.5 lg:h-127.5 flex items-center justify-center">
        <div className="absolute top-12 sm:top-20 lg:top-25 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 rounded-full border border-[#2a3852] bg-[#070d1a] px-3 py-1 font-mono text-[10px] text-[#edf0f8] shadow-2xl pointer-events-none whitespace-nowrap transition-all duration-300">
          <span
            className={`h-2 w-2 shrink-0 rounded-full ${isHovered ? "bg-[#00ff88] animate-ping" : "bg-[#38bdf8]"}`}
          />
          <span className="relative top-[0.5px] leading-none font-medium">
            {isHovered ? "git push origin main" : "nothing to commit, clean"}
          </span>
        </div>

        <svg
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] overflow-visible"
        >
          <defs>
            <linearGradient id="gitArmor" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#25334d" />
              <stop offset="50%" stopColor="#101826" />
              <stop offset="100%" stopColor="#070b14" />
            </linearGradient>

            <linearGradient id="gitVisor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0b1b2d" />
              <stop offset="100%" stopColor="#02060d" />
            </linearGradient>

            <linearGradient id="chairSeat" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e2a3a" />
              <stop offset="100%" stopColor="#0a101d" />
            </linearGradient>

            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <g
            className="cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.02] animate-[botFloat_5s_easeInOut_infinite]"
            style={{ transformOrigin: "250px 280px" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <ellipse
              cx="250"
              cy="450"
              rx="180"
              ry="20"
              fill="#040812"
              opacity="0.8"
            />
            <ellipse
              cx="250"
              cy="450"
              rx="150"
              ry="15"
              fill={isHovered ? "#174d6e" : "#113a54"}
              opacity={isHovered ? "0.9" : "0.75"}
              className="transition-colors duration-300"
            />
            <ellipse
              cx="250"
              cy="450"
              rx="140"
              ry="13"
              fill={isHovered ? "#00f2fe" : "none"}
              stroke="#38bdf8"
              strokeWidth={isHovered ? "1.5" : "1"}
              opacity={isHovered ? "0.3" : "0.5"}
              className="transition-all duration-300"
            />

            <g id="ErgonomicChair">
              <path
                d="M 250 435 L 210 445 M 250 435 L 290 445 M 250 435 L 250 448 M 250 435 L 225 425 M 250 435 L 275 425"
                stroke="#1e293b"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <circle
                cx="210"
                cy="445"
                r="3"
                fill="#0f172a"
                stroke="#334155"
                strokeWidth="1"
              />
              <circle
                cx="290"
                cy="445"
                r="3"
                fill="#0f172a"
                stroke="#334155"
                strokeWidth="1"
              />
              <circle
                cx="250"
                cy="448"
                r="3"
                fill="#0f172a"
                stroke="#334155"
                strokeWidth="1"
              />
              <rect
                x="245"
                y="375"
                width="10"
                height="65"
                rx="2"
                fill="#0f172a"
                stroke="#334155"
                strokeWidth="1.5"
              />
              <rect
                x="248"
                y="385"
                width="4"
                height="40"
                fill="#38bdf8"
                opacity="0.4"
              />
              <ellipse
                cx="250"
                cy="370"
                rx="38"
                ry="12"
                fill="url(#chairSeat)"
                stroke="#38bdf8"
                strokeWidth="1.5"
              />
              <ellipse
                cx="250"
                cy="372"
                rx="38"
                ry="6"
                fill="#060c18"
                opacity="0.4"
              />
            </g>

            <g id="RobotLegs">
              <path
                d="M 235 365 L 215 410 L 215 442"
                fill="none"
                stroke="url(#gitArmor)"
                strokeWidth="13"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 200 442 L 230 442 L 235 448 L 195 448 Z"
                fill="#0f172a"
                stroke="#334155"
                strokeWidth="1.5"
              />
              <line
                x1="200"
                y1="446"
                x2="230"
                y2="446"
                stroke="#38bdf8"
                strokeWidth="1.5"
              />

              <path
                d="M 265 365 L 285 410 L 285 442"
                fill="none"
                stroke="url(#gitArmor)"
                strokeWidth="13"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 270 442 L 300 442 L 305 448 L 265 448 Z"
                fill="#0f172a"
                stroke="#334155"
                strokeWidth="1.5"
              />
              <line
                x1="270"
                y1="446"
                x2="300"
                y2="446"
                stroke="#38bdf8"
                strokeWidth="1.5"
              />
            </g>

            <g id="RobotBackBody">
              <path
                d="M 205 280 L 295 280 L 310 355 L 190 355 Z"
                fill="url(#gitArmor)"
                stroke="#334155"
                strokeWidth="2.5"
              />
              <circle
                cx="250"
                cy="315"
                r="10"
                fill="#060b14"
                stroke="#334155"
                strokeWidth="2"
              />
              <circle
                cx="250"
                cy="315"
                r="5"
                fill={isHovered ? "#00ff88" : "#38bdf8"}
                filter={isHovered ? "url(#neonGlow)" : undefined}
                className="transition-colors duration-300"
              />

              <rect
                x="238"
                y="250"
                width="24"
                height="32"
                rx="4"
                fill="#101826"
                stroke="#334155"
                strokeWidth="2"
              />

              <path
                d="M 205 174 C 205 149 295 149 295 174 L 300 234 C 300 259 200 259 200 234 Z"
                fill="url(#gitArmor)"
                stroke="#334155"
                strokeWidth="2.5"
              />

              <path
                d="M 212 176 L 198 152 L 216 166 Z"
                fill="url(#gitArmor)"
                stroke="#334155"
                strokeWidth="2"
              />
              <path
                d="M 288 176 L 302 152 L 284 166 Z"
                fill="url(#gitArmor)"
                stroke="#334155"
                strokeWidth="2"
              />

              <path
                d="M 215 182 C 215 176 285 176 285 182 L 288 224 C 288 230 212 230 212 224 Z"
                fill="url(#gitVisor)"
                stroke="#1e293b"
                strokeWidth="2"
              />

              <g
                className={`transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}
              >
                <circle cx="233" cy="203" r="6" fill="#38bdf8" />
                <circle cx="231" cy="201" r="2" fill="#ffffff" />
                <circle cx="267" cy="203" r="6" fill="#38bdf8" />
                <circle cx="265" cy="201" r="2" fill="#ffffff" />
              </g>

              <g
                className={`transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
              >
                <text
                  x="223"
                  y="207"
                  fill="#00ff88"
                  fontSize="11"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  ^ _ ^
                </text>
              </g>
            </g>

            <g id="Desk">
              <polygon
                points="90,350 410,350 380,380 120,380"
                fill="#0c1322"
                stroke="#1d2a40"
                strokeWidth="1.5"
              />
              <line
                x1="90"
                y1="350"
                x2="410"
                y2="350"
                stroke="#38bdf8"
                strokeWidth="1.5"
                opacity="0.5"
              />
            </g>

            <g id="SmallLaptopLid">
              <polygon
                points="215,332 285,332 292,348 208,348"
                fill="url(#gitArmor)"
                stroke="#334155"
                strokeWidth="1.5"
              />
              <polygon
                points="212,290 288,290 293,340 207,340"
                fill="url(#gitArmor)"
                stroke="#334155"
                strokeWidth="2"
              />
              <circle
                cx="250"
                cy="315"
                r="6"
                fill={isHovered ? "#00ff88" : "#38bdf8"}
                opacity="0.8"
                filter={isHovered ? "url(#neonGlow)" : undefined}
                className="transition-all duration-300"
              />
            </g>

            <g id="FrontFacingArms">
              <g
                className={`origin-[202px_285px] transition-transform duration-100 ${
                  isHovered
                    ? "animate-[typingLeft_0.1s_ease-in-out_infinite_alternate]"
                    : ""
                }`}
              >
                <path
                  d="M 202 285 L 186 322 L 200 342"
                  fill="none"
                  stroke="url(#gitArmor)"
                  strokeWidth="13"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="186" cy="322" r="6" fill="#334155" />
                <circle cx="202" cy="342" r="3.5" fill="#38bdf8" />
              </g>

              <g
                className={`origin-[298px_285px] transition-transform duration-100 ${
                  isHovered
                    ? "animate-[typingRight_0.1s_ease-in-out_infinite_alternate]"
                    : ""
                }`}
              >
                <path
                  d="M 298 285 L 314 322 L 300 342"
                  fill="none"
                  stroke="url(#gitArmor)"
                  strokeWidth="13"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="314" cy="322" r="6" fill="#334155" />
                <circle cx="298" cy="342" r="3.5" fill="#38bdf8" />
              </g>
            </g>
          </g>
        </svg>
      </div>

      <style>{`
        @keyframes botFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes typingLeft {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-4px) rotate(-3deg); }
        }
        @keyframes typingRight {
          0% { transform: translateY(-4px) rotate(0deg); }
          100% { transform: translateY(0px) rotate(3deg); }
        }
      `}</style>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-66px)] w-full overflow-x-hidden bg-transparent text-[#edf0f8] font-sans antialiased selection:bg-[#38bdf8]/30 selection:text-[#00f2fe] flex flex-col justify-between relative">
      <main
        id="home"
        className="mx-auto flex flex-1 w-full max-w-6xl flex-col justify-between px-4 sm:px-8 lg:px-10 py-6 lg:py-8"
      >
        <section className="my-auto flex flex-col lg:flex-row items-center justify-center w-full">
          <div className="flex flex-col items-start w-full lg:w-auto lg:max-w-lg text-left">
            <div className="mb-3 inline-flex items-center gap-2 font-mono text-[10px] tracking-wider text-[#38bdf8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8]" />
              AVAILABLE FOR NEW OPPORTUNITIES
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#f1f5f9] leading-[1.1]">
              Alexandros Oikonomou
            </h1>

            <p className="mt-3 font-mono text-xs sm:text-[14px] tracking-wide text-[#a0aec0]">
              Software engineer <span className="mx-1.5 text-[#4a5568]">|</span>{" "}
              Developer
            </p>

            <p className="mt-3 max-w-md text-xs sm:text-[15px] leading-relaxed text-[#94a3b8] font-normal">
              Turning ideas into practical applications. Building seamless user
              experiences and high-performance backend systems with a relentless
              focus on quality.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded bg-[#38bdf8] px-4 py-2.5 text-xs font-medium text-[#06080d] transition-all duration-200 hover:bg-[#0ea5e9]"
              >
                <span>Explore my work</span>
                <ArrowDown />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded border border-[#1e293b] bg-transparent px-4 py-2.5 text-xs font-medium text-[#edf0f8] transition-all duration-200 hover:border-[#334155] hover:bg-[#0f172a]"
              >
                <span>Let's talk</span>
                <ArrowUpRight />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center w-full lg:w-auto">
            <FullHumanoidCodingBot />
          </div>
        </section>

        <footer className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#1b202a] pt-3 font-mono text-[10px] text-[#718096] text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-1.5">
            <MapPin />
            <span>Greece · Building Everywhere</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5">
            <span>React</span>
            <span className="text-[#2d3748]">/</span>
            <span>JavaScript</span>
            <span className="text-[#2d3748]">/</span>
            <span>TypeScript</span>
            <span className="text-[#2d3748]">/</span>
            <span>Node.js</span>
            <span className="text-[#2d3748]">/</span>
            <span>Django</span>
          </div>

          <div className="hidden sm:block">
            <ArrowDown />
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Hero;

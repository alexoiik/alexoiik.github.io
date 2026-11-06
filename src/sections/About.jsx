const DownloadIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-3 w-3 shrink-0 ml-2 inline-block transition-transform duration-200 group-hover:translate-y-0.5"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const EducationIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#38bdf8"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 mt-0.5 shrink-0"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#38bdf8"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 mt-0.5 shrink-0"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const About = () => {
  const tools = [
    "React",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "HTML5 / CSS3",
    "Node.js",
    "Django",
    "Python",
    "SQL / PostgreSQL",
    "Notion",
    "Figma",
    "Jira",
    "Git",
  ];

  return (
    <section id="about" className="relative z-10 w-full py-12 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-10">
        <div className="mb-6 inline-flex items-center gap-2 font-mono text-[10px] tracking-wider text-[#38bdf8]">
          <span>01</span>
          <span className="h-px w-6 bg-[#38bdf8]/40" />
          <span className="text-[#a0aec0]">ABOUT</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#f1f5f9] leading-[1.1]">
              An engineer’s mind. <br />
              <span>A maker’s instinct.</span>
            </h2>

            <p className="mt-4 max-w-md text-xs sm:text-[15px] leading-relaxed text-[#94a3b8] font-normal">
              I'm Alex, a software engineer who enjoys the space between a good
              idea and a great product. I work across the stack, connecting
              intuitive experiences with the systems that make them dependable.
            </p>

            <div className="mt-6">
              <a
                href="/Alexandros-Oikonomou-CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center rounded border border-[#1e293b] bg-transparent px-4 py-2.5 text-xs font-medium text-[#edf0f8] transition-all duration-200 hover:border-[#334155] hover:bg-[#0f172a]"
              >
                <span>Resume [PDF]</span>
                <DownloadIcon />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div className="space-y-4 text-xs sm:text-[15px] leading-relaxed text-[#94a3b8] font-normal">
              <p>
                Over the past year and a half, I’ve helped teams ship ambitious
                web products, from responsive frontends to scalable backend
                systems. I care about accessible interfaces, clean boundaries,
                and writing code that the next engineer can easily understand.
              </p>
              <p>
                My best work starts with asking better questions. I like to
                prototype early, measure what matters, and leave things simpler
                than I found them. Away from the keyboard, you'll find me
                traveling, playing basketball, hitting the gym or CrossFit, and
                often making music.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1b202a]">
              <h3 className="font-mono text-[10px] tracking-wider text-[#718096] uppercase mb-3">
                TOOLS I REACH FOR
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded border border-[#1e293b] bg-[#0c1322] px-3 py-1 font-mono text-xs text-[#a0aec0] transition-colors hover:border-[#38bdf8]/40 hover:text-[#edf0f8]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1b202a] grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start gap-3">
            <EducationIcon />
            <div>
              <div className="font-mono text-[10px] tracking-wider text-[#718096] uppercase mb-1">
                EDUCATION / 2019 – 2025
              </div>
              <h4 className="text-sm sm:text-base font-medium text-[#f1f5f9]">
                Integrated Master, Information and Electronic Engineering
              </h4>
              <p className="text-xs text-[#a0aec0] mt-0.5">
                International Hellenic University
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckIcon />
            <div>
              <div className="font-mono text-[10px] tracking-wider text-[#718096] uppercase mb-1">
                CERTIFICATIONS
              </div>
              <h4 className="text-sm sm:text-base font-medium text-[#f1f5f9]">
                5th International Conference on Novel & Intelligent Digital
                Systems (NiDS2025)
              </h4>
              <p className="text-xs text-[#a0aec0] mt-0.5 font-mono">
                2025 · University of West Attica
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

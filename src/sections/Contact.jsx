const ArrowUpRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
  >
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const GitHubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-3.5 w-3.5"
  >
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-7 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 18.13V22" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-3.5 w-3.5"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 11v5" />
    <path d="M8 8v.01" />
    <path d="M12 16v-5" />
    <path d="M16 16v-3a2 2 0 0 0-4 0" />
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="relative z-10 w-full py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-10">
        <div className="mb-8 inline-flex items-center gap-2 font-mono text-[10px] tracking-wider text-[#38bdf8]">
          <span>04</span>
          <span className="h-px w-6 bg-[#38bdf8]/40" />
          <span className="text-[#a0aec0]">CONTACT</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#f1f5f9] leading-[1.1]">
              Good things start
              <br />
              <span className="text-[#3b82f6]">with a conversation.</span>
            </h2>

            <p className="mt-4 max-w-md text-xs sm:text-[15px] leading-relaxed text-[#94a3b8] font-normal">
              Have an interesting challenge, a role worth talking about, or just
              a good question? I'd love to hear from you.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start lg:pb-1">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-wider text-[#a0aec0] mb-3">
              <span className="h-1 w-1 rounded-full bg-[#3b82f6]" />
              <span>LET'S BUILD SOMETHING GOOD</span>
            </div>

            <p className="max-w-sm text-xs sm:text-[14px] leading-relaxed text-[#94a3b8]">
              Available for full-time opportunities and meaningful
              collaborations. Remote · Hybrid · On-site.
            </p>

            <span className="mt-4 font-mono text-[10px] tracking-wider text-[#64748b]">
              USUALLY REPLIES WITHIN 48 HOURS
            </span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#1b202a] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <a
            href="mailto:alexoik2001@gmail.com"
            className="group inline-flex items-center gap-3 text-xl sm:text-2xl font-medium tracking-tight text-[#f1f5f9] transition-colors duration-200 hover:text-[#3b82f6]"
          >
            <span className="break-all">alexoik2001@gmail.com</span>

            <span className="shrink-0 text-[#3b82f6]">
              <ArrowUpRight />
            </span>
          </a>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/alexoiik"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="group inline-flex items-center gap-2 text-xs text-[#94a3b8] transition-colors hover:text-[#f1f5f9]"
            >
              <GitHubIcon />
              <span>GitHub</span>
              <span className="text-[#64748b] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/alexandros-oikonomou-553251244/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="group inline-flex items-center gap-2 text-xs text-[#94a3b8] transition-colors hover:text-[#f1f5f9]"
            >
              <LinkedInIcon />
              <span>LinkedIn</span>
              <span className="text-[#64748b] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

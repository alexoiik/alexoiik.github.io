const Footer = () => {
  const scrollToHome = (e) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    window.history.pushState(null, "", "#home");
  };

  return (
    <footer className="relative z-20 w-full border-t border-[#1b202a]">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-10 py-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <a
              href="#home"
              onClick={scrollToHome}
              aria-label="Back to home"
              className="shrink-0 text-base sm:text-lg font-semibold tracking-tight text-[#f1f5f9] hover:text-[#3b82f6] transition-colors"
            >
              alexoiik<span className="text-[#3b82f6]">.</span>
            </a>

            <span className="font-mono text-[11px] tracking-wider text-[#64748b] whitespace-nowrap">
              © 2026 Alexandros Oikonomou
            </span>
          </div>

          <a
            href="#home"
            onClick={scrollToHome}
            className="group inline-flex shrink-0 mt-0.5 items-center gap-1.5 sm:gap-2 font-mono text-[9px] sm:text-[10px] tracking-wider text-[#94a3b8] transition-colors hover:text-[#3b82f6]"
          >
            <span>BACK TO TOP</span>

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3 w-3 text-[#3b82f6] transition-transform duration-200 group-hover:-translate-y-1"
            >
              <path d="M12 19V5" />
              <path d="m5 12 7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

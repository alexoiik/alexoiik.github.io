function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-[#080b12]">
      <div className="mx-auto flex max-w-280 flex-col items-center justify-between gap-4 px-6 py-8 font-mono text-xs text-slate-500 sm:flex-row">
        {/* Left Side: Copyright */}
        <p>© {currentYear} Alexandros Oikonomou. Built with precision.</p>

        {/* Right Side Options */}
        <div className="flex items-center gap-4">
          <span>Ioannina, Thessaloniki GR</span>
          <span>•</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="cursor-pointer transition-colors hover:text-slate-300"
          >
            ↑ Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

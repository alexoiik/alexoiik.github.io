import { useState } from "react";

const GithubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 sm:w-4.5 sm:h-4.5"
  >
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-7 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 18.13V22" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 sm:w-4.5 sm:h-4.5"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GmailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 sm:w-4.5 sm:h-4.5"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const MenuIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "About", href: "about" },
    { label: "Experience", href: "experience" },
    { label: "Projects", href: "projects" },
    { label: "Contact", href: "contact" },
  ];

  const handleScrollToSection = (e, id) => {
    e.preventDefault();
    setIsOpen(false);

    const element = document.getElementById(id);
    if (element) {
      const navHeight = 30;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      window.history.pushState(null, "", `#${id}`);
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    window.history.pushState(null, "", "#home");
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 h-16.5 w-full border-b border-[#1b202a] bg-[#080b11]/95 backdrop-blur supports-backdrop-filter:bg-[#080b11]/80">
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 sm:px-8 md:px-12 lg:px-16">
        <a
          href="#home"
          onClick={scrollToTop}
          className="text-2xl font-normal tracking-tight text-[#edf0f8]"
        >
          alexoiik<span className="ml-1 font-bold text-[#38bdf8]">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-[14px] text-[#929aaa]">
          {links.map((link) => (
            <a
              key={link.label}
              href={`#${link.href}`}
              onClick={(e) => handleScrollToSection(e, link.href)}
              className="transition-colors duration-200 hover:text-white font-medium cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-5 text-[#b5bdca]">
          <a
            href="https://github.com/alexoiik"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-white"
          >
            <GithubIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/alexandros-oikonomou-553251244/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-white"
          >
            <LinkedinIcon />
          </a>

          <span className="h-4 w-px bg-[#29303b]" />

          <a
            href="mailto:alexoik2001@gmail.com"
            aria-label="Gmail"
            className="transition-colors hover:text-white"
          >
            <GmailIcon />
          </a>
        </div>

        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="text-[#edf0f8] hover:text-[#38bdf8] transition-colors p-1"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="absolute top-16.5 left-0 w-full bg-[#080b11] border-b border-[#1b202a] px-6 py-6 shadow-2xl md:hidden transition-all animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-4 text-base">
            {links.map((link) => (
              <a
                key={link.label}
                href={`#${link.href}`}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className="text-[#929aaa] hover:text-white font-medium transition-colors py-1 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-[#1b202a] flex items-center justify-between text-[#b5bdca]">
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/alexoiik"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="hover:text-white transition-colors"
              >
                <GithubIcon />
              </a>

              <a
                href="https://www.linkedin.com/in/alexandros-oikonomou-553251244/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-white transition-colors"
              >
                <LinkedinIcon />
              </a>

              <a
                href="mailto:alexoik2001@gmail.com"
                aria-label="Gmail"
                className="hover:text-white transition-colors"
              >
                <GmailIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

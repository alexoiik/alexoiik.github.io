import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#080b12]/95 backdrop-blur-md">
      <nav className="mx-auto max-w-280 px-6">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={closeMenu}
            className="font-mono text-sm font-semibold tracking-tight text-white"
          >
            {"{ alexoiik }"}
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-slate-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Resume */}
          <a
            href="/Alexandros-Oikonomou-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md bg-[#6366f1] px-3.5 py-2 text-xs font-medium text-white transition-colors hover:bg-[#5558e8] md:block"
          >
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-white/5 hover:text-white md:hidden"
          >
            {isMenuOpen ? (
              // X icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-white/5 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Resume */}
              <a
                href="/Alexandros-Oikonomou-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-2 rounded-md bg-[#6366f1] px-3 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-[#5558e8]"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;

function Contact() {
  return (
    <section id="contact" className="bg-[#080b12]">
      <div className="mx-auto max-w-280 px-6 py-20 text-center sm:py-23">
        {/* Section Tag */}
        <div className="mb-6 flex items-center justify-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#6366f1]" />

          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6366f1]">
            Get In Touch
          </span>
        </div>

        {/* Heading */}
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-slate-100 sm:text-5xl sm:leading-tight">
          Let's build something exceptional.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
          I'm always interested in working on challenging software projects,
          from high-performance systems to modern web applications. Whether
          you're reaching out for a professional opportunity or simply want to
          learn more about me, feel free to email me or connect with me on
          LinkedIn.
        </p>

        {/* Email */}
        <div className="mt-8">
          <a
            href="mailto:alexoik2001@gmail.com"
            className="font-mono text-base text-[#6366f1] transition-colors hover:text-[#818cf8] sm:text-lg"
          >
            alexoik2001@gmail.com
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="https://github.com/alexoiik"
            target="_blank"
            rel="noreferrer"
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-white/8 bg-[#0d1424] px-4 py-2 font-mono text-xs font-medium text-slate-300 transition-all duration-200 hover:border-white/20 hover:bg-[#10182a] hover:text-white"
          >
            <svg
              className="h-4 w-4 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/alexandros-oikonomou-553251244/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-white/8 bg-[#0d1424] px-4 py-2 font-mono text-xs font-medium text-slate-300 transition-all duration-200 hover:border-white/20 hover:bg-[#10182a] hover:text-white"
          >
            <svg
              className="h-4 w-4 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

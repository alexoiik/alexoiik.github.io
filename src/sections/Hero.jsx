function Hero() {
  return (
    <section id="about" className="border-b border-white/5 bg-[#080b12]">
      <div className="mx-auto grid min-h-[calc(100vh-48px)] max-w-280 items-center gap-14 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-20">
        {/* Left Content */}
        <div>
          {/* Availability */}
          <div className="mb-5 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6366f1]" />
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6366f1]">
              Available for new opportunities
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-[-0.035em] text-slate-100 sm:text-5xl lg:text-[46px] lg:leading-[1.05]">
            Alexandros Oikonomou
          </h1>

          {/* Role */}
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-slate-400 sm:text-[26px]">
            Software Engineer
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-125 text-[16px] leading-[1.55] text-slate-400">
            Passionate about building reliable, efficient, and user-focused
            software solutions. I enjoy solving problems, exploring new
            technologies, and continuously improving my skills while turning
            ideas into practical applications.
          </p>

          {/* CTA Buttons */}
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-md bg-[#6366f1] px-5 py-2.5 text-[12px] font-medium text-white transition-colors hover:bg-[#5558e8]"
            >
              Get in Touch
            </a>

            <a
              href="#projects"
              className="rounded-md border border-white/10 bg-transparent px-5 py-2.5 text-[12px] font-medium text-slate-300 transition-colors hover:border-white/20 hover:bg-white/5 hover:text-white"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Code Editor */}
        <div className="w-full overflow-hidden rounded-lg border border-white/10 bg-[#0d1424] shadow-2xl shadow-black/20">
          {/* Editor Header */}
          <div className="relative flex h-9 items-center border-b border-white/10 bg-[#0b1220] px-3">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
              <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
              <span className="h-2 w-2 rounded-full bg-[#28c840]" />
            </div>

            <span className="absolute left-1/2 -translate-x-1/2 font-mono text-[9px] font-medium text-slate-500">
              portfolio.jsx — Editor
            </span>
          </div>

          {/* Code */}
          <div className="p-4">
            <pre className="overflow-x-auto font-mono text-[10px] leading-[1.85] text-slate-500">
              <code>
                <span className="text-slate-400">const</span>{" "}
                <span className="text-slate-300">developer</span> = {"{"}
                {"\n"}
                {"  "}
                <span className="text-slate-300">name</span>:{" "}
                <span className="text-emerald-400">"Alexandros Oikonomou"</span>
                ,{"\n"}
                {"  "}
                <span className="text-slate-300">role</span>:{" "}
                <span className="text-emerald-400">"Software Engineer"</span>,
                {"\n"}
                {"  "}
                <span className="text-slate-300">education</span>:{" "}
                <span className="text-emerald-400">
                  "Integrated Master — IHU"
                </span>
                ,{"\n"}
                {"  "}
                <span className="text-slate-300">location</span>:{" "}
                <span className="text-emerald-400">"Ioannina, Greece"</span>,
                {"\n"}
                {"  "}
                <span className="text-slate-300">github</span>:{" "}
                <span className="text-emerald-400">"alexoiik"</span>
                {"\n"}
                {"};"}
                {"\n\n"}
                <span className="text-emerald-500">
                  // Building, learning &amp; improving every day.
                </span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

function About() {
  const technologies = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Django",
    "Git",
  ];

  return (
    <section id="about" className="border-b border-white/5 bg-[#080b12]">
      <div className="mx-auto grid max-w-280 gap-12 px-6 py-16 sm:py-18 lg:grid-cols-[1.45fr_0.75fr] lg:items-center lg:gap-16 lg:py-14.5">
        {/* Left Content */}
        <div>
          {/* Section Label */}
          <div className="mb-7 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6366f1]" />

            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6366f1]">
              About Me
            </span>
          </div>

          {/* Heading */}
          <h2 className="max-w-125 text-[30px] font-bold leading-[1.08] tracking-[-0.035em] text-slate-100 sm:text-[32px]">
            Building software with <br className="hidden sm:block" />
            purpose and precision.
          </h2>

          {/* First Paragraph */}
          <p className="mt-5 max-w-135 text-[15px] leading-[1.6] text-slate-400 sm:text-[16px]">
            I&apos;m a Software Engineer who enjoys turning ideas into reliable
            and practical software solutions. I focus on writing clean,
            maintainable code while paying attention to performance, usability
            and detail that make software work well.
          </p>

          {/* Second Paragraph */}
          <p className="mt-4 max-w-135 text-[15px] leading-[1.6] text-slate-400 sm:text-[16px]">
            I&apos;m always looking to learn, explore new technologies, and
            improve the way I build. From developing applications to solving
            challenging technical problems, I enjoy the process of turning ideas
            into solutions that are useful, efficient, and built to last.
          </p>

          {/* Technology Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-xs border border-[#4f46e5]/70 bg-[#11142b] px-2.5 py-1 font-mono text-[9px] leading-[1.3] text-[#818cf8]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <div className="mx-auto w-full max-w-70 lg:mx-0 lg:ml-auto">
          <div className="relative overflow-hidden rounded-[10px] border border-[#24365b] bg-[#0d1a2d]">
            {/* Blue glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(59,130,246,0.16),transparent_62%)]" />

            {/* Image */}
            <img
              src="/me.jpg"
              alt="Alexandros Oikonomou"
              className="relative block aspect-square w-full object-cover object-center"
            />

            {/* Subtle overlay */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#07101d]/35 via-transparent to-[#172b49]/10" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

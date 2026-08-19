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
            Hi, I'm Alexandros Oikonomou, <br className="hidden sm:block" />a
            Software Engineer & Developer
          </h2>

          {/* Introduction */}
          <p className="mt-5 max-w-135 text-[15px] leading-[1.6] text-slate-400 sm:text-[16px]">
            Based in Ioannina, Greece, I specialize in building software
            solutions across both back-end and front-end technologies. I’ve been
            coding since 2020 and have independently built around 20 projects,
            gaining hands-on experience with a variety of technologies,
            frameworks and development challenges.
          </p>

          {/* Key Skills & Focus */}
          <p className="mt-4 max-w-135 text-[15px] leading-[1.6] text-slate-400 sm:text-[16px]">
            My core focus is on front-end development, working primarily with
            React, TailwindCSS, JavaScript, and TypeScript. My main goal is to
            continuously refine my skills and stay up to date with modern
            technology advancements.
          </p>

          {/* Core Philosophy */}
          <p className="mt-4 max-w-135 text-[15px] leading-[1.6] text-slate-400 sm:text-[16px]">
            Overall, I enjoy turning ideas into reliable, practical software
            solutions. I focus on writing clean, maintainable code with strong
            attention to performance, usability, and detail.
          </p>

          {/* Interests & Personal Life */}
          <p className="mt-4 max-w-135 text-[15px] leading-[1.6] text-slate-400 italic sm:text-[16px]">
            Outside of coding, you'll often find me traveling, working out at
            the gym, running, or playing basketball to stay active and
            energized.
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

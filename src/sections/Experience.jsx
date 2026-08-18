import { experiences } from "../data/experience";

function Experience() {
  return (
    <section id="experience" className="border-b border-white/5 bg-[#080b12]">
      <div className="mx-auto max-w-280 px-6 py-16 sm:py-20">
        {/* Section Tag */}
        <div className="mb-12 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#6366f1]" />

          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6366f1]">
            Experience
          </span>
        </div>

        {/* Experience List Container */}
        <div className="relative">
          {/* Continuous Vertical Line (Desktop) */}
          <span className="absolute left-54.75 top-2 bottom-2 hidden w-px bg-[#6366f1]/25 md:block" />

          <div className="space-y-12 sm:space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="grid grid-cols-1 gap-4 md:grid-cols-[180px_32px_1fr] md:gap-6"
              >
                {/* Period */}
                <div className="pt-1">
                  <span className="font-mono text-xs font-semibold text-[#818cf8]">
                    {exp.period}
                  </span>
                </div>

                {/* Timeline Column (Node Circle) */}
                <div className="relative hidden justify-center md:flex">
                  <span className="relative z-10 mt-1 h-3.5 w-3.5 rounded-full border-2 border-[#6366f1] bg-[#080b12] shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                </div>

                {/* Details */}
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-slate-100 sm:text-2xl">
                    {exp.role}
                  </h3>

                  {/* Company & Metadata Badges */}
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                    <span className="text-sm font-medium text-slate-300">
                      {exp.company}
                    </span>

                    {exp.duration && (
                      <>
                        <span className="text-slate-600">•</span>
                        <span className="mt-[3.5px] font-mono text-slate-400">
                          {exp.duration}
                        </span>
                      </>
                    )}

                    {exp.location && (
                      <>
                        <span className="text-slate-600">•</span>
                        <span className="mt-[3.5px] font-mono text-slate-400">
                          {exp.location}
                        </span>
                      </>
                    )}
                  </div>

                  <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-400">
                    {exp.description}
                  </p>

                  {/* Highlights List */}
                  <ul className="mt-5 space-y-3">
                    {exp.highlights.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-start gap-3 text-[14px] leading-relaxed text-slate-300"
                      >
                        <span className="mt-1 font-mono text-xs text-[#6366f1]">
                          &#8594;
                        </span>

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

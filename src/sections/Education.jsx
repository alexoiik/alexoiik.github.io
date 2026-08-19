import { educationData } from "../data/education";

function Education() {
  return (
    <section id="education" className="border-b border-white/5 bg-[#080b12]">
      <div className="mx-auto max-w-280 px-6 py-16 sm:py-20">
        {/* Section Tag */}
        <div className="mb-8 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#6366f1]" />

          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6366f1]">
            Education
          </span>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {educationData.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <div
                key={index}
                className="relative flex flex-col justify-between rounded-xl border border-white/8 bg-[#0d121f] p-6 transition-colors hover:border-white/20"
              >
                {/* Header: Year & Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-[#6366f1]">
                    {item.year}
                  </span>

                  <IconComponent className="h-5 w-5 text-[#818cf8]" />
                </div>

                {/* Body: Institution & Degree */}
                <div className="mt-2">
                  <h3 className="text-[18px] font-bold tracking-tight text-slate-100 sm:text-[20px]">
                    {item.degree}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    {item.institution}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Education;

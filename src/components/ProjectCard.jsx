function ProjectCard({ project, onOpen }) {
  const links = project.details?.links;

  const linkItems = [
    { key: "github", label: "GitHub", href: links?.github },
    { key: "web", label: "Website", href: links?.web },
    { key: "paper", label: "Paper", href: links?.paper },
  ].filter(({ href }) => href && href !== "#");

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onOpen();
    }
  };

  return (
    <article
      className="group relative cursor-pointer overflow-hidden rounded-lg border border-white/8 bg-[#0d1424] text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:shadow-lg hover:shadow-black/20"
      onClick={onOpen}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
    >
      {/* Visual / top area */}
      <div className="relative h-24 border-b border-white/5 bg-[#0a1020]">
        {/* External links */}
        {linkItems.length > 0 && (
          <div className="absolute right-3 top-3 z-10 flex gap-1">
            {linkItems.map(({ key, label, href }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                aria-label={`${label} for ${project.title}`}
                className="rounded border border-white/10 bg-[#080b12]/80 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-slate-500 backdrop-blur-sm transition-colors hover:border-[#6366f1]/40 hover:text-[#a5b4fc]"
              >
                {label}
              </a>
            ))}
          </div>
        )}

        {/* Type */}
        <div className="absolute bottom-3 left-3">
          <span className="inline-flex rounded-full border border-[#6366f1]/30 bg-[#6366f1]/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#a5b4fc]">
            {project.details?.type}
          </span>
        </div>

        {/* Hover indicator */}
        <div className="absolute bottom-3 right-3 flex translate-y-1 items-center gap-1 rounded border border-white/10 bg-[#080b12]/80 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-slate-300 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          View Project
          <span className="text-[#818cf8]">→</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="line-clamp-1 text-[18px] font-medium tracking-tight text-slate-200">
          {project.title}
        </h3>

        <p className="mt-1.5 line-clamp-3 text-[13px] leading-normal text-slate-500">
          {project.description}
        </p>

        {/* Technologies */}
        {project.technologies?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-[3px] border border-[#4f46e5]/50 bg-[#11142b] px-1.5 py-0.5 font-mono text-[10px] leading-normal text-[#818cf8]"
              >
                {technology}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;

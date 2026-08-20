import { Globe, FileText, FileDown } from "lucide-react";

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-3 w-3"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 6.35c.97 0 1.94.13 2.85.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.08.78 2.18v3.23c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function ProjectCard({ project, onOpen }) {
  const links = project.details?.links;

  const linkItems = [
    {
      key: "github",
      label: "GitHub",
      href: links?.github,
      icon: <GithubIcon />,
    },
    {
      key: "web",
      label: "Web App",
      href: links?.web,
      icon: <Globe className="h-3 w-3" />,
    },
    {
      key: "paper",
      label: "Paper",
      href: links?.paper,
      icon: <FileText className="h-3 w-3" />,
    },
    {
      key: "pdf",
      label: "PDF Presentation",
      href: links?.pdf,
      icon: <FileDown className="h-3 w-3" />,
    },
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
            {linkItems.map(({ key, label, href, icon }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                aria-label={`${label} for ${project.title}`}
                className="inline-flex items-center gap-1.5 rounded border border-white/10 bg-[#080b12]/80 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-slate-500 backdrop-blur-sm transition-colors hover:border-[#6366f1]/40 hover:text-[#a5b4fc]"
              >
                {icon}
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

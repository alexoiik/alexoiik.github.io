import { useEffect, useRef } from "react";
import { Globe, FileText, FileDown } from "lucide-react";

function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    requestAnimationFrame(() => {
      modalRef.current?.focus();
    });

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [project, onClose]);

  if (!project) return null;

  const details = project.details;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="absolute inset-0 bg-[#03050a]/80 backdrop-blur-sm" />

      <div
        ref={modalRef}
        tabIndex="-1"
        className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0b101b] shadow-2xl shadow-black/60 outline-none"
      >
        {/* Header */}
        <div className="relative shrink-0 border-b border-white/5 bg-[#0d1424] px-5 py-5 sm:px-6">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="absolute right-4 top-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-[#080b12]/70 text-slate-400 transition-colors hover:border-white/20 hover:text-white"
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                d="M5 5l10 10M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <span className="inline-flex rounded-full border border-[#6366f1]/30 bg-[#6366f1]/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#a5b4fc]">
            {details.type}
          </span>

          <h2
            id="project-modal-title"
            className="mt-3 pr-10 text-2xl font-medium tracking-tight text-slate-100"
          >
            {project.title}
          </h2>

          <p className="mt-2 max-w-2xl text-[13px] leading-5 text-slate-500">
            {project.description}
          </p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            <ProjectLink
              href={details.links?.github}
              label="GitHub"
              icon={<GithubIcon />}
            />

            <ProjectLink
              href={details.links?.web}
              label="Web App"
              icon={<Globe className="h-3.5 w-3.5" />}
            />

            <ProjectLink
              href={details.links?.paper}
              label="Research Paper"
              icon={<FileText className="h-3.5 w-3.5" />}
            />

            <ProjectLink
              href={details.links?.pdf}
              label="PDF Presentation"
              icon={<FileDown className="h-3.5 w-3.5" />}
            />
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto">
          <div className="px-5 pb-7 sm:px-6 sm:pb-8">
            {/* Metadata */}
            <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/8 bg-white/5 sm:grid-cols-3">
              <MetaItem label="Period" value={details.period} />
              <MetaItem label="Role" value={details.role?.join(", ")} />
              <MetaItem
                label="Languages"
                value={details.languages?.join(", ")}
              />
              <MetaItem
                label="Platforms"
                value={details.platforms?.join(", ")}
              />
              <MetaItem label="Team Size" value={details.teamSize} />
              <MetaItem label="Type" value={details.type} />
            </div>

            {details.contribution && (
              <ProjectSection title="My Contribution">
                <p className="text-[12px] leading-5 text-slate-400">
                  {details.contribution}
                </p>
              </ProjectSection>
            )}

            {details.highlights?.length > 0 && (
              <ProjectSection title="Highlights">
                <BulletList items={details.highlights} />
              </ProjectSection>
            )}

            {details.features?.length > 0 && (
              <ProjectSection title="Key Features">
                <BulletList items={details.features} />
              </ProjectSection>
            )}

            {details.techStack?.length > 0 && (
              <ProjectSection title="Tech Stack">
                <div className="flex flex-wrap gap-1">
                  {details.techStack.map((technology) => (
                    <span
                      key={technology}
                      className="rounded border border-[#4f46e5]/60 bg-[#11142b] px-2 py-1 font-mono text-[10px] text-[#818cf8]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </ProjectSection>
            )}

            {details.approach && (
              <ProjectSection title="Approach">
                <p className="text-[12px] leading-5 text-slate-400">
                  {details.approach}
                </p>
              </ProjectSection>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function MetaItem({ label, value }) {
  return (
    <div className="bg-[#0d1424] px-3 py-2.5">
      <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">
        {label}
      </div>

      <div className="mt-1 text-[11px] text-slate-300">{value || "—"}</div>
    </div>
  );
}

function ProjectSection({ title, children }) {
  return (
    <section className="mt-6">
      <h3 className="mb-2.5 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#818cf8]">
        <span className="h-1 w-1 rounded-full bg-[#6366f1]" />
        {title}
      </h3>

      {children}
    </section>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-2.5 text-[12px] leading-5 text-slate-400"
        >
          <span className="mt-2 h-0.5 w-0.5 shrink-0 rounded-full bg-[#6366f1]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 6.35c.97 0 1.94.13 2.85.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.08.78 2.18v3.23c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function ProjectLink({ href, label, icon }) {
  if (!href || href === "#") return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 font-mono text-[10px] text-slate-400 transition-colors hover:border-[#6366f1]/40 hover:bg-[#6366f1]/10 hover:text-[#a5b4fc]"
    >
      {icon}
      {label}
    </a>
  );
}

export default ProjectModal;

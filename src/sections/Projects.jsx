import { useMemo, useState } from "react";
import { projects } from "../data/projects";
import Filter from "../components/Filter";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

const filterConfig = [
  { key: "type", label: "Type" },
  { key: "language", label: "Language" },
  { key: "platform", label: "Platform" },
  { key: "role", label: "Role" },
];

const initialFilters = {
  type: "All",
  language: "All",
  platform: "All",
  role: "All",
};

function getFilterOptions(key) {
  const values = projects
    .flatMap((project) => {
      const value = project.filters?.[key];
      return Array.isArray(value) ? value : value ? [value] : [];
    })
    .filter(Boolean);

  return ["All", ...new Set(values)];
}

function Projects() {
  const [selectedFilters, setSelectedFilters] = useState(initialFilters);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) =>
      filterConfig.every(({ key }) => {
        const selected = selectedFilters[key];

        if (selected === "All") return true;

        const value = project.filters?.[key];

        return Array.isArray(value)
          ? value.includes(selected)
          : value === selected;
      }),
    );
  }, [selectedFilters]);

  const handleFilterChange = (key, value) => {
    setSelectedFilters((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const clearFilters = () => {
    setSelectedFilters(initialFilters);
  };

  return (
    <>
      <section id="projects" className="border-b border-white/5 bg-[#080b12]">
        <div className="mx-auto max-w-280 px-5 py-14 sm:px-6 sm:py-16">
          {/* Header */}
          <header className="mb-7">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6366f1]" />

              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6366f1]">
                Selected Projects
              </span>
            </div>
          </header>

          {/* Filters */}
          <div className="mb-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {filterConfig.map(({ key, label }) => (
              <Filter
                key={key}
                label={label}
                value={selectedFilters[key]}
                options={getFilterOptions(key)}
                onChange={(value) => handleFilterChange(key, value)}
              />
            ))}
          </div>

          {/* Projects */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpen={() => setSelectedProject(project)}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-white/8 bg-[#0d1424] px-6 py-12 text-center">
              <p className="font-mono text-xs text-slate-500">
                No projects match the selected filters.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-4 cursor-pointer rounded-md border border-white/10 px-3 py-2 font-mono text-[10px] text-slate-400 transition-colors hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

export default Projects;

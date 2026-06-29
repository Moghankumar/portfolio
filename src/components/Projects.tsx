import type { Project } from "../types";
import SectionHeader from "./SectionHeader";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="py-20 lg:py-24 px-4 sm:px-10 lg:px-10
      bg-gray-50 dark:bg-dark-surface"
    >
      <div className="max-w-[900px] mx-auto">
        <SectionHeader
          label="Notable Work"
          title="Key Projects"
          subtitle="Enterprise platforms and products I've built and shipped across different domains."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="reveal flex flex-col gap-3 bg-white dark:bg-dark-surface2
                border border-gray-200 dark:border-white/8 rounded-2xl p-6
                transition-all duration-200 hover:border-[rgba(124,106,247,0.3)] hover:-translate-y-1"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="text-[28px]">{project.icon}</span>

              <span
                className="self-start text-[10px] font-semibold uppercase tracking-widest
                text-accent bg-[rgba(124,106,247,0.12)] border border-[rgba(124,106,247,0.3)]
                px-2.5 py-1 rounded-full"
              >
                {project.domain}
              </span>

              <h3 className="text-[16px] font-bold text-gray-900 dark:text-white">
                {project.title}
              </h3>

              <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-full font-mono
                      bg-gray-100 dark:bg-dark-surface3 text-gray-500 dark:text-gray-400
                      border border-gray-200 dark:border-white/8"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

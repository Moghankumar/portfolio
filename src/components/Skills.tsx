import type { SkillCategory } from "../types";
import SectionHeader from "./SectionHeader";

interface SkillsProps {
  skills: SkillCategory[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section
      id="skills"
      className="py-20 lg:py-24 px-4 sm:px-10 lg:px-10
      bg-gray-50 dark:bg-dark-surface"
    >
      <div className="max-w-[900px] mx-auto">
        <SectionHeader
          label="Technical Stack"
          title="Skills & Technologies"
          subtitle="A curated set of tools and technologies I use to build high-performance, scalable frontend applications."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((cat, i) => (
            <div
              key={cat.id}
              className={`reveal bg-white dark:bg-dark-surface2 border border-gray-200 dark:border-white/8
                rounded-2xl p-6 transition-all duration-200
                hover:border-[rgba(124,106,247,0.3)] hover:-translate-y-1`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div
                className="w-10 h-10 rounded-lg bg-[rgba(124,106,247,0.12)]
                flex items-center justify-center text-xl mb-4"
              >
                {cat.icon}
              </div>
              <h3 className="text-[14px] font-semibold text-gray-900 dark:text-white mb-3">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-full font-mono
                      bg-gray-100 dark:bg-dark-surface3 text-gray-600 dark:text-gray-400
                      border border-gray-200 dark:border-white/8
                      hover:bg-[rgba(124,106,247,0.12)] hover:text-accent-light
                      hover:border-[rgba(124,106,247,0.3)] transition-all duration-200 cursor-default"
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

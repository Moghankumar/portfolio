import type { Experience } from "../types";
import SectionHeader from "./SectionHeader";

interface ExperienceProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceProps) {
  return (
    <section
      id="experience"
      className="py-20 lg:py-24 px-4 sm:px-10 lg:px-10
      bg-white dark:bg-dark-bg"
    >
      <div className="max-w-[900px] mx-auto">
        <SectionHeader
          label="Career Journey"
          title="Work Experience"
          subtitle="Over 5.6+ years of building enterprise-grade solutions across Banking, FinTech, Healthcare, and Governance domains."
        />

        {/* Timeline */}
        <div className="relative pl-7">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px
            bg-gradient-to-b from-accent via-accent/40 to-transparent"
          />

          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className="reveal relative mb-12 last:mb-0"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Dot */}
              <div
                className="absolute -left-[34px] top-1 w-3 h-3 rounded-full
                bg-accent border-2 border-white dark:border-dark-bg
                shadow-[0_0_0_4px_rgba(124,106,247,0.15)]"
              />

              {/* Card */}
              <div
                className="bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-white/8
                rounded-2xl p-7 transition-all duration-200
                hover:border-[rgba(124,106,247,0.3)] hover:translate-x-1"
              >
                {/* Header */}
                <div className="flex flex-wrap justify-between items-start gap-3 mb-2">
                  <div>
                    <h3 className="text-[17px] font-bold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-[14px] font-semibold text-accent-light mt-0.5">
                      {exp.company}
                    </p>
                    {exp.client && <p className="text-[12px] text-gray-400 mt-0.5">{exp.client}</p>}
                  </div>
                  <span
                    className={`text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full
                    ${
                      exp.current
                        ? "bg-green-500/10 text-green-500 dark:text-green-400 border border-green-500/20"
                        : "bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/10"
                    }`}
                  >
                    {exp.duration}
                  </span>
                </div>

                {/* Description */}
                {exp.description && (
                  <p
                    className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed
                    mb-4 pl-3 border-l-2 border-[rgba(124,106,247,0.3)]"
                  >
                    {exp.description}
                  </p>
                )}

                {/* Bullets */}
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, bi) => (
                    <li
                      key={bi}
                      className="flex gap-3 text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed"
                    >
                      <span className="text-accent mt-0.5 flex-shrink-0">→</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { Certification } from "../types";
import SectionHeader from "./SectionHeader";

interface CertificationsProps {
  certifications: Certification[];
}

export default function Certifications({ certifications }: CertificationsProps) {
  return (
    <section
      id="certifications"
      className="py-20 lg:py-24 px-4 sm:px-10 lg:px-10
      bg-white dark:bg-dark-bg"
    >
      <div className="max-w-[900px] mx-auto">
        <SectionHeader label="Credentials" title="Certifications & Education" />

        <div className="flex flex-col gap-4 max-w-[560px]">
          {certifications.map((cert, i) => (
            <div
              key={cert.id}
              className={`reveal flex items-center gap-5 rounded-2xl p-6 sm:p-7
                transition-all duration-200
                ${
                  cert.highlighted
                    ? "bg-gray-50 dark:bg-dark-surface border border-[rgba(124,106,247,0.3)]"
                    : "bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-white/8"
                }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="text-4xl flex-shrink-0">{cert.icon}</span>
              <div>
                <h3 className="text-[16px] font-bold text-gray-900 dark:text-white">
                  {cert.title}
                </h3>
                <p className="text-[13px] text-gray-400 mt-1">
                  {cert.date} · {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

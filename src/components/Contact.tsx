import type { ContactItem } from "../types";
import SectionHeader from "./SectionHeader";

interface ContactProps {
  items: ContactItem[];
}

export default function Contact({ items }: ContactProps) {
  return (
    <section
      id="contact"
      className="py-20 lg:py-24 px-4 sm:px-10 lg:px-10
      bg-gray-50 dark:bg-dark-surface"
    >
      <div className="max-w-[900px] mx-auto">
        <SectionHeader
          label="Let's Connect"
          title="Get in Touch"
          subtitle="Currently open to new opportunities. If you have a role that matches my skills, I'd love to connect!"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => {
            const Wrapper = item.href ? "a" : "div";
            return (
              <Wrapper
                key={item.id}
                {...(item.href
                  ? {
                      href: item.href,
                      target: item.href.startsWith("http") ? "_blank" : undefined,
                      rel: "noopener noreferrer",
                    }
                  : {})}
                className="reveal flex items-center gap-4 bg-white dark:bg-dark-surface2
                  border border-gray-200 dark:border-white/8 rounded-2xl p-5
                  transition-all duration-200 hover:border-[rgba(124,106,247,0.3)] hover:-translate-y-1
                  no-underline text-gray-900 dark:text-white group"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center
                  text-xl bg-[rgba(124,106,247,0.12)]"
                >
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-0.5">
                    {item.label}
                  </p>
                  <p
                    className="text-[13px] font-medium text-gray-900 dark:text-white truncate
                    group-hover:text-accent-light transition-colors duration-200"
                    title={item.value}
                  >
                    {item.value}
                  </p>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

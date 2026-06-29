import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import ExperienceSection from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import { useTheme } from "./hooks/useTheme";
import { useScrollReveal } from "./hooks/useScrollReveal";
import {
  navLinks,
  skills,
  experiences,
  projects,
  certifications,
  contactItems,
} from "./data/portfolio";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  useScrollReveal();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-dark-bg text-gray-900 dark:text-white">
        <Navbar links={navLinks} theme={theme} onToggleTheme={toggleTheme} />

        <Hero
          onContactClick={() => scrollTo("contact")}
          onExperienceClick={() => scrollTo("experience")}
        />

        <Skills skills={skills} />

        <ExperienceSection experiences={experiences} />

        <Projects projects={projects} />

        <Certifications certifications={certifications} />

        <Contact items={contactItems} />

        <footer
          className="bg-white dark:bg-dark-bg border-t border-gray-200 dark:border-white/8
          py-7 px-4 text-center text-[13px] text-gray-400"
        >
          Designed & built by <span className="text-accent">Moghan Kumar A</span>
        </footer>
      </div>
    </div>
  );
}

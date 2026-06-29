interface HeroProps {
  onContactClick: () => void;
  // onExperienceClick: () => void;
}

export default function Hero({
  onContactClick,
  // onExperienceClick
}: HeroProps) {
  const onDownloadClick = () => {
    const link = document.createElement("a");
    link.href = "/src/assets/MoghanKumar_Resume.pdf";
    link.download = "MoghanKumar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden
        px-4 sm:px-10 lg:px-10 pt-20 pb-10"
    >
      {/* Background orbs */}
      <div
        className="hero-orb w-[520px] h-[520px] -top-24 -right-24"
        style={{
          background: "radial-gradient(circle, rgba(124,106,247,0.18) 0%, transparent 70%)",
        }}
      />
      <div
        className="hero-orb w-[380px] h-[380px] -bottom-20 -left-20"
        style={{ background: "radial-gradient(circle, rgba(74,222,128,0.1) 0%, transparent 70%)" }}
      />

      <div className="max-w-[900px] w-full relative z-10">
        {/* Available badge */}
        <div
          className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase
          text-accent-light border border-[rgba(124,106,247,0.3)] bg-[rgba(124,106,247,0.1)]
          px-4 py-1.5 rounded-full mb-7"
        >
          {/* <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> */}
          🚀 Open for opportunities
        </div>

        {/* Name */}
        <h1 className="text-[clamp(36px,6vw,64px)] font-bold leading-[1.1] tracking-tight mb-3">
          Hi, I'm{" "}
          <span
            className="gradient-text 
"
          >
            {/* typing-text */}
            Moghan Kumar A
          </span>
        </h1>

        {/* Role */}
        <p className="text-[clamp(18px,3vw,26px)] text-gray-500 dark:text-gray-400 mb-6 font-light">
          <span className="text-gray-900 dark:text-white font-semibold">Frontend Developer</span> —
          5+ Years of Experience
        </p>

        {/* Description */}
        <p className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-[560px] mb-9">
          Building enterprise-grade web applications with React.js, TypeScript, and modern frontend
          architecture. Passionate about crafting scalable, high-performance, and user-centric
          digital experiences with clean, maintainable code. Driven by innovation, performance, and
          delivering products that leave a lasting impact.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mb-12">
          <button
            onClick={onDownloadClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
              bg-accent text-white text-[14px] font-semibold
              hover:bg-accent-light transition-all duration-200
              hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(124,106,247,0.35)]"
          >
            📄 Download Resume
          </button>
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
              bg-transparent text-gray-900 dark:text-white text-[14px] font-medium
              border border-gray-300 dark:border-white/20
              hover:bg-gray-100 dark:hover:bg-white/5
              transition-all duration-200 hover:-translate-y-0.5"
          >
            📬 Get in Touch
          </button>
          {/* <button
            onClick={onExperienceClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
              bg-transparent text-gray-900 dark:text-white text-[14px] font-medium
              border border-gray-300 dark:border-white/20
              hover:bg-gray-100 dark:hover:bg-white/5
              transition-all duration-200 hover:-translate-y-0.5"
          >
            💼 View Experience
          </button> */}
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 pt-7 border-t border-gray-200 dark:border-white/10">
          {[
            { num: "5.6+", label: "Years Experience" },
            // { num: "4", label: "Companies" },
            { num: "15+", label: "Projects Delivered" },
            { num: "100%", label: "Client Focus" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-[28px] font-bold text-gray-900 dark:text-white leading-none gradient-text ">
                {stat.num}
              </div>
              <div className="text-[14px] text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

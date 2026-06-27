import "./Hero.scss";
import profileImage from "../../../../src/assets/moghan.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg-glow"></div>

      <div className="container hero__container">
        {/* Left */}

        <div className="hero__content">
          <span className="hero__badge">🚀 Open to Frontend Opportunities</span>

          <h1 className="hero__title">Moghan Kumar</h1>

          <h2 className="hero__designation">
            Frontend Engineer | React.js Specialist
          </h2>

          <p className="hero__description">
            Building enterprise-grade web applications with React.js,
            TypeScript, and modern frontend architecture— specializing in
            scalable solutions for Banking and Healthcare domains.
          </p>

          <div className="hero__actions">
            <button className="btn btn--primary">Download Resume</button>

            <button className="btn btn--secondary">Contact Me</button>
          </div>

          <div className="hero__stats">
            <div className="stat">
              <h3>5.6+</h3>
              <span>Years Experience</span>
            </div>

            <div className="stat">
              <h3>20+</h3>
              <span>Projects</span>
            </div>

            <div className="stat">
              <h3>100%</h3>
              <span>Client Focus</span>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="hero__right">
          <div className="hero__photo">
            <img src={profileImage} alt="Moghan Kumar" className="hero-image" />
          </div>

          <div className="tech react">⚛ React.js</div>

          <div className="tech ts">🔷 TypeScript</div>

          <div className="tech js">🟨 JavaScript</div>

          <div className="tech next">▲ Next.js</div>

          <div className="tech vue">💡 Vue.js</div>
        </div>
      </div>
    </section>
  );
}

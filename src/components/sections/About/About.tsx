import "./About.css";

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2>Building Modern Frontend Experiences</h2>
          <p>
            Passionate about creating scalable, high-performance enterprise
            applications with modern frontend technologies.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Frontend Engineer with
              <strong> 5.6+ years of experience </strong>
              in designing and developing scalable, enterprise-grade web
              applications using React.js, TypeScript, JavaScript, HTML5, CSS3
              and modern frontend technologies.
            </p>

            <p>
              Throughout my career, I have developed enterprise web applications
              in the Banking and Healthcare domains, delivering responsive,
              user-centric, and scalable solutions.
            </p>
            <p>
              My primary expertise is in
              <strong> React.js</strong>, with hands-on experience in
              <strong> Next.js</strong>,<strong> Vue.js</strong> and
              <strong> Lit.js</strong>.
            </p>

            <p>
              I enjoy building reusable UI components, optimizing performance,
              integrating REST APIs and writing clean, maintainable code that
              delivers exceptional user experiences.
            </p>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <h3>👨‍💻 Experience</h3>
              <p>5.6+ Years</p>
            </div>

            <div className="about-card">
              <h3>⚛️ Primary Stack</h3>
              <p>React.js</p>
            </div>

            <div className="about-card">
              <h3>🏦 Domain</h3>
              <p>Banking</p>
            </div>

            <div className="about-card">
              <h3>🏥 Domain</h3>
              <p>Healthcare</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

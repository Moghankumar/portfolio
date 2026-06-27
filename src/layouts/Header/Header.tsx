import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <a href="/" className="header__logo">
          Moghan<span>.</span>
        </a>

        <nav className="header__nav">
          <a href="/about">About</a>
          <a href="/experience">Experience</a>
          <a href="/skills">Skills</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </nav>

        <button className="header__resume">
          Resume
        </button>
      </div>
    </header>
  );
}
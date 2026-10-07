
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const skills = [
  {
    number: "01",
    name: "HTML",
    category: "STRUCTURE",
    description: "Building the structure and content of web pages.",
  },
  {
    number: "02",
    name: "CSS",
    category: "STYLING",
    description: "Creating responsive layouts and clean interfaces.",
  },
  {
    number: "03",
    name: "JavaScript",
    category: "LOGIC",
    description: "Adding interaction, logic, and dynamic functionality.",
  },
  {
    number: "04",
    name: "React",
    category: "COMPONENTS",
    description: "Creating reusable components for modern interfaces.",
  },
  {
    number: "05",
    name: "MIT App Inventor",
    category: "MOBILE APPS",
    description: "Developing simple mobile applications using block logic.",
  },
  {
    number: "06",
    name: "UI Design",
    category: "USER INTERFACE",
    description: "Designing simple, readable, and user-friendly interfaces.",
  },
];

const projects = [
  {
    number: "01",
    title: "Celsius Converter",
    type: "MOBILE APPLICATION",
    description:
      "A simple temperature conversion application that converts Celsius values into Fahrenheit and Kelvin with a conversion history.",
    tools: ["MIT App Inventor", "Logic", "UI Design"],
  },
  {
    number: "02",
    title: "BMI Calculator",
    type: "MOBILE APPLICATION",
    description:
      "A beginner-friendly mobile application that calculates BMI using height and weight and displays the corresponding category.",
    tools: ["MIT App Inventor", "Blocks", "UI Design"],
  },
  {
    number: "03",
    title: "CITE College Website",
    type: "WEB DEVELOPMENT",
    description:
      "A college website designed to provide students with accessible information about CITE programs, announcements, activities, and important college resources.",
    tools: ["HTML", "CSS", "JavaScript"],
  },
];

function SectionHeading({ number, title }) {
  return (
    <div className="section-heading">
      <span className="section-number">{number}</span>
      <span className="section-label">{title}</span>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="site">

      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          <span>&lt;</span>WELCOME<span>/&gt;</span>
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>
            00 HOME
          </a>

          <a href="#education" onClick={closeMenu}>
            01 EDUCATION
          </a>

          <a href="#skills" onClick={closeMenu}>
            02 SKILLS
          </a>

          <a href="#projects" onClick={closeMenu}>
            03 PROJECTS
          </a>

          <a href="#contact" onClick={closeMenu}>
            04 CONTACT
          </a>
        </nav>
      </header>

      <main>

        {/* HERO */}
        <section id="home" className="hero section">
          <div className="hero-grid">

            <div className="hero-content">
              <p className="eyebrow">
                <span className="status-dot"></span>
                IT STUDENT · ASPIRING DEVELOPER
              </p>

              <h1>
                Aila Angelie
                <span>B. Del Rosario</span>
              </h1>

              <p className="hero-description">
                I’m an Information Technology student who enjoys creating
                simple, useful, and meaningful digital experiences.
              </p>

              <p className="hero-statement">
                I make <span>ideas happen.</span>
              </p>

              <a href="#projects" className="terminal-button">
                VIEW MY WORK <span>→</span>
              </a>
            </div>

            <div className="hero-visual">

              {/* PROFILE IMAGE */}
              <div className="profile-card">
                <span className="profile-label">PROFILE</span>

                <img
                  src="/aila-picture.jpg"
                   alt="Aila Angelie B. Del Rosario"
                   className="profile-picture"
                />
              </div>

              {/* CODE WINDOW */}
              <div className="code-card">
                <div className="code-top">
                  <span>● ● ●</span>
                  <span>portfolio.js</span>
                </div>

                <div className="code-body">
                  <p>
                    <span className="purple">const</span>{" "}
                    <span className="green">developer</span> = {"{"}
                  </p>

                  <p className="indent">
                    name: <span className="yellow">"Aila"</span>,
                  </p>

                  <p className="indent">
                    role: <span className="yellow">"IT Student"</span>,
                  </p>

                  <p className="indent">
                    focus: <span className="yellow">"Web & Mobile"</span>,
                  </p>

                  <p className="indent">
                    learning: <span className="yellow">true</span>,
                  </p>

                  <p className="indent">
                    creativity: <span className="yellow">100</span>
                  </p>

                  <p>{"};"}</p>

                  <p className="comment">
                    // always learning something new
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about section">
          <SectionHeading number="00" title="ABOUT ME" />

          <div className="about-grid">

            <div>
              <p className="big-text">
                Curious about technology.
                <br />
                <span>Passionate about creating.</span>
              </p>
            </div>

            <div className="about-copy">
              <p>
                I am an Information Technology student interested in web
                development, mobile applications, and user interface design.
              </p>

              <p>
                I enjoy learning by building projects and turning ideas into
                working applications. Every project gives me a chance to
                improve my skills and discover something new.
              </p>
            </div>

          </div>
        </section>

       {/* EDUCATION */}
<section id="education" className="education section">
  <SectionHeading number="01" title="EDUCATION" />

  <div className="education-list">
    <div className="education-card">
      <div className="education-year">
        2023 – PRESENT
      </div>

      <div className="education-main">
        <h2>
          BS Information Technology
        </h2>

        <p>
          Nueva Vizcaya State University (NVSU), Bayombong, Nueva Vizcaya
        </p>
      </div>

      <div className="education-arrow">
        ↗
      </div>
    </div>

    <div className="education-card">
      <div className="education-year">
        2018 – 2023
      </div>

      <div className="education-main">
        <h2>
          High School
        </h2>

        <p>
          Nueva Vizcaya General Comprehensive High School
        </p>
      </div>

      <div className="education-arrow">
        ↗
      </div>
    </div>
  </div>
</section>

        {/* SKILLS */}
        <section id="skills" className="skills section">
          <SectionHeading number="02" title="SKILLS" />

          <div className="skills-intro">
            <h2>My Skills</h2>

            <p>
              These are some of the technologies and skills I use while
              learning and building projects.
            </p>
          </div>

          <div className="skills-list">

            {skills.map((skill) => (
              <div className="skill-row" key={skill.number}>

                <span className="skill-number">
                  {skill.number}
                </span>

                <div className="skill-name">
                  <h3>{skill.name}</h3>

                  <span>
                    {skill.category}
                  </span>
                </div>

                <p>
                  {skill.description}
                </p>

                <span className="skill-arrow">
                  ↗
                </span>

              </div>
            ))}

          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="projects section">
          <SectionHeading number="03" title="PROJECTS" />

          <div className="projects-title">
            <h2>Things I’ve Built</h2>

            <p>
              A collection of projects from my learning journey.
            </p>
          </div>

          <div className="project-list">

            {projects.map((project) => (
              <article
                className="project-card"
                key={project.number}
              >

                <div className="project-number">
                  {project.number}
                </div>

                <div className="project-content">

                  <span className="project-type">
                    {project.type}
                  </span>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <div className="project-tools">
                    {project.tools.map((tool) => (
                      <span key={tool}>
                        {tool}
                      </span>
                    ))}
                  </div>

                </div>

                <span className="project-arrow">
                  ↗
                </span>

              </article>
            ))}

          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact section">
          <SectionHeading number="04" title="CONTACT" />

          <div className="contact-content">

            <p className="contact-small">
              HAVE A PROJECT IN MIND?
            </p>

            <h2>
              Let’s build
              <span>something.</span>
            </h2>

            <p className="contact-description">
              I’m always open to learning, collaborating, and connecting
              with people who are interested in creating something useful.
            </p>

            <div className="contact-links">

              <a href="mailto:aila.delrosario280@gmail.com">
                <span>EMAIL</span>

                aila.delrosario280@gmail.com

                <b>↗</b>
              </a>

              <a
                href="https://www.facebook.com/nwahahaha"
                target="_blank"
                rel="noreferrer"
              >
                <span>FACEBOOK</span>

                facebook.com/nwahahaha

                <b>↗</b>
              </a>

            </div>

          </div>
        </section>

        {/* CLOSING */}
        <section className="closing section">

          <p>
            THANKS FOR STOPPING BY
          </p>

          <h2>
            Let’s keep creating
            <span>something meaningful.</span>
          </h2>

          <p>
            I’m always learning something new. This is only the beginning.
          </p>

        </section>

      </main>

      {/* FOOTER */}
      <footer>

        <span>
          © 2026 Aila Angelie B. Del Rosario | Information Technology Student
        </span>

        <a href="#home">
          BACK TO TOP ↑
        </a>

      </footer>

    </div>
  );
}

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
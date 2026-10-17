
import { useState } from "react";
import "./App.css";

const projects = [
  {
    number: "01",
    name: "Smart Warehouse Inventory",
    type: "FULL-STACK DEVELOPMENT",
    description:
      "A warehouse management application to track inventory, monitor stock levels, manage warehouses, and visualize inventory data.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    icon: "▦",
    color: "mint",
    github: "https://github.com/pragyabisht25/Smart-Warehouse-Inventory",
  },
  {
    number: "02",
    name: "ExamPro AI",
    type: "AI-POWERED LEARNING",
    description:
      "An exam preparation platform with interactive quizzes, performance tracking, an admin dashboard, and AI-powered question generation.",
    tech: ["Java", "JSP", "Servlets", "JDBC", "MySQL"],
    icon: "✳",
    color: "violet",
    github: "https://github.com/pragyabisht25",
  },
  {
    number: "03",
    name: "Personal Portfolio",
    type: "WEB DEVELOPMENT",
    description:
      "A responsive portfolio website designed to showcase my development skills, projects, education, and professional journey.",
    tech: ["React", "JavaScript", "CSS", "Vite"],
    icon: "⌘",
    color: "orange",
    github: "https://github.com/pragyabisht25",
  },
];

const skillGroups = [
  {
    title: "FRONTEND",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
  },
  {
    title: "BACKEND",
    skills: ["Node.js", "Express.js", "REST APIs", "Java", "Python"],
  },
  {
    title: "DATABASES",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "TOOLS & CONCEPTS",
    skills: ["Git", "GitHub", "VS Code", "Postman", "JWT", "CRUD"],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const closeMenu = () => setMenuOpen(false);

  const handleContact = (event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const name = formData.get("name") || "";
  const email = formData.get("email") || "";
  const message = formData.get("message") || "";

  const gmailUrl = new URL("https://mail.google.com/mail/");
  gmailUrl.searchParams.set("view", "cm");
  gmailUrl.searchParams.set("fs", "1");
  gmailUrl.searchParams.set("to", "pragyabisht25@gmail.com");
  gmailUrl.searchParams.set("su", `Portfolio enquiry from ${name}`);
  gmailUrl.searchParams.set(
    "body",
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  window.location.href = gmailUrl.toString();
};

  return (
    <>
      <header className="site-header">
        <nav className="navbar container">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark">P.</span>
            <span>
              pragya<span className="brand-dot">.</span>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            {["About", "Skills", "Projects", "Experience", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                >
                  {item}
                </a>
              )
            )}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              Let's talk <span>↗</span>
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="availability">
                <span className="status-dot" />
                OPEN TO INTERNSHIPS & ENTRY-LEVEL ROLES
              </div>

              <p className="eyebrow">HELLO, I'M PRAGYA BISHT</p>

              <h1>
                Building Web Experiences.
                <br />
                Developing Full-Stack Solutions
                <span className="accent">.</span>
              </h1>

              <p>
                Final-year Computer Science student at Galgotias University,
                focused on web development, full-stack applications, and
                software engineering. Passionate about building responsive,
                user-friendly applications and solving real-world problems
                through technology.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  Explore my work <span>↗</span>
                </a>
                <a className="button button-secondary" href="#contact">
                  Get in touch
                </a>
              </div>

              <div className="hero-socials">
                <a
                  href="https://github.com/pragyabisht25"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
                <span className="social-divider">/</span>
                <a
                  href="https://www.linkedin.com/in/pragyabisht25/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-label="Developer introduction">
              <div className="visual-grid" />
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />

              <div className="profile-card">
                <div className="profile-card-top">
                  <span className="window-dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="card-label"> PRAGYA BISHT / PORTFOLIO </span>
                </div>

                <div className="avatar">
                  <span>PB</span>
                  <div className="avatar-spark">✳</div>
                </div>

                <p className="profile-greeting">HELLO WORLD, I'M</p>
                <h2>Pragya Bisht</h2>
                <p className="profile-role">Computer Science & Engineering</p>

                <div className="profile-divider" />

                <div className="profile-stats">
                  <div>
                    <strong>8.3</strong>
                    <span>CGPA / 10</span>
                  </div>
                  <div>
                    <strong>03+</strong>
                    <span>PROJECTS</span>
                  </div>
                  <div>
                    <strong>2027</strong>
                    <span>GRADUATION</span>
                  </div>
                </div>

                <div className="code-line">
                  <span>const</span> passion = <b>"building things"</b>;
                </div>
              </div>

              <div className="floating-tag tag-top">
                <span className="tag-symbol">{"</>"}</span>
                <span>
                  
                </span>
              </div>

              <div className="floating-tag tag-bottom">
                <span className="tag-symbol tag-purple">✳</span>
                
              </div>

              
            </div>
          </div>

          <div className="container hero-footer">
            <span>SCROLL TO EXPLORE</span>
            <span className="scroll-line" />
            <span>DESIGN · CODE · LEARN</span>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">01 / ABOUT ME</p>
              <h2>
                Curious mind.
                <br />
                <span className="muted-heading">Practical builder.</span>
              </h2>
            </div>

            <div className="about-grid">
              <div className="about-main">
                <p className="about-lead">
                  I'm a Computer Science student who enjoys turning ideas into
                  clean, functional web experiences.
                </p>
                <p>
                  My focus is on learning full-stack development, understanding
                  how applications work from frontend to backend, and
                  strengthening my problem-solving skills through hands-on
                  projects.
                </p>
                <p>
                  I value consistency, curiosity, and writing code that solves
                  real problems. I'm looking for opportunities where I can
                  contribute, learn from a team, and grow as a developer.
                </p>
                <a className="text-link" href="#contact">
                  A little more about me <span>↗</span>
                </a>
              </div>

              <div className="education-card">
                <span className="card-kicker">CURRENTLY PURSUING</span>
                <div className="education-icon">⌂</div>
                <h3>B.Tech in Computer Science</h3>
                <p>Galgotias University</p>
                <div className="education-meta">
                  <span>Greater Noida, India</span>
                  <span>2023 — 2027</span>
                </div>
                <div className="cgpa-row">
                  <span>ACADEMIC PERFORMANCE</span>
                  <strong>
                    8.3 <small>/ 10 CGPA</small>
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <div className="container">
            <div className="section-heading section-heading-row">
              <div>
                <p className="eyebrow">02 / TECH STACK</p>
                <h2>
                  Tools of the
                  <br />
                  <span className="muted-heading">trade.</span>
                </h2>
              </div>
              <p className="heading-note">
                Technologies I've used in coursework and projects, and continue
                to develop through practice.
              </p>
            </div>

            <div className="skills-grid">
              {skillGroups.map((group, index) => (
                <article
                  className="skill-card clickable-card"
                  key={group.title}
                  role="button"
                  tabIndex={0}
                  onClick={() =>
                    setSelectedItem({ type: "skill", data: group })
                  }
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setSelectedItem({ type: "skill", data: group });
                    }
                  }}
                >
                  <div className="skill-card-top">
                    <span className="skill-number">0{index + 1}</span>
                    <span className="skill-arrow">↗</span>
                  </div>
                  <h3>{group.title}</h3>
                  <div className="skill-tags">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="container">
            <div className="section-heading section-heading-row">
              <div>
                <p className="eyebrow">03 / SELECTED WORK</p>
                <h2>
                  Ideas made
                  <br />
                  <span className="muted-heading">real.</span>
                </h2>
              </div>
              <p className="heading-note">
                A selection of projects that reflect my learning journey,
                technical interests, and approach to problem-solving.
              </p>
            </div>

            <div className="projects-list">
              {projects.map((project) => (
                <article
                  className="project-card clickable-card"
                  key={project.number}
                  role="button"
                  tabIndex={0}
                  onClick={() =>
                    setSelectedItem({ type: "project", data: project })
                  }
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setSelectedItem({ type: "project", data: project });
                    }
                  }}
                >
                  <div className={`project-art ${project.color}`}>
                    <span className="project-art-number">{project.number}</span>
                    <div className="project-art-icon">{project.icon}</div>
                    <span className="project-art-caption">
                      SELECTED PROJECT
                    </span>
                  </div>

                  <div className="project-info">
                    <p className="eyebrow">{project.type}</p>
                    <h3>{project.name}</h3>
                    <p className="project-description">
                      {project.description}
                    </p>

                    <div className="project-tech">
                      {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    <a
                      className="project-link"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                    >
                      View on GitHub <span>↗</span>
                    </a>
                  </div>
                  <span className="project-index">{project.number}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="experience section" id="experience">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">04 / EXPERIENCE & LEARNING</p>
              <h2>
                Growing through
                <br />
                <span className="muted-heading">experience.</span>
              </h2>
            </div>

            <div className="timeline">
              <article className="timeline-item">
                <div className="timeline-marker" />
                <div className="timeline-date">OCT — DEC 2024</div>
                <div className="timeline-content">
                  <span className="experience-type">VIRTUAL INTERNSHIP</span>
                  <h3>Business Analyst Intern</h3>
                  <p className="experience-company">EduSkills</p>
                  <p>
                    Worked with business data using Excel and Power BI, created
                    dashboards, and explored data trends to communicate
                    insights.
                  </p>
                  <div className="experience-tags">
                    <span>Excel</span>
                    <span>Power BI</span>
                    <span>Data Analysis</span>
                  </div>
                </div>
              </article>

              <article className="timeline-item">
                <div className="timeline-marker" />
                <div className="timeline-date">JUL — SEP 2025</div>
                <div className="timeline-content">
                  <span className="experience-type">VIRTUAL INTERNSHIP</span>
                  <h3>AI-ML Intern</h3>
                  <p className="experience-company">EduSkills</p>
                  <p>
                    Practiced machine learning workflows, including data
                    preprocessing, model building, evaluation, and
                    visualization using Python.
                  </p>
                  <div className="experience-tags">
                    <span>Python</span>
                    <span>Machine Learning</span>
                    <span>Data Visualization</span>
                  </div>
                </div>
              </article>

              <article className="timeline-item">
                <div className="timeline-marker timeline-marker-current" />
                <div className="timeline-date">AUG — OCT 2026</div>
                <div className="timeline-content">
                  <span className="experience-type">VIRTUAL INTERNSHIP</span>
                  <h3>MERN Full Stack Development</h3>
                  <p className="experience-company">AICTE — EduSkills</p>
                  <p>
                    Internship covering React, Node.js, Express, MongoDB, REST
                    APIs, authentication, and a full-stack capstone project.
                  </p>
                  <div className="experience-tags">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>MongoDB</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="container">
            <div className="contact-panel">
              <div className="contact-copy">
                <p className="eyebrow">05 / LET'S CONNECT</p>
                <h2>
                  Have an idea?
                  <br />
                  <span className="muted-heading">Let's build it.</span>
                </h2>
                <p>
                  Looking for a developer for an internship, an entry-level
                  opportunity, or a project collaboration? I'd love to hear
                  from you.
                </p>

                <a
                  className="contact-email"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=pragyabisht25@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  pragyabisht25@gmail.com <span>↗</span>
                </a>

                <div className="contact-socials">
                  <a
                    href="https://github.com/pragyabisht25"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pragyabisht25/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>

              <form className="contact-form" onSubmit={handleContact}>
                <label htmlFor="name">YOUR NAME</label>
                <input
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />

                <label htmlFor="email">EMAIL ADDRESS</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />

                <label htmlFor="message">WHAT'S ON YOUR MIND?</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me a little about it..."
                  rows="4"
                  required
                />

                <button
                  className="button button-primary submit-button"
                  type="submit"
                >
                  Send a message <span>↗</span>
                </button>
                <p className="form-note">
                  Opens Gmail with your message ready to send.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">P.</span>
            <span>
              pragya<span className="brand-dot">.</span>
            </span>
          </a>
          <p>Designed with curiosity. Built with code.</p>
          <a href="#home" className="back-top">
            BACK TO TOP ↑
          </a>
          <span className="copyright">© 2026 PRAGYA BISHT</span>
        </div>
      </footer>

      {selectedItem && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="details-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedItem.type} details`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              type="button"
              aria-label="Close details"
              onClick={() => setSelectedItem(null)}
            >
              ×
            </button>

            <p className="eyebrow">
              {selectedItem.type === "project"
                ? selectedItem.data.type
                : "TECH STACK"}
            </p>

            <h2>
              {selectedItem.type === "project"
                ? selectedItem.data.name
                : selectedItem.data.title}
            </h2>

            <p>
              {selectedItem.type === "project"
                ? selectedItem.data.description
                : `Technologies in the ${selectedItem.data.title.toLowerCase()} category that I have used in coursework and projects.`}
            </p>

            <div className="modal-tech">
              {(selectedItem.type === "project"
                ? selectedItem.data.tech
                : selectedItem.data.skills
              ).map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            {selectedItem.type === "project" && (
              <a
                className="button button-primary"
                href={selectedItem.data.github}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub ↗
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default App;

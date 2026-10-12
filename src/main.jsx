import { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const projects = [
  {
    number: "01",
    name: "Glowify AI",
    category: "E-commerce systems",
    description: "A focused operating layer for building, improving and growing online retail experiences.",
    tone: "lime",
    mark: "G",
  },
  {
    number: "02",
    name: "NailBook AI",
    category: "Conversational booking",
    description: "A WhatsApp-first booking assistant concept designed around the way salons already work.",
    tone: "peach",
    mark: "N",
  },
  {
    number: "03",
    name: "SHADOWCHART AI",
    category: "Product in development",
    description: "An early-stage product in the SEVEN-MOTION portfolio. More details will follow as it becomes public.",
    tone: "blue",
    mark: "S",
  },
];

const services = [
  {
    number: "01",
    title: "Software products",
    description: "From product direction to a considered first release, build the right thing before adding more.",
  },
  {
    number: "02",
    title: "AI-enabled workflows",
    description: "Apply AI where it makes a real workflow clearer, faster or more useful—not just for the label.",
  },
  {
    number: "03",
    title: "Tailored digital systems",
    description: "Practical web applications and internal tools shaped around the way your business operates.",
  },
];

const process = [
  ["01", "Listen first", "We begin by understanding the problem, the people affected and what success should look like."],
  ["02", "Define the scope", "A focused discovery phase turns assumptions into priorities, requirements and a practical plan."],
  ["03", "Build with intent", "Work in clear stages, keep decisions visible and validate the result before expanding scope."],
];

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "→"}</span>;
}

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="SEVEN-MOTION home">
      <span className="brand-mark" aria-hidden="true">7</span>
      <span className="brand-word">SEVEN<span>—</span>MOTION</span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <Brand />
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
            <span className={menuOpen ? "menu-icon is-open" : "menu-icon"} aria-hidden="true"><i /><i /></span>
          </button>
          <nav id="primary-navigation" className={menuOpen ? "primary-nav is-open" : "primary-nav"} aria-label="Main navigation">
            <a href="#work" onClick={closeMenu}>Selected work</a>
            <a href="#services" onClick={closeMenu}>What we do</a>
            <a href="#approach" onClick={closeMenu}>Approach</a>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>Start a project <Arrow diagonal /></a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Independent software engineering studio <span className="eyebrow-location">· Kenya</span></p>
            <h1 id="hero-title">Build what moves you <span>forward.</span></h1>
            <div className="hero-bottom">
              <p className="hero-intro">We turn clear thinking into useful software—products, AI-enabled workflows and digital systems made for the work that matters.</p>
              <a className="button button-dark" href="#contact">Let’s talk about your idea <Arrow diagonal /></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract illustration of connected systems" role="img">
            <div className="art-grid" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="art-core"><span>7</span><small>SM</small></div>
            <span className="art-label label-one">IDEA <b>↗</b></span>
            <span className="art-label label-two">SYSTEM <b>+</b></span>
            <span className="art-label label-three">IMPACT <b>↗</b></span>
            <span className="art-index">01 / THINK · DESIGN · BUILD</span>
          </div>
          <div className="hero-foot">
            <span>From first principle to working product.</span>
            <a href="#work">Explore the studio <Arrow /></a>
          </div>
        </section>

        <section className="intro-band" aria-label="Studio philosophy">
          <div className="section-wrap intro-grid">
            <p className="eyebrow">The point of it all</p>
            <p className="intro-statement">Good technology should make the <em>next move</em> feel obvious.</p>
            <p className="intro-note">We’re an AI-first software engineering studio based in Kenya. We build our own products and work on tailored digital solutions with a bias for clarity, usefulness and craft.</p>
          </div>
        </section>

        <section className="work-section section-wrap" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div><p className="eyebrow">Inside the studio</p><h2 id="work-title">Ideas in motion<span className="heading-period">.</span></h2></div>
            <p className="heading-note">A growing portfolio of products and systems. We share details as projects are ready for the public.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-row" key={project.name}>
                <div className={`project-visual visual-${project.tone}`} aria-hidden="true">
                  <span className="visual-number">{project.number}</span>
                  <span className="visual-orbit visual-orbit-a" />
                  <span className="visual-orbit visual-orbit-b" />
                  <span className="visual-mark">{project.mark}</span>
                  <span className="visual-corner">SEVEN—MOTION</span>
                </div>
                <div className="project-info">
                  <div className="project-meta"><span>{project.number}</span><span>{project.category}</span></div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <span className="project-status"><span /> In the portfolio</span>
                </div>
                <span className="project-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="services-section" id="services" aria-labelledby="services-title">
          <div className="section-wrap">
            <div className="section-heading services-heading">
              <div><p className="eyebrow">What we do</p><h2 id="services-title">Useful by design.<br /><span>Built to work.</span></h2></div>
              <p className="heading-note">Technology is only valuable when it solves the right problem. We keep the brief clear and the solution grounded.</p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <span className="service-number">{service.number}</span>
                  <div><h3>{service.title}</h3><p>{service.description}</p></div>
                  <span className="service-plus" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="approach-section section-wrap" id="approach" aria-labelledby="approach-title">
          <div className="approach-top">
            <div><p className="eyebrow">How we work</p><h2 id="approach-title">Less theatre.<br /><span>More progress.</span></h2></div>
            <p>Good delivery isn’t a mystery. It’s a sequence of thoughtful decisions, honest communication and work you can evaluate as it takes shape.</p>
          </div>
          <div className="process-list">
            {process.map(([number, title, description]) => (
              <article className="process-row" key={number}>
                <span className="process-number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-wrap contact-inner">
            <div className="contact-top"><p className="eyebrow">Have a problem worth solving?</p><span className="contact-symbol" aria-hidden="true">↗</span></div>
            <h2 id="contact-title">Start with a<br /><em>clear conversation.</em></h2>
            <div className="contact-bottom">
              <p>Begin with a free 30-minute consultation. For scoped implementation work, a KES 5,000 discovery consultation helps define the problem, scope and next steps.</p>
              <div className="contact-actions">
                <a className="button button-lime" href="https://github.com/SEVEN-MOTION/seven-motion/issues/new?template=project-enquiry.md">Start a project enquiry <Arrow diagonal /></a>
                <span>Prefer a structured brief? Use the project enquiry on GitHub.</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-main">
          <Brand />
          <p>Thoughtful software.<br />Forward motion.</p>
          <nav aria-label="Footer navigation"><a href="#work">Work</a><a href="#services">Services</a><a href="#approach">Approach</a><a href="#top">Back to top ↑</a></nav>
        </div>
        <div className="section-wrap footer-legal"><span>© {new Date().getFullYear()} SEVEN-MOTION</span><span>Software engineering studio · Kenya</span><a href="https://github.com/SEVEN-MOTION/seven-motion">GitHub <Arrow diagonal /></a></div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <App />,
);

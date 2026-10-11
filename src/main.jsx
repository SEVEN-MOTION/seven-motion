import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const sections = [
  {
    id: "work",
    label: "Work",
    title: "Building focused software products",
    body: "Our product portfolio includes Glowify AI, NailBook AI and SHADOWCHART AI. Product details will be shared as each product reaches a public release.",
  },
  {
    id: "about",
    label: "About",
    title: "AI-first engineering, grounded in delivery",
    body: "SEVEN-MOTION is a software engineering studio based in Kenya. We build software products and tailored digital solutions.",
  },
  {
    id: "contact",
    label: "Contact",
    title: "Start with a conversation",
    body: "Begin with a free 30-minute consultation. For a scoped implementation engagement, we offer a KES 5,000 discovery consultation.",
  },
  {
    id: "career",
    label: "Career",
    title: "Career",
    body: "Opportunities will be published here when available.",
  },
];

function App() {
  return (
    <div className="site">
      <header className="header">
        <a className="brand" href="#top" aria-label="SEVEN-MOTION home">SEVEN-MOTION</a>
        <nav aria-label="Primary navigation">
          {sections.map(({ id, label }) => <a key={id} href={"#" + id}>{label}</a>)}
        </nav>
      </header>
      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <p className="eyebrow">Software engineering studio · Kenya</p>
          <h1 id="hero-title">Build with clarity.</h1>
          <p className="lede">AI-first software engineering for products and tailored digital solutions.</p>
          <a className="button" href="#contact">Book a consultation</a>
        </section>
        {sections.map(({ id, label, title, body }) => (
          <section className="section" id={id} key={id} aria-labelledby={id + "-title"}>
            <p className="eyebrow">{label}</p>
            <h2 id={id + "-title"}>{title}</h2>
            <p>{body}</p>
          </section>
        ))}
      </main>
      <footer>© {new Date().getFullYear()} SEVEN-MOTION</footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);

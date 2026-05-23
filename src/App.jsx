import { useState, useEffect } from "react";

// Layout sections
import HeroSection from "./layout/HeroSection";
import ExperienceSection from "./layout/ExperienceSection";
import ResearchSection from "./layout/ResearchSection";
import StackSection from "./layout/StackSection";
import AboutSection from "./layout/AboutSection";
import ContactSection from "./layout/ContactSection";
import Footer from "./layout/Footer";
import { C, F } from "./theme";
import Nav from "./layout/Nav";

// Section-id ↔ Nav-label mapping
const SECTION_MAP = {
  about: "Sobre",
  experience: "Experiência",
  research: "Pesquisa",
  stack: "Habilidades",
  contact: "Contato",
};

export default function App() {
  const [active, setActive] = useState("Sobre");

  // ── Load Fira fonts ──────────────────────────────────────────────────────
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;700&family=Fira+Code:wght@400;500&display=swap";
    document.head.appendChild(link);

    document.body.style.background = C.bg;
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.color = C.text;
    document.documentElement.style.scrollBehavior = "smooth";

    return () => document.head.removeChild(link);
  }, []);

  // ── Scroll spy ──────────────────────────────────────────────────────────
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting && SECTION_MAP[e.target.id]) {
            setActive(SECTION_MAP[e.target.id]);
          }
        }),
      { threshold: 0.3 }
    );

    Object.keys(SECTION_MAP).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // ── Smooth scroll on nav click ───────────────────────────────────────────
  const scrollTo = (section) => {
    const id = Object.keys(SECTION_MAP).find((k) => SECTION_MAP[k] === section);
    const el = id && document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActive(section);
  };

  return (
    <div style={{ background: C.bg, minHeight: "100vh", fontFamily: F.sans }}>
      <Nav active={active} setActive={scrollTo} />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ResearchSection />
      <StackSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

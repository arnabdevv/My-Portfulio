import { useEffect } from "react";
import TerminalIntro from "@/components/TerminalIntro";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useGSAP } from "@/hooks/useGSAP";

// Main portfolio page: assembles all sections and effects
export default function Portfolio() {
  const { initializeAnimations } = useGSAP();

  useEffect(() => {
    // Setup animated particle background using particles.js
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 50, density: { enable: true, value_area: 800 } },
          color: { value: ["#06D001", "#4635B1", "#B771E5", "#AEEA94"] },
          shape: { type: "circle" },
          opacity: {
            value: 0.3,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1 },
          },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#06D001",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
          },
        },
        retina_detect: true,
      });
    }

    // Start GSAP animations after terminal intro finishes
    const timer = setTimeout(() => {
      initializeAnimations();
    }, 4000);
    return () => clearTimeout(timer);
  }, [initializeAnimations]);

  return (
    <div className="profile-page min-h-screen text-white">
      {/* Particle background layer */}
      <div
        id="particles-js"
        className="particle-container bg-[var(--dark-bg)]"
      ></div>

      {/* Terminal intro popup (animated) */}
      <TerminalIntro />

      {/* Scroll progress bar at top */}
      <div className="fixed top-0 left-0 w-full h-1 z-40">
        <div id="scroll-progress" className="progress-bar w-0"></div>
      </div>

      {/* Main navigation bar */}
      <Navigation />

      {/* Main content sections */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

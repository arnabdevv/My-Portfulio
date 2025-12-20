import { useEffect, useState, useRef } from "react";
import profilePic from "../assets/profilePic_1.png";
import CV from "../assets/Arnab_CV.pdf";
import { LiquidEffectAnimation } from "./ui/liquid-effect-animation";

// Hero section with mouse tracking and smooth scroll buttons
export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [globalMousePos, setGlobalMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  // Scroll to Projects section
  const handleViewWork = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Mouse tracking for animated effects
  useEffect(() => {
    let animationId;
    let targetMousePos = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      setGlobalMousePos({ x: e.clientX, y: e.clientY });
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        targetMousePos = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
      }
    };

    const smoothUpdate = () => {
      setMousePosition((prev) => ({
        x: prev.x + (targetMousePos.x - prev.x) * 0.1,
        y: prev.y + (targetMousePos.y - prev.y) * 0.1,
      }));
      animationId = requestAnimationFrame(smoothUpdate);
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
      animationId = requestAnimationFrame(smoothUpdate);
      return () => {
        heroElement.removeEventListener("mousemove", handleMouseMove);
        cancelAnimationFrame(animationId);
      };
    }
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-[70vh] sm:min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-12 sm:pt-24 sm:pb-16"

      // style={{
      //   background: `radial-gradient(ellipse at center, rgba(6, 208, 1, ${
      //     window.innerWidth < 768 ? "0.3" : "0"
      //   }) 0%, rgba(70, 53, 177, ${
      //     window.innerWidth < 768 ? "0.4" : "0"
      //   }) 50%, rgba(183, 113, 229, ${
      //     window.innerWidth < 768 ? "0.3" : "0"
      //   }) 100%)`,
      // }}
    >
      {/* Liquid Effect Background */}
      <LiquidEffectAnimation />
      {/* Dark overlay for text contrast */}
      {/* <div className="absolute inset-0 bg-black/40 z-5"></div> */}
      <div className="text-center z-10 relative px-4">
        {/* Profile Photo */}
        <div className="mb-4 sm:mb-8 hero-photo">
          <img
            src={profilePic}
            alt="Arnab Dinda - Web Developer"
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-[var(--primary-magenta)] shadow-lg"
            style={{
              boxShadow: `0 0 20px rgba(183, 113, 229, 0.5), 0 0 40px rgba(183, 113, 229, 0.3)`,
            }}
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 hero-name hero-title text-white">
          ARNAB
        </h1>
        <h2
          className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 hero-subtitle px-4"
          style={{ color: "#00D9FF" }}
        >
          Full Stack Web Developer
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto text-white hero-description px-4">
          Crafting digital experiences with clean code and innovative solutions
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 hero-buttons px-4">
          <button
            onClick={handleViewWork}
            className="glass-effect neon-glow px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all font-semibold text-sm sm:text-base w-full sm:w-auto"
            style={{
              border: `2px solid #FFD700`,
              color: "#FFD700",
              backgroundColor: "rgba(255, 215, 0, 0.1)",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#FFD700";
              e.target.style.color = "black";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "rgba(255, 215, 0, 0.1)";
              e.target.style.color = "#FFD700";
            }}
          >
            View My Work
          </button>
          <a
            href={CV}
            download
            className="px-6 sm:px-8 py-2.5 sm:py-4 rounded-full transition-all font-semibold inline-block text-sm sm:text-base w-full sm:w-auto text-center"
            style={{
              border: `2px solid #FFFFFF`,
              color: "#FFFFFF",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#FFFFFF";
              e.target.style.color = "black";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
              e.target.style.color = "#FFFFFF";
            }}
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState, useRef } from "react";
import profilePic from "../assets/profilePic.png";
import CV from "../assets/Arnab_CV.pdf";

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
      className="min-h-screen flex items-center justify-center relative bg-noise overflow-hidden"
    >
      <div className="text-center z-10">
        {/* Profile Photo */}
        <div className="mb-8 hero-photo">
          <img
            // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
            src={profilePic}
            alt="Arnab Dinda - Web Developer"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-[var(--primary-magenta)] shadow-lg"
            style={{
              boxShadow: `0 0 20px rgba(183, 113, 229, 0.5), 0 0 40px rgba(183, 113, 229, 0.3)`,
              filter: "brightness(1.1) contrast(1.1)",
            }}
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 hero-name  hero-title">
          ARNAB
        </h1>
        <h2
          className="text-2xl md:text-3xl mb-8 hero-subtitle"
          style={{ color: "var(--primary-light-green)" }}
        >
          Full Stack Web Developer
        </h2>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-300 hero-description">
          Crafting digital experiences with clean code and innovative solutions
        </p>
        <div className="space-x-6 hero-buttons">
          <button
            onClick={handleViewWork}
            className="glass-effect neon-glow px-8 py-3 rounded-full transition-all"
            style={{
              border: `2px solid var(--primary-green)`,
              color: "var(--primary-green)",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "var(--primary-green)";
              e.target.style.color = "black";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "var(--primary-green)";
            }}
          >
            View My Work
          </button>
          <a
            href={CV}
            download
            className="px-8 py-4 rounded-full transition-all"
            style={{
              border: `2px solid var(--primary-purple)`,
              color: "var(--primary-purple)",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "var(--primary-purple)";
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "var(--primary-purple)";
            }}
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Mouse-Following Interactive Elements - Optimized */}
      <div
        className="absolute pointer-events-none opacity-60"
        style={{
          left: mousePosition.x + 100,
          top: mousePosition.y + 50,
          width: "80px",
          height: "80px",
          border: `2px solid var(--primary-green)`,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          filter: `drop-shadow(0 0 10px var(--primary-green))`,
          willChange: "transform",
        }}
      ></div>

      <div
        className="absolute pointer-events-none opacity-50"
        style={{
          left: mousePosition.x - 120,
          top: mousePosition.y - 80,
          width: "60px",
          height: "60px",
          border: `2px solid var(--primary-magenta)`,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          filter: `drop-shadow(0 0 8px var(--primary-magenta))`,
          willChange: "transform",
        }}
      ></div>

      <div
        className="absolute pointer-events-none opacity-40"
        style={{
          left: mousePosition.x + 200,
          top: mousePosition.y - 100,
          width: "40px",
          height: "40px",
          border: `2px solid var(--primary-purple)`,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          filter: `drop-shadow(0 0 6px var(--primary-purple))`,
          willChange: "transform",
        }}
      ></div>

      <div
        className="absolute pointer-events-none opacity-50"
        style={{
          left: mousePosition.x - 80,
          top: mousePosition.y + 120,
          width: "50px",
          height: "50px",
          border: `2px solid var(--primary-light-green)`,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          filter: `drop-shadow(0 0 7px var(--primary-light-green))`,
          willChange: "transform",
        }}
      ></div>

      {/* Floating Background Elements */}
      <div
        className="absolute top-20 left-20 w-20 h-20 rounded-full animate-float opacity-30"
        style={{ border: `2px solid var(--primary-green)` }}
      ></div>
      <div
        className="absolute bottom-20 right-20 w-16 h-16 rounded-full animate-float opacity-30"
        style={{
          border: `2px solid var(--primary-light-green)`,
          animationDelay: "-2s",
        }}
      ></div>
      <div
        className="absolute top-1/2 left-10 w-12 h-12 rounded-full animate-float opacity-30"
        style={{
          border: `2px solid var(--primary-magenta)`,
          animationDelay: "-4s",
        }}
      ></div>

      {/* Subtle interactive particles - Reduced for smoother performance */}
      <div
        className="absolute top-1/3 right-1/4 w-8 h-8 rounded-full animate-float opacity-40"
        style={{
          border: `1px solid var(--primary-purple)`,
          animationDelay: "-1s",
          transform: `translate(${mousePosition.x * 0.008}px, ${
            mousePosition.y * 0.008
          }px)`,
          willChange: "transform",
        }}
      ></div>
      <div
        className="absolute bottom-1/3 left-1/4 w-6 h-6 rounded-full animate-float opacity-50"
        style={{
          border: `1px solid var(--primary-light-green)`,
          animationDelay: "-3s",
          transform: `translate(${mousePosition.x * -0.006}px, ${
            mousePosition.y * -0.006
          }px)`,
          willChange: "transform",
        }}
      ></div>
      <div
        className="absolute top-2/3 right-1/3 w-10 h-10 rounded-full animate-float opacity-35"
        style={{
          border: `1px solid var(--primary-green)`,
          animationDelay: "-5s",
          transform: `translate(${mousePosition.x * 0.01}px, ${
            mousePosition.y * 0.01
          }px)`,
          willChange: "transform",
        }}
      ></div>

      {/* Cursor Balls that stick to cursor tip */}
      <div
        className="cursor-ball-green"
        style={{
          left: globalMousePos.x + 12,
          top: globalMousePos.y + 12,
        }}
      ></div>
      <div
        className="cursor-ball-white"
        style={{
          left: globalMousePos.x + 8,
          top: globalMousePos.y + 8,
        }}
      ></div>
    </section>
  );
}

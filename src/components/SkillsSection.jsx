import { useEffect, useRef } from "react";
import gsap from "gsap";
import { skillCategories } from "../data/skills";

export default function SkillsSection() {
  const cardRefs = useRef([]);

  useEffect(() => {
    // Add hover animations to skill cards
    cardRefs.current.forEach((card) => {
      if (!card) return;
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.03,
          boxShadow: "0 8px 30px rgba(255, 10, 108, 0.2)",
          duration: 0.3,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          boxShadow: "none",
          duration: 0.3,
          ease: "power2.inOut",
        });
      });
    });
  }, []);

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-white section-title">
          Skills
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-effect p-5 sm:p-6 rounded-xl skill-card transition-all"
              ref={(el) => (cardRefs.current[categoryIndex] = el)}
            >
              <h3
                className="text-lg sm:text-xl font-bold mb-4 sm:mb-5 flex items-center gap-2"
                style={{ color: "var(--primary-magenta)" }}
              >
                <span>{category.icon}</span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs sm:text-sm px-3 py-1 rounded-full text-gray-200 border"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      borderColor: "rgba(255,255,255,0.12)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

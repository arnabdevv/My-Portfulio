import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SkillsSection() {
  const cardRefs = useRef([]);
  const skillBarsRef = useRef([]);

  useEffect(() => {
    // Add hover animations to skill cards
    cardRefs.current.forEach((card) => {
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

  useEffect(() => {
    // Animate skill bars on scroll into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            const percentage = parseInt(bar.getAttribute("data-percentage"));
            gsap.to(bar, {
              width: `${percentage}%`,
              duration: 1.5,
              ease: "power2.out",
            });
            observer.unobserve(bar);
          }
        });
      },
      { threshold: 0.1 }
    );

    skillBarsRef.current.forEach((bar) => {
      if (bar) observer.observe(bar);
    });

    return () => {
      skillBarsRef.current.forEach((bar) => {
        if (bar) observer.unobserve(bar);
      });
    };
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", percentage: 90 },
        { name: "JavaScript", percentage: 95 },
        { name: "CSS/Tailwind", percentage: 88 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", percentage: 85 },
        { name: "Python", percentage: 80 },
        { name: "MongoDB", percentage: 75 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", percentage: 92 },
        { name: "Docker", percentage: 70 },
        { name: "AWS", percentage: 78 },
      ],
    },
  ];

  let skillBarIndex = 0;

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
                className="text-lg sm:text-xl font-bold mb-4 sm:mb-6"
                style={{ color: "var(--primary-magenta)" }}
              >
                {category.title}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const currentIndex = skillBarIndex++;
                  return (
                    <div key={skill.name} className="skill-item">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm sm:text-base text-gray-200">{skill.name}</span>
                        <span
                          className="skill-percentage text-xs sm:text-sm font-semibold"
                          style={{ color: "var(--primary-cyan)" }}
                        >
                          {skill.percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <div
                          ref={(el) =>
                            (skillBarsRef.current[currentIndex] = el)
                          }
                          className="skill-bar h-2 rounded-full"
                          style={{
                            background: `linear-gradient(90deg, var(--primary-magenta), var(--primary-blue), var(--primary-cyan))`,
                            width: "0%",
                          }}
                          data-percentage={skill.percentage}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

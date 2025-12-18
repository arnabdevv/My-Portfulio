import { useEffect, useRef } from "react";
import { projects, technologyColors } from "../data/projects";

// Use global GSAP from CDN
const gsap = window.gsap || {};

export default function ProjectsSection() {
  const cardRefs = useRef([]);

  useEffect(() => {
    if (!gsap || !gsap.to) return;
    
    // Add hover animations to project cards
    const cleanupFunctions = [];
    
    cardRefs.current.forEach((card) => {
      if (!card) return;
      
      const image = card.querySelector("img");
      // Find content div by checking for padding classes or use a more reliable selector
      const content = card.querySelector("div[class*='p-']") || card.querySelector("div:last-child");

      if (!image || !content) return;

      const handleMouseEnter = () => {
        gsap.to(card, {
          scale: 1.02,
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          duration: 0.3,
          ease: "power2.out",
        });

        // Animate image zoom
        if (image) {
          gsap.to(image, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out",
          });
        }

        // Animate content
        if (content) {
          gsap.to(content, {
            y: -5,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          scale: 1,
          boxShadow: "none",
          duration: 0.3,
          ease: "power2.inOut",
        });

        // Reset image zoom
        if (image) {
          gsap.to(image, {
            scale: 1,
            duration: 0.3,
            ease: "power2.inOut",
          });
        }

        // Reset content
        if (content) {
          gsap.to(content, {
            y: 0,
            duration: 0.3,
            ease: "power2.inOut",
          });
        }
      };

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);
      
      cleanupFunctions.push(() => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    });

    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
    };
  }, []);

  const getTechnologyColor = (tech) => {
    const colors = technologyColors[tech] || { bg: "#666", text: "#666" };
    return {
      backgroundColor: `${colors.bg}20`,
      color: colors.text,
      border: `1px solid ${colors.bg}40`,
    };
  };

  const getStatusStyle = (status) => {
    const statusStyles = {
      live: {
        backgroundColor: "var(--primary-magenta)",
        color: "#fff",
        label: "Live",
      },
      development: {
        backgroundColor: "var(--primary-blue)",
        color: "#fff",
        label: "In Development",
      },
      upcoming: {
        backgroundColor: "var(--primary-cyan)",
        color: "#000",
        label: "Upcoming",
      },
      "on going": {
        backgroundColor: "var(--primary-purple)",
        color: "#fff",
        label: "In Progress",
      },
    };
    return statusStyles[status] || statusStyles.upcoming;
  };

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-white section-title">
          Featured Projects
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => (cardRefs.current[index] = el)}
              className="project-card glass-effect rounded-xl overflow-hidden group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  {project.status && (
                    <span
                      className="px-2 py-1 text-xs font-semibold rounded-full whitespace-nowrap self-start sm:self-auto"
                      style={{
                        backgroundColor: getStatusStyle(project.status)
                          .backgroundColor,
                        color: getStatusStyle(project.status).color,
                      }}
                    >
                      {getStatusStyle(project.status).label}
                    </span>
                  )}
                </div>
                <p className="text-sm sm:text-base text-gray-100 mb-3 sm:mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded"
                      style={getTechnologyColor(tech)}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:space-x-4 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="flex items-center transition-colors text-sm sm:text-base"
                    style={{ color: "var(--primary-green)" }}
                    onMouseEnter={(e) =>
                      (e.target.style.color = "var(--primary-light-green)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.color = "var(--primary-green)")
                    }
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    className="flex items-center transition-colors text-sm sm:text-base"
                    style={{ color: "var(--primary-purple)" }}
                    onMouseEnter={(e) =>
                      (e.target.style.color = "var(--primary-magenta)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.color = "var(--primary-purple)")
                    }
                  >
                    <i className="fab fa-github mr-2"></i>Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

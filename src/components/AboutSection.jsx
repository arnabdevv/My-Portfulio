import { useEffect, useRef } from "react";
import profilePic from "../assets/profilePic_2.jpg";

// Use global GSAP from CDN
const gsap = window.gsap || {};
const ScrollTrigger =
  window.gsap?.plugins?.scrollTrigger || window.ScrollTrigger;

// About section with 3D tilt card and summary
export default function AboutSection() {
  const aboutRef = useRef(null);
  const containerRef = useRef(null);
  const iconRefs = useRef([]);

  useEffect(() => {
    if (!aboutRef.current) return;
    if (!gsap || !gsap.from) return;

    // Register ScrollTrigger plugin if available
    if (ScrollTrigger && gsap.registerPlugin) {
      gsap.registerPlugin(ScrollTrigger);
    }

    // VanillaTilt card animation
    let tiltInstance = null;
    if (window.VanillaTilt) {
      const card = aboutRef.current.querySelector(".about-card");
      if (card) {
        tiltInstance = window.VanillaTilt.init(card, {
          max: 15,
          speed: 1000,
          glare: true,
          "max-glare": 0.2,
        });
      }
    }

    // Animate social icons on scroll
    const socialIcons = aboutRef.current.querySelectorAll(".social-icon");
    let ctx = null;

    if (socialIcons.length > 0 && ScrollTrigger && gsap.context) {
      ctx = gsap.context(() => {
        gsap.from(socialIcons, {
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
        });
      }, aboutRef);
    }

    // Hover animation for social icons
    const hoverHandlers = [];

    socialIcons.forEach((icon) => {
      const handleMouseEnter = () => {
        if (gsap && gsap.to) {
          gsap.to(icon, {
            scale: 1.2,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      };

      const handleMouseLeave = () => {
        if (gsap && gsap.to) {
          gsap.to(icon, {
            scale: 1,
            duration: 0.3,
            ease: "power2.inOut",
          });
        }
      };

      icon.addEventListener("mouseenter", handleMouseEnter);
      icon.addEventListener("mouseleave", handleMouseLeave);

      hoverHandlers.push({ icon, handleMouseEnter, handleMouseLeave });
    });

    // Cleanup function
    return () => {
      if (ctx && ctx.revert) ctx.revert();
      hoverHandlers.forEach(({ icon, handleMouseEnter, handleMouseLeave }) => {
        icon.removeEventListener("mouseenter", handleMouseEnter);
        icon.removeEventListener("mouseleave", handleMouseLeave);
      });
      if (tiltInstance && tiltInstance.destroy) {
        tiltInstance.destroy();
      }
    };
  }, []);

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/arnabdinda",
      label: "LinkedIn",
      icon: "fab fa-linkedin",
      color: "text-purple-400",
    },
    {
      href: "https://github.com/arnabdevv",
      label: "GitHub",
      icon: "fab fa-github",
      color: "text-green-400",
    },
    {
      href: "https://x.com/ArnabDeveloper",
      label: "X",
      icon: "fab fa-twitter",
      color: "text-pink-400",
    },
    {
      href: "https://www.instagram.com/arnab.s_gallery?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      label: "Instagram",
      icon: "fab fa-instagram",
      color: "text-emerald-300",
    },
  ];

  return (
    <section id="about" ref={aboutRef} className="py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-white section-title">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* About text */}
          <div className="about-text order-2 md:order-1">
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 text-white">
              I’m a motivated web developer focused on building modern,
              responsive websites and applications. I work primarily with React
              and Node.js and enjoy learning and applying modern web
              technologies to solve real-world problems.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 text-white">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source projects, or enjoying a good cup of
              coffee while planning my next creative project.
            </p>

            {/* ✅ Updated Social Icons */}
            {/* ✅ Animate this group on scroll */}
            <div className="flex space-x-4 sm:space-x-6 mt-6 sm:mt-8">
              <a
                href="https://www.linkedin.com/in/arnabdinda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl sm:text-2xl transition-colors social-icon"
                style={{ color: "var(--primary-purple)" }}
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/arnabdevv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl sm:text-2xl transition-colors social-icon"
                style={{ color: "var(--primary-green)" }}
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://x.com/ArnabDeveloper"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl sm:text-2xl transition-colors social-icon"
                style={{ color: "var(--primary-magenta)" }}
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/arnab.s_gallery?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl sm:text-2xl transition-colors social-icon"
                style={{ color: "var(--primary-light-green)" }}
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* 3D Tilt Card */}
          <div className="flex justify-center order-1 md:order-2">
            <div className="about-card glass-effect p-8 sm:p-12 rounded-xl max-w-md w-full transform-gpu">
              <img
                src={profilePic}
                className="w-28 h-28 sm:w-40 sm:h-40 rounded-full mx-auto mb-6 sm:mb-8 border-2 object-cover object-[60%_center]"
                style={{ borderColor: "var(--primary-purple)" }}
              />
              <h3 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-5 text-neon">
                Arnab Dinda
              </h3>
              <p className="text-base sm:text-lg text-center text-gray-300 mb-6 sm:mb-8">
                Full Stack Developer specialized in React, Node.js, and modern
                web technologies
              </p>
              <div className="flex justify-center space-x-4 sm:space-x-5">
                <i className="fab fa-react text-2xl sm:text-3xl text-green-400"></i>
                <i className="fab fa-node-js text-2xl sm:text-3xl text-emerald-300"></i>
                <i className="fab fa-js-square text-2xl sm:text-3xl text-pink-400"></i>
                <i className="fab fa-python text-2xl sm:text-3xl text-purple-400"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

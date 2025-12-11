import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profilePic from "../assets/profilePic.png";

gsap.registerPlugin(ScrollTrigger);

// About section with 3D tilt card and summary
export default function AboutSection() {
  const aboutRef = useRef(null);
  const containerRef = useRef(null);
  const iconRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // VanillaTilt card animation (no change)
    if (window.VanillaTilt) {
      const card = document.querySelector(".about-card");
      if (card) {
        window.VanillaTilt.init(card, {
          max: 15,
          speed: 1000,
          glare: true,
          "max-glare": 0.2,
        });
      }
    }

    // Animate social icons on scroll
    const ctx = gsap.context(() => {
      gsap.from(".social-icon", {
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

    return () => ctx.revert();

    // Hover animation (no change)
    iconRefs.current.forEach((icon) => {
      icon.addEventListener("mouseenter", () => {
        gsap.to(icon, {
          scale: 1.2,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      icon.addEventListener("mouseleave", () => {
        gsap.to(icon, {
          scale: 1,
          duration: 0.3,
          ease: "power2.inOut",
        });
      });
    });
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
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white section-title">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About text */}
          <div className="about-text">
            <p className="text-lg leading-relaxed mb-6 text-white">
              I'm a passionate web developer with 5+ years of experience
              creating modern, responsive websites and applications. I
              specialize in React, Node.js, and cutting-edge web technologies.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-white">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source projects, or enjoying a good cup of
              coffee while planning my next creative project.
            </p>

            {/* ✅ Updated Social Icons */}
            {/* ✅ Animate this group on scroll */}
            <div className="flex space-x-6 mt-8">
              <a
                href="https://www.linkedin.com/in/arnabdinda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl transition-colors social-icon"
                style={{ color: "var(--primary-purple)" }}
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/arnabdevv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl transition-colors social-icon"
                style={{ color: "var(--primary-green)" }}
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://x.com/ArnabDeveloper"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl transition-colors social-icon"
                style={{ color: "var(--primary-magenta)" }}
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/arnab.s_gallery?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl transition-colors social-icon"
                style={{ color: "var(--primary-light-green)" }}
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* 3D Tilt Card */}
          <div className="flex justify-center">
            <div className="about-card glass-effect p-8 rounded-xl max-w-sm w-full transform-gpu">
              <img
                src={profilePic}
                className="w-32 h-32 rounded-full mx-auto mb-6 border-2"
                style={{ borderColor: "var(--primary-purple)" }}
              />
              <h3 className="text-2xl font-bold text-center mb-4 text-neon">
                Arnab Dinda
              </h3>
              <p className="text-center text-gray-300 mb-6">
                Full Stack Developer specialized in React, Node.js, and modern
                web technologies
              </p>
              <div className="flex justify-center space-x-4">
                <i className="fab fa-react text-2xl text-green-400"></i>
                <i className="fab fa-node-js text-2xl text-emerald-300"></i>
                <i className="fab fa-js-square text-2xl text-pink-400"></i>
                <i className="fab fa-python text-2xl text-purple-400"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

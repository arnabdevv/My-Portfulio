import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="py-8 sm:py-12 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center flex-wrap gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 footer-social">
          <a
            href="#"
            className="text-xl sm:text-2xl transition-colors transform hover:scale-125 social-icon"
            style={{ color: "var(--primary-purple)" }}
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="#"
            className="text-xl sm:text-2xl transition-colors transform hover:scale-125 social-icon"
            style={{ color: "var(--primary-green)" }}
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="#"
            className="text-xl sm:text-2xl transition-colors transform hover:scale-125 social-icon"
            style={{ color: "var(--primary-magenta)" }}
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            className="text-xl sm:text-2xl transition-colors transform hover:scale-125 social-icon"
            style={{ color: "var(--primary-light-green)" }}
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            className="text-xl sm:text-2xl transition-colors transform hover:scale-125 social-icon"
            style={{ color: "var(--primary-purple)" }}
          >
            <i className="fab fa-dribbble"></i>
          </a>
        </div>

        <div className="text-sm sm:text-base text-gray-100 mb-3 sm:mb-4">
          <p>&copy; 2024 Arnab Dinda. All rights reserved.</p>
        </div>

        <div className="text-xs sm:text-sm text-gray-200 mb-4 sm:mb-6 px-4">
          <p>Built with ❤️ using React, GSAP, and modern web technologies</p>
        </div>

        <div className="text-xs sm:text-sm text-gray-500 border-t border-gray-800 pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <Link
            href="/privacy-policy"
            className="hover:text-purple-400 transition-colors"
          >
            Privacy Policy
          </Link>
          <span className="hidden sm:inline text-gray-600">•</span>
          <Link
            href="/terms-of-service"
            className="hover:text-purple-400 transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}

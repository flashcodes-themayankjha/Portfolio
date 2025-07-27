
import { FaChevronUp, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { PiThreadsLogoFill } from "react-icons/pi";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const buttonSize = 80;

  return (
    <footer className="relative bg-gradient-to-tr from-gray-100 via-white to-gray-200 border-t border-gray-200 mt-16 pt-8 pb-6">
      {/* Centered scroll-to-top button (classic footer theme) */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="absolute left-1/2"
        style={{
          top: 0,
          transform: "translate(-50%, -50%)",
          width: `${buttonSize}px`,
          height: `${buttonSize}px`,
          background: "linear-gradient(to top right, #f3f4f6, #f8fafc)",
          borderRadius: "50%",
          border: "1px solid #e5e7eb",
          boxShadow: "0 8px 32px 0 rgba(60,110,180,0.13)",
          zIndex: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#9ca3af",
          position: "absolute",
          transition: "all 0.2s",
          outline: "none"
        }}
        onMouseOver={e => {
          e.currentTarget.style.boxShadow = "0 16px 48px 0 rgba(60,110,180,0.20)";
          e.currentTarget.style.transform = "translate(-50%, -60%) scale(1.05)";
        }}
        onMouseOut={e => {
          e.currentTarget.style.boxShadow = "0 8px 32px 0 rgba(60,110,180,0.13)";
          e.currentTarget.style.transform = "translate(-50%, -50%)";
        }}
      >
        {/* Optional: If using inner-shadow-top, add the class from your CSS */}
        <span className="inner-shadow-top" />
        <FaChevronUp size={36} style={{ position: "relative", zIndex: 2 }} />
      </button>

      {/* Footer content: left copyright, right social icons */}
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Mayank Jha. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/flashcodes-themayankjha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-500 hover:text-gray-700 transition"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/mayankkumarjha07"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-500 hover:text-blue-600 transition"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://www.instagram.com/i_ammayankjha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-500 hover:text-pink-500 transition"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="https://www.threads.net/@i_ammayankjha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Threads"
            className="text-gray-500 hover:text-black transition"
          >
            <PiThreadsLogoFill size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}

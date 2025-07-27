
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash || "#home");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash || "#home");
    window.addEventListener("hashchange", onHashChange, false);

    // Trigger navbar appearance animation
    const timer = setTimeout(() => setVisible(true), 100); // slight delay for animation
    return () => {
      window.removeEventListener("hashchange", onHashChange, false);
      clearTimeout(timer);
    };
  }, []);

  const navLinkClass = (href) =>
    `relative px-1 py-0.5 transition 
     ${activeHash === href ? "text-blue-600 font-semibold" : "hover:text-blue-600"}
     group`;

  return (
    <nav
      className={`bg-white shadow-md fixed top-0 w-full z-50 transition-all duration-500 ease-in-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20 py-2">
          {/* Logo / Brand with gradient text */}
        <div
  className="
    text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-700
    text-transparent bg-clip-text select-none cursor-default
  "
  style={{ fontFamily: "'Pacifico', cursive" , lineHeight: 1.5 , overflow: "visible"  }}
>
  Mayank Kumar Jha
</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={navLinkClass(href)}
                onClick={() => {
                  setOpen(false);
                  setActiveHash(href);
                }}
              >
                <span>{label}</span>
                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 w-full h-0.5 transition-all duration-300 rounded
                    ${activeHash === href
                      ? "bg-blue-600 scale-x-100"
                      : "bg-blue-600 scale-x-0 group-hover:scale-x-100"}
                  `}
                  style={{ transformOrigin: "left" }}
                />
              </a>
            ))}
          </div>
          {/* Hamburger icon for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${open ? "block" : "hidden"} bg-white`}>
        <div className="px-2 pt-2 pb-4 space-y-1 flex flex-col items-center">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`block py-2 px-4 hover:text-blue-600 w-full text-center rounded
                ${activeHash === href ? "text-blue-600 font-semibold bg-blue-50" : ""}
              `}
              onClick={() => {
                setOpen(false);
                setActiveHash(href);
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

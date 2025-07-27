
import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function ScrollNavigator() {
  const [atBottom, setAtBottom] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const atPageBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
      setAtBottom(atPageBottom);

      // Fully hide navigator when at the *absolute* end (you can fine-tune -2 offset)
      setShow(!atPageBottom);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Entire navigator hidden at end
  if (!show) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
      {!atBottom && (
        <button
          aria-label="Scroll Down"
          className="
            rounded-full border border-gray-200
            bg-gradient-to-tr from-gray-100 via-white to-gray-200
            shadow-xl w-12 h-12 flex items-center justify-center
            text-gray-400 hover:text-gray-700
            transition-all duration-200 hover:shadow-2xl hover:-translate-y-1
            outline-none focus:outline-none
          "
          onClick={() => scrollTo("contact")}
        >
          <FaChevronDown size={22} />
        </button>
      )}
      {atBottom && (
        <button
          aria-label="Scroll Up"
          className="
            rounded-full border border-gray-200
            bg-gradient-to-tr from-gray-100 via-white to-gray-200
            shadow-xl w-12 h-12 flex items-center justify-center
            text-gray-400 hover:text-gray-700
            transition-all duration-200 hover:shadow-2xl hover:-translate-y-1
            outline-none focus:outline-none
          "
          onClick={() => scrollTo("home")}
        >
          <FaChevronUp size={22} />
        </button>
      )}
    </div>
  );
}


import { motion } from "framer-motion";
import ContactMe from "./Contacts";
import Lottie from "lottie-react";
import contactLottie from "../assets/Lottie/contact.json";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { PiThreadsLogoFill } from "react-icons/pi"; // npm install phosphor-react

// Bubble social icon data/config
const iconLinks = [
  {
    Icon: FaGithub,
    url: "https://github.com/flashcodes-themayankjha",
    label: "GitHub",
    color: "bg-gray-800 text-white hover:bg-black"
  },
  {
    Icon: FaLinkedin,
    url: "https://www.linkedin.com/in/mayankkumarjha07",
    label: "LinkedIn",
    color: "bg-[#0A66C2] text-white hover:bg-[#004182]"
  },
  {
    Icon: FaInstagram,
    url: "https://www.instagram.com/i_ammayankjha",
    label: "Instagram",
    color: "bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white hover:from-pink-600"
  },
  {
    Icon: PiThreadsLogoFill,
    url: "https://www.threads.net/@i_ammayankjha",
    label: "Threads",
    color: "bg-black text-white hover:bg-gray-800"
  }
];

// Framer Motion animation variants
const bubblesContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } }
};
const bubble = {
  hidden: { opacity: 0, y: 32, scale: 0.8 },
  show:  { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 350, damping: 18 }},
  whileHover: { scale: 1.18, y: -8, transition: { type: "spring", stiffness: 340 } }
};

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row items-start justify-center gap-10 py-20 w-full"
    >
      {/* Left column */}
      <motion.div
        className="md:w-1/2 w-full flex flex-col items-start justify-between md:pr-8 mb-8 md:mb-0 h-full"
        initial={{ opacity: 0, x: -32 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, type: "spring", delay: 0.15 }}
        viewport={{ once: true, amount: 0.4 }}
        style={{ minHeight: 520, height: "100%" }}
      >
        <div className="w-full">
          <h2 className="text-3xl font-bold text-blue-600 mb-5">
            Contact Me
          </h2>
          <p className="text-gray-700 text-lg mb-7">
            Let's connect! If you have a project in mind, want to collaborate, or just want to say hello, fill out the form and I'll get back to you soon.
          </p>
          {/* Animated popping bubble social icons */}
          <motion.div
            className="flex flex-row gap-6 mb-6"
            variants={bubblesContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            {iconLinks.map(({ Icon, url, label, color }) => (
              <motion.a
                key={label}
                href={url}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                variants={bubble}
                whileHover="whileHover"
                tabIndex={0}
                className={`w-12 h-12 rounded-full shadow-md flex items-center justify-center transition ring-2 ring-white focus:outline-none focus:ring-4 ${color}`}
                style={{
                  boxShadow: "0 6px 18px 0 rgba(35,60,190,0.11)"
                }}
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ scale: 0.82, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{
            scale: 1.08,
            boxShadow: "0 8px 48px 0 rgba(30,144,255,0.08)",
            transition: { type: "spring", stiffness: 320, damping: 22 }
          }}
          transition={{
            duration: 0.85,
            delay: 0.18,
            type: "spring",
            stiffness: 200,
            damping: 16
          }}
          viewport={{ once: true }}
          className="flex-grow w-full flex items-end justify-center"
          style={{ minHeight: 230 }}
        >
          <Lottie
            animationData={contactLottie}
            loop
            className="w-full h-full"
            style={{ maxHeight: 340, minHeight: 200 }}
          />
        </motion.div>
      </motion.div>
      {/* Right: Contact Form (no duplicate heading) */}
      <div className="md:w-1/2 w-full">
        <ContactMe hideTitle />
      </div>
    </section>
  );
}

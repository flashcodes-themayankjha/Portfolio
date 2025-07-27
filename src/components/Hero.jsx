
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import heroAnimation from "../assets/lottie/coding.json"; // Adjust the path if needed

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between min-h-[70vh] pt-12"
    >
      {/* Text Content */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, type: "spring" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-blue-600 mb-4"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
        >
        Hi, I'm Mayank Jha
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-gray-700 mb-8"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
        >
          A passionate developer creating modern web experiences.
        </motion.p>
        <motion.a
          href="#projects"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition cursor-pointer"
          whileTap={{ scale: 0.94, rotate: -3 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6, type: "spring" }}
        >
          View My Work
        </motion.a>
      </motion.div>

      {/* Lottie Animation */}
      <motion.div
        className="flex-1 flex items-center justify-center mb-8 md:mb-0"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.25, type: "spring" }}
        whileHover={{ scale: 1.05 }} // Slight grow on hover
      >
        <Lottie
          animationData={heroAnimation}
          loop
          className="w-80 h-64 md:w-[32rem] md:h-[32rem] drop-shadow-[0_6px_30px_rgba(30,144,255,0.18)]"
          style={{ cursor: "pointer" }}
        />
      </motion.div>
    </section>
  );
}

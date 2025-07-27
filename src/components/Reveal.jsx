
// src/components/Reveal.jsx
import { motion } from "framer-motion";
export default function Reveal({ children, delay = 0.1 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true, amount: 0.2 }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
}

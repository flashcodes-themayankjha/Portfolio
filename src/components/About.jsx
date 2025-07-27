
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import frontendLottie from "../assets/Lottie/front.json";
import backendLottie from "../assets/Lottie/Back.json";
import apiLottie from "../assets/Lottie/apps.json";

const skillGroups = [
  {
    label: "Front End",
    lottie: frontendLottie,
    skills: [
      { name: "HTML", mastery: 92 },
      { name: "JavaScript", mastery: 92 },
      { name: "TypeScript", mastery: 88 },
      { name: "React", mastery: 90 },
      { name: "React Native", mastery: 83 },
      { name: "Lua", mastery: 72 }
    ],
    color: "from-blue-400 to-indigo-500"
  },
  {
    label: "Back End",
    lottie: backendLottie,
    skills: [
      { name: "Python", mastery: 70 },
      { name: "Rust", mastery: 50 },
      { name: "TensorFlow", mastery: 70 },
      { name: "Java", mastery: 76 },
      { name: "Vimscript", mastery: 90 }
    ],
    color: "from-yellow-400 to-amber-600"
  },
  {
    label: "API",
    lottie: apiLottie,
    skills: [
      { name: "FastAPI", mastery: 88 },
      { name: "RestAPI", mastery: 40 }
    ],
    color: "from-green-400 to-teal-600"
  }
];

export default function About() {
  return (
    <section id="about" className="py-14">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-10 text-center">
        About Me
      </h2>
      <div className="max-w-3xl mx-auto text-gray-700 text-lg md:text-xl text-center mb-12 leading-relaxed">
        Hi! I'm <span className="font-semibold text-blue-600">Mayank Kumar Jha</span>, a developer passionate about both front-end and back-end technologies, with strong experience in APIs and modern development stacks. I'm also an App Developer and ML Engineer.
      </div>
      <div className="flex flex-col gap-12">
        {skillGroups.map((group, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <motion.div
              key={group.label}
              className={`flex flex-col md:flex-row items-center md:items-stretch ${
                isEven ? "" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 * idx, type: "spring" }}
              viewport={{ once: true, amount: 0.25 }}
            >
              {/* Lottie with scroll and hover (zoom) animation */}
              <motion.div
                className="w-52 md:w-72 flex-shrink-0 flex items-center justify-center mb-6 md:mb-0 cursor-pointer"
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{
                  scale: 1.09,
                  transition: { type: "spring", stiffness: 330, damping: 22 }
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + 0.15 * idx,
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
                viewport={{ once: true }}
              >
                <Lottie animationData={group.lottie} loop />
              </motion.div>
              {/* Skill Cards */}
              <div className="flex-1 ml-0 md:ml-8 md:mr-0 bg-white/80 rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold text-blue-500 mb-4">{group.label}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {group.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-1 group rounded-lg cursor-pointer transition"
                      initial={{ opacity: 0, scale: 0.85, y: 24 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      whileHover={{
                        scale: 1.07,
                        boxShadow: "0 6px 24px 0px rgba(30,144,255,0.12)",
                        transition: { type: "spring", stiffness: 350, damping: 22 }
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1 * i,
                        type: "spring",
                        stiffness: 250,
                        damping: 18
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center gap-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-xs font-semibold text-blue-600">{skill.mastery}%</span>
                      </div>
                      {/* Animated Progress Bar */}
                      <div className="w-full h-2 bg-gray-200 rounded overflow-hidden">
                        <motion.div
                          className={`h-2 rounded bg-gradient-to-r ${group.color} group-hover:brightness-110`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.mastery}%` }}
                          transition={{ duration: 1, delay: 0.1 * i }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

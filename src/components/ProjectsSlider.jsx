
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import projects from "../data/projects";

// Pastel class for each tag, gives clean, modern look
const pastelTagColors = [
  "bg-blue-100 text-blue-700 border-blue-200",
  "bg-green-100 text-green-700 border-green-200",
  "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200",
  "bg-yellow-100 text-yellow-800 border-yellow-200",
  "bg-indigo-100 text-indigo-700 border-indigo-200",
  "bg-pink-100 text-pink-700 border-pink-200",
  "bg-orange-100 text-orange-700 border-orange-200"
];

// Responsive config to ensure 2 cards always fit on desktop with no gap
const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
  tablet: { breakpoint: { max: 1024, min: 600 }, items: 1 },
  mobile: { breakpoint: { max: 600, min: 0 }, items: 1 }
};

export default function ProjectsSlider() {
  return (
    <Carousel
      infinite
      autoPlay
      autoPlaySpeed={4200}
      responsive={responsive}
      arrows
      showDots
      transitionDuration={550}
      containerClass="py-4"
      itemClass="" // removes extra margin/padding/gap
      customTransition="all 0.5s cubic-bezier(0.8,0.2,0.2,1)"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
    >
      {Array.isArray(projects) && projects.length > 0 ? (
        projects.map(project => {
          const tags = project.skills
            ? project.skills.split(",").map(t => t.trim())
            : [];
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, type: "spring" }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-white shadow-lg rounded-xl flex flex-col items-center cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
              style={{
                margin: "0 12px",
                padding: "1.2rem 1rem 1.2rem 1rem",
                minHeight: 310,
                maxWidth: 480,
                width: "100%"
              }}
              onClick={() => window.open(project.link, "_blank", "noopener noreferrer")}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-3 w-full object-cover sm:h-48 h-40 shadow"
                style={{ objectPosition: "center", maxHeight: 196, minHeight: 130 }}
                loading="lazy"
              />
              <h3 className="text-lg font-semibold mb-1 text-blue-800 text-center leading-tight">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center mb-2 mt-1">
                {tags.map((tag, i) => (
                  <span
                    key={tag + i}
                    className={`px-2 py-0.5 rounded-full border text-xs font-medium ${pastelTagColors[i % pastelTagColors.length]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-700 text-xs text-center mt-auto">
                {project.description}
              </p>
            </motion.div>
          );
        })
      ) : (
        <div className="p-6 text-center text-red-500">No projects found.</div>
      )}
    </Carousel>
  );
}

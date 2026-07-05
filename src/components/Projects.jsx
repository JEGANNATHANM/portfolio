import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
 
  {
    title: "Medicinal Plant Classification",
    description:
      "Real-time medicinal plant identification using TensorFlow, OpenCV, EfficientNet and MobileNet.",
    tech: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
    github: "https://github.com/JEGANNATHANM",
    demo: "#",
  },
  {
    title: "Cafeteria Management System",
    description:
      "A responsive web application with dynamic menu, cart, membership card and order management.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/JEGANNATHANM",
    demo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-gray-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-14">
          Projects
        </h2>

        <div className="flex flex-wrap justify-center gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
             className="w-full md:w-[420px] bg-gray-800 rounded-2xl p-6 border border-gray-700 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="text-gray-300 mt-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-6">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub size={24} />
                </a>

                <a href={project.demo}>
                  <FaExternalLinkAlt size={22} />
                </a>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;
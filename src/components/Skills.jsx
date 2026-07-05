import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";

import { motion } from "framer-motion";

const skills = [
  { name: "Java", icon: <FaJava size={40} />, color: "text-red-500" },
  { name: "HTML5", icon: <FaHtml5 size={40} />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt size={40} />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs size={40} />, color: "text-yellow-400" },
  { name: "React", icon: <FaReact size={40} />, color: "text-cyan-400" },
  { name: "Node.js", icon: <FaNodeJs size={40} />, color: "text-green-500" },
  { name: "Express", icon: <SiExpress size={40} />, color: "text-gray-300" },
  { name: "MongoDB", icon: <SiMongodb size={40} />, color: "text-green-400" },
  { name: "MySQL", icon: <SiMysql size={40} />, color: "text-blue-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} />, color: "text-sky-400" },
  { name: "Git", icon: <FaGitAlt size={40} />, color: "text-orange-600" },
  { name: "GitHub", icon: <FaGithub size={40} />, color: "text-white" },
];

function Skills() {
  return (
    <section id="skills" className="bg-gray-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-cyan-400 mb-14"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              className="bg-gray-900 rounded-2xl p-6 text-center border border-gray-800 hover:border-cyan-400 transition"
            >
              <div className={skill.color}>
                {skill.icon}
              </div>

              <h3 className="mt-4 font-semibold text-white">
                {skill.name}
              </h3>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;
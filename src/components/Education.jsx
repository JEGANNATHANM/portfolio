import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    year: "2022 - 2026",
    title: "B.E. Computer Science and Engineering",
    institution: "IFET College of Engineering",
    description: "CGPA: 8.00",
  },
  {
    year: "2021 - 2022",
    title: "Higher Secondary Certificate (HSC)",
    institution: "Selection Matric Higher Secondary School",
    description: "Score: 79.5%",
  },
];

function Education() {
  return (
    <section id="education" className="bg-gray-900 py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
          Education
        </h2>

        <div className="relative border-l-2 border-cyan-500 ml-6">

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12 ml-8"
            >
              <span className="absolute -left-5 bg-cyan-500 p-3 rounded-full">
                <FaGraduationCap className="text-white" />
              </span>

              <p className="text-cyan-400 font-semibold">
                {item.year}
              </p>

              <h3 className="text-2xl font-bold text-white mt-2">
                {item.title}
              </h3>

              <h4 className="text-lg text-gray-300">
                {item.institution}
              </h4>

              <p className="text-gray-400 mt-2">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;
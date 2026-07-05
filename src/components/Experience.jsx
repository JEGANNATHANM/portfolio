import { motion } from "framer-motion";
import { FaLaptopCode, FaBug } from "react-icons/fa";

const experiences = [
  {
    title: "Web Development Intern",
    company: "Cloud Logic Technologies Pvt. Ltd.",
    duration: "Internship",
    icon: <FaLaptopCode size={28} />,
    description:
      "Developed responsive web applications using HTML, CSS, JavaScript, and Bootstrap. Built user-friendly interfaces and collaborated on frontend development tasks.",
  },
  {
    title: "Software Testing Intern",
    company: "Macx Technologies Pvt. Ltd.",
    duration: "Internship",
    icon: <FaBug size={28} />,
    description:
      "Performed manual and automation testing, including functional, regression, and system testing to improve software quality and reliability.",
  },
];

function Experience() {
  return (
    <section id="experience" className="bg-gray-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-14">
          Experience
        </h2>

        <div className="space-y-8">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 rounded-2xl border border-gray-800 p-8 hover:border-cyan-400 transition-all"
            >
              <div className="flex items-center gap-4">

                <div className="text-cyan-400">
                  {exp.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    {exp.title}
                  </h3>

                  <p className="text-cyan-400">
                    {exp.company}
                  </p>

                  <p className="text-gray-400 text-sm">
                    {exp.duration}
                  </p>
                </div>

              </div>

              <p className="mt-6 text-gray-300 leading-8">
                {exp.description}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Experience;
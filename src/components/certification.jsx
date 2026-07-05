import { motion } from "framer-motion";
import {
  FaCertificate,
  FaDatabase,
  FaLaptopCode,
  FaMicrochip,
} from "react-icons/fa";

const certifications = [
  {
    title: "Fundamentals of OOP",
    issuer: "NPTEL",
    description: "Score: 64%",
    icon: <FaCertificate size={40} />,
  },
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    description: "SQL Basics Certification",
    icon: <FaDatabase size={40} />,
  },
  {
    title: "Technical Paper Presentation",
    issuer: "National Level Symposium",
    description: "Presented a technical paper at a national symposium.",
    icon: <FaLaptopCode size={40} />,
  },
  {
    title: "IoT using Python & Raspberry Pi",
    issuer: "IIT Madras Workshop",
    description: "Hands-on workshop on IoT applications.",
    icon: <FaMicrochip size={40} />,
  },
];

function Certifications() {
  return (
    <section id="certifications" className="bg-gray-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-cyan-400 mb-14"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {certifications.map((certificate, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-cyan-400 transition"
            >
              <div className="text-cyan-400 mb-4">
                {certificate.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white">
                {certificate.title}
              </h3>

              <p className="text-cyan-400 mt-2">
                {certificate.issuer}
              </p>

              <p className="text-gray-300 mt-4">
                {certificate.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;
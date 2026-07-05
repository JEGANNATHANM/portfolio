import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="bg-gray-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-cyan-400 text-center mb-10"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-gray-800 rounded-2xl p-8 shadow-xl"
        >
          <p className="text-lg leading-9 text-gray-300">
            I'm <span className="text-cyan-400 font-semibold">Jeganathan M</span>,
            a Computer Science graduate passionate about building modern web
            applications using Java, React, Node.js, and MongoDB.
          </p>

          <p className="mt-5 text-lg leading-9 text-gray-300">
            I enjoy solving real-world problems through software development
            and have hands-on experience with Full Stack Development and
            Artificial Intelligence projects, including Medicinal Plant
            Classification using Deep Learning.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <div>
              <h3 className="text-cyan-400 font-semibold">
                Name
              </h3>
              <p>Jeganathan M</p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-semibold">
                Email
              </h3>
              <p>jeganathanm436@gmail.com</p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-semibold">
                Qualification
              </h3>
              <p>B.E Computer Science</p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-semibold">
                Location
              </h3>
              <p>Tamil Nadu, India</p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
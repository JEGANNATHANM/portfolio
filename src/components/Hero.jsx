import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

function Hero() {
  const techStack = [
    "Java",
    "React",
    "Node.js",
    "MongoDB",
    "SQL",
    "JavaScript",
    "Tailwind CSS",
  ];

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-black flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          <p className="text-cyan-400 text-xl font-medium">
             Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mt-4 leading-tight">
            JEGANATHAN M<span className="text-cyan-400"></span>
          </h1>

          <div className="text-2xl md:text-3xl text-cyan-400 font-semibold mt-5">
            <TypeAnimation
              sequence={[
                "Software Developer",
                2000,
                "Java Full Stack Developer",
                2000,
                "Frontend Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Open To Work */}

          <div className="inline-flex items-center gap-3 mt-6 px-5 py-2 rounded-full bg-green-500/10 border border-green-500/30">

            <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>

            <span className="text-green-400 font-medium">
              Open to Work
            </span>

          </div>

          <p className="mt-8 text-gray-300 leading-8 text-lg max-w-xl">
            Passionate Computer Science graduate specializing in
            Java Full Stack Development and AI-powered applications.
            I enjoy building scalable, responsive, and user-friendly
            software solutions.
          </p>

          {/* QUICK STATS */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">

            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-cyan-400">B.E</h3>
              <p className="text-sm text-gray-300">Computer Science</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-cyan-400">2</h3>
              <p className="text-sm text-gray-300">Internships</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-cyan-400">2</h3>
              <p className="text-sm text-gray-300">Projects</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-cyan-400">4</h3>
              <p className="text-sm text-gray-300">Certificates</p>
            </div>

          </div>

          {/* TECH STACK */}

          <div className="flex flex-wrap gap-3 mt-8">

            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm hover:bg-cyan-500 hover:text-white transition"
              >
                {tech}
              </span>
            ))}

          </div>

          {/* BUTTONS */}

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="/resume.pdf"
              className="flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold hover:scale-105 transition duration-300 shadow-lg"
            >
              <FaDownload />
              Download Resume
            </a>

            <a
              href="#contact"
              className="px-7 py-3 rounded-xl border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-white transition duration-300"
            >
              Contact Me
            </a>

          </div>

          {/* SOCIAL ICONS */}

          <div className="flex gap-6 mt-10 text-3xl">

            <a
              href="https://github.com/JEGANNATHANM"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 hover:scale-125 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/jeganathan-m-05j07"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 hover:scale-125 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:jeganathanm436@gmail.com"
              className="hover:text-cyan-400 hover:scale-125 transition"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div className="relative flex justify-center">

          <div className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full bg-cyan-500 blur-3xl opacity-25 animate-pulse"></div>

          <img
            src="/profile.jpg"
            alt="Jeganathan M"
            className="relative w-80 h-60 md:w-96 md:h-100 object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_60px_rgba(34,211,238,0.6)] hover:scale-105 transition duration-500"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;
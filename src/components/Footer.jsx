import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black border-t border-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="text-2xl font-bold text-cyan-400">
              JEGANATHAN M
            </h2>

            <p className="text-gray-400 mt-2">
              Java Full Stack Developer | Software Developer
            </p>
          </div>

          <div className="flex gap-6 text-2xl">

            <a
              href="https://github.com/JEGANNATHANM"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/jeganathan-m-05j07"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:jeganathanm436@gmail.com"
              className="hover:text-cyan-400"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex justify-between items-center">

          <p className="text-gray-500 text-sm">
            © 2026 Jeganathan M. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="bg-cyan-500 p-3 rounded-full hover:bg-cyan-600 transition"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
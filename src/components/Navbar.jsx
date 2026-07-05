import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "certification",
    "Education",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-900/60 border-b border-cyan-500/20">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}

        <h1 className="text-3xl font-bold tracking-wide">
          <span className="text-cyan-400"></span>
{/*jeganathan*/}

          <span className="text-cyan-400"> </span>
        </h1>

        {/* Desktop Menu */}

        <div className="hidden lg:flex gap-8">

          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-cyan-400 transition font-medium"
            >
              {item}
            </a>
          ))}

        </div>

        {/* Social Icons */}

        <div className="hidden lg:flex gap-5 text-xl">

          <a
            href="https://github.com/JEGANNATHANM"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/jeganathan-m-05j07"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

        </div>

        {/* Mobile Button */}

        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden bg-slate-900 border-t border-cyan-500/20">

          {links.map((item) => (

            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 border-b border-slate-700 hover:bg-slate-800"
            >
              {item}
            </a>

          ))}

        </div>

      )}

    </nav>
  );
}

export default Navbar;
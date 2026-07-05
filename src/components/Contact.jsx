import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs.send(
  "service_234wsxo",
  "template_uuw4hi1",
  {
    from_name: form.name,
    from_email: form.email,
    message: form.message,
  },
  "-pqRpPqBsl8Qux_3s"
)
      .then(() => {
        alert("✅ Message sent successfully!");

        setForm({
          name: "",
          email: "",
          message: "",
        });

        setLoading(false);
      })
      .catch((error) => {
        console.error(error);

        alert("❌ Failed to send message.");

        setLoading(false);
      });
  };

  return (
    <section id="contact" className="bg-gray-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-14">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side */}

          <div>

            <h3 className="text-3xl font-bold mb-6">
              Let's Connect 👋
            </h3>

            <p className="text-gray-300 leading-8 mb-8">
              I'm currently looking for opportunities as a Software Developer
              and Java Full Stack Developer. Feel free to contact me for
              internships, full-time roles.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-2xl" />
                <span>jeganathanm436@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-cyan-400 text-2xl" />
                <span>+91 8148905944</span>
              </div>

              <div className="flex items-center gap-4">
                <FaGithub className="text-cyan-400 text-2xl" />
                <a
                  href="https://github.com/JEGANNATHANM"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400"
                >
                  github.com/JEGANNATHANM
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaLinkedin className="text-cyan-400 text-2xl" />
                <a
                  href="https://www.linkedin.com/in/jeganathan-m-05j07"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400"
                >
                  LinkedIn Profile
                </a>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <form
            onSubmit={sendEmail}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full mb-4 p-3 rounded-lg bg-gray-700 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full mb-4 p-3 rounded-lg bg-gray-700 outline-none"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full mb-4 p-3 rounded-lg bg-gray-700 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;
import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer
      className="relative text-white px-6 pt-20 pb-8 border-t border-slate-800 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1920')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#121A35]/95"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-[#0EBEC0] mb-4">
              Zar Khan
            </h2>

            <p className="text-slate-300 leading-7">
              Full Stack MERN Developer crafting modern,
              scalable and high-performance web applications
              with beautiful user experiences.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500 text-sm">
                React.js
              </span>

              <span className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500 text-sm">
                Node.js
              </span>

              <span className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500 text-sm">
                MongoDB
              </span>

              <span className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500 text-sm">
                Express.js
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-[#0EBEC0] mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li>
                <a
                  href="#home"
                  className="hover:text-[#0EBEC0] transition duration-300"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-[#0EBEC0] transition duration-300"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="hover:text-[#0EBEC0] transition duration-300"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="hover:text-[#0EBEC0] transition duration-300"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-[#0EBEC0] transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-[#0EBEC0] mb-3">
                Stay Updated
              </h4>

              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-900 border border-slate-700 rounded-l-xl outline-none text-white"
                />

                <button
                  className="px-6 bg-[#0EBEC0] text-white font-semibold rounded-r-xl hover:bg-cyan-400 transition"
                >
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-xl font-semibold text-[#0EBEC0] mb-5">
              Follow Me
            </h3>

            <p className="text-slate-300 mb-6">
              Let's connect and build something amazing together.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="group p-4 rounded-xl bg-slate-900/70 border border-slate-700 hover:border-[#0EBEC0] hover:bg-[#0EBEC0] transition-all duration-500 hover:-translate-y-2"
              >
                <FaGithub
                  size={22}
                  className="group-hover:text-white"
                />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="group p-4 rounded-xl bg-slate-900/70 border border-slate-700 hover:border-[#0EBEC0] hover:bg-[#0EBEC0] transition-all duration-500 hover:-translate-y-2"
              >
                <FaLinkedinIn
                  size={22}
                  className="group-hover:text-white"
                />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="group p-4 rounded-xl bg-slate-900/70 border border-slate-700 hover:border-[#0EBEC0] hover:bg-[#0EBEC0] transition-all duration-500 hover:-translate-y-2"
              >
                <FaInstagram
                  size={22}
                  className="group-hover:text-white"
                />
              </a>

              <a
                href="mailto:zaarkhan483@gmail.com"
                className="group p-4 rounded-xl bg-slate-900/70 border border-slate-700 hover:border-[#0EBEC0] hover:bg-[#0EBEC0] transition-all duration-500 hover:-translate-y-2"
              >
                <MdEmail
                  size={22}
                  className="group-hover:text-white"
                />
              </a>
            </div>

            {/* Contact Info */}
            <div className="mt-8 text-slate-300">
              <p>Email: zaarkhan483@gmail.com</p>
              <p className="mt-2">Available for Freelance Projects</p>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-14 border-t border-slate-700 pt-6 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} Zar Khan • MERN Stack Developer •
          Built with React & Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
"use client";

import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 backdrop-blur-xl border-b border-blue-500/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div>
              <h1 className="text-2xl font-bold text-white">Zar Khan</h1>
              <p className="text-xs text-cyan-300">Full Stack Developer</p>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-white font-medium transition-all duration-300 hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Side */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg border border-slate-700 text-white hover:bg-slate-800 transition"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

            <a href="/resume.pdf" download="Zar-Khan-CV.pdf">
  <button
    className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-6 py-3 rounded-xl transition duration-300"
  >
    Resume
  </button>
</a>
            </div>

            {/* Mobile Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-5">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white hover:text-cyan-400"
                  >
                    {link.name}
                  </a>
                ))}

                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="flex items-center gap-2 text-white"
                >
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                  Theme
                </button>

                <a
                  href="/resume.pdf"
                  className="w-fit px-5 py-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold"
                >
                  Resume
                </a>
              </div>
            </div>
          )}
        </div>
{/* ✅ PERFECT SEAMLESS INFINITE MARQUEE */}
<div className="w-full bg-cyan-500 text-slate-950 font-semibold py-2 overflow-hidden">
  <div className="marquee-track">

    <div className="marquee-content">
      🚀 React.js&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Next.js&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Node.js&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express.js&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MongoDB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JavaScript&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tailwind CSS
    </div>

    <div className="marquee-content">
    🚀 React.js&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Next.js&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Node.js&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express.js&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MongoDB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JavaScript&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tailwind CSS
    </div>

  </div>
</div>

        
      </header>
    </>
  );
}

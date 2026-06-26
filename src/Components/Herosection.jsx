export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center justify-center pt-40"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://c8.alamy.com/comp/2M7HY8A/background-image-of-minimal-office-setup-with-computer-screen-and-planning-charts-against-pastel-yellow-wall-copy-space-2M7HY8A.jpg')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-[#27CDCF]/20 rounded-full blur-[150px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="text-[#27CDCF] font-semibold tracking-widest uppercase mb-4">
          Welcome To My Portfolio
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Hi, I'm{" "}
          <span className="animated-name bg-gradient-to-r from-[#27CDCF] via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Zar Khan
          </span>
        </h1>

        <h2 className="text-2xl md:text-4xl font-semibold text-slate-200 mb-6">
          Full Stack Developer
        </h2>

        <p className="max-w-3xl mx-auto text-lg text-slate-300 mb-10">
          I build modern, responsive and high-performance web applications
          using React.js, Node.js, Express.js and MongoDB. Passionate about
          creating beautiful, scalable and user-friendly digital experiences.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
          <a
            href="#contact"
            className="px-8 py-3 rounded-xl bg-[#27CDCF] text-slate-950 font-semibold hover:scale-105 transition duration-300"
          >
            Hire Me
          </a>

          <a
            href="#projects"
            className="px-8 py-3 rounded-xl border border-[#27CDCF] text-white hover:bg-[#27CDCF] hover:text-slate-950 transition duration-300"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
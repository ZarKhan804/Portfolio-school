import { Code, Briefcase, Rocket } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <Code size={28} />,
      title: "Frontend Development",
      desc: "Building responsive and interactive UI using React.js, Next.js and Tailwind CSS.",
    },
    {
      icon: <Briefcase size={28} />,
      title: "Backend Development",
      desc: "Creating secure and scalable APIs using Node.js, Express.js and MongoDB.",
    },
    {
      icon: <Rocket size={28} />,
      title: "Freelance & Projects",
      desc: "Delivering high-quality web applications with modern design and performance.",
    },
  ];

  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center bg-[#121A35] px-6 py-24"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          About Me
        </h2>

        {/* Subtitle */}
        <p className="text-cyan-400 font-semibold mb-6 tracking-widest uppercase">
          Who I Am
        </p>

        {/* Description */}
        <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-14 leading-relaxed">
          I am{" "}
          <span className="text-cyan-400 font-semibold">
            Zar Khan
          </span>
          , a passionate Full Stack Developer specializing in modern web
          applications. I build scalable, fast and user-friendly digital
          experiences using MERN Stack and modern frontend technologies.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {cards.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            >
              {/* Icon */}
              <div className="text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
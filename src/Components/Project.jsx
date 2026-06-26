import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      desc: "Full stack MERN ecommerce platform with authentication, cart system and responsive UI.",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      live: "#",
      github: "#",
    },
    {
      title: "Portfolio Website",
      desc: "Modern developer portfolio with dark mode and smooth animations.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      live: "#",
      github: "#",
    },
    {
      title: "Chat Application",
      desc: "Real-time chat app using Socket.io and Node.js backend.",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0",
      live: "#",
      github: "#",
    },
    {
      title: "Blog Platform",
      desc: "Full stack blog system with admin panel and CRUD functionality.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      live: "#",
      github: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full min-h-screen text-white px-6 py-24"
      style={{ backgroundColor: "#121A35" }}
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Featured Projects
        </h2>

        <p className="text-cyan-400 mb-12 tracking-widest uppercase">
          My Work
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 text-left">

                <h3 className="text-2xl font-bold mb-2 text-white">
                  {project.title}
                </h3>

                <p className="text-slate-300 mb-5 text-sm">
                  {project.desc}
                </p>

                {/* BUTTONS */}
                <div className="flex gap-4">

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="px-4 py-2 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 transition"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
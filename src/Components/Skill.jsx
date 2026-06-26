export default function Skills() {
  const skills = [
    { name: "HTML / CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 92 },
    { name: "Next.js", level: 85 },
    { name: "Tailwind CSS", level: 90 },
  ];

  const backend = [
    { name: "Node.js", level: 88 },
    { name: "Express.js", level: 85 },
    { name: "REST API", level: 90 },
  ];

  const database = [
    { name: "MongoDB", level: 87 },
    { name: "Mongoose", level: 85 },
    { name: "Firebase", level: 80 },
  ];

  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-[#121A35] text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          My Skills
        </h2>

        {/* Subtitle */}
        <p className="text-cyan-400 mb-12 tracking-widest uppercase">
          Technologies I Work With
        </p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Frontend Skills */}
          <div className="p-6 rounded-2xl bg-[#1A2347] border border-slate-700 hover:border-cyan-500 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300">

            <h3 className="text-xl font-bold mb-6 text-cyan-400">
              Frontend Skills
            </h3>

            {skills.map((skill, i) => (
              <div key={i} className="mb-5 text-left">

                <div className="flex justify-between mb-2">
                  <span className="text-slate-300">
                    {skill.name}
                  </span>

                  <span className="text-cyan-400 font-semibold">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-cyan-400 rounded-full transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

              </div>
            ))}

          </div>

          {/* Backend Skills */}
          <div className="p-6 rounded-2xl bg-[#1A2347] border border-slate-700 hover:border-cyan-500 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300">

            <h3 className="text-xl font-bold mb-6 text-cyan-400">
              Backend Skills
            </h3>

            {backend.map((skill, i) => (
              <div key={i} className="mb-5 text-left">

                <div className="flex justify-between mb-2">
                  <span className="text-slate-300">
                    {skill.name}
                  </span>

                  <span className="text-cyan-400 font-semibold">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-cyan-400 rounded-full transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

              </div>
            ))}

          </div>

          {/* Database Skills */}
          <div className="p-6 rounded-2xl bg-[#1A2347] border border-slate-700 hover:border-cyan-500 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300">

            <h3 className="text-xl font-bold mb-6 text-cyan-400">
              Database Skills
            </h3>

            {database.map((skill, i) => (
              <div key={i} className="mb-5 text-left">

                <div className="flex justify-between mb-2">
                  <span className="text-slate-300">
                    {skill.name}
                  </span>

                  <span className="text-cyan-400 font-semibold">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-cyan-400 rounded-full transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
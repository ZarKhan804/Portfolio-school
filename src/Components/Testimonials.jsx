import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ali Raza",
      role: "Startup Founder",
      text: "Zar Khan delivered an outstanding website. Clean design, fast performance and perfect responsiveness.",
      rating: 5,
    },
    {
      name: "Sara Ahmed",
      role: "Business Owner",
      text: "Amazing work! The UI was modern and exactly what I needed for my business platform.",
      rating: 5,
    },
    {
      name: "John Smith",
      role: "Freelance Client",
      text: "Very professional developer. Communication was great and project delivered on time.",
      rating: 4,
    },
  ];

  return (
    <section
      id="testimonials"
      className="w-full min-h-screen bg-[#121A35] text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Testimonials
        </h2>

        <p className="text-cyan-400 mb-12 tracking-widest uppercase">
          Client Reviews
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group bg-slate-900 border border-slate-700 rounded-2xl p-6 text-left hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300 shadow-lg"
            >

              {/* Stars */}
              <div className="flex gap-1 text-cyan-400 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} size={18} fill="#22d3ee" />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                "{item.text}"
              </p>

              {/* Name */}
              <h3 className="text-white font-bold text-lg">
                {item.name}
              </h3>

              {/* Role */}
              <p className="text-cyan-400 text-sm">
                {item.role}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
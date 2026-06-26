import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-[#121A35] text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Contact Me
        </h2>

        <p className="text-cyan-400 mb-12 tracking-widest uppercase">
          Let’s Work Together
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT INFO */}
          <div className="space-y-6 text-left">

            {/* EMAIL */}
            <div className="p-6 bg-slate-900 border border-slate-700 rounded-2xl hover:border-cyan-500 transition">
              <Mail className="text-cyan-400 mb-3" />
              <h3 className="text-lg font-bold">Email</h3>
              <p className="text-slate-300">zaarkhan483@gmail.com</p>
            </div>

            {/* WHATSAPP */}
            <div className="p-6 bg-slate-900 border border-slate-700 rounded-2xl hover:border-cyan-500 transition">
              <Phone className="text-cyan-400 mb-3" />
              <h3 className="text-lg font-bold">WhatsApp</h3>
              <p className="text-slate-300">0310 6276002</p>
            </div>

            {/* LOCATION */}
            <div className="p-6 bg-slate-900 border border-slate-700 rounded-2xl hover:border-cyan-500 transition">
              <MapPin className="text-cyan-400 mb-3" />
              <h3 className="text-lg font-bold">Location</h3>
              <p className="text-slate-300">
                Capital Islamabad / Rawalpindi, Pakistan
              </p>
            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="p-8 bg-slate-900 border border-slate-700 rounded-2xl hover:border-cyan-500 transition">

            <form className="space-y-5 text-left">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none focus:border-cyan-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none focus:border-cyan-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none focus:border-cyan-500"
              ></textarea>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-cyan-500 text-slate-950 font-bold py-3 rounded-lg hover:bg-cyan-400 transition"
              >
                <Send size={18} />
                Send Message
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}
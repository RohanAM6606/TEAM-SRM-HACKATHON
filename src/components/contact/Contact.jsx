const Contact = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.25),transparent_40%),
             radial-gradient(circle_at_70%_60%,rgba(34,211,238,0.2),transparent_40%)]">
      </div>

      <div className="absolute inset-0 opacity-[0.04] bg-[url('/noise.png')]"></div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-8">

            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-blue-400 relative inline-block tracking-wide">
                Contact Us
                <span className="block h-[2px] w-full bg-gradient-to-r from-blue-400 to-cyan-300 mt-2"></span>
                <span className="absolute left-0 top-0 w-full h-full text-blue-400 blur-md opacity-40 pointer-events-none">
                  Contact Us
                </span>
              </h2>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-white">Join, Collaborate & </span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Build With Us
              </span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              Whether you're looking to join TEAM SRM HACKATHON, collaborate on exciting projects, 
              or participate in our events — we’d love to hear from you.
            </p>

            <div className="space-y-3 text-gray-300 text-sm md:text-base">
              <p>📍 SRM Institute of Science and Technology</p>
              <p>📧 teamsrmhackathon@gmail.com</p>
              <p>📢 Follow us on Instagram & LinkedIn for updates</p>
            </div>

          </div>

          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:border-blue-400"
            />

            <input
              type="email"
              placeholder="Your College Email"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:border-cyan-400"
            />

            <select
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:border-blue-400"
            >
              <option className="bg-black">Select Purpose</option>
              <option className="bg-black">Join the Club</option>
              <option className="bg-black">Collaboration</option>
              <option className="bg-black">Event Participation</option>
              <option className="bg-black">Other</option>
            </select>

            <textarea
              rows="4"
              placeholder="Tell us more..."
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:border-blue-400"
            ></textarea>

            <button className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-semibold hover:scale-105 transition duration-300">
              Submit
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
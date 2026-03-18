const About = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* 🌌 RADIAL GLOW BACKGROUND */}
      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.25),transparent_40%),
             radial-gradient(circle_at_70%_60%,rgba(34,211,238,0.2),transparent_40%)]">
      </div>

      {/* ✨ OPTIONAL NOISE TEXTURE (remove if not using image) */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('/noise.png')]"></div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            {/* 🔥 ABOUT US HEADING */}
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-blue-400 relative inline-block tracking-wide">
                About Us

                {/* underline */}
                <span className="block h-[2px] w-full bg-gradient-to-r from-blue-400 to-cyan-300 mt-2"></span>

                {/* glow */}
                <span className="absolute left-0 top-0 w-full h-full text-blue-400 blur-md opacity-40 pointer-events-none">
                  About Us
                </span>
              </h2>
            </div>

            {/* MAIN HEADING */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-white">Building the Future with </span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Innovation
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              TEAM SRM HACKATHON is more than a club — it's a launchpad for 
              creators, developers, and problem solvers. We bring together 
              ambitious students to build, experiment, and disrupt through 
              technology-driven events.
            </p>

            <p className="text-blue-300/80 text-sm md:text-base max-w-lg">
              From hackathons to real-world product building, we ensure every 
              member gains hands-on experience, industry exposure, and a strong 
              developer mindset.
            </p>

   

          </div>

          {/* RIGHT SIDE - CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-105 hover:border-blue-400/40 transition duration-300">
              <h3 className="text-xl font-semibold text-white mb-2">⚡ 10+ Events</h3>
              <p className="text-gray-400 text-sm">
                Conducting hackathons, ideathons, and coding competitions regularly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-105 hover:border-cyan-400/40 transition duration-300">
              <h3 className="text-xl font-semibold text-white mb-2">👨‍💻 500+ Members</h3>
              <p className="text-gray-400 text-sm">
                A growing community of passionate developers and innovators.
              </p>
            </div>

          

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-105 hover:border-cyan-400/40 transition duration-300">
              <h3 className="text-xl font-semibold text-white mb-2">🌐 Networking</h3>
              <p className="text-gray-400 text-sm">
                Connect with peers, mentors, and industry experts.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
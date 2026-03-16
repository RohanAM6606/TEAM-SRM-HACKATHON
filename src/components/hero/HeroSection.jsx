import GridBackground from "../ui/GridBackground";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-950 via-slate-900 to-black">

      {/* GRID BACKGROUND */}
      <GridBackground />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl w-full text-center space-y-8">

          {/* CLUB NAME */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              TEAM SRM HACKATHON
            </span>
          </h1>

          {/* TAGLINE */}
          <p className="text-blue-100 text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
            Empowering students to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent font-semibold">
              innovate, build, and lead
            </span>{" "}
            through technology, creativity, and collaboration.
          </p>

          {/* DESCRIPTION */}
          <p className="text-blue-300/80 text-sm md:text-base max-w-xl mx-auto">
            We organize hackathons, ideathons, workshops, and technical events
            that help students develop real-world skills and turn ideas into impact.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">

            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 transition">
              Explore Events
            </button>

            <button className="px-8 py-3 rounded-lg border border-blue-400 text-blue-300 font-semibold hover:bg-blue-500/10 transition">
              Join the Club.
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}
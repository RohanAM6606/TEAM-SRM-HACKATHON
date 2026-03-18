import React from "react";
import GridBackground from "../ui/GridBackground";

const domains = [
  { title: "Tech",  desc: "Build powerful applications and systems." },
  { title: "Non-Tech",  desc: "Manage strategy and operations." },
  { title: "Sponsorship",  desc: "Handle partnerships and collaborations." },
  { title: "Logistics",  desc: "Ensure smooth execution of events." },
  { title: "Creatives", desc: "Design visuals and branding." },
  { title: "Content",  desc: "Create engaging content." },
  { title: "Publicity",  desc: "Promote and manage outreach." },
  { title: "Finance",  desc: "Manage budgets and finances." },
];

function Domains() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-[#020617] to-black py-20 px-6">

      {/* GRID BACKGROUND */}
      <GridBackground />

     
      <div className="absolute inset-0 bg-black/70"></div>

   
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,150,255,0.08),transparent_40%)]"></div>

     
      <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-cyan-400/20 blur-sm"></div>

      <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-beam"></div>

      {/* HEADING */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Our <span className="text-cyan-400">Domains</span>
        </h2>
        <p className="text-gray-400 mt-4">
          Explore the diverse domains where innovation meets execution.
        </p>
      </div>

      {/* CARDS */}
      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

        {domains.map((domain, index) => (
          <div
            key={index}
            className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 
            hover:border-cyan-400/40 transition duration-300 hover:scale-105 cursor-pointer overflow-hidden"
          >

            {/* LIGHT SWEEP */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="absolute -left-1/2 top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent skew-x-[-20deg] group-hover:animate-sweep"></div>
            </div>

            {/* ICON */}
            <div className="text-3xl mb-4 text-cyan-400">{domain.icon}</div>

            {/* TITLE */}
            <h3 className="text-lg font-semibold text-white mb-2">
              {domain.title}
            </h3>

            {/* DESC */}
            <p className="text-gray-400 text-sm">
              {domain.desc}
            </p>

            {/* GLOW */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 
              bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-xl rounded-2xl"></div>
          </div>
        ))}
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes beamMove {
          0% { transform: translateX(-100%); opacity: 0; }
          30% { opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }

        .animate-beam {
          animation: beamMove 3s linear infinite;
        }

        @keyframes sweep {
          0% { transform: translateX(-100%) skewX(-20deg); }
          100% { transform: translateX(300%) skewX(-20deg); }
        }

        .group:hover .group-hover\\:animate-sweep {
          animation: sweep 1s ease forwards;
        }
      `}</style>

    </section>
  );
}

export default Domains;
import React from "react";
import GridBackground from "../ui/GridBackground";

function Team() {
  const teamMembers = [
    {
      name: "Secretary Name",
      role: "Secretary",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Joint Secretary",
      role: "Joint Secretary",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Member 1",
      role: "Technical Team",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Member 2",
      role: "Design Team",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-[#020617] to-black py-20 px-6 overflow-hidden">

      {/* BACKGROUND */}
      <GridBackground />
      <div className="absolute inset-0 bg-black/70"></div>

      {/* HEADING */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Meet Our <span className="text-cyan-400">Team</span>
        </h2>
        <p className="text-gray-400 mt-4">
          The people behind innovation and execution.
        </p>
      </div>

      {/* TEAM GRID */}
      <div className="relative z-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 
            hover:border-cyan-400/40 transition duration-300 hover:scale-105 text-center overflow-hidden"
          >

            {/* IMAGE */}
            <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-2 border-cyan-400/40 group-hover:border-cyan-400 transition">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* NAME */}
            <h3 className="text-lg font-semibold text-white">
              {member.name}
            </h3>

            {/* ROLE */}
            <p className="text-cyan-400 text-sm mt-1">
              {member.role}
            </p>

            {/* GLOW EFFECT */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 
              bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-xl rounded-2xl"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
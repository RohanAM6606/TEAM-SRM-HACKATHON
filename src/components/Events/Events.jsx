import React from "react";
import GridBackground from "../ui/GridBackground";

import ideaImg from "./idea.jpg";
import semiImg from "./semi.jpg";
import hackImg from "./hack.jpg";

const events = [
  {
    title: "Ideathon 6.0",
    date: "Feb 2026",
    desc: "A platform to brainstorm innovative ideas and build impactful solutions.",
    participants: "200+",
    prize: "₹25K+",
    img: ideaImg,
  },
  {
    title: "Semicolon 11.0",
    date: "Oct 2025",
    desc: "Coding competition focused on logic building and problem solving.",
    participants: "100+",
    prize: "₹50,000",
    img: semiImg,
  },
  {
    title: "Hackathon 9.0",
    date: "April 2025",
    desc: "National-level hackathon to build real-world projects in limited time.",
    participants: "300+",
    prize: "₹2L+",
    img: hackImg,
  },
];

function Events() {
  return (
    <section className="relative min-h-screen bg-black py-20 px-6 overflow-hidden">

      {/* BACKGROUND */}
      <GridBackground />
      <div className="absolute inset-0 bg-black/80"></div>

      {/* HEADING */}
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Our <span className="text-cyan-400">Events</span>
        </h2>
      </div>

      {/* TIMELINE LINE */}
      <div className="absolute left-1/2 top-0 h-full w-[2px] bg-cyan-400/30"></div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-20">

        {events.map((event, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >

            {/* 🖼️ IMAGE SIDE */}
            <div className="w-full lg:w-1/2 p-6">
              <div className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/40 transition">

                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-500"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

                {/* title overlay */}
                <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                  {event.title}
                </div>

                {/* glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition 
                bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-xl"></div>
              </div>
            </div>

            {/* 🔵 DOT */}
            <div className="relative z-20 w-6 h-6 bg-cyan-400 rounded-full border-4 border-black shadow-[0_0_15px_#22d3ee]"></div>

            {/* 📦 CONTENT SIDE */}
            <div className="w-full lg:w-1/2 p-6">
              <div className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 
              hover:border-cyan-400/40 transition duration-300">

                <h3 className="text-2xl font-semibold text-white mb-2">
                  {event.title}
                </h3>

                <p className="text-cyan-400 text-sm mb-4">📅 {event.date}</p>

                <p className="text-gray-400 mb-6">
                  {event.desc}
                </p>

                {/* stats */}
                <div className="flex gap-4 mb-6">
                  <div className="bg-white/10 px-4 py-3 rounded-lg text-center">
                    <p className="text-white font-semibold">{event.participants}</p>
                    <p className="text-xs text-gray-400">Participants</p>
                  </div>

                  <div className="bg-white/10 px-4 py-3 rounded-lg text-center">
                    <p className="text-white font-semibold">{event.prize}</p>
                    <p className="text-xs text-gray-400">Prize Pool</p>
                  </div>
                </div>

              

                {/* glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 
                bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-xl rounded-2xl"></div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;
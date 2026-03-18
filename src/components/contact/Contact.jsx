import React from "react";
import GridBackground from "../ui/GridBackground";
import { Mail, MapPin, Send, Linkedin, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#020617] via-[#020b1f] to-black text-white px-6 py-16 overflow-hidden">

      {/* 🔵 TOP GLOW LINE */}
      <div className="absolute top-0 left-0 w-full h-[2px] 
        bg-gradient-to-r from-transparent via-cyan-400 to-transparent 
        opacity-80 blur-[1px]" />

      {/* 🌌 GRID LINE EFFECT */}
      <div className="absolute top-0 left-0 w-full h-16 
        bg-[linear-gradient(to_right,rgba(0,255,255,0.15)_1px,transparent_1px)] 
        bg-[size:40px_1px] opacity-40" />

      {/* ⚡ ANIMATED LIGHT BEAM */}
      <div className="absolute top-0 left-0 w-full h-[2px] overflow-hidden">
        <div className="w-40 h-full bg-cyan-400 blur-sm animate-topBeam"></div>
      </div>

      {/* 🌌 BACKGROUND */}
      <GridBackground />
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            TEAM SRM HACKATHON
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            We organize hackathons, ideathons, workshops, and technical events
            that help students develop real world skills and turn ideas into impact.
          </p>

          <div className="space-y-3 text-gray-400 text-sm">
            <p className="flex items-center gap-2">
              <MapPin size={16} className="text-cyan-400" />
              SRMIST, Kattankulathur
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} className="text-cyan-400" />
              rohan02aug@gmail.com
            </p>
          </div>
        </div>

        {/* CENTER */}
        <div>
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">
            Quick Links
          </h3>

          <div className="grid grid-cols-2 gap-4 text-gray-400">
            <a href="#" className="hover:text-cyan-400 transition">About</a>
            <a href="#" className="hover:text-cyan-400 transition">Events</a>
            <a href="#" className="hover:text-cyan-400 transition">Team</a>
            <a href="#" className="hover:text-cyan-400 transition">Domain</a>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">
            Stay Updated
          </h3>

          <p className="text-gray-400 mb-6">
            Subscribe to get updates about our events, and tech workshops.
          </p>

          <div className="flex items-center bg-white/5 border border-white/10 rounded-xl p-2 backdrop-blur-lg">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent outline-none text-sm px-3 text-white placeholder-gray-500"
            />
            <button className="bg-gradient-to-r from-blue-500 to-cyan-400 p-3 rounded-lg hover:scale-105 transition">
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="relative z-10 mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* SOCIALS */}
        <div className="flex gap-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition cursor-pointer">
            <Linkedin size={18} />
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition cursor-pointer">
            <Instagram size={18} />
          </div>
        </div>

        {/* COPYRIGHT */}
        <p className="text-gray-500 text-sm text-center">
          © 2026 TEAM SRM HACKATHON, SRMIST KTR. All rights reserved.
        </p>
      </div>

      {/* 🔥 ANIMATION */}
      <style>{`
        @keyframes topBeam {
          0% { transform: translateX(-100%); opacity: 0; }
          30% { opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translateX(200%); opacity: 0; }
        }

        .animate-topBeam {
          animation: topBeam 3s linear infinite;
        }
      `}</style>

    </footer>
  );
}

export default Footer;
import React, { useState, useEffect } from "react";
import logoImage from "../../assets/images/hack-logo.png";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("domains");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "domains", label: "Domains" },
    { id: "events", label: "Events" },
    { id: "teams", label: "Teams" },
    { id: "contact", label: "Contact Us" },
  ];

  const handleNavClick = (item) => {
    setActiveSection(item.id);
    setMenuOpen(false);

    const element = document.querySelector(`[data-section="${item.id}"]`);

    if (element) {
      const offsetTop = element.offsetTop - 80;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-0" : "py-2"
      }`}
    >
      <div
        className={`mx-4 md:mx-8 lg:mx-12 rounded-2xl transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-blue-950/80 shadow-2xl shadow-blue-500/20 border border-blue-500/20"
            : "backdrop-blur-lg bg-blue-950/60 shadow-xl border border-blue-500/10"
        }`}
      >
        {/* Glow Border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-400/20 opacity-40 blur-md"></div>

        <div className="relative flex items-center justify-between px-6 md:px-10 py-4">

          {/* Logo */}
          <div
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/40 rounded-full blur-lg group-hover:bg-blue-400/60 transition"></div>

              <img
                src={logoImage}
                alt="Logo"
                className="relative w-9 h-9 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]"
              />
            </div>

            <h1 className="text-white font-extrabold tracking-wider text-base md:text-lg">
              TEAM SRM{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                HACKATHON
              </span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`relative px-5 py-2 rounded-xl font-semibold transition-all duration-300 group ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <span
                  className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/40"
                      : "bg-white/5 opacity-0 group-hover:opacity-100"
                  }`}
                ></span>

                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden relative w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="relative w-5 h-3.5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-4 space-y-2 pt-4">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`
                  block w-full text-left px-4 py-3 rounded-xl font-bold
                  transition-all duration-300 transform
                  ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-blue-500 to-cyan-950 text-white shadow-lg shadow-blue-500/30"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }
                `}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: menuOpen
                    ? "slideIn 0.3s ease-out forwards"
                    : "none",
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
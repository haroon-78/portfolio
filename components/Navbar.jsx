"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  // Detect active section on scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let currentSection = "Home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          currentSection =
            section.getAttribute("id").charAt(0).toUpperCase() +
            section.getAttribute("id").slice(1);
        }
      });

      if (window.scrollY < 100) {
        currentSection = "Home";
      }

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <h1 className="text-2xl font-bold text-white cursor-pointer">
            Haroon<span className="text-blue-500">.Dev</span>
          </h1>

          {/* Nav Links */}
          <ul className="hidden md:flex gap-8 text-gray-300 font-medium">

            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  onClick={() => setActive(link.name)}
                  className={`relative group transition duration-300
                    ${
                      active === link.name
                        ? "text-blue-500"
                        : "hover:text-blue-500"
                    }`}
                >
                  {link.name}

                  {/* Underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300
                    ${
                      active === link.name
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              </li>
            ))}

          </ul>

          {/* Button */}
          <button className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition duration-300 px-5 py-2 rounded-xl text-white font-medium shadow-lg shadow-blue-600/20">
            Hire Me
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
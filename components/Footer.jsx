import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-gray-300 pt-10 pb-5">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* About */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Haroon
              <span className="text-blue-500"> Portfolio</span>
            </h2>

            <p className="text-sm text-slate-400 leading-7">
              I am a Front-End Web Developer skilled in React.js,
              Next.js, and modern UI design. I build responsive
              and user-friendly websites.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#home" className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-blue-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-blue-400 transition">
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-blue-400 transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-blue-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Follow Me
            </h3>

            <div className="flex gap-4 text-xl">

              <a
                href="https://github.com/haroon-78"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-slate-800 transition hover:-translate-y-1"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/haroon7860/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-blue-600 transition hover:-translate-y-1"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:example@gmail.com"
                className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-red-500 transition hover:-translate-y-1"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://facebook.com/Haroon abbasi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-blue-500 transition hover:-translate-y-1"
              >
                <FaFacebook />
              </a>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-10 pt-5 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Haroon Portfolio.
          All rights reserved.
        </div>

      </div>
    </footer>
  );
}
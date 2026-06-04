"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";

import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Tilt from "react-parallax-tilt";

const Hero = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center overflow-hidden relative pt-24">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full relative z-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="inline-block bg-blue-600/20 text-blue-400 px-5 py-2 rounded-full text-sm border border-blue-500/20">
              🚀 Front-End Web Developer
            </span>

            <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
              Hi, I’m <br />
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Haroon Abbasi
              </span>
            </h1>

            {/* Typing Animation */}
            <div className="mt-4 text-xl text-slate-300">
              <TypeAnimation
                sequence={[
                  "Frontend Developer 💻",
                  2000,
                  "React Developer ⚛️",
                  2000,
                  "Next.js Developer 🚀",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="text-slate-400 text-lg mt-6 max-w-xl leading-8">
              I build modern, responsive and user-friendly web applications using
              React.js, Next.js and Tailwind CSS.
            </p>

            {/* COUNTERS */}
            <div className="flex gap-8 mt-8">
              <div>
                <h2 className="text-3xl font-bold text-blue-400">
                  <CountUp end={1} duration={2} />+
                </h2>
                <p className="text-sm text-slate-400">Years Experience</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-400">
                  <CountUp end={20} duration={2} />+
                </h2>
                <p className="text-sm text-slate-400">Projects</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-400">
                  <CountUp end={10} duration={2} />+
                </h2>
                <p className="text-sm text-slate-400">Clients</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8 flex-wrap">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-semibold transition hover:scale-105 shadow-lg shadow-blue-600/20">
                Hire Me
              </button>

             <a href="/cv/Muhammad_Haroon_Sagheer_Resume.docx"> <button className="border border-slate-700 hover:border-blue-500 px-8 py-4 rounded-2xl font-semibold transition hover:bg-slate-900">
                Download CV
              </button>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 mt-10">
             <a href="https://github.com/haroon-78"> <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-2xl hover:bg-slate-800 cursor-pointer transition hover:-translate-y-1">
                <FaGithub />
              </div></a>

             <a href="https://www.linkedin.com/in/haroon7860/"><div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-2xl hover:bg-blue-600 cursor-pointer transition hover:-translate-y-1">
                <FaLinkedin />
              </div></a> 

              <a href="https://wa.me/923093480304" target="_blank"><div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-2xl hover:bg-green-600 cursor-pointer transition hover:-translate-y-1">
                <FaWhatsapp />
              </div></a>
            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >

            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
              <div className="relative w-[550px] h-[550px] flex items-center justify-center">

                {/* ORBIT CIRCLE */}
                <div className="absolute w-[450px] h-[450px] rounded-full border border-blue-500/20 animate-spin [animation-duration:18s]" />

                {/* ICON ORBITS */}
                <div className="absolute w-[450px] h-[450px] animate-spin [animation-duration:18s]">

                  <OrbitIcon icon={<FaReact />} color="text-cyan-400" position="top-0 left-1/2 -translate-x-1/2" />
                  <OrbitIcon icon={<SiNextdotjs />} color="text-white" position="top-12 right-10" />
                  <OrbitIcon icon={<FaGithub />} color="text-white" position="right-0 top-1/2 -translate-y-1/2" />
                  <OrbitIcon icon={<SiTailwindcss />} color="text-cyan-400" position="bottom-12 right-10" />
                  <OrbitIcon icon={<FaBootstrap />} color="text-purple-500" position="bottom-0 left-1/2 -translate-x-1/2" />
                  <OrbitIcon icon={<FaHtml5 />} color="text-orange-500" position="bottom-12 left-10" />
                  <OrbitIcon icon={<FaCss3Alt />} color="text-blue-500" position="left-0 top-1/2 -translate-y-1/2" />

                </div>

                {/* Glow */}
                <div className="absolute w-[380px] h-[380px] bg-blue-500/20 rounded-full blur-[120px]" />

                {/* Profile Image */}
                <div className="relative w-[320px] h-[320px] rounded-full overflow-hidden border-[6px] border-blue-500 shadow-2xl shadow-blue-500/30 z-50 hover:scale-105 transition duration-500">

                  <Image
                    src="/images/image.png"
                    alt="Profile Image"
                    width={320}
                    height={320}
                    priority
                    className="w-full h-full object-cover rounded-full"
                  />

                </div>

              </div>
            </Tilt>

          </motion.div>

        </div>
      </div>

      {/* ✅ FIXED SCROLL INDICATOR (PROPER WORKING) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">

        <span className="text-sm text-slate-200 tracking-widest">
          Scroll Down
        </span>

        <div className="mt-2 w-5 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-blue-400 rounded-full animate-bounce mt-1"></div>
        </div>

      </div>

    </section>
  );
};

/* ORBIT ICON COMPONENT */
const OrbitIcon = ({ icon, color, position }) => {
  return (
    <div className={`absolute ${position}`}>
      <div className={`w-14 h-14 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-2xl ${color} shadow-lg hover:scale-110 transition`}>
        {icon}
      </div>
    </div>
  );
};

export default Hero;
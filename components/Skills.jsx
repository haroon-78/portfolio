import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
  },
  {
    name: "React.js",
    icon: <FaReact />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center">
          <p className="text-blue-500 uppercase tracking-widest font-semibold">
            My Skills
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Technologies I Work With
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I specialize in creating modern,
            responsive and user-friendly web
            applications using latest technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col items-center justify-center hover:border-blue-500 hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl text-blue-500">
                {skill.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                {skill.name}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;
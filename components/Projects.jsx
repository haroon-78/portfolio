import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "School Management System",
    description: "Modern school management website with responsive UI design.",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80",
    tech: ["React.js", "Tailwind CSS"],
    github: "#",
    live: "#",
  },

  {
    title: "AI Career Counselor",
    description: "AI-powered web app for career recommendations and guidance.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    tech: ["React.js", "AI", "Tailwind"],
    github: "#",
    live: "#",
  },

  {
    title: "Chat Application",
    description: "Modern responsive real-time chat application UI.",
    image:
      "https://images.unsplash.com/photo-1611746869696-d09bce200020?auto=format&fit=crop&w=1200&q=80",
    tech: ["Next.js", "Tailwind"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center">
          <p className="text-blue-500 uppercase tracking-[4px] font-semibold">
            My Projects
          </p>

          <h2 className="text-4xl font-bold mt-3">Featured Work</h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my modern and responsive web development projects.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500 hover:-translate-y-2 transition duration-300"
            >
              {/* Image */}
              <div className="relative h-[220px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold">{project.title}</h3>

                <p className="text-gray-400 mt-3 leading-7">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-5 py-3 rounded-xl transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl transition"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;
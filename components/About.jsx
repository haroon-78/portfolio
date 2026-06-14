import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div className="flex justify-center">
            <div className="relative w-[350px] h-[400px] rounded-3xl overflow-hidden border border-slate-700">

              <Image
                    src="/images/image.png"
                    alt="Profile Image"
                    width={320}
                    height={320}
                    priority
                    className="w-full h-full object-cover"
              />

            </div>
          </div>

          {/* Right Content */}
          <div>
            <p className="text-blue-500 font-semibold uppercase tracking-widest">
              About Me
            </p>

            <h2 className="text-4xl font-bold mt-3">
              Who Am I?
            </h2>

            <p className="text-gray-400 mt-6 leading-8">
              I am a passionate Front-End Web Developer
              with hands-on experience in HTML, CSS,
              JavaScript, React.js, Next.js and
              Tailwind CSS. I love building modern,
              responsive and interactive websites.
            </p>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 gap-5 mt-8">

              <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 hover:border-blue-500 transition">
                <h3 className="text-xl font-semibold">
                  1+ Year Experience
                </h3>
                <p className="text-gray-400 mt-2">
                  Javascript Development & Projects
                </p>
              </div>

              <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 hover:border-blue-500 transition">
                <h3 className="text-xl font-semibold">
                  Front-End Internship
                </h3>
                <p className="text-gray-400 mt-2">
                  React.js + Tailwind CSS
                </p>
              </div>

            </div>

            <button className="mt-8 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition">
              Read More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
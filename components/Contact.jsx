import {
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center">
          <p className="text-blue-500 uppercase tracking-[4px] font-semibold">
            Contact Me
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Let’s Work Together
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to work
            together? Feel free to contact me.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-16">

          {/* Left Side */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <h3 className="text-2xl font-bold">
              Contact Information
            </h3>

            <div className="mt-8 space-y-6">

              <div className="flex items-center gap-4">
                <div className="bg-blue-600 p-4 rounded-xl">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Email
                  </h4>

                  <p className="text-gray-400">
                    yourgmail@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-600 p-4 rounded-xl">
                  <FaWhatsapp />
                </div>

                <div>
                  <h4 className="font-semibold">
                    WhatsApp
                  </h4>

                  <p className="text-gray-400">
                    +92 300 0000000
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-red-400 p-4 rounded-xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Location
                  </h4>

                  <p className="text-gray-400">
                    Rawalpindi, Pakistan
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <h3 className="text-2xl font-bold mb-6">
              Send Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
              ></textarea>

              <button
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition font-semibold"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
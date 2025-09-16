import { motion } from "framer-motion";
import { Phone, Mail, Linkedin, Github, MapPin, Clock, MessageSquare } from "lucide-react";

export default function Contact() {
  const fadeIn = (direction = "up", delay = 0) => ({
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { delay, duration: 0.6, ease: "easeOut" },
    },
  });

  return (
    <section className="min-h-screen py-20 px-6 md:px-12 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Section - Contact Info */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-gray-900/60 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gray-700"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-purple-400 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-400 mb-8">
            Feel free to reach out through any of these channels. I typically
            respond within 24 hours.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg hover:shadow-md hover:shadow-purple-600/30 transition">
              <Phone className="text-green-400" /> <span>+91 7724818982</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg hover:shadow-md hover:shadow-purple-600/30 transition">
              <Mail className="text-blue-400" />{" "}
              <span>ap7463015@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg hover:shadow-md hover:shadow-purple-600/30 transition">
              <Linkedin className="text-blue-500" /> <span>AmanPatel</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg hover:shadow-md hover:shadow-purple-600/30 transition">
              <Github className="text-gray-300" /> <span>AmanPatel01</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg hover:shadow-md hover:shadow-purple-600/30 transition">
              <MapPin className="text-red-400" /> <span>Bhopal, India</span>
            </div>
          </div>

          {/* Availability */}
          <div className="mt-8 bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-gray-300">
              <Clock className="text-yellow-400" /> Response Time:{" "}
              <span className="text-white font-medium">Within 24 hours</span>
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              Preferred Contact: WhatsApp / Email
            </p>
            <p className="text-gray-400 text-sm">Time Zone: IST (UTC +5:30)</p>
          </div>
        </motion.div>

        {/* Right Section - Contact Form */}
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-gray-900/60 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gray-700"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-purple-400 mb-6">
            Send a Message
          </h2>
          <form className="space-y-4">
            <div>
              <label className="text-sm text-gray-400">Your Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                rows="5"
                placeholder="Tell me about your project or how I can help..."
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-white shadow-lg shadow-purple-600/30 transition"
            >
              <MessageSquare /> Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

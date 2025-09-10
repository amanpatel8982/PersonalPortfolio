import React from "react";
import {
  IoPersonOutline,
  IoMailOutline,
  IoChatbubbleEllipsesOutline,
  IoShareSocialOutline,
  IoPaperPlaneOutline,
} from "react-icons/io5";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center pt-28 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/50 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/50 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>

      <main className="w-full max-w-6xl mx-auto z-10 grid grid-cols-1 md:grid-cols-2  items-center">

          {/* Right Section - Image + Motion Icons */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center"
        >
          {/* Image */}
          <img
            src="Contact1.jpg"
            alt="Contact"
            className="rounded-2xl shadow-lg shadow-purple-500/30 h-145  w-276 "
          />

          {/* Floating Icons */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute top-10 left-12 bg-purple-600 p-3 rounded-full text-white shadow-lg"
          >
            <FaLinkedin size={22} />
          </motion.div>

          <motion.div
            animate={{ x: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
            className="absolute bottom-16 right-12 bg-pink-500 p-3 rounded-full text-white shadow-lg"
          >
            <FaInstagram size={22} />
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 1 }}
            className="absolute bottom-24 left-16 bg-gray-800 p-3 rounded-full text-white shadow-lg"
          >
            <FaGithub size={22} />
          </motion.div>
        </motion.div>

        {/* Left Section - Form */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-black/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 space-y-8 shadow-lg"
        >
          <div className="text-center mb-4">
            <h1 className="text-4xl font-bold font-serif bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent mb-2">
              Contact Me
            </h1>
            <p className="text-gray-200">
              Got a question? Send me a message and I'll get back to you soon.
            </p>
          </div>

          {/* Get in Touch Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-white">Get in Touch</h2>
              <IoShareSocialOutline className="text-2xl text-gray-400" />
            </div>
            <p className="text-gray-100 mb-6 text-sm">
              Have something to discuss? Send me a message and let's talk.
            </p>

            <form action="#" className="space-y-5">
              {/* Name Input */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <IoPersonOutline />
                </span>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-black/10 text-white border border-gray-700/50 rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <IoMailOutline />
                </span>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-black/10 text-white border border-gray-700/50 rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                />
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <span className="absolute left-4 top-5 text-gray-400">
                  <IoChatbubbleEllipsesOutline />
                </span>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full bg-black/10 text-white border border-gray-700/50 rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 text-white font-semibold py-3 rounded-lg transition-all duration-300"
              >
                <IoPaperPlaneOutline className="text-xl" />
                Send Message
              </button>
            </form>
          </div>
        </motion.div>

      
      </main>
    </div>
  );
};

export default Contact;

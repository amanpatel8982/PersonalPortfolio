import { useState } from "react";
import {
  Phone,
  Mail,
  Linkedin,
  Github,
  Instagram,
  MapPin,
  Clock,
  MessageSquare,
  Sparkles,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const contactLinks = [
  { icon: Phone, label: "Phone", value: "+91 7724818982", href: "tel:+917724818982", color: "text-green-400" },
  { icon: Mail, label: "Email", value: "ap7463015@gmail.com", href: "mailto:ap7463015@gmail.com", color: "text-blue-400" },
  { icon: Linkedin, label: "LinkedIn", value: "Aman Patel", href: "https://www.linkedin.com/in/aman-patel7724/", color: "text-blue-500" },
  { icon: Github, label: "GitHub", value: "amanpatel8982", href: "https://github.com/amanpatel8982", color: "text-white" },
  { icon: Instagram, label: "Instagram", value: "Instagram Profile", href: "https://www.instagram.com/", color: "text-pink-400" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "98d31047-c9ae-4a07-aec8-7c37153acfaa",
          from_name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-transparent px-4 py-24 text-white sm:px-6 lg:px-10">
      <motion.div
        animate={{ x: [0, 90, 0], y: [0, -45, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-24 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -90, 0], y: [0, 55, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/10 px-5 py-2 text-xs font-semibold text-cyan-200 backdrop-blur-xl sm:text-sm">
            <Sparkles size={16} />
            Let’s Connect
          </p>

          <h2 className="font-serif text-4xl font-black sm:text-5xl md:text-6xl">
            Contact{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Have a project, internship opportunity, or collaboration idea? Send me a message directly.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-8"
          >
            <h3 className="text-2xl font-black text-cyan-300">Get in Touch</h3>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              I usually respond within 24 hours. Click any option below to connect directly.
            </p>

            <div className="mt-8 space-y-4">
              {contactLinks.map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    initial={{ opacity: 0, x: -45 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.04, x: 8 }}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/70 p-4 transition hover:border-cyan-300/40 hover:bg-white/10"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500/20 to-cyan-400/20">
                      <Icon size={22} className={item.color} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">{item.label}</p>
                      <p className="break-all text-sm font-semibold text-slate-200">{item.value}</p>
                    </div>
                  </motion.a>
                );
              })}

              <motion.div
                initial={{ opacity: 0, x: -45 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.45 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/70 p-4"
              >
                <MapPin className="text-red-400" />
                <span>Bhopal, India</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -45 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.55 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/70 p-4"
              >
                <Clock className="text-yellow-400" />
                <span>Response within 24 hours</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-8"
          >
            <h3 className="flex items-center gap-2 text-2xl font-black text-white">
              <MessageSquare className="text-cyan-300" />
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              {[
                { name: "name", type: "text", placeholder: "Your Name" },
                { name: "email", type: "email", placeholder: "Email Address" },
                { name: "subject", type: "text", placeholder: "Subject" },
              ].map((input, i) => (
                <motion.input
                  key={input.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  name={input.name}
                  type={input.type}
                  value={form[input.name]}
                  onChange={handleChange}
                  required
                  placeholder={input.placeholder}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 text-white outline-none transition focus:border-cyan-300/60"
                />
              ))}

              <motion.textarea
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                viewport={{ once: true }}
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell me about your project or requirement..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 text-white outline-none transition focus:border-cyan-300/60"
              />

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                disabled={status === "loading"}
                className="w-full rounded-2xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 p-[1.5px] disabled:opacity-70"
              >
                <span className="flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 font-bold text-white">
                  {status === "loading" ? "Sending..." : <><Send size={18} /> Send Message</>}
                </span>
              </motion.button>

              {status === "success" && (
                <p className="flex items-center gap-2 rounded-2xl border border-green-400/20 bg-green-400/10 px-4 py-3 text-sm text-green-300">
                  <CheckCircle size={18} /> Message sent successfully!
                </p>
              )}

              {status === "error" && (
                <p className="flex items-center gap-2 rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
                  <AlertCircle size={18} /> Error sending message.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Home, Info, Phone, Users, Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "HOME", icon: Home },
  { to: "/about", label: "ABOUT", icon: Info },
  { to: "/skill", label: "SKILL", icon: Sparkles },
  { to: "/portfolio", label: "PROJECT", icon: Users },
  { to: "/contact", label: "CONTACT", icon: Phone },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar se home page ki taraf girte hue stars */}
      <div className="pointer-events-none fixed left-0 top-[78px] z-40 h-[420px] w-full overflow-hidden">
        {[...Array(45)].map((_, i) => (
          <span
            key={i}
            className="home-falling-star"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.18}s`,
              animationDuration: `${2.8 + (i % 6) * 0.35}s`,
            }}
          />
        ))}
      </div>

      <nav className="fixed left-0  top-0 z-50 w-full overflow-hidden border-b border-cyan-300/20 bg-slate-950/85 text-white shadow-[0_10px_60px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
        <motion.div
          animate={{ x: [0, 80, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute -left-20 top-0 h-32 w-80 rounded-full bg-fuchsia-500/25 blur-3xl"
        />

        <motion.div
          animate={{ x: [0, -80, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute -right-20 top-0 h-32 w-80 rounded-full bg-cyan-400/25 blur-3xl"
        />

        <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:px-10">
          <motion.div
            onClick={() => navigate("/")}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group relative cursor-pointer select-none"
          >
            <h2 className="relative font-serif text-2xl font-black tracking-[0.12em] sm:text-3xl md:text-4xl">
              <span className="animate-gradientMove bg-gradient-to-r from-fuchsia-400 via-violet-300 to-cyan-300 bg-[length:250%_250%] bg-clip-text text-4xl text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.9)] sm:text-5xl md:text-6xl">
                A
              </span>
              <span className="bg-gradient-to-r from-white via-slate-200 to-violet-200 bg-clip-text text-transparent">
                MAN
              </span>{" "}
              <span className="animate-gradientMove bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-400 bg-[length:250%_250%] bg-clip-text text-4xl text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.9)] sm:text-5xl md:text-6xl">
                P
              </span>
              <span className="bg-gradient-to-r from-white via-slate-200 to-cyan-100 bg-clip-text text-transparent">
                ATEL
              </span>
            </h2>
          </motion.div>

          <div className="hidden items-center gap-4 lg:flex">
            {navLinks.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `group relative overflow-hidden rounded-full p-[1.5px] transition-all duration-500 ${
                    isActive
                      ? "bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400"
                      : "bg-gradient-to-r from-white/10 via-white/5 to-white/10 hover:from-fuchsia-500 hover:via-violet-500 hover:to-cyan-400"
                  }`
                }
              >
                {({ isActive }) => (
                  <div
                    className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold tracking-wide ${
                      isActive
                        ? "bg-slate-950 text-cyan-300"
                        : "bg-slate-950/90 text-slate-300 group-hover:text-white"
                    }`}
                  >
                    <Icon size={17} className="text-violet-300" />
                    <span>{label}</span>
                  </div>
                )}
              </NavLink>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-2xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 p-[1.5px] lg:hidden"
          >
            <span className="flex rounded-2xl bg-slate-950 p-2.5 text-white">
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -25, opacity: 0 }}
            className="fixed left-0 top-[76px] z-50 w-full bg-slate-950/95 px-4 py-6 text-white backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl bg-white/10 p-[1.5px]"
                >
                  <div className="flex items-center gap-3 rounded-2xl bg-slate-950 px-5 py-4 font-bold">
                    <Icon size={21} className="text-violet-300" />
                    {label}
                  </div>
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .home-falling-star {
          position: absolute;
          top: -20px;
          width: 4px;
          height: 4px;
          border-radius: 999px;
          background: white;
          box-shadow:
            0 0 10px #ffffff,
            0 0 22px #22d3ee,
            0 0 35px #a855f7;
          animation: starRain linear infinite;
        }

        .home-falling-star::after {
          content: "";
          position: absolute;
          top: -45px;
          left: 50%;
          width: 1px;
          height: 48px;
          transform: translateX(-50%);
          background: linear-gradient(to top, rgba(255,255,255,0.9), transparent);
        }

        @keyframes starRain {
          0% {
            transform: translateY(-40px) translateX(0) scale(0.6);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          100% {
            transform: translateY(430px) translateX(55px) scale(1);
            opacity: 0;
          }
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradientMove {
          animation: gradientMove 4s ease infinite;
        }
      `}</style>
    </>
  );
};

export default Navbar;
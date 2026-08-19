import { useCallback, useEffect, useMemo, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  Info,
  Phone,
  BriefcaseBusiness,
  Menu,
  X,
  Sparkles,
  FolderGit2,
  Award,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import useDialog from "../hooks/useDialog";

const navLinks = [
  {
    to: "/",
    label: "Home",
    icon: Home,
  },
  {
    to: "/about",
    label: "About",
    icon: Info,
  },
  {
    to: "/experience",
    label: "Experience",
    icon: BriefcaseBusiness,
  },
  {
    to: "/skill",
    label: "Skills",
    icon: Sparkles,
  },
  {
    to: "/portfolio",
    label: "Projects",
    icon: FolderGit2,
  },
  {
    to: "/certificate",
    label: "Certificates",
    icon: Award,
  },
  {
    to: "/contact",
    label: "Contact",
    icon: Phone,
  },
];

const homeSectionIds = {
  "/about": "about",
  "/experience": "experience",
  "/skill": "skill",
  "/portfolio": "portfolio",
  "/certificate": "certificate",
  "/contact": "contact",
};

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = useCallback(() => setIsOpen(false), []);
  const { dialogRef, closeButtonRef } = useDialog(isOpen, closeMenu);

  /*
   * useMemo prevents star positions from changing
   * whenever the component re-renders.
   */
  const stars = useMemo(
    () =>
      Array.from({ length: 16 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        delay: `${index * 0.2}s`,
        duration: `${3 + (index % 6) * 0.4}s`,
        size: `${2 + (index % 3)}px`,
      })),
    []
  );

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1280px)");

    const closeOnDesktop = (event) => {
      if (event.matches) closeMenu();
    };

    desktopQuery.addEventListener("change", closeOnDesktop);

    return () => {
      desktopQuery.removeEventListener("change", closeOnDesktop);
    };
  }, [closeMenu]);

  const handleLogoClick = () => {
    closeMenu();

    if (pathname === "/") {
      const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth";
      window.scrollTo({ top: 0, behavior });
      return;
    }

    navigate("/");
  };

  const handleNavClick = (event, to) => {
    const sectionId = homeSectionIds[to];
    const shouldScrollOnHome = pathname === "/" && (to === "/" || sectionId);

    if (!shouldScrollOnHome) {
      closeMenu();
      return;
    }

    event.preventDefault();
    closeMenu();

    window.requestAnimationFrame(() => {
      const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth";

      if (to === "/") {
        window.scrollTo({ top: 0, behavior });
      } else {
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior, block: "start" });
        else navigate(to);
      }
    });
  };

  return (
    <>
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#030712]/90 text-white shadow-[0_10px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/80 to-cyan-300/80" />
        {/* Falling Stars */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {stars.map((star) => (
            <span
              key={star.id}
              className="navbar-star"
              style={{
                left: star.left,
                width: star.size,
                height: star.size,
                animationDelay: star.delay,
                animationDuration: star.duration,
              }}
            />
          ))}
        </div>

        {/* Background Glow */}
        <motion.div
          animate={{
            x: [0, 60, 0],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -left-24 top-0 h-24 w-72 rounded-full bg-fuchsia-500/20 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -60, 0],
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-24 top-0 h-24 w-72 rounded-full bg-cyan-400/20 blur-3xl"
        />

        {/* Navbar Content */}
        <div className="relative z-10 mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:h-[76px] sm:px-6 lg:px-8">
          {/* Logo */}
          <motion.button
            type="button"
            onClick={handleLogoClick}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-3"
            aria-label="Go to home page"
          >
            {/* Logo Icon */}
            <div className="relative flex h-10 w-10 items-center justify-center rounded-[14px] bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 p-[1.5px] shadow-[0_0_25px_rgba(139,92,246,0.3)] transition duration-300 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.35)] sm:h-11 sm:w-11">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-950">
                <span className="bg-gradient-to-br from-fuchsia-300 to-cyan-300 bg-clip-text font-serif text-xl font-black text-transparent">
                  AP
                </span>
              </div>
              <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-slate-950 bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.85)]" />
            </div>

            {/* Logo Text */}
            <div className="text-left leading-none">
              <span className="block font-serif text-lg font-black leading-none tracking-wide sm:text-2xl">
                <span className="bg-gradient-to-r from-fuchsia-400 via-violet-300 to-cyan-300 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradientMove">
                  Aman
                </span>{" "}
                <span className="text-white">Patel</span>
              </span>

              <p className="mt-1 hidden text-[10px] font-medium uppercase tracking-[0.25em] text-slate-400 sm:block">
                Full Stack Developer
              </p>
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-0.5 rounded-2xl border border-white/10 bg-white/[0.055] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_35px_rgba(0,0,0,0.2)] backdrop-blur-xl xl:flex">
            {navLinks.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                onClick={(event) => handleNavClick(event, to)}
                className={({ isActive }) =>
                  `group relative rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <div className="relative flex items-center gap-1.5 rounded-xl px-3 py-2.5 text-[13px] font-semibold transition-colors 2xl:gap-2 2xl:px-3.5 2xl:text-sm">
                    {/* Active Background */}
                    {isActive && (
                      <motion.div
                        layoutId="active-navbar-link"
                        className="absolute inset-0 rounded-xl border border-cyan-300/25 bg-gradient-to-r from-fuchsia-500/20 via-violet-500/20 to-cyan-400/20 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}

                    <Icon
                      size={16}
                      className={`relative z-10 transition-colors ${
                        isActive
                          ? "text-cyan-300"
                          : "text-slate-500 group-hover:text-violet-300"
                      }`}
                    />

                    <span className="relative z-10">{label}</span>
                  </div>
                )}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/[0.06] px-3.5 py-2 text-xs font-semibold text-emerald-200 2xl:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,0.9)]" />
            Available
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            type="button"
            onClick={() => setIsOpen((previousValue) => !previousValue)}
            whileTap={{ scale: 0.92 }}
            className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-white shadow-[0_8px_25px_rgba(0,0,0,0.2)] transition hover:border-cyan-300/40 hover:bg-white/10 xl:hidden ${
              isOpen ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={23} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={23} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile Backdrop */}
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm xl:hidden"
            />

            {/* Mobile Navigation Panel */}
            <motion.div
              initial={{
                y: -25,
                opacity: 0,
                scale: 0.97,
              }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1,
              }}
              exit={{
                y: -25,
                opacity: 0,
                scale: 0.97,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              ref={dialogRef}
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              tabIndex={-1}
              className="fixed left-3 right-3 top-[76px] z-50 max-h-[calc(100dvh-5.25rem)] overflow-y-auto overscroll-contain rounded-3xl border border-white/10 bg-slate-950/95 p-3 text-white shadow-[0_25px_80px_rgba(0,0,0,0.65)] backdrop-blur-xl sm:left-auto sm:right-6 sm:top-[88px] sm:w-[360px] sm:max-h-[calc(100dvh-6rem)] xl:hidden"
            >
              {/* Mobile Menu Header */}
              <div className="mb-2 flex items-center justify-between gap-3 border-b border-white/10 px-3 pb-3 pt-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
                    Navigation
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    Explore my portfolio
                  </p>
                </div>

                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close navigation menu"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-slate-300 transition hover:border-cyan-300/40 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-1.5">
                {navLinks.map(({ to, label, icon: Icon }, index) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={(event) => handleNavClick(event, to)}
                    className={({ isActive }) =>
                      `group relative overflow-hidden rounded-2xl transition-all duration-300 ${
                        isActive
                          ? "border border-violet-400/30 bg-gradient-to-r from-fuchsia-500/15 via-violet-500/15 to-cyan-400/15"
                          : "border border-transparent hover:border-white/10 hover:bg-white/[0.06]"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <motion.div
                        initial={{
                          opacity: 0,
                          x: -15,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.04,
                        }}
                        className="flex items-center gap-4 px-4 py-3.5"
                      >
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                            isActive
                              ? "bg-gradient-to-br from-fuchsia-500/25 to-cyan-400/25 text-cyan-300"
                              : "bg-white/[0.06] text-slate-400 group-hover:text-violet-300"
                          }`}
                        >
                          <Icon size={19} />
                        </div>

                        <div className="flex-1">
                          <p
                            className={`font-semibold ${
                              isActive ? "text-white" : "text-slate-300"
                            }`}
                          >
                            {label}
                          </p>
                        </div>

                        {isActive && (
                          <motion.span
                            layoutId="mobile-active-indicator"
                            className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee]"
                          />
                        )}
                      </motion.div>
                    )}
                  </NavLink>
                ))}
              </div>

              {/* Mobile Footer */}
              <div className="mt-3 border-t border-white/10 px-3 pb-1 pt-3 text-center">
                <p className="text-xs text-slate-500">
                  © {new Date().getFullYear()} Aman Patel
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .navbar-star {
          position: absolute;
          top: -15px;
          border-radius: 999px;
          background: white;
          box-shadow:
            0 0 8px #ffffff,
            0 0 16px #22d3ee,
            0 0 24px #a855f7;
          animation-name: navbarStarRain;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .navbar-star::after {
          content: "";
          position: absolute;
          top: -25px;
          left: 50%;
          width: 1px;
          height: 28px;
          transform: translateX(-50%);
          background: linear-gradient(
            to top,
            rgba(255, 255, 255, 0.7),
            transparent
          );
        }

        @keyframes navbarStarRain {
          0% {
            transform: translateY(-30px) translateX(0);
            opacity: 0;
          }

          15% {
            opacity: 0.8;
          }

          100% {
            transform: translateY(120px) translateX(25px);
            opacity: 0;
          }
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }

          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradientMove {
          animation: gradientMove 4s ease infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .navbar-star,
          .animate-gradientMove {
            animation: none;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;

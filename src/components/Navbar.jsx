import { useCallback, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Download,
  FolderGit2,
  Home,
  Info,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import { AnimatePresence, motion, useScroll } from "framer-motion";

import useDialog from "../hooks/useDialog";

const navLinks = [
  { to: "/", sectionId: "home", label: "Home", icon: Home },
  {
    to: "/portfolio",
    sectionId: "portfolio",
    label: "Projects",
    icon: FolderGit2,
  },
  {
    to: "/experience",
    sectionId: "experience",
    label: "Experience",
    icon: BriefcaseBusiness,
  },
  { to: "/skill", sectionId: "skill", label: "Skills", icon: Sparkles },
  { to: "/about", sectionId: "about", label: "About", icon: Info },
  {
    to: "/certificate",
    sectionId: "certificate",
    label: "Certificates",
    icon: Award,
  },
  { to: "/contact", sectionId: "contact", label: "Contact", icon: Phone },
];

const desktopNavLinks = navLinks.filter(
  ({ sectionId }) => sectionId !== "home" && sectionId !== "contact"
);

const pageSectionOrder = [
  "home",
  "about",
  "experience",
  "skill",
  "portfolio",
  "certificate",
  "contact",
];

const getScrollBehavior = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";

const getLinkHref = ({ sectionId }) =>
  sectionId === "home" ? "/" : `/#${sectionId}`;

export default function Navbar() {
  const navigate = useNavigate();
  const { hash, pathname } = useLocation();
  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const closeMenu = useCallback(() => setIsOpen(false), []);
  const { dialogRef, closeButtonRef } = useDialog(isOpen, closeMenu);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (pathname !== "/" || !hash) return undefined;

    let attempt = 0;
    let timer;
    const sectionId = decodeURIComponent(hash.slice(1));

    const scrollWhenReady = () => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: getScrollBehavior(),
          block: "start",
        });
        return;
      }

      attempt += 1;
      if (attempt < 80) timer = window.setTimeout(scrollWhenReady, 50);
    };

    timer = window.setTimeout(scrollWhenReady, 0);
    return () => window.clearTimeout(timer);
  }, [hash, pathname]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1280px)");
    const closeOnDesktop = (event) => {
      if (event.matches) closeMenu();
    };

    desktopQuery.addEventListener("change", closeOnDesktop);
    return () => desktopQuery.removeEventListener("change", closeOnDesktop);
  }, [closeMenu]);

  useEffect(() => {
    let animationFrame;
    let contentResizeObserver;

    const updateNavbar = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 16);

        if (pathname !== "/") {
          const routeSection = navLinks.find(({ to }) => to === pathname);
          setActiveSection(routeSection?.sectionId ?? "home");
          return;
        }

        const marker = window.scrollY + window.innerHeight * 0.34;
        let currentSection = "home";

        pageSectionOrder.forEach((sectionId) => {
          const section = document.getElementById(sectionId);
          const sectionTop = section
            ? section.getBoundingClientRect().top + window.scrollY
            : Number.POSITIVE_INFINITY;

          if (sectionTop <= marker) currentSection = sectionId;
        });

        const pageBottom = window.scrollY + window.innerHeight;
        const pageHeight = document.documentElement.scrollHeight;
        if (
          pageHeight > window.innerHeight + 8 &&
          pageBottom >= pageHeight - 4
        ) {
          currentSection = "contact";
        }

        setActiveSection(currentSection);
      });
    };

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });
    window.addEventListener("resize", updateNavbar);

    const mainContent = document.getElementById("main-content");
    if (mainContent && "ResizeObserver" in window) {
      contentResizeObserver = new ResizeObserver(updateNavbar);
      contentResizeObserver.observe(mainContent);
    }

    return () => {
      window.cancelAnimationFrame(animationFrame);
      contentResizeObserver?.disconnect();
      window.removeEventListener("scroll", updateNavbar);
      window.removeEventListener("resize", updateNavbar);
    };
  }, [pathname]);

  const scrollToPath = (to) => {
    const link = navLinks.find((item) => item.to === to);
    const section = link ? document.getElementById(link.sectionId) : null;

    closeMenu();

    if (pathname === "/" && section) {
      window.requestAnimationFrame(() => {
        section.scrollIntoView({
          behavior: getScrollBehavior(),
          block: "start",
        });
      });
      return;
    }

    if (link?.sectionId === "home") {
      navigate("/");
      return;
    }

    navigate({ pathname: "/", hash: `#${link?.sectionId ?? "home"}` });
  };

  const handleNavClick = (event, to) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    scrollToPath(to);
  };

  const handleLogoClick = (event) => {
    closeMenu();

    if (pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: getScrollBehavior() });
    }
  };

  const isCurrentLink = ({ to, sectionId }) =>
    pathname === "/" ? activeSection === sectionId : pathname === to;

  const getAriaCurrent = (link) => {
    if (!isCurrentLink(link)) return undefined;
    return pathname === "/" ? "location" : "page";
  };

  return (
    <header>
      <nav
        aria-label="Primary navigation"
        className={`fixed inset-x-0 top-0 z-50 border-b text-white transition-[background-color,border-color,box-shadow] duration-300 ${
          isScrolled
            ? "border-white/10 bg-[#030712]/92 shadow-[0_16px_50px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
            : "border-white/[0.07] bg-[#030712]/78 backdrop-blur-xl"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-fuchsia-500/[0.035] via-transparent to-cyan-400/[0.035]" />

        <div className="relative mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-4 px-4 sm:h-[76px] sm:px-6 lg:px-8">
          <NavLink
            to="/"
            onClick={handleLogoClick}
            className="group flex min-w-0 shrink-0 items-center gap-2.5 rounded-xl transition-transform hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950 sm:gap-3"
            aria-label="Go to the top of Aman Patel's portfolio"
          >
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 p-px shadow-[0_0_24px_rgba(139,92,246,0.25)] sm:h-11 sm:w-11">
              <span className="flex h-full w-full items-center justify-center rounded-[12px] bg-slate-950 font-serif text-lg font-black tracking-tight text-white sm:text-xl">
                AP
              </span>
              <span
                aria-hidden="true"
                className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-slate-950 bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.8)]"
              />
            </span>

            <span className="min-w-0 text-left">
              <span className="block truncate font-serif text-lg font-bold leading-none tracking-tight text-white sm:text-xl">
                Aman Patel
              </span>
              <span className="mt-1 hidden text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-400 sm:block">
                Full-Stack Engineer
              </span>
            </span>
          </NavLink>

          <div className="hidden items-center gap-0.5 rounded-2xl border border-white/[0.08] bg-white/[0.045] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] xl:flex">
            {desktopNavLinks.map((link) => {
              const Icon = link.icon;
              const isCurrent = isCurrentLink(link);

              return (
                <NavLink
                  key={link.to}
                  to={getLinkHref(link)}
                  onClick={(event) => handleNavClick(event, link.to)}
                  aria-current={getAriaCurrent(link)}
                  className={`group relative rounded-xl transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 ${
                    isCurrent ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  <span className="relative flex items-center gap-1.5 rounded-xl px-2.5 py-2.5 text-[13px] font-semibold 2xl:gap-2 2xl:px-3">
                    {isCurrent && (
                      <motion.span
                        layoutId="desktop-navbar-active"
                        className="absolute inset-0 rounded-xl border border-cyan-300/20 bg-gradient-to-r from-violet-500/20 to-cyan-400/15 shadow-[0_6px_20px_rgba(34,211,238,0.08)]"
                        transition={{ type: "spring", stiffness: 380, damping: 34 }}
                      />
                    )}
                    <Icon
                      size={15}
                      className={`relative z-10 ${
                        isCurrent
                          ? "text-cyan-300"
                          : "text-slate-500 transition-colors group-hover:text-violet-300"
                      }`}
                    />
                    <span className="relative z-10">{link.label}</span>
                  </span>
                </NavLink>
              );
            })}
          </div>

          <div className="hidden shrink-0 items-center gap-2 xl:flex">
            <motion.a
              href="/Aman_Patel_SoftwareDeveloper.pdf"
              download="Aman-Patel-Resume.pdf"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.055] px-3 text-sm font-semibold text-slate-300 transition hover:border-violet-300/30 hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
              aria-label="Download Aman Patel's resume"
            >
              <Download size={16} />
              <span>Resume</span>
            </motion.a>

            <motion.button
              type="button"
              onClick={() => scrollToPath("/contact")}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="flex h-11 items-center gap-2 rounded-xl bg-cyan-300 px-4 text-sm font-bold text-slate-950 shadow-[0_8px_28px_rgba(34,211,238,0.2)] transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Let&apos;s Talk
              <ArrowUpRight size={16} />
            </motion.button>
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-2 xl:hidden">
            <a
              href="/Aman_Patel_SoftwareDeveloper.pdf"
              download="Aman-Patel-Resume.pdf"
              className="hidden h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.055] px-3 text-sm font-semibold text-slate-200 transition hover:border-violet-300/30 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 sm:flex"
              aria-label="Download Aman Patel's resume"
            >
              <Download size={16} />
              Resume
            </a>

            <motion.button
              type="button"
              onClick={() => setIsOpen(true)}
              whileTap={{ scale: 0.94 }}
              className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition hover:border-cyan-300/35 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 ${
                isOpen ? "pointer-events-none opacity-0" : "opacity-100"
              }`}
              aria-label="Open navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              <Menu size={22} />
            </motion.button>
          </div>
        </div>

        <motion.div
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-fuchsia-500 via-violet-400 to-cyan-300"
          style={{ scaleX: scrollYProgress }}
        />
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              aria-hidden="true"
              tabIndex={-1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm xl:hidden"
            />

            <motion.div
              ref={dialogRef}
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-labelledby="mobile-navigation-title"
              tabIndex={-1}
              initial={{ y: -18, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -14, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed left-3 right-3 top-[76px] z-50 max-h-[calc(100dvh-5.25rem)] overflow-y-auto overscroll-contain rounded-3xl border border-white/10 bg-slate-950/95 p-3 text-white shadow-[0_28px_90px_rgba(0,0,0,0.68)] backdrop-blur-2xl sm:left-auto sm:right-6 sm:top-[88px] sm:w-[380px] sm:max-h-[calc(100dvh-6rem)] xl:hidden"
            >
              <div className="flex items-start justify-between gap-4 border-b border-white/10 px-3 pb-4 pt-2">
                <div>
                  <h2
                    id="mobile-navigation-title"
                    className="font-serif text-lg font-bold text-white"
                  >
                    Explore portfolio
                  </h2>
                  <div className="mt-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_9px_rgba(110,231,183,0.8)]" />
                    Available for work
                  </div>
                  <p className="mt-2 text-sm text-slate-400">
                    Projects, skills and experience
                  </p>
                </div>

                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close navigation menu"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-slate-300 transition hover:border-cyan-300/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
                >
                  <X size={20} />
                </button>
              </div>

              <nav aria-label="Mobile navigation" className="mt-3 flex flex-col gap-1">
                {navLinks.map((link, index) => {
                  const Icon = link.icon;
                  const isCurrent = isCurrentLink(link);

                  return (
                    <NavLink
                      key={link.to}
                      to={getLinkHref(link)}
                      onClick={(event) => handleNavClick(event, link.to)}
                      aria-current={getAriaCurrent(link)}
                      className={`group relative overflow-hidden rounded-2xl border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 ${
                        isCurrent
                          ? "border-violet-400/25 bg-gradient-to-r from-violet-500/20 to-cyan-400/10"
                          : "border-transparent hover:border-white/10 hover:bg-white/[0.05]"
                      }`}
                    >
                      <motion.span
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.035 }}
                        className="flex items-center gap-3 px-3 py-3"
                      >
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                            isCurrent
                              ? "bg-cyan-300/10 text-cyan-300"
                              : "bg-white/[0.05] text-slate-400 group-hover:text-violet-300"
                          }`}
                        >
                          <Icon size={18} />
                        </span>
                        <span className="min-w-0 flex-1 font-semibold text-slate-200">
                          {link.label}
                        </span>
                        {isCurrent && (
                          <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />
                        )}
                      </motion.span>
                    </NavLink>
                  );
                })}
              </nav>

              <div className="mt-3 grid grid-cols-2 gap-2 border-t border-white/10 px-1 pt-3">
                <a
                  href="/Aman_Patel_SoftwareDeveloper.pdf"
                  download="Aman-Patel-Resume.pdf"
                  className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.055] px-3 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.09] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
                >
                  <Download size={17} />
                  Resume
                </a>
                <button
                  type="button"
                  onClick={() => scrollToPath("/contact")}
                  className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cyan-300 px-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <MessageCircle size={17} />
                  Let&apos;s Talk
                </button>
              </div>

              <p className="mt-3 text-center text-xs text-slate-500">
                {"\u00A9"} {new Date().getFullYear()} Aman Patel {"\u00B7"}{" "}
                Bhopal, India
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

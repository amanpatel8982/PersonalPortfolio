import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { MotionConfig } from "framer-motion";

import Navbar from "./components/Navbar";
import useMediaQuery from "./hooks/useMediaQuery";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Skill = lazy(() => import("./pages/Skill"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));
const Certificate = lazy(() => import("./pages/Certificate"));
const Experience = lazy(() => import("./pages/Experience"));

const pageTitles = {
  "/": "Aman Patel | Full-Stack Developer",
  "/about": "About | Aman Patel",
  "/experience": "Experience | Aman Patel",
  "/skill": "Skills | Aman Patel",
  "/portfolio": "Projects | Aman Patel",
  "/certificate": "Certificates | Aman Patel",
  "/contact": "Contact | Aman Patel",
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.title = pageTitles[pathname] ?? pageTitles["/"];

    const focusFrame = window.requestAnimationFrame(() => {
      document.getElementById("main-content")?.focus({ preventScroll: true });
    });

    return () => window.cancelAnimationFrame(focusFrame);
  }, [pathname]);

  return null;
}

function PageLoader() {
  return (
    <div
      className="flex min-h-[100svh] items-center justify-center px-4 pt-20"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/80 px-5 py-4 text-sm font-semibold text-slate-300 shadow-2xl backdrop-blur-xl">
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-cyan-300/25 border-t-cyan-300" />
        Loading page...
      </div>
    </div>
  );
}

function AppContent() {
  return (
    <div className="relative isolate min-h-[100svh] overflow-x-clip bg-[#030712] text-white">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.18),transparent_35%)]"
        aria-hidden="true"
      />

      <div className="ambient-background" aria-hidden="true">
        <div className="ambient-grid" />
        <div className="ambient-sweep" />
        <div className="ambient-noise" />
      </div>

      <div className="stars-layer stars-small" aria-hidden="true" />
      <div className="stars-layer stars-medium" aria-hidden="true" />
      <div className="stars-layer stars-large" aria-hidden="true" />

      <ScrollToTop />
      <Navbar />

      <main
        id="main-content"
        tabIndex={-1}
        className="relative z-10 focus:outline-none"
      >
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default function App() {
  const isCompactScreen = useMediaQuery("(max-width: 767px)");

  return (
    <MotionConfig reducedMotion={isCompactScreen ? "always" : "user"}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </MotionConfig>
  );
}

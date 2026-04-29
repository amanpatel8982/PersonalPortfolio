import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Certificate from "./pages/Certificate";

const App = () => {
  return (
    <BrowserRouter>
      {/* 🔥 GLOBAL BACKGROUND */}
      <div className="relative min-h-screen overflow-hidden bg-[#030712] text-white">

        {/* Gradient Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.18),transparent_35%)]"></div>

        {/* Stars */}
        <div className="stars-layer stars-small" />
        <div className="stars-layer stars-medium" />
        <div className="stars-layer stars-large" />

        {/* Navbar */}
        <Navbar />

        {/* Pages */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/certificate" element={<Certificate />} />
          </Routes>
        </div>
      </div>

      {/* 🔥 GLOBAL STARS CSS */}
      <style>{`
        .stars-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .stars-small {
          background-image: radial-gradient(#ffffff 1px, transparent 1px);
          background-size: 80px 80px;
          animation: moveStars 50s linear infinite;
          opacity: 0.4;
        }

        .stars-medium {
          background-image: radial-gradient(#c084fc 1.5px, transparent 1.5px);
          background-size: 150px 150px;
          animation: moveStars 80s linear infinite reverse;
          opacity: 0.3;
        }

        .stars-large {
          background-image: radial-gradient(#22d3ee 2px, transparent 2px);
          background-size: 250px 250px;
          animation: moveStars 120s linear infinite;
          opacity: 0.2;
        }

        @keyframes moveStars {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 1000px 1000px;
          }
        }
      `}</style>
    </BrowserRouter>
  );
};

export default App;
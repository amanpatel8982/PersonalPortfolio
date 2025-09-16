import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home, Info, Phone, Users, Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-4 md:py-6 backdrop-blur-md shadow-sm z-50 bg-gradient-to-r from-gray-900 via-purple-900 to-black text-white">
        {/* Logo */}
        <h2
          onClick={() => navigate("/")}
          className="text-3xl md:text-4xl font-bold font-serif cursor-pointer text-white hover:text-indigo-700 transition"
        >
          <span className="text-4xl md:text-5xl text-purple-600 hover:shadow-[0_0_35px_rgba(147,51,234,0.9)] transition">
            A
          </span>
          MAN <span className="text-4xl md:text-5xl text-purple-600">P</span>ATEL
        </h2>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center font-medium text-[17px]">
          <Link
            to="/"
            className="relative group flex items-center gap-1 hover:text-indigo-900"
          >
            <Home size={18} className="text-indigo-700 ms-2" />
            HOME
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-indigo-700 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/about"
            className="relative group flex items-center gap-1 hover:text-indigo-900"
          >
            <Info size={18} className="text-indigo-700" />
            ABOUT
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-indigo-700 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/skill"
            className="relative group flex items-center gap-1 hover:text-indigo-900"
          >
            <Info size={18} className="text-indigo-700" />
            SKILL
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-indigo-700 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/portfolio"
            className="relative group flex items-center gap-1 hover:text-indigo-900"
          >
            <Users size={18} className="text-indigo-700" />
            PROJECT
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-indigo-700 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/contact"
            className="relative group flex items-center gap-1 hover:text-indigo-900"
          >
            <Phone size={18} className="text-indigo-700" />
            CONTACT
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-indigo-700 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-20 left-0 w-full bg-gradient-to-r from-gray-900 via-purple-900 to-black text-white shadow-lg flex flex-col items-center gap-6 py-8 z-40">
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:text-indigo-500">
            <Home size={18} /> HOME
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:text-indigo-500">
            <Info size={18} /> ABOUT
          </Link>
          <Link to="/skill" onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:text-indigo-500">
            <Info size={18} /> SKILL
          </Link>
          <Link to="/portfolio" onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:text-indigo-500">
            <Users size={18} /> PROJECT
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:text-indigo-500">
            <Phone size={18} /> CONTACT
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;

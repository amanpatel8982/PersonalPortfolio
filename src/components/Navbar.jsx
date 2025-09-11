import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Home,
  Info,
  Phone,
  Users,
 
} from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-12 py-6  backdrop-blur-md shadow-sm z-50    bg-gradient-to-r from-gray-900 via-purple-900 to-black text-white overflow-hidden">
        {/* Logo */}
        <h2
          onClick={() => navigate("/")}
          className="text-4xl font-bold font-serif ps-4 cursor-pointer text-white hover:text-indigo-700 transition"
        >
          <span className="text-5xl text-purple-600 
                       hover:shadow-[0_0_35px_rgba(147,51,234,0.9)]
                       transition">A</span>
          MAN    <span className="text-5xl text-purple-600 ">P</span>ATEL
        </h2>

        {/* Menu Items */}
        <div className="flex gap-10 items-center font-medium text-[17px]">
          <Link
            to="/"
            className="relative group flex items-center gap-1 text-white hover:text-indigo-900"
          >
            <Home size={18} className="text-indigo-700 ms-10" />
            HOME
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-indigo-700 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/about"
            className="relative group flex items-center gap-1 text-white hover:text-indigo-900"
          >
            <Info size={18} className="text-indigo-700" />
            ABOUT
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-indigo-700 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/skill"
            className="relative group flex items-center gap-1 text-white hover:text-indigo-900"
          >
            <Info size={18} className="text-indigo-700" />
            Skill
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-indigo-700 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/portfolio"
            className="relative group flex items-center gap-1 text-white hover:text-indigo-900"
          >
            <Users size={18} className="text-indigo-700" />
                   PROJECT
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-indigo-700 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/contact"
            className="relative group flex items-center gap-1 text-white hover:text-indigo-900"
          >
            <Phone  size={18} className="text-indigo-700" />
         CONTACT
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-indigo-700 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </nav>
      <div/>
    </>
  );
};

export default Navbar;

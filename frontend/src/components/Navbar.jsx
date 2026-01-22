// import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import React from "react";

const Navbar = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/services" },
    { name: "How It Works", to: "/process" },
    { name: "Testimonials", to: "/testimonials" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header id="service" className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md shadow-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-100">
              <GraduationCap className="w-6 h-6 text-blue-600" />
            </div>
            <span className="font-bold text-xl text-slate-900">
              Global<span className="text-blue-600">Study</span>
            </span>
          </Link>

        {/* Desktop Navigation */}
        <nav className="flex items-center gap-10 ">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="text-black hover:text-blue-600 transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="flex items-center gap-3">
          <Link to="/login" className="px-4 py-2 text-slate-900 hover:text-blue-600 font-medium">
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 text-white bg-blue-600  hover:bg-blue-400 rounded-full font-medium"
          >
            Get Started
          </Link>
        </div>

{/* 
          <button
            className="md:hidden p-2 text-slate-900 border-2  border-blue-600 rounded transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28}/> : <Menu size={28}/>}
          </button>
        </div>

          {isMenuOpen && (
            <div className="md:hidden w-full bg-white/30 backdrop-blur-md shadow-md border-t border-white/20">
              <nav className="flex flex-col gap-2 py-4">

              {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    className="px-4 py-2 text-slate-900 hover:text-blue-600 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="flex flex-col px-4 pt-4 gap-2">
                  <Link
                    to="/login"
                    className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-500 rounded transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-500 rounded transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </nav>

          )} */}

            </div>
      </div>
    </header>
  );
};

export default Navbar;
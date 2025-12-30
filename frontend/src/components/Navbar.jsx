import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import React from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/services" },
    { name: "How It Works", to: "/process" },
    { name: "Testimonials", to: "/testimonials" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-slate-900" />
            </div>
            <span className="font-bold text-slate-900 text-xl">
              Global<span className="text-blue-600">Study</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-slate-900 hover:text-blue-600 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-slate-900 text-sm font-medium hover:text-blue-600 border-0">
              Login
            </button>
            <button className="px-4 py-2 text-slate-900 bg-blue-200 text-sm font-medium hover:bg-blue-300">
              Get started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-900 border-2 border-blue-600 rounded"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28}/> : <Menu size={28}/>}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200">
            <nav className="flex flex-col gap-2 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="px-4 py-2 text-slate-900 hover:bg-blue-50 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <div className="flex flex-col px-4 pt-4 gap-3">
                <button className="px-4 py-2 text-white text-sm font-medium bg-blue-600 hover:bg-blue-500 border-0 rounded">
                  Login
                </button>

                <button className="px-4 py-2 text-white text-sm font-medium bg-blue-600 hover:bg-blue-500 rounded">
                  Get started
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

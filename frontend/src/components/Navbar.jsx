import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import toast from "react-hot-toast";
import RoleSelectionModal from "./modal/RoleSelection";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const {user,logout} = useAuth();
  const [isRoleModalOpen, setRoleModalOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/services" },
    { name: "How It Works", to: "/process" },
    { name: "Testimonials", to: "/testimonials" },
    { name: "Contact", to: "/contact" },
  ];

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully!");
    navigate("/");
  };

  const handleSelectRole = (role) => {
    setRoleModalOpen(false);
    if (role === "student"){
      navigate("/register");
    }else{
    navigate("/cregister");
  }
  };

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md shadow-md border-b border-slate-200">
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

          {/* Desktop CTA / User Info */}
          <div className="flex items-center gap-3">
            {user ? (
              <>

                {/* Profile */}
                <div className="relative">
                  <button onClick={toggleDropdown} className="w-10 h-10 rounded-full overflow-hidden focus:outline-none">
                    <img src="https://i.pravatar.cc/40?img=47" alt="Profile" className="w-full h-full object-cover rounded-full" />
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                  </button>

                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md z-10">
                      <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">View Profile</a>
                      <button onClick={handleLogout} className="block px-4 py-2 text-red-500 hover:bg-gray-100">Logout</button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-slate-900 hover:text-blue-600 font-medium"
                >
                  Login
                </Link>
                <button
                  onClick={() => setRoleModalOpen(true)}
                  className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-400 rounded-full font-medium"
                >
                  Get Started
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Role Selection Popup */}
      <RoleSelectionModal
        isOpen={isRoleModalOpen}
        onClose={() => setRoleModalOpen(false)}
        onSelectRole={handleSelectRole} />
    </header>
  );
}

export default Navbar;

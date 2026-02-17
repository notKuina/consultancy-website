import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import toast from "react-hot-toast";
import RoleSelectionModal from "./modal/RoleSelection";

function Navbar() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(() => localStorage.getItem("username"));

  const [isRoleModalOpen, setRoleModalOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/services" },
    { name: "How It Works", to: "/process" },
    { name: "Testimonials", to: "/testimonials" },
    { name: "Contact", to: "/contact" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("username");
    setUsername(null);
    toast.success("Logged out successfully!");
    navigate("/");
  };

  const handleSelectRole = (role) => {
    setRoleModalOpen(false);
    navigate(`/register/${role}`);
  };

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
            {username ? (
              <>
                <span className="font-medium text-gray-700">Hello, {username}</span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-white bg-red-500 hover:bg-red-400 rounded-full font-medium"
                >
                  Logout
                </button>
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

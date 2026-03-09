import { LogOut } from "lucide-react";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Toaster, toast } from "react-hot-toast";

function TopBar() {
  const navigate=useNavigate();
  const { logout }= useAuth();

  const handleLogout= ()=>{
    logout();
    toast.success("Logged out successfully!");
    navigate("/");
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="flex justify-between items-center mb-6 p-5">
      <h1 className="text-2xl font-semibold">Student Dashboard</h1>

      <div className="flex items-center space-x-4 relative">
        {/* Notification */}
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
          </svg>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">3</span>
        </div>

        {/* Profile */}
        <div className="relative">
          <button onClick={toggleDropdown} className="w-10 h-10 rounded-full overflow-hidden focus:outline-none">
            <img src="https://i.pravatar.cc/40?img=47" alt="Profile" className="w-full h-full object-cover rounded-full" />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md z-10">
              <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100">View Profile</Link>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
              <button onClick={handleLogout} className="block px-4 py-2 text-red-500 hover:bg-gray-100">Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
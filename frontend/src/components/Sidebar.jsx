// src/components/Sidebar.jsx
import React from "react";
import { GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Toaster, toast } from "react-hot-toast";

function Sidebar() {
  const navigate= useNavigate();
  const { logout }=useAuth();

  const handleLogout = ()=>{
    logout();
    toast.success("Logged out successfully!");
    navigate("/");

  }

  return (
    <aside className="w-64 bg-white shadow-md p-6">
      {/* Logo */}
      <a href="/" className="flex items-center gap-2 mb-10">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-100">
          <GraduationCap className="w-6 h-6 text-blue-600" />
        </div>

        <span className="font-bold text-xl text-slate-900">
          Global<span className="text-blue-600">Study</span>
        </span>
      </a>

      {/* Navigation */}
      <nav className="space-y-4 text-gray-600">
        <a href="#" className="hover:text-indigo-600 block">Dashboard</a>
        <a href="#" className="hover:text-indigo-600 block">My Requests</a>
        <a href="#" className="hover:text-indigo-600 block">Documents</a>
        <a href="#" className="hover:text-indigo-600 block">Profile</a>
        <button onClick={handleLogout} className="text-red-500 block hover:text-red-600">Logout</button>
      </nav>
    </aside>
  );
}

export default Sidebar;
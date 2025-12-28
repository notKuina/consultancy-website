import React, { useState } from "react";

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      {/* Centered container */}
      <div className="w-full max-w-md space-y-8 mx-auto">

        {/* Logo */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-900">Study Abroad</h1>
          <p className="mt-2 text-gray-600">Sign in to your account or create a new one</p>
        </div>

        {/* Tabs */}
        <div className="flex bg-gray-100 p-1 rounded-lg w-full">
          <button
            className={`flex-1 py-2 text-center font-medium rounded-md transition-all duration-200 ${
              activeTab === "login" ? "bg-white text-blue-900 shadow-sm" : "text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => setActiveTab("login")}
          >
            Sign In
          </button>
          <button
            className={`flex-1 py-2 text-center font-medium rounded-md transition-all duration-200 ${
              activeTab === "signup" ? "bg-white text-blue-900 shadow-sm" : "text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </button>
        </div>

        {/* Login Form */}
        {activeTab === "login" && (
          <form className="space-y-6 w-full">
            <div>
              <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="login-email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>
            <div>
              <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="login-password"
                name="password"
                type="password"
                required
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-900 focus:ring-blue-900" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-900 hover:text-blue-700">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition"
            >
              Sign In
            </button>
          </form>
        )}

        {/* Signup Form */}
        {activeTab === "signup" && (
          <form className="space-y-6 w-full">
            <div>
              <label htmlFor="signup-name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                id="signup-name"
                name="name"
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>
            <div>
              <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="signup-email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>
            <div>
              <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="signup-password"
                name="password"
                type="password"
                required
                placeholder="Create a password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>
            <div>
              <label htmlFor="signup-confirm" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                id="signup-confirm"
                name="confirm"
                type="password"
                required
                placeholder="Confirm your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>
            <div className="flex items-center">
              <input id="terms" type="checkbox" required className="rounded border-gray-300 text-blue-900 focus:ring-blue-900" />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I agree to the <a href="#" className="text-blue-900 hover:text-blue-700">Terms and Conditions</a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition"
            >
              Create Account
            </button>
          </form>
        )}

        {/* Social Login */}
        <div className="mt-6 w-full">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
              <i className="fab fa-google text-red-500"></i>
              <span className="ml-2">Google</span>
            </button>
            <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
              <i className="fab fa-facebook text-blue-500"></i>
              <span className="ml-2">Facebook</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;

import React from 'react'
import { Link } from "react-router-dom";

function Login() {
  return (
  <>
      <div class="min-h-screen flex items-center justify-center py-24">
    <div class="max-w-md w-full space-y-8">

      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-900">Welcome</h2>
        <p class="mt-2 text-gray-600">
          Log in to your account 
        </p>
      </div>

      <div class="flex bg-gray-100 p-1 rounded-lg">
        <button
          class="flex-1 py-2 px-4 text-center font-medium rounded-md bg-white text-blue-600 shadow-sm"
        >
          Login
        </button>
       <Link
        to="/register"
          class="flex-1 py-2 px-4 text-center font-medium rounded-md text-gray-600 hover:text-gray-800 transition"
        >
          Sign Up
        </Link>
      </div>

      <form id="loginForm" class="space-y-6">

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <p id="emailError" class="text-red-600 text-sm mt-1 hidden"></p>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            placeholder="Enter your password"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <p id="passwordError" class="text-red-600 text-sm mt-1 hidden"></p>
        </div>

        <div class="flex items-center justify-between">
          <label class="flex items-center">
            <input
              type="checkbox"
              class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span class="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
          <a
            href="#"
            class="text-sm text-blue-600 hover:underline"
          >
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-400 transition"
        >
          Sign In
        </button>
      </form>

    </div>
  </div>
  </>
  )
}

export default Login

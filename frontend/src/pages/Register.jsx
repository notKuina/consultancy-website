import React from 'react'
import {Link} from "react-router-dom";
function Register() {
  return (
    <>
    
<div class="min-h-screen flex items-center justify-center py-24">
  <div class="max-w-md w-full space-y-8">
    <div class="text-center">
      <h2 class="text-3xl font-bold text-gray-900">Create an account</h2>
      <p class="mt-2 text-gray-600">
        Sign in to your account 
      </p>
    </div>

    <div class="flex bg-gray-100 p-1 rounded-lg">
      <Link
      to="/login"
        class="flex-1 py-2 px-4 text-center font-medium rounded-md text-gray-600 hover:text-gray-800 transition"
      >
        Login
      </Link>
      <button
        class="flex-1 py-2 px-4 text-center font-medium rounded-md bg-white text-blue-600 shadow-sm"
      >
        Sign Up
      </button>
    </div>

    <form id="registerForm" class="space-y-6">

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Username
        </label>
        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          required
        />
        <p class="text-red-600 text-sm mt-1 hidden" id="usernameError"></p>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          required
        />
        <p class="text-red-600 text-sm mt-1 hidden" id="emailError"></p>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Create a password"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          required
        />
        <p class="text-red-600 text-sm mt-1 hidden" id="passwordError"></p>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Confirm Password
        </label>
        <input
          type="password"
          name="password2"
          placeholder="Confirm your password"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          required
        />
        <p class="text-red-600 text-sm mt-1 hidden" id="password2Error"></p>
      </div>

      <div class="flex items-center">
        <input
          type="checkbox"
          required
          class="rounded border-gray-300 text-green-800 focus:ring-green-500"
        />
        <label class="ml-2 text-sm text-gray-600">
          I agree to the Terms and Conditions     
        </label>
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-400 transition"
      >
        Create Account
      </button>
    </form>

    <p class="text-sm text-gray-600 text-center">
      Already have an account?
      <Link to="/login" class="text-blue-600 font-medium hover:underline">
        Login
      </Link>
    </p>

  </div>
</div>

    </>
  )
}

export default Register

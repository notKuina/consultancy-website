import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import {loginSchema} from "../utils/Schema";
import toast from "react-hot-toast";
import api from "../utils/Api";
import { useForm } from 'react-hook-form';

function Login() {
  const navigate = useNavigate();
  const{register,handleSubmit,formState:{errors},}= useForm({
    resolver:yupResolver(loginSchema),
    mode: "onChange",
  });

 const onSubmit = async (data) => {
  try {
    const response = await api.post("account/login/", data);

    // Save JWT tokens
    localStorage.setItem("access_token", response.data.access);
    localStorage.setItem("refresh_token", response.data.refresh);
    localStorage.setItem("first_name", response.data.first_name); // store first name

    // Save username for Navbar
    // Using first_name if backend returns it, else fallback to email
    localStorage.setItem("username", data.email);

    toast.success("Logged in successfully!");
    navigate("/dashboard");
  } catch (error) {
    console.log(error.response?.data);
    toast.error("Invalid email or password!");
  }
};

  return (
  <>
      <div className="min-h-screen flex items-center justify-center py-24">
    <div className="max-w-md w-full space-y-8">

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Welcome</h2>
        <p className="mt-2 text-gray-600">
          Log in to your account 
        </p>
      </div>

      <div className="flex bg-gray-100 p-1 rounded-lg">
        <button
          className="flex-1 py-2 px-4 text-center font-medium rounded-md bg-white text-blue-600 shadow-sm"
        >
          Login
        </button>
       <Link
        to="/register"
          className="flex-1 py-2 px-4 text-center font-medium rounded-md text-gray-600 hover:text-gray-800 transition"
        >
          Sign Up
        </Link>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            {...register("email")}
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          {errors.email &&(
          <p  className="text-red-600 text-sm mt-1 ">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            required
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          {
            errors.password &&(
          
          <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
            )}
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
          <a
            href="#"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-400 transition"
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

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from "react-hot-toast";
import api from "../utils/Api";
import { loginSchema } from "../utils/Schema";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

function Login() {
  const navigate = useNavigate();
  const {login} = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      const response = await api.post("account/login/", data);
      const username = response.data.first_name || data.email;
      login(username, response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);

      toast.success("Logged in successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error(error.response?.data);
      // Ensure toast always shows
      if (error.response?.data) {
        Object.values(error.response.data).forEach((msg) => toast.error(msg));
      } else {
        toast.error("Invalid email or password!");
      }
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-24">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Welcome</h2>
            <p className="mt-2 text-gray-600">Log in to your account</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                {...register("password")}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 rounded-lg text-white ${
                isSubmitting ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-400"
              } transition`}
            >
              {isSubmitting ? "Logging in..." : "Sign In"}
            </button>
          </form>

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

          <p className="text-sm text-gray-600 text-center mt-4">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-medium hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;

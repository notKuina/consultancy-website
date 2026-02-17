import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../utils/Schema";
import toast from 'react-hot-toast';
import api from "../utils/Api";

function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await api.post("account/register/", data);
      console.log("Response:", response.data);
      toast.success("Account created successfully!");
      reset();
      navigate("/login");
    } catch (error) {
      console.log(error.response?.data);
      if (error.response?.data) {
        Object.values(error.response.data).forEach(msg => toast.error(msg));
      } else {
        toast.error("Registration failed!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-24">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Create an account</h2>
          <p className="mt-2 text-gray-600">Sign in to your account</p>
        </div>

        {/* Remove extra Sign Up button */}
        <div className="flex bg-gray-100 p-1 rounded-lg">
          <Link
            to="/login"
            className="flex-1 py-2 px-4 text-center font-medium rounded-md text-gray-600 hover:text-gray-800 transition"
          >
            Login
          </Link>
          <div className="flex-1 py-2 px-4 text-center font-medium bg-white text-blue-600 shadow-sm rounded-md">
            Sign Up
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
            <input type="text" {...register("first_name")} placeholder="Enter your first name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none" />
            {errors.first_name && <p className="text-red-600 text-sm mt-1">{errors.first_name.message}</p>}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
            <input type="text" {...register("last_name")} placeholder="Enter your last name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none" />
            {errors.last_name && <p className="text-red-600 text-sm mt-1">{errors.last_name.message}</p>}
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
            <input type="text" {...register("username")} placeholder="Enter a username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none" />
            {errors.username && <p className="text-red-600 text-sm mt-1">{errors.username.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input type="email" {...register("email")} placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none" />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input type="text" {...register("phone_number")} placeholder="Enter your phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none" />
            {errors.phone_number && <p className="text-red-600 text-sm mt-1">{errors.phone_number.message}</p>}
          </div>

          {/* Nearest Office */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nearest Office</label>
            <select {...register("nearest_office")}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none">
              <option value="" className="text-gray-400">Nearest Office</option>
              <option value="kathmandu">Kathmandu</option>
              <option value="pokhara">Pokhara</option>
              <option value="dharan">Dharan</option>
              <option value="butwal">Butwal</option>
              <option value="chitwan">Chitwan</option>
            </select>
            {errors.nearest_office && <p className="text-red-600 text-sm mt-1">{errors.nearest_office.message}</p>}
          </div>

          {/* Question Regarding */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">My question is regarding</label>
            <select {...register("question_regarding")}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none">
              <option value="" className="text-gray-400">Select an option</option>
              <option value="course">Course</option>
              <option value="visa">Visa</option>
              <option value="preparation">Language preparation</option>
              <option value="testvoucher">English test voucher</option>
              <option value="documentation">Financial documentation</option>
              <option value="borderupdates">Border updates</option>
            </select>
            {errors.question_regarding && <p className="text-red-600 text-sm mt-1">{errors.question_regarding.message}</p>}
          </div>

          {/* Destination Country */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Destination Country</label>
            <select {...register("destination_country")}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none">
              <option value="" className="text-gray-400">Select a country</option>
              <option value="australia">Australia</option>
              <option value="uk">United Kingdom</option>
              <option value="usa">USA</option>
              <option value="canada">Canada</option>
              <option value="newzealand">New Zealand</option>
              <option value="help">Help me decide</option>
            </select>
            {errors.destination_country && <p className="text-red-600 text-sm mt-1">{errors.destination_country.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input type="password" {...register("password")} placeholder="Create a password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none" />
            {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
            <input type="password" {...register("confirm")} placeholder="Confirm your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none" />
            {errors.confirm && <p className="text-red-600 text-sm mt-1">{errors.confirm.message}</p>}
          </div>

          {/* Terms */}
          <div className="flex items-center">
            <input type="checkbox" {...register("terms")} className="rounded border-gray-300 text-green-800 focus:ring-green-500" />
            <label className="ml-2 text-sm text-gray-600">I agree to the Terms and Conditions</label>
          </div>
          {errors.terms && <p className="text-red-600 text-sm">{errors.terms.message}</p>}

          <button type="submit" disabled={loading}
            className={`w-full py-2 rounded-lg text-white ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-400'} transition`}>
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center">
          Already have an account?
          <Link to="/login" className="text-blue-600 font-medium hover:underline"> Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;

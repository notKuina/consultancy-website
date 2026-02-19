import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../utils/Schema";
import toast from 'react-hot-toast';

function ConsultantRegistration() {
  const [consultantId, setConsultantId] = useState("");
  const [files, setFiles] = useState([]);

  // Auto-generate Consultant ID on mount
  useEffect(() => {
    setConsultantId(`CONS-${Math.floor(1000 + Math.random() * 9000)}`);
  }, []);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });

  const handleFilesChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...newFiles]);
    e.target.value = null; // allow re-selecting same files
  };

  const onSubmit = async (data) => {
    try {
      // FormData simulation
      const formData = new FormData();
      formData.append("consultant_id", consultantId);
      Object.keys(data).forEach(key => {
        if (key !== "certificates") formData.append(key, data[key]);
      });
      files.forEach(file => formData.append("certificates", file));

      // Simulate a delay for testing loading state
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast.success("Form submitted successfully!");
      reset();
      setFiles([]);
    } catch (error) {
      console.error(error);
      toast.error("Submission failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-24">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Create an account</h2>
          <p className="mt-2 text-gray-600">Sign in to your account</p>
        </div>

        <div className="flex bg-gray-100 p-1 rounded-lg">
          <Link to="/clogin" className="flex-1 py-2 px-4 text-center font-medium rounded-md text-gray-600 hover:text-gray-800 transition">
            Login
          </Link>
          <div className="flex-1 py-2 px-4 text-center font-medium bg-white text-blue-600 shadow-sm rounded-md">
            Sign Up
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Consultant ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Consultant ID</label>
            <input type="text" value={consultantId} readOnly className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed" />
          </div>

          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
            <input type="text" {...register("first_name")} placeholder="Enter your first name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none" />
            {errors.first_name && <p className="text-red-600 text-sm mt-1">{errors.first_name.message}</p>}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
            <input type="text" {...register("last_name")} placeholder="Enter your last name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none" />
            {errors.last_name && <p className="text-red-600 text-sm mt-1">{errors.last_name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input type="email" {...register("email")} placeholder="Enter your email address" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none" />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input type="text" {...register("phone_number")} placeholder="Enter your phone number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none" />
            {errors.phone_number && <p className="text-red-600 text-sm mt-1">{errors.phone_number.message}</p>}
          </div>

          {/* Certificates */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Education / Certificates</label>
            <div className="relative">
              <input type="file" multiple accept=".jpg,.png,.pdf" className="hidden" id="certificates" onChange={handleFilesChange} />
              <label htmlFor="certificates" className="w-full flex flex-wrap gap-2 items-center px-4 py-6 border border-gray-300 rounded-lg cursor-pointer bg-white hover:bg-gray-50">
                {files.length > 0 ? files.map((file, idx) =>
                  file.type.startsWith("image/") ? (
                    <img key={idx} src={URL.createObjectURL(file)} alt={file.name} className="w-20 h-20 object-cover rounded-md" />
                  ) : (
                    <span key={idx} className="px-2 py-1 border border-gray-300 rounded bg-gray-100 text-xs">{file.name}</span>
                  )
                ) : (
                  <span className="text-gray-400">Click to upload certificates</span>
                )}
              </label>
            </div>
          </div>

          {/* Expertise */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Expertise Areas</label>
            <select {...register("expertise")} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none">
              <option value="">Select your expertise</option>
              <option value="tutor">Language Tutor</option>
              <option value="visa">Visa Assistance</option>
              <option value="counseling">Counseling</option>
            </select>
          </div>

          {/* Experience */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Experience (Years)</label>
            <input type="number" {...register("experience")} placeholder="Enter years of experience" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none" />
          </div>

          {/* Languages */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Languages</label>
            <input type="text" {...register("languages")} placeholder="Languages you speak" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none" />
          </div>

          {/* Availability */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
            <select {...register("availability")} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none">
              <option value="morning">Morning</option>
              <option value="day">Day</option>
              <option value="evening">Evening</option>
            </select>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input type="password" {...register("password")} placeholder="Create a password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none" />
            {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
            <input type="password" {...register("confirm")} placeholder="Confirm your password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none" />
            {errors.confirm && <p className="text-red-600 text-sm mt-1">{errors.confirm.message}</p>}
          </div>

          {/* Terms */}
          <div className="flex items-center">
            <input type="checkbox" {...register("terms")} className="rounded border-gray-300 text-green-800 focus:ring-green-500" />
            <label className="ml-2 text-sm text-gray-600">I agree to the Terms and Conditions</label>
          </div>
          {errors.terms && <p className="text-red-600 text-sm">{errors.terms.message}</p>}

          {/* Submit Button */}
          <button type="submit" disabled={isSubmitting} className={`w-full py-2 rounded-lg text-white ${isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-400'} transition`}>
            {isSubmitting ? "Submitting..." : "Create Account"}
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center">
          Already have an account? <Link to="/login" className="text-blue-600 font-medium hover:underline"> Login</Link>
        </p>
      </div>
    </div>
  );
}

export default ConsultantRegistration;

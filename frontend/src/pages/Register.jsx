import React from 'react'
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {registerSchema} from "../utils/Schema";
import toast from 'react-hot-toast';

function Register() {
  const{register,handleSubmit,formState:{errors}, reset }=useForm({
    resolver:yupResolver(registerSchema),
     mode:"onChange",
    });

  const onSubmit=(data)=>{
    console.log(data);
    toast.success("Account created successfully!");
    reset();
  };

  
  return (
    <>
    
<div className="min-h-screen flex items-center justify-center py-24">
  <div className="max-w-md w-full space-y-8">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900">Create an account</h2>
      <p className="mt-2 text-gray-600">
        Sign in to your account 
      </p>
    </div>

    <div className="flex bg-gray-100 p-1 rounded-lg">
      <Link
      to="/login"
        className="flex-1 py-2 px-4 text-center font-medium rounded-md text-gray-600 hover:text-gray-800 transition"
      >
        Login
      </Link>
      <button
        className="flex-1 py-2 px-4 text-center font-medium rounded-md bg-white text-blue-600 shadow-sm"
      >
        Sign Up
      </button>
    </div>

    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Username
        </label>

        <input
          type="text"
          {...register("username")}
          placeholder="Enter your username"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          required
        />

        {errors.username &&(
        <p className="text-red-600 text-sm mt-1">
          {errors.username.message}
        </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>

        <input
          type="email"
         {...register("email")}
          placeholder="Enter your email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          required
        />

        {errors.email &&(
        <p className="text-red-600 text-sm mt-1">
          {errors.email.message}
        </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <input
          type="password"
          placeholder="Create a password"
          {...register("password")}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          required
        />
        {errors.password && (
        <p className="text-red-600 text-sm mt-1 " >
          {errors.password.message}
        </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Confirm Password
        </label>
        <input
          type="password"
          {...register("confirm")}
          placeholder="Confirm your password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          required
        />
        {errors.confirm && (
        <p className="text-red-600 text-sm mt-1" >
          {errors.confirm.message}
        </p>
        )}
      </div>

      <div className="flex items-center">
        <input
          type="checkbox" {...register("terms")}
          required
          className="rounded border-gray-300 text-green-800 focus:ring-green-500"
        />
        <label className="ml-2 text-sm text-gray-600">
          I agree to the Terms and Conditions     
        </label>
      </div>
      {errors.terms &&(
        <p className="text-red-600 text-sm">{errors.terms.message}</p>
      )}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-400 transition"
      >
        Create Account
      </button>
    </form>

    <p className="text-sm text-gray-600 text-center">
      Already have an account?
      <Link to="/login" className="text-blue-600 font-medium hover:underline">
        Login
      </Link>
    </p>

  </div>
</div>

    </>
  )
}

export default Register

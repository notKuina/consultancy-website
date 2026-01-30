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
          First Name
        </label>

        <input
          type="text"
          {...register("firstName")}
          placeholder="Enter your first name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          required
        />

        {errors.firstName &&(
        <p className="text-red-600 text-sm mt-1">
          {errors.firstName.message}
        </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Last Name
        </label>

        <input
          type="text"
          {...register("lastName")}
          placeholder="Enter your last name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          required
        />

        {errors.lastName &&(
        <p className="text-red-600 text-sm mt-1">
          {errors.lastName.message}
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
          placeholder="Enter your email address"
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
          Phone number
        </label>

        <input
          type="text"
          {...register("number")}
          placeholder="Enter your phone number"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          required
        />

        {errors.number &&(
        <p className="text-red-600 text-sm mt-1">
          {errors.number.message}
        </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Nearest Office
        </label>

        <select 
          {...register("nearestOffice")}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          required>
          <option value="" className="text-gray-400">Nearest Office</option>
          <option value="kathmandu">Kathmandu</option>
          <option value="pokhara">Pokhara</option>
          <option value="dharan">Dharan</option>
          <option value="butwal">Butwal</option>
          <option value="chitwan">Chitwan</option>
        </select>

        {errors.nearestOffice &&(
        <p className="text-red-600 text-sm mt-1">
          {errors.nearestOffice.message}
        </p>
        )}
      </div>

        <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
        My question is regarding
        </label>

        <select
          {...register("questionRegarding")}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          required>
          <option value="" className="text-gray-400">My question is regarding</option>
          <option value="course">Course</option>
          <option value="visa">Visa</option>
          <option value="preparation">Language preparation</option>
          <option value="testvoucher">English test voucher</option>
          <option value="documentation">Financial documentation</option>
          <option values="borderupdates">Border updates</option>
          
          </select>

        {errors.questionRegarding &&(
        <p className="text-red-600 text-sm mt-1">
          {errors.questionRegarding.message}
        </p>
        )}
      </div>


        <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Preffered Destination Country
        </label>

        <select
          {...register("destinationCountry")}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          required>
          <option value="" className="text-gray-400"> Preferred Destination Country</option>
          <option value="australia">Australia</option>
          <option value="uk">United Kingdom</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="newzealand">New Zealand</option>
          <option values="help">Help me decide</option>
          
          </select>
       

        {errors.destinationCountry &&(
        <p className="text-red-600 text-sm mt-1">
          {errors.destinationCountry.message}
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

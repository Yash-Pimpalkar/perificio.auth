"use client";

import React, { useState } from "react";
import { login, loginWithCreds } from "@/actions/auth";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const error = searchParams?.get("error");
  const [showPassword, setShowPassword] = useState(false);
  const { pending } = useFormStatus();

  return (
    <div className="w-full flex items-center justify-center  px-4 ">
      <form
        action={loginWithCreds}
        className="w-full max-w-md bg-white shadow-lg  rounded-lg p-4"
      >
        <h1 className="text-2xl text-blue-950 font-light font-serif mb-6 text-center capitalize">
          Sign In
        </h1>
        {error && (
          <p className="text-center text-sm text-red-600 mb-4">{error}</p>
        )}

        {/* Email Field */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              name="password"
              id="password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
            >
              {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex flex-1/2 flex-row items-center justify-evenly">
          <Button
            variant="default"
            disabled={pending}
            type="submit"
            className={`${pending ? "bg-red-700" : "bg-blue-900"} rounded-md `}
          >
            {pending ? "Loading..." : "Sign in"}
          </Button>
          <Button variant="outline" onClick={() => login("google")}>
            <FcGoogle className="text-white text-2xl" />
            Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

"use client";

import React from "react";
import GoogleSignInButton from "../../components/Buttons/GoogleSignInButton";
import LoginForm from "../../components/LoginForm/LoginForm";

const SignIn = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">

        <h1 className="text-2xl  font-semibold mb-6 text-center">Sign In</h1>
        <LoginForm />
        {/* Google Sign In Button */}
        <GoogleSignInButton />

    </div>
  );
};

export default SignIn;

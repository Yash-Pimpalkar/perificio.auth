"use client";

import React from "react";
// import GoogleSignInButton from "../../components/Buttons/GoogleSignInButton";

import LoginForm from "../../components/LoginForm/LoginForm";

const SignIn = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-200">
      <LoginForm />

      {/* Google Sign In Button */}
      {/* <GoogleSignInButton /> */}
    </div>
  );
};

export default SignIn;

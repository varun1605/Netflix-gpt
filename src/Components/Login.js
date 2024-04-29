import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toogleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_small.jpg"
          alt="BackgroundLogo"
        ></img>
      </div>
      <form className="absolute p-12  bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
        {isSignInForm?"": <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-3 w-full bg-gray-700  rounded-lg"
        ></input>}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-3 w-full bg-gray-700  rounded-lg"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-3 w-full  bg-gray-700  rounded-lg"
        ></input>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm?"Sign in":"Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toogleSignInForm}>
          {isSignInForm?"New to Netflix? Sign Up here":"Already a user, sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;

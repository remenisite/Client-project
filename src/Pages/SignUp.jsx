import React from "react";
import { FaGoogle } from "react-icons/fa";
import signImg from "../../src/assets/signup-Side Image.png";

const SignUp = () => {
  return (
    <div className="pt-[60px] pb-[140px]">
      <div className="flex items-center gap-[300px] ">
        {/* Left Illustration */}
        <div className="">
          <img src={signImg} alt="Shopping Illustration" className="" />
        </div>

        {/* Right Form */}
        <div className="w-[371px]">
          <h2 className="text-[36px] font-medium font-poppins text-black">
            Create an account
          </h2>

          <h4 className="text-[16px] font-normal font-poppins text-black mt-[24px] mb-[48px]">
            Enter your details below
          </h4>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border-b placeholder:text-[16px] font-medium font-poppins text-black border-gray-300 rounded-md focus:outline-none "
            />
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="w-full px-4 py-2 my-[30px] border-b placeholder:text-[16px] font-medium font-poppins text-black border-gray-300 rounded-md focus:outline-none "
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border-b placeholder:text-[16px] font-medium font-poppins text-black border-gray-300 rounded-md focus:outline-none "
            />

            <button
              type="button"
              className="w-full bg-[#DB4444] text-[16px]  mt-[40px] mb-[16px] font-medium font-poppins text-white py-[16px] rounded-md hover:bg-red-600 transition"
            >
              Create Account
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-[16px] border border-gray-300 py-[16px] text-[16px] font-normal font-poppins rounded-md hover:bg-gray-100 transition"
            >
              <FaGoogle className="text-[24px]" />
              Sign up with Google
            </button>
          </form>

          <p className="mt-6 text-[16px] font-normal font-poppins text-black  text-center ">
            Already have account?
            <a
              href="/login"
              className="text-[16px] font-medium font-poppins text-black hover:underline "
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

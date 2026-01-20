import React from "react";
import { FaGoogle } from "react-icons/fa";
import signImg from "../../src/assets/signup-Side Image.png";

const LogIn = () => {
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
            Log in to Exclusive
          </h2>

          <h4 className="text-[16px] font-normal font-poppins text-black mt-[24px] mb-[48px]">
            Enter your details below
          </h4>

          <form className="space-y-4">
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

            <div className="flex gap-[87px] items-center">
              <button
                type="button"
                className="w-[143px] bg-[#DB4444] text-[16px]  mt-[40px] mb-[16px] font-medium font-poppins text-white py-[16px] rounded-md hover:bg-red-600 transition"
              >
                Log In
              </button>
              <a
                href=""
                className="text-[16px] font-normal font-poppins text-[#DB4444] "
              >
                Forget Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

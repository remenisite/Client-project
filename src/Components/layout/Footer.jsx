import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { VscSend } from "react-icons/vsc";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Exclusive - Subscribe */}
        <div>
          <h2 className="text-[20px] font-medium font-poppins text-white">
            Exclusive
          </h2>

          <h4 className="text-[20px] font-medium font-poppins text-white my-[24px]">
            Subscribe
          </h4>
          <p className="mb-4">Get 10% off your first order</p>

          <div className="w-[217px] flex items-center  px-[15px] border-white border-2 rounded overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent pr-3  py-2 w-full text-sm focus:outline-none"
            />
            <VscSend />
          </div>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-[20px] font-medium font-poppins text-white mb-4">
            Support
          </h2>
          <p className="text-[16px] font-normal font-poppins text-white mb-2">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="text-[16px] font-normal font-poppins text-white mb-2">
            exclusive@gmail.com
          </p>
          <p className="text-[16px] font-normal font-poppins text-white">
            +88015-88888-9999
          </p>
        </div>

        {/* Account */}
        <div>
          <h2 className="text-[20px] font-medium font-poppins text-white mb-4">
            Account
          </h2>

          <ul className="space-y-2 text-sm">
            <li className="text-[16px] font-normal font-poppins text-white">
              <Link to={"/"}>My Account</Link>
            </li>
            <li className="text-[16px] font-normal font-poppins text-white">
              <Link to={"/"}>Login / Register</Link>
            </li>
            <li className="text-[16px] font-normal font-poppins text-white">
              <Link to={"/"}>Cart</Link>
            </li>
            <li className="text-[16px] font-normal font-poppins text-white">
              <Link to={"/"}>Wishlist</Link>
            </li>
            <li className="text-[16px] font-normal font-poppins text-white">
              <Link to={"/"}>Shop</Link>
            </li>
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <h2 className="text-[20px] font-medium font-poppins text-white mb-4">
            Quick Link
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="text-[16px] font-normal font-poppins text-white">
              <Link to={"/"}>Privacy Policy</Link>
            </li>
            <li className="text-[16px] font-normal font-poppins text-white">
              <Link to={"/"}>Terms Of Use</Link>
            </li>
            <li className="text-[16px] font-normal font-poppins text-white">
              <Link to={"/"}>FAQ</Link>
            </li>
            <li className="text-[16px] font-normal font-poppins text-white">
              <Link to={"/"}>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h2 className="text-[20px] font-medium font-poppins text-white mb-4">
            Download App
          </h2>
          <p className="text-sm mb-4">Save $3 with App New User Only</p>
          <div className="flex space-x-2 mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10"
            />
          </div>
          <div className="flex space-x-4 text-lg">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-gray-200">
        © Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
};

export default Footer;

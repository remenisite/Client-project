import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router";
import logo from "../../../src/assets/Logo.png";
 import AOS from 'aos'
 import "aos/dist/aos.css";

import { useEffect } from "react";

const Navbar = () => {

   useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    })
  }, [])


  return (
    <>
      <div className="pt-[28px] pb-[27px]">
        <div className="container">
    
          <nav className="flex justify-between items-center">
            <Link
              to={"/"}
              className="hover:scale-110 duration-300 cursor-pointer text-[25px] font-inter font-semibold"
            >
              <img src={logo} alt="main-logo" />
            </Link>

            <div>
              <ul  data-aos="fade-down" className="flex items-center gap-[48px]">
                <li className=" hover:border-b-2">
                  <Link
                    to={"/"}
                    className="text-[16px] font-normal font-poppins text-black"
                  >
                    Home
                  </Link>
                </li>
                <li className="hover:border-b-2">
                  <Link
                    to={"/contact"}
                    className="text-[16px] font-normal font-poppins text-black"
                  >
                    Contact
                  </Link>
                </li>
                <li className="hover:border-b-2">
                  <Link
                    to={"/About"}
                    className="text-[16px] font-normal font-poppins text-black"
                  >
                    About
                  </Link>
                </li>
                <li className="hover:border-b-2">
                  <Link
                    to={"/signup"}
                    className="text-[16px] font-normal font-poppins text-black"
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>

            <div data-aos="fade-up-right" className=" py-[10px] pl-5 pr-3 bg-[#F5F5F5] text-[#989898] rounded-[8px] flex items-center gap-[34px]">
              <input
                className="outline-none text-[12px] font-poppins"
                type="text"
                placeholder="What are you looking for?"
              />
              <CiSearch className="text-[24px] text-black" />
            </div>
            <div className="flex items-center gap-6">
              <div data-aos="fade-left" className="text-[32px] text-black cursor-pointer hover:text-[#989898] hover:scale-110 duration-200">
               <a href="/wish"><IoMdHeartEmpty />
</a>               </div>
              <div data-aos="fade-right" className="text-[32px] text-black cursor-pointer hover:text-[#989898] hover:scale-110 duration-200 relative">
           <a  href="/Cart"><IoCartOutline /></a>

              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;

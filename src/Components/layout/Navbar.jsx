import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router";
import logo from "../../../src/assets/Logo.png";



const Navbar = () => {
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
              <ul className="flex items-center gap-[48px]">
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

            <div className=" py-[10px] pl-5 pr-3 bg-[#F5F5F5] text-[#989898] rounded-[8px] flex items-center gap-[34px]">
              <input
                className="outline-none text-[12px] font-poppins"
                type="text"
                placeholder="What are you looking for?"
              />
              <CiSearch className="text-[24px] text-black" />
            </div>
            <div className="flex items-center gap-6">
              <div className="text-[32px] text-black cursor-pointer hover:text-[#989898] hover:scale-110 duration-200">
               <a href="/wish"><IoMdHeartEmpty />
</a>               </div>
              <div className="text-[32px] text-black cursor-pointer hover:text-[#989898] hover:scale-110 duration-200 relative">
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

import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router";

const Headers = () => {
  return (
    <>
      <div className="bg-black ">
        <div className=" flex items-center justify-between">
          <div className="flex items-center gap-[8px]">
            <p className="text-[14px] font-poppins text-white">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <Link
              className="text-[14px] underline font-semibold font-poppins text-white"
              to={"/shop"}
            >
              ShopNow
            </Link>
          </div>
          <div className="text-white font-poppins flex items-center gap-[5px] justify-center">
            English <IoIosArrowDown className="text-[24px] pt-[2px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Headers;

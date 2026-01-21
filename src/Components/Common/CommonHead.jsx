import React from "react";

const CommonHead = ({ h2, hp }) => {
  return (
    <>
      {/* Header Section */}
      <div className="mb-[60px]">

      <div className="flex gap-4 items-center rounded-[4px] ">
        <div className="w-3 sm:w-4 lg:w-5 h-6 sm:h-8 lg:h-10 bg-[#DB4444]"></div>
        <h3 className="font-semibold font-poppins text-sm sm:text-[15px] lg:text-[16px] text-[#DB4444]">
          {h2}
        </h3>
      </div>
      <h2 className="text-[36px] font-semibold font-inter text-black mt-[24px]">
        {hp}
      </h2>
      </div>
    </>
  );
};

export default CommonHead;

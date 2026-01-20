import React from "react";
import { HiHome } from "react-icons/hi";

const Breadcrumb = ({data}) => {
  return (
    <nav className="flex items-center gap-[10px] mt-[80px]" aria-label="Breadcrumb">
      {/* Home */}
      <a href="/" className="text-[14px] font-normal font-poppins text-black">
    
        Home
      </a>

      {/* Separator */}
      <span className="text-gray-400">/</span>

      {/* Shop */}
      <p className="text-[14px] font-normal font-poppins text-black">
        {data}
      </p>

    </nav>
  );
};

export default Breadcrumb;

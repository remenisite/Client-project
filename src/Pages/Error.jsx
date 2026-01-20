import React from "react";
import Breadcrumb from "../Components/Common/Breadcrumb";

const Error = () => {
  return (
    <>
      <div>
        <div className="container">
          <Breadcrumb data={"Error"} />

          <div className="my-[140px]  text-center">
            <h2 className="text-[110px] font-medium font-poppins text-black">
              404 Not Found
            </h2>
            <h3 className="text-[16px] font-normal font-poppins text-black mt-[40px] mb-[80px]">
              Your visited page not found. You may go home page.
            </h3>
            <button
              type="button"
              className="w-[254px] bg-[#DB4444] text-[16px]  mt-[40px] mb-[16px] font-medium font-poppins text-white py-[16px] rounded-md hover:bg-red-600 transition"
            >
              Back to home page
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;

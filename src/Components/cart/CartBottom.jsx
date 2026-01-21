import React from "react";

const CartBottom = () => {
  return (
    <>
      <div className="mt-[80px] flex justify-between ">
        <div className=" ">
          <input
            type="text"
            placeholder="Coupon Code"
            className="px-4 py-2 border rounded w-[300px]"
          />
          <button className="px-4 py-2 bg-[#DB4444] text-white rounded hover:bg-green-600">
            Apply Coupon
          </button>
        </div>

        <div className="w-[470px] border rounded-[4px] px-[24px] py-[32px]">
          {" "}
          <h2 className="text-[20px] font-medium font-poppins text-black mb-4">
            Cart Total
          </h2>
          <div className="flex justify-between mb-4 border-b pb-2">
            {" "}
            <span className="text-[16px] font-normal font-poppins text-black">
              Subtotal:
            </span>{" "}
            <span className="text-[16px] font-normal font-poppins text-black">
              $1750
            </span>{" "}
          </div>{" "}
          <div className="flex justify-between mb-2">
            {" "}
            <span className="text-[16px] font-normal font-poppins text-black">
              Shipping:
            </span>{" "}
            <span className="text-[16px] font-normal font-poppins text-black">
              Free
            </span>{" "}
          </div>{" "}
          <div className="flex justify-between mb-4 border-t pt-2">
            {" "}
            <span className="text-[16px] font-normal font-poppins text-black">
              Total:
            </span>{" "}
            <span className="text-[16px] font-normal font-poppins text-black">
              $1750
            </span>{" "}
          </div>
          <div className="text-center">
            <a href="/CheckOut" className="w-[260px] text-[16px] font-medium font-poppins bg-[#DB4444] hover:bg-red-700 text-white py-2 px-4 rounded ">
              Procees to checkout
            </a>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartBottom;

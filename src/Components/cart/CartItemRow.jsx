import React from "react";
import { FaTimes } from "react-icons/fa";
import smallmonitor from "../../../src/assets/small monitor.png";

const CartItemRow = () => {
  return (
    <div className="bg-white shadow-sm">
      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-4 px-6 py-4 ">
        {/* Product */}
        <div className="flex items-center gap-3">
          <img
            src={smallmonitor}
            alt="LCD Monitor"
            className="w-14 h-14 object-contain"
          />

          <span className="text-[16px] font-normal font-poppins text-black">LCD Monitor</span>
        </div>

        {/* Price */}
        <div className="text-center text-[16px] font-normal font-poppins text-black">
          $650
        </div>

        {/* Quantity */}
        <div className="flex justify-center">
          <select className="border rounded-md px-2 py-1 text-sm outline-none">
            <option>01</option>
            <option>02</option>
            <option>03</option>
          </select>
        </div>

        {/* Subtotal */}
        <div className="text-right text-[16px] font-normal font-poppins text-black">$650</div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <button className="text-red-500 text-sm">
            <FaTimes />
          </button>

          <img
            src="https://i.ibb.co/7tQKz2J/monitor.png"
            alt="LCD Monitor"
            className="w-12 h-12 object-contain"
          />

          <div>
            <p className="text-sm font-medium">LCD Monitor</p>
            <p className="text-xs text-gray-500">$650</p>
          </div>
        </div>

        <p className="text-sm font-medium">$650</p>
      </div>
    </div>
  );
};

export default CartItemRow;

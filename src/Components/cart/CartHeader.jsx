import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartHeader = () => {
  return (
    <div className="bg-white shadow-sm">
      {/* Desktop Header */}
      <div className="hidden md:grid grid-cols-4 px-6 py-4 text-[16px] font-normal font-poppins text-black">
        <div>Product</div>
        <div className="text-center">Price</div>
        <div className="text-center">Quantity</div>
        <div className="text-right">Subtotal</div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex justify-between px-4 py-3 text-sm font-medium text-gray-700">
        <span>Product</span>
        <span>Subtotal</span>
      </div>
    </div>
  );
};

export default CartHeader;

import React from 'react'
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaMoneyBillWave } from 'react-icons/fa';

const Order = () => {
  return (
    <>
    
          {/* Order Summary */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Your Order</h2>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>LCD Monitor</span>
            <span>$650</span>
          </div>
          <div className="flex justify-between">
            <span>H1 Gamepad</span>
            <span>$1100</span>
          </div>
          <hr />
          <div className="flex justify-between font-semibold">
            <span>Subtotal</span>
            <span>$1750</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>$1750</span>
          </div>
        </div>

        {/* Payment Options */}
        <div className="mt-6 space-y-4">
          <div className="border p-3 rounded flex items-center space-x-3">
            <input type="radio" name="payment" />
            <span>Bank</span>
            <div className="flex space-x-2 text-xl text-gray-600">
              <FaCcMastercard />
              <FaCcVisa />
              <FaCcPaypal />
            </div>
          </div>
          <div className="border p-3 rounded flex items-center space-x-3 bg-red-50">
            <input type="radio" name="payment" defaultChecked />
            <span>Cash on delivery</span>
            <FaMoneyBillWave className="text-xl text-green-600" />
          </div>
        </div>

        {/* Coupon and Button */}
        <div className="mt-6 space-y-3">
          <input
            type="text"
            placeholder="Coupon Code"
            className="w-full border p-2 rounded"
          />
          <button className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700">
            Apply Coupon
          </button>
          <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-500">
            Place Order
          </button>
        </div>
      </div>
    
    
    </>
  )
}

export default Order
import React from 'react'

const BIlling = () => {
  return (
    <>
    
         {/* Billing Details */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
        <form className="space-y-4">
          <input type="text" placeholder="First Name" className="w-full border p-2 rounded" />
          <input type="text" placeholder="Company Name" className="w-full border p-2 rounded" />
          <input type="text" placeholder="Street Address" className="w-full border p-2 rounded" />
          <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full border p-2 rounded" />
          <input type="text" placeholder="Town / City" className="w-full border p-2 rounded" />
          <input type="text" placeholder="Phone Number" className="w-full border p-2 rounded" />
          <input type="email" placeholder="Email Address" className="w-full border p-2 rounded" />
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span className="text-sm">Save this information for faster check-out next time</span>
          </label>
        </form>
      </div>
    
    </>
  )
}

export default BIlling
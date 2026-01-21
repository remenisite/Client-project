import { FaCircle } from "react-icons/fa";

const Category = () => {
  return (
    <div className="">
      
      {/* Shop by Category */}
      <div className="mb-6">
        <h3 className="text-[18px] font-bold font-poppins text-[#262626] mb-4">Shop by Category</h3>
        <ul className="space-y-3 text-[16px] font-normal font-poppins text-black">
          <li className="hover:text-black cursor-pointer">Woman’s Fashion</li>
          <li className="hover:text-black cursor-pointer">Men’s Fashion</li>
          <li className="hover:text-black cursor-pointer">Electronics</li>
          <li className="hover:text-black cursor-pointer">Home & Lifestyle</li>
          <li className="hover:text-black cursor-pointer">Medicine</li>
          <li className="hover:text-black cursor-pointer">Sports & Outdoor</li>
          <li className="hover:text-black cursor-pointer">Baby’s & Toys</li>
          <li className="hover:text-black cursor-pointer">Groceries & Pets</li>
          <li className="hover:text-black cursor-pointer">Health & Beauty</li>
        </ul>
      </div>

      {/* Shop by Color */}
      <div>
        <h3 className="text-[20px] font-bold font-poppins text-[#262626] mb-4">Shop by Color</h3>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex items-center gap-2 cursor-pointer">
            <FaCircle className="text-black text-xs" />
            Color 1
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <FaCircle className="text-red-500 text-xs" />
            Color 2
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <FaCircle className="text-green-500 text-xs" />
            Color 3
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Category;

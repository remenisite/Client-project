import { FaHeart, FaShoppingBag } from 'react-icons/fa';

const WishlistHeader = () => {
  return (
    <div className="flex justify-between items-center">
      {/* Left: Wishlist Count */}
      <div className="flex items-center space-x-2 text-gray-800 text-lg font-medium">
        <span>Wishlist (4)</span>
      </div>

      {/* Right: Move All To Bag Button */}
      <div className='border rounded-[4px]'>

      <button className="flex items-center space-x-2 text-black px-4 py-2 rounded ">
        <span>Move All To Bag</span>
      </button>
      </div>
    </div>
  );
};

export default WishlistHeader;

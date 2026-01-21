import { FaHeart, FaEye, FaStar } from "react-icons/fa";

const ProductCard = ({
  image,
  title,
  price,
  oldPrice,
  discount,
  rating,
  reviews,
}) => {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      {/* Discount */}
      <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
        -{discount}%
      </span>

      {/* Hover Icons */}
      <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition z-10">
        <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow">
          <FaHeart />
        </button>
        <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow">
          <FaEye />
        </button>
      </div>

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Add To Cart */}
      <a href="/cart" className="absolute bottom-24 left-0 w-full text-center bg-black text-white py-3 text-sm font-medium opacity-0 group-hover:opacity-100 transition">
        Add To Cart
      </a>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-sm font-medium mb-2">{title}</h3>

        {/* Price */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-red-500 font-semibold">${price}</span>
          <span className="line-through text-gray-400 text-sm">
            ${oldPrice}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-400 text-sm">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < rating ? "" : "text-gray-300"} />
          ))}
          <span className="text-gray-500 text-xs ml-1">({reviews})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

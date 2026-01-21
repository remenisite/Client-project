import { useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = [
  { name: "Woman’s Fashion", hasSub: true },
  { name: "Men’s Fashion", hasSub: true },
  { name: "Electronics", hasSub: false },
  { name: "Home & Lifestyle", hasSub: false },
  { name: "Medicine", hasSub: false },
  { name: "Sports & Outdoor", hasSub: false },
  { name: "Baby’s & Toys", hasSub: false },
  { name: "Groceries &", hasSub: false },
  { name: "Health & Beauty", hasSub: false },
];

const CategoryMenu = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="w-64 bg-white shadow-md p-4">
      <ul data-aos="fade-up" className="space-y-3">
        {categories.map((cat, index) => (
          <li
            key={index}
            className="flex justify-between items-center text-gray-800 font-medium hover:text-red-600 cursor-pointer"
          >
            <span>{cat.name}</span>
            {cat.hasSub && <FaChevronRight className="text-sm" />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryMenu;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FlashSaleCard from "./FlashSaleCard";
import { Link } from "react-router";
import CommonHead from "../Common/CommonHead";

const FlashSales = () => {

  return (
    <div className="pb-12 sm:pb-16 lg:pb-20">
      <div className="container ">
        <div className="mainDiv">
<CommonHead />




          {/* View All Button */}
          <div className="mt-10 sm:mt-12 lg:mt-14 flex justify-center border-b border-[#b3b3b3] pb-8 sm:pb-12 lg:pb-[60px]">
            <Link
              to={"/shop"}
              className="hover:bg-[#c03232] hover:scale-105 active:scale-95 duration-300 text-base sm:text-lg font-poppins font-medium text-white px-8 sm:px-12 py-3 sm:py-4 bg-[#DB4444] rounded-md w-full sm:w-auto text-center"
            >
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSales;

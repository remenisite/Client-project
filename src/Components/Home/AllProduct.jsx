import React from "react";
import CommonHead from "../Common/CommonHead";
import ProductCard from "./product/ProductCard";
import productImg from "../../assets/productImg.png";

const AllProduct = () => {
  return (
    <>
      <div  data-aos="fade-up" className=" pt-[154px] pb-[60px]">
        <div>
          <CommonHead h2={"Today’s"} hp={"Flash Sales"} />
        </div>

        <div className="grid grid-cols-4 gap-[30px]">
          <ProductCard
            image={productImg}
            title="AK-900 Wired Keyboard"
            price="960"
            oldPrice="1160"
            discount="35"
            rating={4}
            reviews="75"
          />
          <ProductCard
            image={productImg}
            title="AK-900 Wired Keyboard"
            price="960"
            oldPrice="1160"
            discount="35"
            rating={4}
            reviews="75"
          />
          <ProductCard
            image={productImg}
            title="AK-900 Wired Keyboard"
            price="960"
            oldPrice="1160"
            discount="35"
            rating={4}
            reviews="75"
          />
          <ProductCard
            image={productImg}
            title="AK-900 Wired Keyboard"
            price="960"
            oldPrice="1160"
            discount="35"
            rating={4}
            reviews="75"
          />
        </div>
        <div className=" text-center mt-[37px]">
          <a
            href="/seeAll"
            type="button"
            className="p-[15px] bg-[#DB4444] text-[16px]  mt-[40px] mb-[16px] font-medium font-poppins text-white py-[16px] rounded-md hover:bg-red-600 transition"
          >
            View All Products
          </a>
        </div>
      </div>
    </>
  );
};

export default AllProduct;

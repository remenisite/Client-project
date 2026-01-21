import React from 'react'
import CommonHead from "../Common/CommonHead";
import ProductCard from "./product/ProductCard";
import productImg from "../../assets/productImg.png";

const ExploreProducts = () => {
  return (
    <>
     <div  data-aos="fade-up" className=" pt-[154px] ">
        <div>
          <CommonHead h2={"Our Products"} hp={"Explore Our Products"} />
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
        <div className="text-center">
          <button
            type="button"
            className="w-[234px] bg-[#DB4444] text-[16px]  mt-[40px] mb-[16px] font-medium font-poppins text-white py-[16px] rounded-md hover:bg-red-600 transition"
          >
            View All Products
          </button>
        </div>
      </div>
    
    
    
    
    
    </>
  )
}

export default ExploreProducts
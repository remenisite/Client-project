import React from 'react'
import CommonHead from "../Common/CommonHead";
import ProductCard from "./product/ProductCard";
import productImg from "../../assets/productImg.png";
import { IoArrowForwardOutline } from "react-icons/io5";
import { MdArrowBack } from "react-icons/md";

import Slider from "react-slick";
const ExploreProducts = () => {
    const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <MdArrowBack />,
    nextArrow: <IoArrowForwardOutline />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
     <div  data-aos="fade-up" className=" pt-[154px] ">
        <div>
          <CommonHead h2={"Our Products"} hp={"Explore Our Products"} />
        </div>
          <Slider {...settings}>
          <div className="p-4 grid grid-cols-4 gap-[30px]">
            <div>
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
          </div>
          <div className="p-4">
            <div>
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
          </div>
          <div className="p-4">
            <div>
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
          </div>
          <div className="p-4">
            <div>
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
          </div>
          <div className="p-4">
            <div>
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
          </div>
          <div className="p-4">
            <div>
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
          </div>
          <div className="p-4">
            <div>
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
          </div>
          <div className="p-4">
            <div>
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
          </div>
          <div className="p-4">
            <div>
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
          </div>
          <div className="p-4">
            <div>
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
          </div>
          <div className="p-4">
            <div>
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
          </div>
          <div className="p-4">
            <div>
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
          </div>
          <div className="p-4">
            <div>
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
          </div>
        </Slider>
                <Slider {...settings}>
          <div className="p-4 grid grid-cols-4 gap-[30px]">
            <div>
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
          </div>
          <div className="p-4">
            <div>
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
          </div>
          <div className="p-4">
            <div>
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
          </div>
          <div className="p-4">
            <div>
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
          </div>
          <div className="p-4">
            <div>
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
          </div>
          <div className="p-4">
            <div>
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
          </div>
          <div className="p-4">
            <div>
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
          </div>
          <div className="p-4">
            <div>
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
          </div>
          <div className="p-4">
            <div>
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
          </div>
          <div className="p-4">
            <div>
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
          </div>
          <div className="p-4">
            <div>
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
          </div>
          <div className="p-4">
            <div>
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
          </div>
          <div className="p-4">
            <div>
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
          </div>
        </Slider>

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
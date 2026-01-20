import { FaApple, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import iPhoneImage from "../../../assets/heroImg.png";
import apple_logo from "../../../assets/apple-logo.png";

const PromoSlider = () => {
  return (
    <div className="">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        className="w-[892px]"
      >
        {[1, 2, 3, 4, 5].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="bg-black">
              <div className="flex justify-between">
                <div className="pl-[64px] pt-[58px]">
                  <div className="flex items-center gap-[24px]">
                    <img src={apple_logo} alt="apple_logo" />
                    <h4 className="text-[16px] font-normal font-poppins text-white">
                      iPhone 14 Series
                    </h4>
                  </div>

                  <h2 className="text-[48px] font-semibold font-inter text-white">
                    Up to 10% <br /> off Voucher
                  </h2>
                  <button className="text-[16px] font-medium font-poppins text-white border-b-2">
                    Shop Now
                  </button>
                </div>

                <div>
                  <img src={iPhoneImage} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PromoSlider;

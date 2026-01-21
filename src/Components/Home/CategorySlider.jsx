import Slider from "react-slick";
import {
  FiSmartphone,
  FiMonitor,
  FiWatch,
  FiCamera,
  FiHeadphones,
} from "react-icons/fi";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CommonHead from "../Common/CommonHead";

import { IoArrowForwardOutline } from "react-icons/io5";
import { MdArrowBack } from "react-icons/md";


const categories = [
  { id: 1, name: "Phones", icon: <FiSmartphone size={28} /> },
  { id: 2, name: "Computers", icon: <FiMonitor size={28} /> },
  { id: 3, name: "SmartWatch", icon: <FiWatch size={28} /> },
  { id: 4, name: "Camera", icon: <FiCamera size={28} />, active: true },
  { id: 5, name: "HeadPhones", icon: <FiHeadphones size={28} /> },
  { id: 6, name: "Gaming", icon: <IoGameControllerOutline size={28} /> },
    { id: 1, name: "Phones", icon: <FiSmartphone size={28} /> },
  { id: 2, name: "Computers", icon: <FiMonitor size={28} /> },
  { id: 3, name: "SmartWatch", icon: <FiWatch size={28} /> },
  { id: 4, name: "Camera", icon: <FiCamera size={28} />, active: true },
  { id: 5, name: "HeadPhones", icon: <FiHeadphones size={28} /> },
  { id: 6, name: "Gaming", icon: <IoGameControllerOutline size={28} /> },
  
];

const CategorySlider = () => {


      const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
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
      <div
        data-aos="fade-up"
        className=" pt-[80px] pb-[70px] border-t border-b"
      >
        <CommonHead h2={"Categories"} hp={"Browse By Category"} />
        <div className="relative ]">
          <Slider {...settings}>
            {categories.map((item) => (
              <>
              
              <div key={item.id} className="px-3">
                <div
                  className={`h-36 border rounded-md flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-[#DB4444] hover:text-white `}
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
              </div>
              
              </>
              
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CategorySlider;

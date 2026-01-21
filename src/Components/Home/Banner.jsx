import React from "react";
import PromoSlider from "./banner/PromoSlider";
import CategoryMenu from "./banner/CategoryMenu";

const Banner = () => {
  return (
    <>
      <div  data-aos="fade-up" className="container flex justify-between">
        <CategoryMenu />
        <PromoSlider />
      </div>
    </>
  );
};

export default Banner;

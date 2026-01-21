import React from "react";
import Banner from "../Components/Home/Banner";
import Categories from "../Components/Home/Categories";
import ServiceFeatures from "../Components/Home/ServiceFeatures";
import NewArrival from "../Components/Home/NewArrival";
import CategorySlider from "../Components/Home/CategorySlider";
import AllProduct from "../Components/Home/AllProduct";
import BestSelling from "../Components/Home/BestSelling";
import ExploreProducts from "../Components/Home/ExploreProducts";

const Home = () => {
  return (
    <>
      <div className="container">
        <Banner />
        <AllProduct />
        <CategorySlider />
        <BestSelling />
        <Categories />
        <ExploreProducts />
        <NewArrival />
        <ServiceFeatures />
      </div>
    </>
  );
};

export default Home;

import React from "react";
import Banner from "../Components/Home/Banner";
import Categories from "../Components/Home/Categories";
import ServiceFeatures from "../Components/Home/ServiceFeatures";
import NewArrival from "../Components/Home/NewArrival";
import CategorySlider from "../Components/Home/CategorySlider";

const Home = () => {
  return (
    <>
      <div className="container">
        <Banner />
        <Categories />
        <CategorySlider />
        <NewArrival />
        <ServiceFeatures />
      </div>
    </>
  );
};

export default Home;

import React from 'react'
import productImg from "../../assets/productImg.png";
import CommonHead from '../Common/CommonHead';
import ProductCard from './product/ProductCard';

const BestSelling = () => {
  return (
    <>
    
      <div  data-aos="fade-up" className=" pt-[154px] ">
        <div>
          <CommonHead h2={"This Month"} hp={"Best Selling Products"} />
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
 
      </div>
    
    </>
  )
}

export default BestSelling
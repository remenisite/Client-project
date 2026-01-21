import React from 'react'
import Category from './SeeAllProduct/Category'

import productImg from "../assets/productImg.png";
import Breadcrumb from './Common/Breadcrumb';
import ProductCard from './Home/product/ProductCard';
import ShowItemsSelector from './SeeAllProduct/ShowItemsSelector';

const SeeAllProduct = () => {
  return (
    <div>
      <div className='container'>
        <Breadcrumb data={'shop'} />
<div className='flex justify-between mt-[50px] pb-[104px]'>
        <div><Category /></div>
        <div className=''>
          <div className='flex justify-end'>
          <ShowItemsSelector />   

          </div>


          <div className='grid grid-cols-4 gap-[15px] mt-[30px]'>
            
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


        </div>
       </div>
      </div>
    </div>
  )
}

export default SeeAllProduct
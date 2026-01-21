import React from 'react'
import Category from './SeeAllProduct/Category'

import productImg from "../assets/productImg.png";
import Breadcrumb from './Common/Breadcrumb';
import ProductCard from './Home/product/ProductCard';

const SeeAllProduct = () => {
  return (
    <div>

      <div className='container'>
        <Breadcrumb data={'shop'} />


        <div><Category /></div>

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
          />             <ProductCard
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
  )
}

export default SeeAllProduct
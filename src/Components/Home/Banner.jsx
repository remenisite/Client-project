import React from 'react'
import PromoSlider from './banner/PromoSlider'
import CategoryMenu from './banner/CategoryMenu'

const Banner = () => {
  return (
    <>
    <div className='container flex justify-between'>
      <CategoryMenu />

    <PromoSlider />
    </div>
    
    

    </>
  )
}

export default Banner
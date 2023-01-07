import React from 'react'
import CartBody from '../../Component/cartComponent/cartBody/CartBody'
import DeliveryAds from '../../Component/cartComponent/deliveryAds/DeliveryAds'
import Favorites from '../../Component/cartComponent/favorites/Favorites'
import MightLike from '../../Component/cartComponent/mightLike/MightLike'
import Summary from '../../Component/cartComponent/summary/Summary'

export default function CartPage() {
  document.title = 'Nike. Bag'
  return (
    <div className="
      lg:px-9
      px-4
      ">
      <div className="max-w-[1100px] mx-auto pt-10">
        <div className='
          lg:flex
          block
          '>
          <div className="
            lg:w-[66.6%] lg:pr-3
            w-full">
            <div className="">
              <DeliveryAds></DeliveryAds>
            </div>
            <div className="">
              <CartBody></CartBody>
            </div>
          </div>
          <div className="
            lg:w-[33.3%] lg:pl-3 lg:mt-0
            w-full mt-5">
            <Summary></Summary>
          </div>
        </div>
        <div className="py-5">
          <Favorites></Favorites>
        </div>

      </div>
      <div className="">
        <MightLike></MightLike>
      </div>
    </div>

  )
}

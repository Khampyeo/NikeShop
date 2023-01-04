import React from 'react'
import { useSelector } from 'react-redux'
import ItemCart from '../itemCart/ItemCart'

export default function CartBody() {
  const cart = useSelector(state => state.reducerUser.cart)
  const cartLengt = cart.length
  return (
    <div className='mt-5'>
      <h1 className='text-[#111] text-[22px]'>Bag</h1>
      {cartLengt > 0 ?
        cart.map((item, index) => (
          <div key={index} className="">
            <ItemCart itemInfo={item}></ItemCart>
          </div>
        ))
        :
        <div className="">
          <p className='text-[#111] text-base'>There are no items in your bag.</p>
        </div>
      }
    </div>
  )
}

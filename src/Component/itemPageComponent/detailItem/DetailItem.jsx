import React, { useState } from 'react'
import Size from '../Size/Size';
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function DetailItem() {
  const data = useSelector(state => state.reducerDetailItem.data)
  const user = useSelector(state => state.reducerUser.user)
  console.log(user);
  const [exitsItemInFavorite, setExitsItemInFavorite] = useState(() => {
    return user.productsFavorite.some((item) => item.productId == data._id)
  })
  const [indexImg, setIndexImg] = useState(0)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const OnlyOneColor = data.imgDetails.length == 1
  const imgSelection = (index) => {
    dispatch({ type: 'IMG', payload: data.imgDetails[index] })
  }
  const numToPrice = (num) => {
    let str = String(num);
    let len = str.length;
    if (len < 3) return str
    else if (len < 7) {
      str = str.slice(0, -3) + ',' + str.slice(-3)
      return str
    }
    else {
      str = str.slice(0, -6) + ',' + str.slice(-6, -3) + ',' + str.slice(-3)
      return str
    };
  }


  const addFavourites = () => {
    const item = {
      productId: data._id,
      name: data.name,
      price: data.price,
      size: null,
      img: data.img,
      color: data.color,
      quantity: 0,
      message: data.message,
      sizes: data.sizes
    }
    if (user === null) {
      navigate('/login')
    }
    else {
      if (exitsItemInFavorite) {
        let new_user = user
        new_user.productsFavorite.splice(()=>{
          new_user.productsFavorite.findIndex((item)=>item.productId == data._id)
        }, 1)
        dispatch({ type: 'USER', payload: new_user })
        setExitsItemInFavorite(false)
      }
      else {
        let new_user = user
        new_user.productsFavorite.push(item)
        dispatch({ type: 'USER', payload: new_user })
        setExitsItemInFavorite(true)
      }
    }
  }
  return (
    <div className='w-[420px] text-[#111]'>
      <h1 className="text-[28px]">{data.name}</h1>
      <p className="text-[16px]">{data.message}</p>
      <p className='py-5'>{numToPrice(data.price)}đ</p>
      {!OnlyOneColor && <div className="flex flex-wrap gap-2">
        {data.imgDetails.map((item, index) => (
          <div
            key={index}
            className={`w-[70px] h-[70px] rounded overflow-hidden relative cursor-pointer border-[#111] ${indexImg == index && 'border'}`}
            onClick={() => {
              setIndexImg(index)
              imgSelection(index)
            }}>
            <img src={item.imgs[0].img} alt="" className='absolute left-0 top-1/2 translate-y-[-50%]' />
          </div>
        ))}
      </div>}
      <div className="py-5">
        <Size sizes={data.sizes}></Size>
      </div>
      <button className='w-full bg-[#111] text-white rounded-full py-4 mb-2'>Add to Bag</button>
      <button className='w-full border border-[#cdcdcd] flex justify-center items-center rounded-full py-4' onClick={() => addFavourites()}>
        <p>Favourites</p>
        {!exitsItemInFavorite ? (<BsHeart className='w-3 ml-2'></BsHeart>) : (<BsHeartFill className='w-3 ml-2'></BsHeartFill>)}
      </button>
      <div className="text-base py-10">{data.description}</div>
      <p className='my-8 pb-1 border-b border-[#111] inline-block'>View Product Details</p>
      <div className="border-t border-b border-[#e5e5e5] py-7">
        <div className="flex justify-between items-center">
          <h1 className='text-[20px]'>Free Delivery and Returns</h1>
          <FaChevronDown></FaChevronDown>
        </div>
        <div className="pt-7 leading-relaxed">
          <p>Your order of 5.000.000₫ or more gets free standard delivery.</p>
          <ul className="py-7 list-disc ml-4">
            <li className="">Standard delivered 4-5 Business Days</li>
            <li className="">Express delivered 2-4 Business Days</li>
          </ul>
          <p className="">Orders are processed and delivered Monday-Friday (excluding public holidays)</p>
          <p className="pt-5">Nike Members enjoy free returns.</p>
        </div>
      </div>
    </div>
  )
}

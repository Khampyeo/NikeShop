import React, { Fragment, useEffect, useState } from 'react'
import Size from '../Size/Size';
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AddSuccess from '../../addSuccess/AddSuccess';
import numToPrice from '../../functions/NumToPrice';
import DeliveryPolicy from '../deliveryPolicy/DeliveryPolicy';
export default function DetailItem() {
  const data = useSelector(state => state.reducerDetailItem.data)
  const user = useSelector(state => state.reducerUser.user)
  // const token = useSelector(state => state.reducerUser.token)
  const cart = useSelector(state => state.reducerUser.cart)

  const [indexImg, setIndexImg] = useState(0)
  const [exitsItemInFavorite, setExitsItemInFavorite] = useState(() => user?.productsFavorite.some((item) => item.productId === data.imgDetails[indexImg]?._id))
  const [loading, setloading] = useState(false)
  const [size, setSize] = useState(null)
  const [sizeValid, setsizeValid] = useState(false)
  const [showToast, setShowToast] = useState(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const OnlyOneColor = data.imgDetails.length === 1
  const imgSelection = (index) => {
    dispatch({ type: 'IMG', payload: data.imgDetails[index] })
  }
  useEffect(() => {
    setExitsItemInFavorite(() => user?.productsFavorite.some((item) => item.productId === data.imgDetails[indexImg]?._id))
  }, [indexImg])

  const handleShowToast = (timeOutFunc) => {
    setShowToast(null)
    clearTimeout(timeOutFunc)
  }

  const sizeSelection = (size) => {
    setSize(size)
    setsizeValid(false)
  }

  const addFavourites = () => {
    const item = {
      productId: data.imgDetails[indexImg]._id,
      id_original: data._id,
      name: data.name,
      price: data.price,
      size: null,
      img: data.imgDetails[indexImg].imgs[0].img,
      color: data.imgDetails[indexImg].color,
      quantity: 0,
      message: data.message,
      sizes: data.sizes
    }
    if (user.userType === 'guest') {
      navigate('/login')
    }
    else {
      if (exitsItemInFavorite) {
        let new_user = user
        new_user.productsFavorite.splice(() => {
          new_user.productsFavorite.findIndex((item) => item.productId === data._id)
        }, 1)
        dispatch({ type: 'USER', payload: new_user })
        setExitsItemInFavorite(false)
        // updateFavourites(new_user.productsFavorite, token)
        localStorage.setItem(user._id, JSON.stringify({ cart: cart, favourites: new_user.productsFavorite }));
      }
      else {
        let new_user = user
        new_user.productsFavorite.push(item)
        dispatch({ type: 'USER', payload: new_user })
        setExitsItemInFavorite(true)
        // updateFavourites(new_user.productsFavorite, token)
        localStorage.setItem(user._id, JSON.stringify({ cart: cart, favourites: new_user.productsFavorite }));
      }
    }
  }
  const updateFavourites = async (favourite, token) => {
    setloading(true)

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': token
    }
    try {
      await axios.post('https://nike-sever-vtcoder.glitch.me/users/addUpdateFavorite',
        {
          favourite
        },
        {
          headers: headers
        })
        .then((response) => console.log(response))
      await axios.post('https://nike-sever-vtcoder.glitch.me/users/login', { email: 'khang@gmail.com', password: 'khang123' })
        .then(response => console.log(response))
    }
    catch (err) {
      console.log(err)
    }
    setloading(false)
  }
  const addToBag = () => {
    if (!size) {
      setsizeValid(true)
    }
    else {
      const new_cart = [...cart]
      setsizeValid(false)
      const item = {
        id: data.imgDetails[indexImg]._id,
        id_original: data._id,
        quantity: 1,
        name: data.name,
        price: data.price,
        message: data.message,
        size: size,
        img: data.imgDetails[indexImg].imgs[0].img,
        color: data.imgDetails[indexImg].color,
        sizes: data.sizes
      }
      const checkExistItem = new_cart.findIndex((element) => (element.id === item.id && element.size === item.size))
      if (checkExistItem >= 0) {
        new_cart[checkExistItem].quantity++
      }
      else {
        new_cart.push(item)
      }
      dispatch({ type: 'CART', payload: new_cart })
      localStorage.setItem(user._id, JSON.stringify({ cart: new_cart, favourites: user.productsFavorite }));

      setShowToast(<AddSuccess item={item} setShowToast={() => handleShowToast(autoRemoveToast)}></AddSuccess>)
      const autoRemoveToast = setTimeout(() => {
        setShowToast(null)
      }, 3000);
    }
  }

  return (
    <Fragment>
      <div className='w-full text-[#111]'>
        <h1 className="text-[28px]">{data.name}</h1>
        <p className="text-[16px]">{data.message}</p>
        <p className='py-5'>{numToPrice(data.price)}đ</p>
        {!OnlyOneColor && <div className="flex flex-wrap gap-2">
          {data.imgDetails.map((item, index) => (
            <div
              key={index}
              className={`w-[70px] h-[70px] rounded overflow-hidden relative cursor-pointer border-[#111] ${indexImg === index && 'border'}`}
              onClick={() => {
                setIndexImg(index)
                imgSelection(index)
              }}>
              <img src={item.imgs[0].img} alt="" className='absolute left-0 top-1/2 translate-y-[-50%]' />
            </div>
          ))}
        </div>}
        <div className="py-5">
          <div className="flex justify-between mb-1">
            <p className={`
            text-base
            ${sizeValid && 'text-red-700'}

            `}>Select Size</p>
            <a
              href='https://www.nike.com/vn/size-fit/mens-footwear'
              target="_blank"
              rel="noopener noreferrer"
              className='text-[#757575] text-base'
            >Size Guide</a>
          </div>
          <div className={`
            ${sizeValid && 'border border-red-700 rounded-md'}
          `}>
            <Size sizes={data.sizes} sizeSelection={sizeSelection}></Size>
          </div>
        </div>
        <button className='w-full bg-[#111] text-white rounded-full py-5 mb-2' onClick={addToBag}>Add to Bag</button>
        <button
          className={`
          py-5 w-full flex justify-center items-center rounded-full
          ${loading ? 'text-white bg-gray-300 focus:outline-none cursor-default' : 'border border-[#cdcdcd] '}
        `}
          onClick={() => addFavourites()}
        >
          <p>Favourites</p>
          {!exitsItemInFavorite ? (<BsHeart className='w-3 ml-2'></BsHeart>) : (<BsHeartFill className='w-3 ml-2'></BsHeartFill>)}
        </button>
        <div className="text-base py-10">{data.description}</div>
        <p className='my-8 pb-1 border-b border-[#111] inline-block'>View Product Details</p>
        <DeliveryPolicy></DeliveryPolicy>
      </div>
      <div className="fixed lg:top-[92px] top-[60px] right-9 z-[1030]">
        {showToast}
      </div>
      {showToast && <div className="modal fixed inset-0 lg:top-[92px] top-[60px] bg-black opacity-40 z-[1020]" onClick={handleShowToast}></div>}
    </Fragment>
  )
}

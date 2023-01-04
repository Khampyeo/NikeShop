import React, { Fragment } from 'react'
import { useState } from 'react';
import BlackBtn from '../../Button/BlackBtn';
import { BsHeart, BsHeartFill, BsCheck } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import numToPrice from '../../functions/NumToPrice';
import { Link } from 'react-router-dom';
import AddSuccess from '../../addSuccess/AddSuccess';
import './animation.css'
export default function FavouritesItem({ favourite, edit, handleSetItemRemove }) {
    const [Buy, setBuy] = useState(false)
    const [removeFavorite, setRemoveFavorite] = useState(false)
    const [sizeSelect, setSizeSelect] = useState(null)
    const [sizeValid, setSizeValid] = useState(false)
    const [showToast, setShowToast] = useState(null)
    const user = useSelector(state => state.reducerUser.user)
    const cart = useSelector(state => state.reducerUser.cart)
    console.log(favourite);

    const dispatch = useDispatch()

    useEffect(() => {
        setRemoveFavorite(false)
    }, [user])
    const SelectSizeShoe = (size) => {
        setSizeSelect(size)
        setSizeValid(false)
    }

    const handleShowToast = (timeOutFunc) => {
        setShowToast(null)
        clearTimeout(timeOutFunc)
    }

    const checkExistInCart = () => {
        const checkExistItem = cart.findIndex((element) => (element.id === favourite.productId))
        if (checkExistItem > -1) return true
        else return false
    }
    const addToBag = () => {
        if (!sizeSelect) {
            setSizeValid(true)
        }
        else {
            const new_cart = [...cart]
            setSizeValid(false)
            const item = {
                id_original: favourite.id_original,
                id: favourite.productId,
                quantity: 1,
                name: favourite.name,
                message: favourite.message,
                price: favourite.price,
                size: sizeSelect,
                img: favourite.img,
                color: favourite.color,
                sizes: favourite.sizes
            }
            if (!checkExistInCart()) {
                new_cart.push(item)
                setShowToast(<AddSuccess item={item} setShowToast={() => handleShowToast(autoRemoveToast)}></AddSuccess>)
                const autoRemoveToast = setTimeout(() => {
                    setShowToast(null)
                }, 3000);
            }
            dispatch({ type: 'CART', payload: new_cart })
            localStorage.setItem(user._id, JSON.stringify({ cart: new_cart, favourites: user.productsFavorite }));
            setBuy(false)
        }

    }
    return (
        <Fragment>
            {Buy &&
                <div className="fixed bg-black/[0.3] inset-0 z-[1100] flex justify-center items-center" onClick={() => setBuy(false)}>
                    <div className="w-[928px] h-[488px] bg-white m-auto flex p-6 rounded-2xl modal-appear" onClick={(e) => e.stopPropagation()}>
                        <div className="mt-3 rounded-lg overflow-hidden">
                            <img src={favourite.img} alt="" className='w-[430px] h-[430px] ' />
                        </div>
                        <div className="text-base text-[#111] ml-6 flex-1 flex flex-col pt-3">
                            <div className="flex justify-between mb-2">
                                <p>{favourite.message}</p>
                                <p>{numToPrice(favourite.price)}đ</p>
                            </div>
                            <h1 className='text-[28px]'>{favourite.name}</h1>
                            <div className={`
                                mt-auto
                            `}>
                                <p className={`
                                    mb-2
                                    ${sizeValid && 'text-red-600'}
                                `}>Select Size</p>
                                <div className={`
                                        grid grid-cols-5 gap-2
                                        ${sizeValid && 'border border-red-700 rounded-lg'}
                                    `}>
                                    {favourite.sizes.map((size, index) => (
                                        <div
                                            key={index}
                                            className={`
                                                border flex justify-center items-center py-3 rounded-xl cursor-pointer hover:border-black
                                                ${sizeSelect === size.size && 'border-black'}
                                            `}
                                            onClick={() => SelectSizeShoe(size.size)}
                                        >{size.size}</div>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-5" onClick={() => addToBag()}>
                                <BlackBtn style='w-full py-4' name='Add To Bag'></BlackBtn>
                            </div>
                        </div>
                    </div>

                </div>}
            <div className='w-full relative'>
                <div className={`${removeFavorite && 'opacity-60'}`}>
                    <Link to={`/item/${favourite.id_original}`} className={`${edit && 'pointer-events-none'}`}>
                        <div className="
                        w-full pb-[100%] h-0 overflow-hidden object-center relative bg-[#f6f6f6]
                        " >
                            <img className='absolute w-full top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%]' src={favourite.img} alt="" />
                        </div>
                    </Link>
                    <div className="flex justify-between text-[#111] items-center pt-5">
                        <div className="">
                            <Link to={`/item/${favourite.id_original}`}>
                                <p>{favourite.name}</p>
                            </Link>
                            <p className="text-[#757575] text-[14px]">{favourite.message}</p>
                        </div>
                        <p className='text-[#111]'>{numToPrice(favourite.price)}₫</p>
                    </div>
                    <div className="py-5">
                        {checkExistInCart() ?
                            <button className='border py-3 px-6 border-[#ccc] rounded-full flex justify-center items-center'>
                                <BsCheck className='text-green-700 text-[20px   ]'></BsCheck>
                                <p>Added</p>
                            </button>
                            :
                            <button className='border py-3 px-6 border-[#ccc] rounded-full' onClick={() => setBuy(true)}>Select Size</button>
                        }
                    </div>
                </div>
                {edit &&
                    <button
                        className="absolute top-3 right-3 w-[36px] h-[36px] bg-white rounded-full flex justify-center items-center"
                        onClick={() => {
                            handleSetItemRemove(favourite.productId)
                            setRemoveFavorite(!removeFavorite)
                        }}>
                        {removeFavorite ? <BsHeart className='w-5 h-5'></BsHeart> : <BsHeartFill className='w-5 h-5'></BsHeartFill>}
                    </button>
                }
            </div>
            <div className="fixed top-[92px] right-9 z-[1030]">
                {showToast}
            </div>
            {showToast && <div className="modal fixed inset-0 top-[96px] bg-black opacity-40 z-[1020]" onClick={handleShowToast}></div>}
        </Fragment >
    )
}

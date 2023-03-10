import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BsCheck } from "react-icons/bs";
import BlackBtn from '../../Button/BlackBtn';
import { Link } from 'react-router-dom';
import numToPrice from '../../functions/NumToPrice'
export default function FavoritesItem({ favourite }) {
    const [Buy, setBuy] = useState(false)
    const [sizeSelect, setSizeSelect] = useState(null)
    const [sizeValid, setSizeValid] = useState(false)
    
    const cart = useSelector(state => state.reducerUser.cart)
    const user = useSelector(state => state.reducerUser.user)

    const dispatch = useDispatch()

    const SelectSizeShoe = (size) => {
        setSizeSelect(size)
        setSizeValid(false)
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
                id: favourite.productId,
                id_original: favourite.id_original,
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
                                <p>{numToPrice(favourite.price)}??</p>
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
            <div className='
            flex py-6 relative
            after:absolute after:h-[1px] after:w-full after:bg-[#e5e5e5] after:top-full after:left-0
            '>
                <Link to={`/item/${favourite.id_original}`}>
                    <div className="mr-4 h-[150px] w-[150px] overflow-hidden">
                        <img className='w-full' src={favourite.img} alt="" />
                    </div>
                </Link>
                <div className="flex-1 flex justify-between items-start text-[#111]">
                    <div className="flex flex-col h-full">
                        <Link to={`/item/${favourite.id_original}`}>
                            <h1>{favourite.name}</h1>
                        </Link>
                        <p className='text-[#757575]'>{favourite.message}</p>
                        <div className="pt-2 mt-auto">
                            {checkExistInCart() ?
                                <button className='border py-3 px-6 border-[#ccc] rounded-full flex justify-center items-center'>
                                    <BsCheck className='text-green-700 text-[20px   ]'></BsCheck>
                                    <p>Added</p>
                                </button>
                                :
                                <button className='border py-3 px-6 border-[#ccc] rounded-full' onClick={() => setBuy(true)}>Add to Buy</button>

                            }
                        </div>
                    </div>
                    <p className=''>{numToPrice(favourite.price)}</p>
                </div>
            </div>
        </Fragment>

    )

}

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import numToPrice from '../../functions/NumToPrice'
import './animation.css'
export default function ItemCart({ itemInfo }) {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.reducerUser.cart)
    const user = useSelector(state => state.reducerUser.user)
    const [deleteItem, setDeleteItem] = useState(false)
    const navigate = useNavigate()
    const sizes = itemInfo.sizes
    const quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const deleteItemfunction = () => {
        setTimeout(() => {
            let new_cart = cart
            const indexItem = cart.findIndex((elemment) => elemment.id === itemInfo.id && elemment.size === itemInfo.size)
            if (indexItem > -1) {
                new_cart = new_cart.filter((element, index) => index !== indexItem)
            }
            dispatch({ type: 'CART', payload: new_cart })
            localStorage.setItem(user._id, JSON.stringify({ cart: new_cart, favourites: user.productsFavorite }));
        }, 300)
    }
    useEffect(() => {
        setDeleteItem(false)
    }, [cart])

    const addFavourites = (data) => {
        const checkExist = () => {
            return user?.productsFavorite.some((item) => {
                return item.productId === data.id
            })
        }
        const item = {
            productId: data.id,
            id_original: data.id_original,
            name: data.name,
            price: data.price,
            size: null,
            img: data.img,
            color: data.color,
            quantity: 0,
            message: data.message,
            sizes: data.sizes
        }
        if (user.userType === 'guest') {
            navigate('/login')
        }
        else {
            if (checkExist()) {
                alert('da ton tai')
            }
            else {
                let new_user = { ...user }
                new_user.productsFavorite.push(item)
                dispatch({ type: 'USER', payload: new_user })
                localStorage.setItem(user._id, JSON.stringify({ cart: cart, favourites: new_user.productsFavorite }));
                deleteItemfunction()
                setDeleteItem(true)
            }
        }
    }
    const hanldeChangeQuantity = (e) => {
        const quantity = Number(e.target.value)
        const index = cart.findIndex((item,index)=>item.id === itemInfo.id && item.size === itemInfo.size)
        const new_cart = [...cart]
        new_cart[index].quantity = quantity
        localStorage.setItem(user._id, JSON.stringify({ cart: new_cart, favourites: user.productsFavorite }));

    }
    const hanldeChangeSize = (e) => {
        const size = e.target.value
        const index = cart.findIndex((item,index)=>item.id === itemInfo.id && item.size === itemInfo.size)
        const new_cart = [...cart]
        new_cart[index].size = size
        localStorage.setItem(user._id, JSON.stringify({ cart: new_cart, favourites: user.productsFavorite }));

    }
    return (
        <div className={`
                flex py-6 relative
                after:absolute after:h-[1px] after:w-full after:bg-[#e5e5e5] after:top-full after:left-0
                ${deleteItem && 'delete-animation'}
            `}>
            <Link to={`/item/${itemInfo.id_original}`}>
                <div className="mr-4 h-[150px] w-[150px] overflow-hidden">
                    <img className='w-[150px]' src={itemInfo.img} alt="" />
                </div>
            </Link>
            <div className="flex-1 flex justify-between items-start text-[#111]">
                <div className="pl-2">
                    <div className="">
                        <Link to={`/item/${itemInfo.id_original}`}>
                            <h1>{itemInfo.name}</h1>
                        </Link>
                        <p className='text-[#757575]'>{itemInfo.message}</p>
                        <div className="flex text-[#757575] text-[16px] mt-5">
                            <div className="flex mr-4">
                                <p>Size</p>
                                <select className='px-4 text-[14px]' defaultValue={itemInfo.size} name="" id="" onChange={(e)=>hanldeChangeSize(e)}>
                                    {sizes.map((element, index) => (
                                        <option key={index} value={element.size}>{element.size}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex">
                                <p className="">Quantity</p>
                                <select className='px-4 text-[14px]' defaultValue={itemInfo.quantity} name="" id="" onChange={(e) => hanldeChangeQuantity(e)}>
                                    {quantity.map((element, index) => (
                                        <option key={index} value={element}>{element}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-5">
                        <div className="mr-4" onClick={() => addFavourites(itemInfo)}>
                            <svg aria-hidden="true" width={24} height={24} fill="none">
                                <path
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                    d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 0 1 0 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 0 1 0-7.007A4.923 4.923 0 0 1 7.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 0 1 3.504-1.451"
                                />
                            </svg>
                        </div>
                        <div
                            className="
                                cursor-pointer hover:opacity-75
                            "
                            onClick={() => {
                                deleteItemfunction()
                                setDeleteItem(true)
                            }}>
                            <svg aria-hidden="true" width={24} height={24} fill="none">
                                <path
                                    stroke="currentColor"
                                    strokeMiterlimit={10}
                                    strokeWidth={1.5}
                                    d="M14.25 7.5v12m-4.5-12v12M5.25 6v13.5c0 1.24 1.01 2.25 2.25 2.25h9c1.24 0 2.25-1.01 2.25-2.25V5.25h2.75m-2.75 0H21m-12-3h5.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H3"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <p className=''>{numToPrice(itemInfo.price)}đ</p>
            </div>
        </div>
    )
}

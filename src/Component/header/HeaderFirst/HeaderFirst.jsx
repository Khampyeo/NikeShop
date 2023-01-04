import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import jordanLogo from '../img/jordan-2.svg'
import { AiOutlineUser } from "react-icons/ai";
export default function HeaderFirst() {
    const user = useSelector(state => state.reducerUser.user)
    const dispatch = useDispatch()
    const logOut = ()=>{
        const guest = {
            age: null,
            email: null,
            name: 'guest',
            productsFavorite: [],
            userType: 'guest',
            _id: '1231'
          }
          localStorage.removeItem('user');
          dispatch({ type: 'USER', payload: guest })
          dispatch({ type: 'CART', payload: [] })
          dispatch({ type: 'STATUS', payload: 'notlogin' })

    }
    return (
        <div className='
        md:block
        lg:px-9
        px-4 hidden w-full bg-[#f5f5f5]
        '>
            <div className="py-1 flex justify-between">
                <img className='w-5 cursor-pointer hover:opacity-60' src={jordanLogo} alt="" />
                <div className="font-[Helvetica]">
                    <p className="text-[12px] mr-[10px] inline-block cursor-pointer hover:opacity-60">Find a Store</p>
                    <div className="group text-[12px] mx-[10px] inline-block relative">
                        <span className='group-hover:opacity-60 cursor-pointer'>Help</span>
                        <div className="
                        absolute w-[240px] rounded-lg p-[20px] bg-white right-0 top-full hidden z-[1050]
                        group-hover:block
                        ">
                            <h1 className='text-[16px] text-[#11111]' >Help</h1>
                            <ul className='text-[14px] text-[#757575] mt-2'>
                                <li className="py-1 hover:text-[#111]">Order Status</li>
                                <li className="py-1 hover:text-[#111]">Dispatch and Delivery</li>
                                <li className="py-1 hover:text-[#111]">Returns</li>
                                <li className="py-1 hover:text-[#111]">Contact Us</li>
                                <li className="py-1 hover:text-[#111]">Privacy Policy</li>
                                <li className="py-1 hover:text-[#111]">Terms of Sale</li>
                                <li className="py-1 hover:text-[#111]">Terms of Use</li>
                                <li className="py-1 hover:text-[#111]">Send Us Feedback</li>
                            </ul>
                        </div>
                    </div>

                    {user.userType!=='guest' ?
                        (
                            <div
                                className="group inline-flex ml-[10px] relative"
                            >
                                <div className="flex items-center hover:opacity-60 cursor-pointer">
                                    <p className='text-[12px] '>Hi, {user.name}</p>
                                    <AiOutlineUser className='text-[20px] ml-1'></AiOutlineUser>
                                </div>
                                <div
                                    className={`
                                        px-5 py-6 bg-white rounded-lg absolute right-0 z-[1050] w-[240px] 
                                        invisible opacity-0 top-[50%] transition-all ease-in
                                        group-hover:visible group-hover:opacity-100 group-hover:top-[100%] 
                                    `}>
                                    <h1 className='text-base'>Account</h1>
                                    <div className="text-[14px] mt-2 text-[#757575]">
                                        <p className='mt-1 hover:text-[#111] cursor-pointer'>Profile</p>
                                        <p className='mt-1 hover:text-[#111] cursor-pointer'>Orders</p>
                                        <p className='mt-1 hover:text-[#111] cursor-pointer'>Favourites</p>
                                        <p className='mt-1 hover:text-[#111] cursor-pointer'>Inbox</p>
                                        <p className='mt-1 hover:text-[#111] cursor-pointer'>Experiences</p>
                                        <p className='mt-1 hover:text-[#111] cursor-pointer'>Account Settings</p>
                                        <p className='mt-1 hover:text-red-700 cursor-pointer' onClick={logOut}>Log Out</p>
                                    </div>
                                </div>
                            </div>
                        )
                        :
                        (
                            <Fragment>
                                <Link to={'/register'}>
                                    <p className="text-[12px] mx-[10px] hover:opacity-60 inline-block">Join Us</p>
                                </Link>
                                <Link to={'/login'}>
                                    <p className="text-[12px] ml-[10px] hover:opacity-60 inline-block">Sign In</p>
                                </Link>
                            </Fragment>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

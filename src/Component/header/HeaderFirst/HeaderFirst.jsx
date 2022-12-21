import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import jordanLogo from '../img/jordan-2.svg'
import { AiOutlineUser } from "react-icons/ai";

export default function HeaderFirst() {
    const user = useSelector(state => state.reducerUser.user)
    return (
        <div className='
        md:block
        lg:px-9
        px-4 hidden w-full bg-[#f5f5f5]
        '>
            <div className="py-1 flex justify-between">
                <img className='w-5 cursor-pointer hover:opacity-60' src={jordanLogo} alt="" />
                <div className="font-[Helvetica]">
                    <a href="#" className="text-[12px] mr-[10px] hover:opacity-60">Find a Store</a>
                    <a href="#" className="group text-[12px] mx-[10px] relative">
                        <span className='group-hover:opacity-60'>Help</span>
                        <div className="
                        absolute w-[240px] rounded-lg p-[20px] bg-white right-0 top-full hidden z-10
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
                    </a>

                    {user ?
                        (
                            <div className="inline-flex items-center ml-[10px] hover:opacity-60">
                                <p className='text-[12px] '>Hi, {user.name}</p>
                                <AiOutlineUser className='text-[20px] ml-1'></AiOutlineUser>
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

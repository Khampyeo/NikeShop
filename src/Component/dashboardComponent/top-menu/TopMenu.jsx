import React, { useState } from 'react'
import { AiOutlineSearch, AiOutlineMenu, AiOutlineMail, AiOutlineUserAdd, AiOutlineUserDelete, AiOutlineShoppingCart, AiOutlineBarChart } from "react-icons/ai";
import { IoNotificationsOutline, IoSpeedometerOutline } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";



export default function TopMenu({ setShowNav }) {
    const [showNotification, setShowNotification] = useState(false)
    return (
        <div className='p-4 border bg-white flex justify-between'>
            <div className="flex">
                <button className="flex items-center px-2" onClick={() => setShowNav()}>
                    <AiOutlineMenu className='text-[24px]'></AiOutlineMenu>
                </button>
                <div className=" bg-[#f0f4f7] h-[40px] flex items-center rounded-lg overflow-hidden ml-5">
                    <div className="w-[50px] flex justify-center items-center">
                        <AiOutlineSearch className='text-[20px]'></AiOutlineSearch>
                    </div>
                    <input type="text" className='h-full w-[200px] bg-[#f0f4f7] outline-none' placeholder='Search...' />
                </div>
            </div>
            <div className="flex items-center">
                <button className=" transition-all px-1 relative">
                    <AiOutlineMail className='text-[24px] opacity-60 hover:opacity-100'></AiOutlineMail>
                    <div className="w-2 h-2 rounded-full bg-red-600 absolute top-[-2px] right-[-2px]"></div>
                </button>
                <button className=" transition-all px-1 ml-4 relative">
                    <IoNotificationsOutline className='text-[24px] opacity-60 hover:opacity-100' onClick={()=>setShowNotification(!showNotification)}></IoNotificationsOutline>
                    <div className="w-2 h-2 rounded-full bg-red-600 absolute top-[-2px] right-[-2px]"></div>
                    {showNotification && <div className="absolute right-0 top-full translate-y-[10px] bg-white border rounded-lg whitespace-nowrap text-start overflow-hidden">
                        <div className="bg-[#f0f4f7] w-full">
                            <p className='py-2 px-4 text-[#9da5b1] font-semibold text-start'>You have 5 notificatons</p>
                        </div>
                        <div className="py-2 px-4 items-center hover:bg-[#f0f4f7] flex">
                            <AiOutlineUserAdd className='text-red-500'></AiOutlineUserAdd>
                            <p className='ml-2'>New user registered</p>
                        </div>
                        <div className="py-2 px-4 items-center hover:bg-[#f0f4f7] flex">
                            <AiOutlineUserDelete className='text-green-500'></AiOutlineUserDelete>
                            <p className='ml-2'>User deleted</p>
                        </div>
                        <div className="py-2 px-4 items-center hover:bg-[#f0f4f7] flex">
                            <AiOutlineBarChart className='text-yellow-400'></AiOutlineBarChart>
                            <p className='ml-2'>Sales report is ready</p>
                        </div>
                        <div className="py-2 px-4 items-center hover:bg-[#f0f4f7] flex">
                            <AiOutlineShoppingCart className='text-blue-500'></AiOutlineShoppingCart>
                            <p className='ml-2'>New client</p>
                        </div>
                        <div className="py-2 px-4 items-center hover:bg-[#f0f4f7] flex">
                            <IoSpeedometerOutline></IoSpeedometerOutline>
                            <p className='ml-2'>Sever overloaded</p>
                        </div>
                    </div>
                    }
                </button>
                <button className=" transition-all px-1 ml-4">
                    <CgMenuGridO className='text-[24px] opacity-60 hover:opacity-100'></CgMenuGridO>
                </button>
            </div>
        </div>
    )
}

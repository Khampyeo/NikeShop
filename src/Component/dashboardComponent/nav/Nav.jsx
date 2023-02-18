import React from 'react'
import LogoNike from '../../header/img/Logo_NIKE.png'
import { AiFillHome, AiFillStar } from "react-icons/ai";
import { BsPencilFill, BsFillMouseFill, BsFillFileEarmarkTextFill } from "react-icons/bs";
import { IoWater, IoNotifications } from "react-icons/io5";
import { HiPuzzle } from "react-icons/hi";
import Subnav from '../subnav/Subnav';
import './scrollbar.css'

export default function Nav() {
    return (
        <div className='h-[100vh] w-[300px] bg-white py-6 text-[#111] overflow-y-scroll nav-scrollbar'>
            <div className="flex justify-between items-center flex-col cursor-pointer">
                <img src={LogoNike} alt="" className='w-[54px]' />
                <span className="font-['League_Gothic'] text-[28px] translate-x-[-8px]">NIKE</span>
            </div>
            <div className="pt-5">
                <div className="h-[51px] py-3 px-5 hover:bg-slate-300">
                    <div className="flex justify-between items-center cursor-pointer">
                        <div className="flex items-center">
                            <AiFillHome></AiFillHome>
                            <p className='ml-4'>Dashboard</p>
                        </div>
                        <div className="py-1 px-3 rounded-2xl text-white leading-none bg-blue-400 flex justify-center items-center">new</div>
                    </div>
                </div>
                <div className="mt-2">
                    <h1 className="px-3 font-['League_Gothic'] text-[20px]">THEME</h1>
                    <div className="h-[51px] py-3 px-5 hover:bg-slate-300 cursor-pointer">
                        <div className="flex items-center">
                            <IoWater></IoWater>
                            <p className='ml-4'>Colors</p>
                        </div>
                    </div>
                    <div className="h-[51px] py-3 px-5 hover:bg-slate-300 cursor-pointer">
                        <div className="flex items-center">
                            <BsPencilFill></BsPencilFill>
                            <p className='ml-4'>Typography</p>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <h1 className="px-3 font-['League_Gothic'] text-[20px]">COMPONENT</h1>
                    <div className="">
                        <Subnav icon={<HiPuzzle></HiPuzzle>} name={'Base'} subArray={['Accordion', 'Breadcrumbs', 'Cards', 'Carousel', 'Collapse', 'List Group']}></Subnav>
                    </div>
                    <div className="">
                        <Subnav icon={<BsFillMouseFill></BsFillMouseFill>} name={'Button'} subArray={['Buttons', 'Buttons Groups', 'Dropdowns']}></Subnav>
                    </div>
                    <div className="">
                        <Subnav icon={<BsFillFileEarmarkTextFill></BsFillFileEarmarkTextFill>} name={'Forms'} subArray={["Form Control", "Select", "Checks & Radios", "Range", "Input Group", "Floating Labels", "Layout", "Validation"]}></Subnav>
                    </div>
                    <div className="">
                        <Subnav icon={<IoNotifications></IoNotifications>} name={'Notifications'} subArray={['Alerts', 'Badges', 'Modal', 'Toast']}></Subnav>
                    </div>
                </div>
                <div className="mt-2">
                    <h1 className="px-3 font-['League_Gothic'] text-[20px]">EXTRAS</h1>
                    <div className="">
                        <Subnav icon={<AiFillStar></AiFillStar>} name={'Pages'} subArray={['Login', 'Register', 'Error 404', 'Error 500']}></Subnav>
                    </div>
                </div>
                <div className="mt-2 px-3">
                    <h1 className="font-['League_Gothic'] text-[20px]">SYSTEM UTILIZATION</h1>
                    <div className="">
                        <p className='text-[14px] font-semibold'>CPU USAGE</p>
                        <div className="w-full h-[6px] rounded-full bg-[#777] border overflow-hidden">
                            <div className="w-[30%] h-full bg-red-400"></div>
                        </div>
                        <p className='text-[#777777] text-[14px]'>348 Processes. 1/4 Cores.</p>
                    </div>
                    <div className="">
                        <p className='text-[14px] font-semibold'>MEMORY USAGE</p>
                        <div className="w-full h-[6px] rounded-full bg-[#777] border overflow-hidden">
                            <div className="w-[70%] h-full bg-blue-400"></div>

                        </div>
                        <p className='text-[#777777] text-[14px]'>11444GB/16384MB</p>
                    </div>
                    <div className="">
                        <p className='text-[14px] font-semibold'>SSD 1 USAGE</p>
                        <div className="w-full h-[6px] rounded-full bg-[#777] border overflow-hidden">
                            <div className="w-[50%] h-full bg-green-400"></div>
                        </div>
                        <p className='text-[#777777] text-[14px]'>243GB/256GB</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


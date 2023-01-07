import React  from 'react'
import { BsCheck, BsPlus } from "react-icons/bs";
import { Link } from 'react-router-dom';
import WhiteGrayBtn from '../Button/WhiteGrayBtn';
import './animation.css'
export default function AddSuccess({ item, setShowToast }) {
    document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
    });
    
    return (
        <div className='toast-appear bg-white p-4 text-[#111]  sm:w-auto w-[100vw]'>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <BsCheck className='text-white text-[16px] bg-green-700 rounded-full'></BsCheck>
                    <p className='ml-2 ]'>Added To Bag</p>
                </div>
                <div className="" onClick={() => setShowToast()}>
                    <BsPlus className='rotate-45 text-[34px] text-[#8d8d8d] hover:text-[#111] cursor-pointer'></BsPlus>
                </div>
            </div>
            <div className="mt-3 flex items-center">
                <img src={item.img} alt="" className='h-[80px] w-[80px]' />
                <div className="px-3">
                    <p>{item.name}</p>
                    <p className='text-[#8d8d8d]'>Color: {item.color}</p>
                    <p className='text-[#8d8d8d]'>Size: {item.size}</p>
                </div>
                <Link to={'/cart'}>
                    <div className="ml-5">
                        <WhiteGrayBtn name={'View Bag'}></WhiteGrayBtn>
                    </div>
                </Link>
            </div>

        </div>
    )
}

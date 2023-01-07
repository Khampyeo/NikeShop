import React, { useState } from 'react'
import { BiBlock, BiCheck } from "react-icons/bi";
import { Link } from 'react-router-dom';

export default function RegisterNotification(props) {
    const [success, setSuccess] = useState(props.success)

    return (
        success?
        <div className='fixed bg-black/60 inset-0 z-[1200] '>
            <div className={`absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white rounded-lg py-5 pr-4 pl-8 min-w-[300px] flex justify-center`}>
                <div className="absolute inline-flex justify-center items-center p-4 rounded-full bg-green-500 left-1/2 translate-x-[-50%] top-[-40px]">
                    <BiCheck className='text-[40px] text-white '></BiCheck>
                </div>
                <div className=" mt-5 flex flex-col justify-center">
                    <p className="py-5 text-green-500 font-bold text-center">SIGN UP SUCCESS!</p>
                    <Link to={'/login'} className='flex justify-center' onClick={props.setNotification}>
                        <button className='border rounded-full inline-block py-2 px-4 border-green-500 hover:bg-green-500 hover:text-white transition-all'>Go Login</button>
                    </Link>
                </div>
            </div>
        </div>
        :
        <div className='fixed bg-black/60 inset-0 z-[1200] '>
            <div className={`absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white rounded-lg py-5 pr-4 pl-8 min-w-[300px] flex justify-center`}>
                <div className="absolute inline-flex justify-center items-center p-4 rounded-full bg-red-500 left-1/2 translate-x-[-50%] top-[-40px]">
                    <BiBlock className='text-[40px] text-white '></BiBlock>
                </div>
                <div className=" mt-5 flex flex-col justify-center">
                    <p className="py-5 text-red-500 font-bold text-center">ERROR!</p>
                    <Link className='flex justify-center' onClick={props.setNotification}>
                        <button className='border rounded-full inline-block py-2 px-4 border-red-500 hover:bg-red-500 hover:text-white transition-all'>Return</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}


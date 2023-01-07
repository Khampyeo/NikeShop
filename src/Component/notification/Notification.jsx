import React, { useState } from 'react'
import { BiBlock, BiX, BiCheck } from "react-icons/bi";
import { CiWarning } from "react-icons/ci";
export default function Notification(props) {
    const types = [
        {
            name: 'SUCCESS',
            icon: <BiCheck className='text-[30px]'></BiCheck>,
            background:'bg-green-600'
        },
        {
            name: 'ERROR',
            icon: <BiBlock className='text-[30px]'></BiBlock>,
            background:'bg-red-600'
        },
        {
            name: 'WARNING',
            icon: <CiWarning className='text-[30px]'></CiWarning>,
            background:'bg-yellow-600'
        }
    ]
    const [type, setType] = useState(types[types.findIndex((item) => item.name.toLowerCase() === props.type)])
    return (
        <div className='fixed bg-black/60 inset-0 z-[1200] text-white '>
            <div className={`absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white rounded-lg py-5 pr-4 pl-8 min-w-[300px] overflow-hidden ${type.background}`}>
                <div className="absolute top-2 right-2" onClick={()=>props.setAlert(false)}>
                    <BiX className='text-[30px]'></BiX>
                </div>
                <div className="flex items-center">
                    {type?.icon}
                    <div className="ml-4">
                        <p className='m-0 p-0 leading-none font-bold'>{type?.name}</p>
                        <p className='mt-2'>{props.title}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

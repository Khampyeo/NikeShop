import React from 'react'
import { BiGroup, BiUpArrowAlt, BiDownArrowAlt, BiBarChart } from "react-icons/bi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsCartPlus } from "react-icons/bs";


export default function Statics({ number, name, percent, up, icon }) {
    return (
        <div>
            <div className="bg-white rounded-lg p-6 h-[100%] flex flex-col justify-between">
                <div className="flex items-center justify-between">
                    <div className="">
                        <p>{name}</p>
                        <h1 className='text-[24px] py-4'>{number}</h1>
                    </div>
                    <div className="p-2 bg-blue-200 rounded-lg">
                        {icon === 1 && <BiGroup className='text-[32px] text-blue-400'></BiGroup>}
                        {icon === 2 && <BsCartPlus className='text-[32px] text-blue-400'></BsCartPlus>}
                        {icon === 3 && <MdOutlineAttachMoney className='text-[32px] text-blue-400'></MdOutlineAttachMoney>}
                        {icon === 4 && <BiBarChart className='text-[32px] text-blue-400'></BiBarChart>}
                    </div>
                </div>
                <div className="">
                    {up ?
                        <div className="flex text-green-400 items-center">
                            <BiUpArrowAlt className=''></BiUpArrowAlt>
                            <p>{percent}%</p>
                        </div>
                        :
                        <div className="flex text-red-400 items-center">
                            <BiDownArrowAlt className=''></BiDownArrowAlt>
                            <p>{percent}%</p>
                        </div>}

                    <p className='text-[#8a969c]'>Since last month</p>
                </div>
            </div>
        </div>
    )
}

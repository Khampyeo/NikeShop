import React, { useState } from 'react'
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

export default function Subnav({ icon, name, subArray }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className=''>
            <button className="h-[51px] w-full py-3 px-5 hover:bg-slate-300 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        {icon}
                        <p className='ml-4'>{name}</p>
                    </div>
                    {isOpen?<BsChevronUp></BsChevronUp>:<BsChevronDown></BsChevronDown>}
                </div>

            </button>
            <div className={`${isOpen?'max-h-[1000px]':'max-h-0'} overflow-hidden transition-all`}>
                {
                    subArray.map((name, index) =>
                        <button key={index} className="flex justify-between items-center h-[51px] w-full hover:bg-slate-300 cursor-pointer">
                            <p className='ml-[52px]'>{name}</p>
                        </button>
                    )
                }
            </div>
        </div>
    )
}

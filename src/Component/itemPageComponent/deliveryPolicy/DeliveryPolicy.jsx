import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function DeliveryPolicy() {
    const [more, setMore] = useState(false)
    return (
        <div className="border-t border-b border-[#e5e5e5] py-7">
            <div className="flex justify-between items-center">
                <h1 className='text-[20px]'>Free Delivery and Returns</h1>
                <div className="p-1" onClick={()=>setMore(!more)}>
                    {more?<FaChevronDown className='text-[16px]'></FaChevronDown>:<FaChevronUp className='text-[16px]'></FaChevronUp>}
                </div>
            </div>
            <div className={`
                leading-relaxed overflow-hidden transition-all
                ${more?'max-h-0 opacity-0':'max-h-[400px] opacity-100'}
            `}>
                <p className='mt-7'>Your order of 5.000.000₫ or more gets free standard delivery.</p>
                <ul className="py-7 list-disc ml-4">
                    <li className="">Standard delivered 4-5 Business Days</li>
                    <li className="">Express delivered 2-4 Business Days</li>
                </ul>
                <p className="">Orders are processed and delivered Monday-Friday (excluding public holidays)</p>
                <p className="pt-5">Nike Members enjoy free returns.</p>
            </div>
        </div>
    )
}

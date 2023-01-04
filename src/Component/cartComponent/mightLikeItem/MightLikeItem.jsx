import React from 'react'
import { Link } from 'react-router-dom';
import numToPrice from '../../functions/NumToPrice'
export default function MightLikeItem({ item }) {
    return (
        <div className='px-3'>
            <Link to={`/item/${item._id}`}>
                <div className="w-full pb-[100%] h-0 overflow-hidden object-center relative bg-[#f6f6f6]">
                    <img src={item.img} alt=""
                        className='absolute w-full top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%]' />
                </div>
            </Link>
            <div className="text-[16px] py-4">
                <Link to={`/item/${item._id}`}>
                    <h1 className="text-[#111]">{item.name}</h1>
                </Link>
                <p className="text-[#757575]">{item.message}</p>
                <p className='text-[#111] py-2'>{numToPrice(item.price)}đ</p>
            </div>
        </div>
    )
}

import React from 'react'

export default function Size({sizes}) {
    return (
        <div>
            <div className="flex justify-between mb-1">
                <p className='text-base'>Select Size</p>
                <p className='text-[#757575] text-base'>Size Guide</p>
            </div>
            <div className="grid grid-cols-3 gap-2">
                    {sizes.map((size,index)=>(
                        <div key={index} className="w-full border py-[10px] text-base flex justify-center items-center">{size.size}</div>
                    ))}
                </div>
        </div>
    )
}

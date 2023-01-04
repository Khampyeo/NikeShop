import React, { useState } from 'react'

export default function Size({ sizes, sizeSelection}) {
    const [sizeSelect, setSizeSelect] = useState(null)
    return (
        <div className="grid grid-cols-3 gap-2">
            {sizes.map((size, index) => (
                <button 
                    key={index} 
                    className={`
                        w-full border py-[10px] text-base rounded flex justify-center items-center
                        ${sizeSelect == size.size && 'border-[#111]'}
                    `}
                    onClick={()=>{
                        sizeSelection(size.size)
                        setSizeSelect(size.size)
                    }}
                >{size.size}</button>
            ))}
        </div>
    )
}

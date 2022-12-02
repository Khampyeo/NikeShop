import React from 'react'
import { BsFillQuestionCircleFill } from "react-icons/bs";
import BlackBtn from '../../Button/BlackBtn';
export default function Summary(props) {
    return (
        <div className={`
            text-[#111]
            ${props.width?`${props.width}`:'w-[300px]'}
            `}>
            <h1 className='text-[22px] mb-4'>Summary</h1>
            <div className="flex justify-between items-center">
                <div className="flex items-center py-1">
                    <p className="
                        relative mr-2
                        ">
                        Subtotal
                    </p>
                    <BsFillQuestionCircleFill className='text-[12px]'></BsFillQuestionCircleFill>
                </div>
                <p>21,391,000₫</p>
            </div>
            <div className="flex justify-between items-center py-1">
                <p>Estimated Delivery & Handling</p>
                <p>Free</p>
            </div>
            <div className="
                flex justify-between items-center my-3 py-4 relative
                after:absolute after:h-full after:w-full after:border-t after:border-b after:border-[#e5e5e5]
                ">
                <p>Total</p>
                <p>21,391,000₫</p>
            </div>
            <div className="mt-8">
                <BlackBtn name='Checkout' width='w-full' padding='px-2 py-4 '></BlackBtn>
            </div>
        </div>
    )
}

import React, { useRef, useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import pastelLoveImg from '../img/TypePastelLover.png'
import nikeLoverImg from '../img/TypeNikeLover.png'
import runnerImg from '../img/TypeRunner.png'
import sneackerHeadeImg from '../img/TypeSneakerhead.png'
import './scrollbar.css'

export default function TypesIntroduce() {
    const ref = useRef();
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset
    };

    return (
        <div>
            <div className="
                md:visible
                invisible flex justify-end
                ">
                <div className="p-4 bg-[#e5e5e5] rounded-full mr-4 hover:bg-[#ccc] transition-all" onClick={() => scroll(-600)}>
                    <BsChevronLeft className='text-[20px]'></BsChevronLeft>
                </div>
                <div className="p-4 bg-[#e5e5e5] rounded-full hover:bg-[#ccc] transition-all" onClick={() => scroll(600)}>
                    <BsChevronRight className='text-[20px]'></BsChevronRight>
                </div>
            </div>
            <div ref={ref} className="flex overflow-x-auto custom-scrollbar scroll-smooth">
                <div className="
                    lg:w-[35%]
                    md:w-[50%]
                    w-[80%] flex-shrink-0
                    ">
                    <img className='w-full' src={pastelLoveImg} alt="" />
                </div>
                <div className="
                    lg:w-[35%]
                    md:w-[50%]
                    w-[80%] flex-shrink-0
                    ">
                    <img className='w-full' src={nikeLoverImg} alt="" />
                </div>
                <div className="
                    lg:w-[35%]
                    md:w-[50%]
                    w-[80%] flex-shrink-0
                    ">
                    <img className='w-full' src={runnerImg} alt="" />
                </div>
                <div className="
                    lg:w-[35%]
                    md:w-[50%]
                    w-[80%] flex-shrink-0
                    ">
                    <img className='w-full' src={sneackerHeadeImg} alt="" />
                </div>
            </div>
        </div>
    )
}

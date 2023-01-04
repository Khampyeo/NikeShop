import React, { useRef } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { useSelector } from 'react-redux';
import MightLikeItem from '../mightLikeItem/MightLikeItem';
import './scrollbar.css'

export default function MightLike() {
    const allShoes = useSelector(state => state.reducerDataShoes.data)
    const shoesShuffled = allShoes?.sort(() => 0.5 - Math.random());
    let shoesSelected = shoesShuffled?.slice(0, 6);
    const ref = useRef();
    const scroll = (scrollOffset) => {
        console.log(scrollOffset);
        ref.current.scrollLeft += scrollOffset
    };
    return (
        <div className='py-2'>
            <div className="flex justify-between items-center">
                <h1 className='text-[22px] text-[#111]'>You Might Also Like</h1>
                <div className="
                    md:flex
                    hidden
                    ">
                    <button className="p-4 bg-[#e5e5e5] rounded-full mr-4 hover:bg-[#ccc] transition-all" onClick={() => scroll(-600)}>
                        <BsChevronLeft className='text-[20px]' ></BsChevronLeft>
                    </button>
                    <button className="p-4 bg-[#e5e5e5] rounded-full hover:bg-[#ccc] transition-all" onClick={() => scroll(600)}>
                        <BsChevronRight className='text-[20px]' ></BsChevronRight>
                    </button>
                </div>
            </div>
            <div ref={ref} className="
                lg:-mx-9 lg:px-7
                -mx-4
                flex overflow-x-scroll ads-scrollbar scroll-smooth pb-5 mt-5
                ">
                {shoesSelected?.map((shoes, index) =>
                    <div 
                        key={index} 
                        className="
                            lg:min-w-[30vw]
                            min-w-[50vw]
                        ">
                        <MightLikeItem item={shoes}></MightLikeItem>
                    </div>
                )}
            </div>
        </div>
    )
}

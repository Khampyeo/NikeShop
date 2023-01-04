import React, { Fragment, useEffect, useState } from 'react'
import { MdCancel } from "react-icons/md";
import ColourFilter from '../colour/ColourFilter';
import FilterCheckBox from '../filterCheckBox/FilterCheckBox';
import Size from '../size/Size';

export default function FilterMobile() {
    const [showFilter, setShowFilter] = useState(false)
    useEffect(()=>{
        if(showFilter){
            document.body.style.overflow = 'hidden'
        }
        else if(!showFilter){
            document.body.style.overflow = 'visible'
        }
    },[showFilter])
    return (
        <Fragment>
            <div className='flex justify-between items-center px-4'>
                <p>362 Result</p>
                <div className="
                    px-3 py-2 rounded-full flex justify-between items-center border hover:border-[#111] cursor-pointer
                    " onClick={()=>setShowFilter(true)}>
                    <p className='mr-2'>Filter</p>
                    <svg
                        aria-hidden="true"
                        className="icon-filter-ds"
                        width={24}
                        height={24}
                        fill="none"
                    >
                        <path stroke="currentColor" strokeWidth={1.5} d="M21 8.25H10m-5.25 0H3" />
                        <path
                            stroke="currentColor"
                            strokeWidth={1.5}
                            d="M7.5 6a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5z"
                            clipRule="evenodd"
                        />
                        <path stroke="currentColor" strokeWidth={1.5} d="M3 15.75h10.75m5 0H21" />
                        <path
                            stroke="currentColor"
                            strokeWidth={1.5}
                            d="M16.5 13.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>
            <div className={`
                fixed bg-white w-[100vw] h-[100vh] left-0 z-[1050] p-5 overflow-y-scroll transition-all duration-300
                ${showFilter?'top-0':'top-full'}
                `}>
                <div className="flex justify-between items-center py-2">
                    <h1 className='text-[16px]'>Filter</h1>
                    <MdCancel className='text-[30px] cursor-pointer' onClick={()=>setShowFilter(false)} ></MdCancel>
                </div>
                <ColourFilter></ColourFilter>
                <Size></Size>
                <FilterCheckBox name='Gender' arr={['Men', 'Women', 'Unisex']}></FilterCheckBox>
                <FilterCheckBox name='Air Max' arr={['Air Max 1', 'Air Max 2', 'Air Max 3', 'Air Max 4', 'Air Max 5', 'Air Max 6']}></FilterCheckBox>
                <FilterCheckBox name='Air Max' arr={['Air Max 1', 'Air Max 2', 'Air Max 3', 'Air Max 4', 'Air Max 5', 'Air Max 6']}></FilterCheckBox>
                <FilterCheckBox name='Air Max' arr={['Air Max 1', 'Air Max 2', 'Air Max 3', 'Air Max 4', 'Air Max 5', 'Air Max 6']}></FilterCheckBox>
                <FilterCheckBox name='Air Max' arr={['Air Max 1', 'Air Max 2', 'Air Max 3', 'Air Max 4', 'Air Max 5', 'Air Max 6']}></FilterCheckBox>

            </div>
        </Fragment>

    )
}

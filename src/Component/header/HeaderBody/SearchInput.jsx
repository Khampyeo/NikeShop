import React, { useState } from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchInput({ searchClick, setSearchClick }) {
    const [searchValue, setSearchValue] = useState('')
    const navigate = useNavigate()
    const ref = useRef(0)
    const handleKeydown = (event) => {
        setSearchValue(event.target.value)
        if (event.key === 'Enter') {
            setSearchClick(false)
            navigate(`/store/${event.target.value}/all`)
        }
    }
    const onCLickSearchIcon = () => {
        setSearchClick(false)
        navigate(`/store/${searchValue}/all`)
    }
    return (
        <div ref={ref} className={`
                            h-full transition-all duration-500 flex justify-center ml-auto
                            ${searchClick ? 'flex-1' : ''}
                        `}>
            <div className={`
                                h-full flex items-center transition-all duration-500
                               ${searchClick ? 'lg:max-w-[700px] lg:w-[700px] w-[80%]' : 'lg:w-[160px] xl:w-[180px] w-[40px]'}
                            `}>
                <div className={`relative w-full
                                `}
                    onClick={() => {
                        if(ref.current.offsetWidth < 200)
                        setSearchClick(true)
                    }}>
                    <button className={`
                                    lg:bg-transparent
                                    absolute left-0 h-[40px] w-[40px] rounded-full flex justify-center items-center hover:bg-[#e5e5e5]
                                    ${searchClick ? 'bg-transparent' : 'bg-white'}
                                    `}
                        onClick={() => onCLickSearchIcon()}>
                        <svg
                            aria-hidden="true"
                            className="pre-nav-design-icon"
                            width={24}
                            height={24}
                            fill="none"
                        >
                            <path
                                stroke="currentColor"
                                strokeWidth={1.5}
                                d="M13.962 16.296a6.716 6.716 0 0 1-3.462.954 6.728 6.728 0 0 1-4.773-1.977A6.728 6.728 0 0 1 3.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0 1 10.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0 1 17.25 10.5a6.726 6.726 0 0 1-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"
                            />
                        </svg>
                    </button>
                    <input type="text" className={`
                                    lg:visible lg:px-[48px]
                                    py-[8px] rounded-full bg-[#f5f5f5] outline-none text-[16px] hover:bg-[#e5e5e5] 
                                    ${searchClick ? 'visible px-[48px] w-full' : 'lg:w-full w-[40px] px-0'}
                                    `} placeholder='Search' onKeyDown={handleKeydown} />
                </div>

            </div>
        </div>
    )
}

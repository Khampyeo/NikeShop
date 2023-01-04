import React, { useEffect, useState } from 'react'
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import './animation.css'

export default function FilterHeader(props) {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showSort, setShowSort] = useState(false)
    const [type, setType] = useState('Shoes')

    const counter = useSelector(state => state.rootReducerStorePage.showFilterNav)
    const data = useSelector(state => state.reducerDataShoes.data_sort)
    const type_sort = useSelector(state => state.reducerDataShoes.type_sort)
    const dispatch = useDispatch()

    useEffect(() => {
        let gender = type_sort?.filter((item) => Object.keys(item).includes('gender'))
        if (gender.length !== 0) {
            gender = gender[0]
            gender = gender['gender'];
            switch (gender) {
                case '0':
                    setType("Men's")
                    break;
                case '1':
                    setType("Women's")
                    break;
                case '2':
                    setType("Kid's")
                    break;
                default:
                    break;
            }
        }
        else{
            setType("Shoes")

        }
    }, [type_sort])
    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > 32 && window.scrollY > lastScrollY) {
                setShow(false);
            } else {
                setShow(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    const sortLowToHight = (data) => {
        function compare(a, b) {
            if (a.price < b.price) {
                return -1;
            }
            if (a.price > b.price) {
                return 1;
            }
            return 0;
        }
        const new_data = [...data].sort(compare);
        dispatch({ type: 'DATA_SORT', payload: new_data })

    }
    const sortHighToLow = (data) => {
        function compare(a, b) {
            if (a.price > b.price) {
                return -1;
            }
            if (a.price < b.price) {
                return 1;
            }
            return 0;
        }
        const new_data = [...data].sort(compare);
        dispatch({ type: 'DATA_SORT', payload: new_data })
    }
    const sortNewest = (data) => {
        function compare(a, b) {
            if (a._id > b._id) {
                return -1;
            }
            if (a._id < b._id) {
                return 1;
            }
            return 0;
        }
        const new_data = [...data].sort(compare);
        dispatch({ type: 'DATA_SORT', payload: new_data })
    }
    const sortFeature = (data) => {
        function compare(a, b) {
            if (a._id < b._id) {
                return -1;
            }
            if (a._id > b._id) {
                return 1;
            }
            return 0;
        }
        const new_data = [...data].sort(compare);
        dispatch({ type: 'DATA_SORT', payload: new_data })
    }
    return (
        <div className={`
            lg:px-11
            px-4 bg-white sticky transition-all z-10
            ${show ? 'top-[60px]' : 'top-0'}
            `}>
            <div className='flex justify-between items-center py-2 text-[#111] text-[16px]'>
                <div className="h-[36px] flex-1 flex items-center">
                    <h1 className={`
                        transition-all duration-500
                        ${window.pageYOffset > 10 ? 'text-[16px]' : 'text-[24px]'}
                        `}>{type + '(' + data?.length + ')'}</h1>
                </div>
                <div className="
                    lg:flex
                    hidden
                    ">
                    <div className="
                        flex mr-8 items-center cursor-pointer
                        "onClick={() => dispatch({ type: 'SHOW_FILTER_NAV', payload: true })}>
                        <p className='mr-2' >{counter ? 'Hide' : 'Show'} Filter</p>
                        <svg
                            aria-hidden="true"
                            className="icon-filter-ds"
                            width={24}
                            height={24}
                            fill="none"
                            {...props}
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
                    <div className="flex items-center relative cursor-pointer" onClick={() => setShowSort(!showSort)}>
                        <p className='mr-2'>Sort By</p>
                        {showSort ? <FiChevronDown></FiChevronDown> : <FiChevronUp></FiChevronUp>}
                        <div className={`
                            absolute right-0 top-full
                            overflow-hidden 
                            ${showSort ? 'visible' : 'invisible'}
                            `}>
                            <div className={`
                                p-6 pb-4 bg-white whitespace-nowrap rounded-2xl leading-7 transition-all duration-500
                                ${showSort ? 'translate-y-[0px]' : 'translate-y-[-200px]'}
                                `}>
                                <p className='cursor-pointer hover:text-[#757575]' onClick={() => sortFeature(data)}>Featured</p>
                                <p className='cursor-pointer hover:text-[#757575]' onClick={() => sortNewest(data)}>Newest</p>
                                <p className='cursor-pointer hover:text-[#757575]' onClick={() => sortHighToLow(data)}>Price: High-Low</p>
                                <p className='cursor-pointer hover:text-[#757575]' onClick={() => sortLowToHight(data)}>Price: Low-High</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

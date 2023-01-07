import React, { useEffect, useState } from 'react'
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { BsCheck } from "react-icons/bs";
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { color } from '@mui/system';
export default function () {
    const [show, setShow] = useState(true)
    const [checkedState, setCheckedState] = useState(
        new Array(12).fill(false)
    );
    const type_sort = useSelector(state => state.reducerDataShoes.type_sort)

    const navigate = useNavigate()
    const { sort_info } = useParams()
    const { search } = useParams()
    let url = ''

    useEffect(() => {
        const exist = type_sort?.some((element) => Object.keys(element)[0] === color)
        if (!exist) {
            setCheckedState(new Array(12).fill(false))
        }
        if (type_sort !== []) {
            type_sort.forEach(element => {
                if (Object.keys(element)[0] == 'color') {
                    const name = 'color'
                    const arrIndex = element[name].split("")
                    let checkedArr = new Array(12).fill(false)
                    arrIndex.forEach((index) => {
                        checkedArr[index] = true
                    })
                    setCheckedState(checkedArr)
                }
            })
        }

    }, [type_sort])
    const handleName = (position) => {
        let checkTostring = ''
        checkedState.forEach((element, index) => {
            if (element == true) checkTostring += index
        })
        if (checkTostring.indexOf(position) >= 0) url = 'color' + '=' + checkTostring.slice(0, checkTostring.indexOf(position)) + checkTostring.slice(checkTostring.indexOf(position) + 1);
        else url = 'color' + '=' + checkTostring + String(position)
        return url
    }
    const handleOnChange = (position) => {
        const name = handleName(position)
        let url = ''
        const checkExist = type_sort.some((element) => Object.keys(element)[0] === 'color')
        if (!checkExist) {
            if (name !== 'color=')
                url += name + '&'
        }
        type_sort.forEach((element) => {
            const key = Object.keys(element)[0]
            if (key === 'color') {
                if (name !== 'color=') {
                    url += name + '&'
                }
            }
            else {
                url += key + '=' + element[key] + '&'
            }
        })
        url = url.slice(0, -1)
        if (url === '') {
            navigate(`/store/${search}/all`)
        }
        else {
            navigate(`/store/${search}/${url}`)
        }

    }

    const colour = [
        {
            name: 'Black',
            id: '#000'
        },
        {
            name: 'Blue',
            id: '#1790c8'
        },
        {
            name: 'Brown',
            id: '#825d41'
        },
        {
            name: 'Green',
            id: '#7bba3c'
        },
        {
            name: 'Grey',
            id: '#808080'
        },
        {
            name: 'Multi-Colour',
            id: '#000'
        },
        {
            name: 'Orange',
            id: '#f36b26'
        },
        {
            name: 'Pink',
            id: '#f0728f'
        },
        {
            name: 'Purple',
            id: '#8d429f'
        },
        {
            name: 'Red',
            id: '#e7352b'
        },
        {
            name: 'White',
            id: '#fff'
        },
        {
            name: 'Yellow',
            id: '#fed533'
        },
    ]

    return (
        <div className='py-2'>
            <div className="
            flex justify-between relative text-[#111111] py-3
            after:absolute after:w-full after:h-[1px] after:bg-[#e5e5e5] after:top-0
            ">
                <h1 className="text-[16px]">Colour</h1>
                <div className="lg:block hidden" onClick={() => setShow(!show)}>
                    {show ? <FiChevronUp className='text-[24px]'></FiChevronUp> : <FiChevronDown className='text-[24px]'></FiChevronDown>}

                </div>
            </div>
            <div className={`
            w-full py-1 overflow-hidden transition-all
            ${show ? ' max-h-[500px]' : 'max-h-0'}

            `}>
                <div className={`
                grid grid-cols-3 gap-y-2 mt-5
                ${show ? ' visible' : 'invisible'}

                `}>
                    {colour.map((color, index) => (
                        <button key={index} className="
                            lg:my-0
                            flex flex-col my-2 justify-center items-center text-center 
                            "
                            onClick={() => handleOnChange(index)}>
                            <div className="relative">
                                <div className='h-[28px] w-[28px] rounded-full border ' style={{ background: `${color.id}` }}></div>
                                {checkedState[index] && <BsCheck className={`${index == 10 ? 'text-black' : 'text-white'} text-[24px] absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%]`}></BsCheck>}
                            </div>
                            <p className='text-[12px]'>{color.name}</p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

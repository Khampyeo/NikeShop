import React, { useEffect, useState } from 'react'
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

export default function Size() {
    const [show, setShow] = useState(true)
    const size = [35, 35.5, 36, 36.5, 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5, 41, 41.5, 42, 42.5, 43, 44, 45]
    const [checkedState, setCheckedState] = useState(
        new Array(size.length).fill(false)
    );
    const type_sort = useSelector(state => state.reducerDataShoes.type_sort)
    const navigate = useNavigate()
    const { sort_info } = useParams()
    const { search } = useParams()
    let url = ''
    useEffect(() => {
        const exist = type_sort?.some((element) => Object.keys(element)[0] === 'sizes')
        if (!exist) {
            setCheckedState(new Array(size.length).fill(false))
        }
        if (type_sort !== []) {

            type_sort.forEach(element => {
                if (Object.keys(element)[0] === 'sizes') {
                    const name = 'sizes'
                    const arrIndex = element['sizes'].match(/.{1,2}/g).map((element) => Number(element))
                    let checkedArr = new Array(size.length).fill(false)
                    arrIndex.forEach((index) => {
                        checkedArr[index] = true
                    })
                    setCheckedState(checkedArr)
                }
            })
        }

    }, [type_sort])
    const handleName = (position) => {
        const handlePosition = (index) => {
            const str = index.toString()
            if (str.length < 2) {
                return '0' + str
            }
            return str
        }
        let checkTostring = ''
        let checkToArr = []
        checkedState.forEach((element, index) => {
            if (element == true) {
                checkToArr.push(handlePosition(index))
            }
        })
        const checkExist = checkToArr.some(element => element === handlePosition(position))
        if (checkExist) {
            checkToArr.forEach((element) => {
                if (element !== handlePosition(position)) {
                    checkTostring += element
                }
            })
            url = 'sizes=' + checkTostring
        }
        else {
            checkToArr.forEach((element) => {
                checkTostring += element
            })
            url = 'sizes' + '=' + checkTostring + handlePosition(position)
        }
        return url
    }
    const handleOnChange = (position) => {
        const name = handleName(position)
        let url = ''
        const checkExist = type_sort.some((element) => Object.keys(element)[0] === 'sizes')
        if (!checkExist) {
            if (name !== 'sizes=')
                url += name + '&'
        }
        type_sort.forEach((element) => {
            const key = Object.keys(element)[0]
            if (key === 'sizes') {
                if (name !== 'sizes' + '=')
                    url += name + '&'
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
    return (
        <div className='py-2'>
            <div className="
            flex justify-between relative text-[#111111] py-3
            after:absolute after:w-full after:h-[1px] after:bg-[#e5e5e5] after:top-0
            ">
                <h1 className="text-[16px]">Sizes</h1>
                <div className="lg:block hidden" onClick={() => setShow(!show)}>
                    {show ? <FiChevronUp className='text-[24px]'></FiChevronUp> : <FiChevronDown className='text-[24px]'></FiChevronDown>}

                </div>
            </div>
            <div className={`
            w-full py-1 overflow-hidden transition-all
            ${show ? ' max-h-[500px]' : 'max-h-0'}

            `}>
                <div className={`
                    lg:grid-cols-3
                    grid grid-cols-4 gap-2 mt-5
                    ${show ? ' visible' : 'invisible'}
                    `}>
                    {size.map((size, index) => (
                        <button key={index} className={`
                            lg:h-[32px]
                            w-full h-[50px] rounded-sm border flex justify-center items-center
                            ${checkedState[index] && 'border-black'}
                            `} onClick={() => handleOnChange(index)}>{size}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

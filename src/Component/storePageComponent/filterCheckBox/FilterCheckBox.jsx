import React, { useEffect, useState } from 'react'
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
export default function FilterCheckBox(props) {
    const type_sort = useSelector(state => state.reducerDataShoes.type_sort)
    const navigate = useNavigate()
    const [show, setShow] = useState(true)
    const [more, setMore] = useState(false)
    const [checkedState, setCheckedState] = useState(
        new Array(props.arr.length).fill(false)
    );

    const { sort_info } = useParams()
    const { search } = useParams()
    let url = ''
    useEffect(() => {
        const exist = type_sort?.some((element)=>Object.keys(element)[0] === props.name.toLowerCase().replace(/\s/g, ''))
        if(!exist){
            setCheckedState(new Array(props.arr.length).fill(false))
        }
        if (type_sort !== []) {
            type_sort.forEach(element => {
                if (Object.keys(element)[0] === props.name.toLowerCase().replace(/\s/g, '')) {
                    const name = props.name.toLowerCase().replace(/\s/g, '')
                    const arrIndex = element[name].split("")
                    let checkedArr = new Array(props.arr.length).fill(false)
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
        if (checkTostring.indexOf(position) >= 0) url = props.name.toLowerCase().replace(/\s/g, '') + '=' + checkTostring.slice(0, checkTostring.indexOf(position)) + checkTostring.slice(checkTostring.indexOf(position) + 1);
        else url = props.name.toLowerCase().replace(/\s/g, '') + '=' + checkTostring + String(position)
        return url
    }
    const handleOnChange = (position) => {
        const name = handleName(position)
        let url = ''
        const checkExist = type_sort.some((element) => Object.keys(element)[0] === props.name.toLowerCase().replace(/\s/g, ''))
        if (!checkExist) {
            if(name !== props.name.toLowerCase().replace(/\s/g, '')+'=')
            url += name + '&'
        }
        type_sort.forEach((element) => {
            const key = Object.keys(element)[0]
            if (key === props.name.toLowerCase().replace(/\s/g, '')) {
                if(name !== props.name.toLowerCase().replace(/\s/g, '')+'=')
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
                <h1 className="text-[16px]">{props.name}</h1>
                <div className="lg:block hidden" onClick={() => setShow(!show)}>
                    {show ? <FiChevronUp className='text-[24px]'></FiChevronUp> : <FiChevronDown className='text-[24px]'></FiChevronDown>}

                </div>
            </div>
            <div className={`
            w-full py-1 overflow-hidden transition-all
            ${show ? ' max-h-[500px]' : 'max-h-0'}

            `}>
                <div className={`
                ${show ? ' visible' : 'invisible'}

                `}>
                    {props.arr.map((element, index) => {
                        if (index < 4) {
                            return (
                                <div key={index} className="flex items-center pt-1">
                                    <input
                                        className='mr-3 w-[20px] h-[20px] accent-black'
                                        type="checkbox"
                                        checked={checkedState[index]}
                                        onChange={() => handleOnChange(index)}
                                    />
                                    <p className='text-[16px]'>{element}</p>
                                </div>
                            )
                        }
                    })}
                </div>
                {props.arr.length > 4 ?
                    <div className={`
                    `}>
                        <div className={`
                        w-full overflow-hidden transition-all
                        ${more ? ' max-h-[500px]' : 'max-h-0'}
                        `}>
                            <div className={`
                            ${show ? ' visible' : 'invisible'}
                            `}>
                                {props.arr.map((element, index) => {
                                    if (index > 3) {
                                        return (
                                            <div key={index} className="flex items-center pt-1">
                                                <input className='mr-3 w-[20px] h-[20px] accent-black' type="checkbox" />
                                                <p className='text-[16px]'>{element}</p>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                        <div className="mt-2" onClick={() => setMore(!more)}>{more ? '- Less' : '+ More'}</div>
                    </div>
                    : undefined}
            </div>
        </div>
    )
}

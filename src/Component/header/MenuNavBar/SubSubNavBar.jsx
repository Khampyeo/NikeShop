import React, { useEffect, useState } from 'react'
import { FiChevronLeft } from "react-icons/fi";

export default function SubSubNavBar(props) {    
  const [show,setShow] = useState(props.subNameClick == props.name)

  useEffect(()=>{
    if(props.subNameClick == props.name)
    setShow(true)
  },[props.subNameClick])
  const onAnimationEnd = () => {
    if (props.subNameClick=='') setShow(false);
  }
  return (
    show &&
    <div className={`
      fixed h-[100%] w-[300px] bg-white bottom-0 right-[0px] px-[30px] text-[#111] 
      ${props.subNameClick == ''?'menu-disappear':'menu-appear'}
      `} onAnimationEnd={onAnimationEnd}> 
      <div className="mt-[60px]">
        <button className="flex items-center"
          onClick={()=>props.handleSubNameClick()}>
          <FiChevronLeft className='text-[24px] mr-2'></FiChevronLeft>
          <p className='text-[16px]'>{props.prev}</p>
        </button>
        <h1 className="text-[24px] py-5">{props.name}</h1>
        <div className="">
          {props.arr.map((name,index)=>(
          <div key={index} className="flex justify-between items-center py-2 text-[#757575]">
            <p className='text-[16px]'>{name}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

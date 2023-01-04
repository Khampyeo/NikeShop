import React, { useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import data from './data'
import SubSubNavBar from './SubSubNavBar';

export default function SubNavBarMenu(props) {
  const [showSubMenu, setShowSubMenu] = useState(props.show)
  const [subNameClick, setSubNameClick] = useState('');


  useEffect(() => {
    if (props.show)
      setShowSubMenu(true)
  }, [props.show])

  const onAnimationEnd = () => {
    if (!props.show) setShowSubMenu(false);
  };
  const handleSubNameClick = () => {
    setSubNameClick('')
  }

  const getArrByNameAndTitle = (data, name, title) => {
    const newdataByName = data.find(element => element.name == name)
    const newdataByTitle = newdataByName.category.find(element => element.title == title)
    return newdataByTitle.arr
  }
  return (
    showSubMenu && <div className={`
    fixed h-[100%] w-[300px] bg-white top-0 right-0 text-[#111] overflow-hidden
    ${props.show ? 'menu-appear' : 'menu-disappear'}
    `} onAnimationEnd={onAnimationEnd} >
      <div className={`
      absolute top-0 w-full pt-[40px] px-[30px] transition-all ease-linear
      ${subNameClick === '' ? 'right-[0px]' : 'right-[300px]'}
      `}>
        <button className="
        flex items-center
        " onClick={props.handleNameClick}>
          <FiChevronLeft className='
          text-[24px] mr-2
          '></FiChevronLeft>
          <p className='text-[16px]'>{props.prev}</p>
        </button>
        <h1 className="text-[24px] py-5">{props.name}</h1>
        <div className="">
          {props.arr.map((name, index) => (
            <div key={index} className="py-1">
              <li className="
          flex justify-between items-center py-1 text-[#757575]
          " onClick={() => setSubNameClick(name)}>
                <p className='text-[16px]'>{name}</p>
                <FiChevronRight className='text-[24px] mr-2'></FiChevronRight>
              </li>
              <SubSubNavBar
                subNameClick={subNameClick}
                prev={props.name}
                name={name}
                arr={getArrByNameAndTitle(data, props.name, name)}
                handleSubNameClick={handleSubNameClick}
              ></SubSubNavBar>
            </div>

          ))}
        </div>
      </div>
    </div>
  )
}

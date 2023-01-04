import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
export default function InfoItem() {
  const data = useSelector(state => state.reducerDetailItem.data)
  const img = useSelector(state => state.reducerDetailItem.img)

  const ref = useRef();

  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [])

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset
  };

  const imgLength = img?.imgs.length
  return (
    <div className="relative">
      <button
        className="
          absolute bg-white top-1/2 left-6 w-[50px] h-[50px] rounded-full flex justify-center items-center opacity-50 hover:opacity-100 transition-all
          md:hidden
          "
        onClick={() => scroll(-windowSize.innerWidth)}
      >
        <FiChevronLeft className='text-[30px]'></FiChevronLeft>
      </button>
      <button
        className="
          absolute bg-white top-1/2 right-6 w-[50px] h-[50px] rounded-full flex justify-center items-center opacity-50 hover:opacity-100 transition-all
          md:hidden
          "
        onClick={() => scroll(windowSize.innerWidth)}
      >
        <FiChevronRight className='text-[30px]'></FiChevronRight>
      </button>
      <div
        ref={ref}
        className={`
        md:${imgLength > 3 ? 'grid-cols-2' : 'grid-cols-1'} md:gap-3 md:mx-0 md:grid-flow-row md:auto-cols-auto
        grid grid-flow-col auto-cols-[minmax(100vw,1fr)] mx-[-16px] overflow-x-hidden snap-x scroll-smooth 
      `}>
        {imgLength ? img.imgs?.map((item, index) => (
          <div key={index} className="snap-start" >
            <img src={item.img} alt="" />
          </div>
        )) : (<img src={data.img} alt=''></img>)}
      </div>
    </div>
  )
}

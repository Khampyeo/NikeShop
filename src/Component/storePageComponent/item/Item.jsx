import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import numToPrice from '../../functions/NumToPrice'
import './animation.css'
export default function Item(props) {
    const [showImg, setShowImg] = useState(props.item.img)
    const [showColor, setShowColor] = useState(false)
    function ImgColor({ imgDetails, primaryImg }) {
        return (
            <div className="flex mx-[-4px]">
                {imgDetails.map((item, index) => (
                    <div key={index} className="
                    relative mx-[4px] h-[44px] w-[44px] overflow-hidden hover:border
                    "onMouseEnter={() => setShowImg(item.imgs[0].img)} onMouseLeave={() => setShowImg(primaryImg)}>
                        <img className='absolute top-1/2 translate-y-[-50%]' src={item.imgs[0].img} alt="" />
                    </div>
                ))}
            </div>)
    }
    
    return (
        <Link to={`/item/${props.item._id}`}>
            <div className='w-full relative' onMouseEnter={() => setShowColor(true)} onMouseLeave={() => setShowColor(false)}>
                <div className="
                w-full pb-[100%] h-0 overflow-hidden object-center relative bg-[#f6f6f6]
                " >
                    <img className='absolute w-full top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%]' src={showImg} alt="" />
                </div>

                <div className="min-h-[185px] pt-4">
                    {(showColor && props.item.imgDetails.length > 0) ?
                        <ImgColor imgDetails={props.item.imgDetails} primaryImg={props.item.img}></ImgColor>
                        :
                        <div className="text-[16px]">
                            <p className='text-[#111] font-normal'>{props.item.name}</p>
                            <p className='text-[#959595]'>{props.item.message}</p>
                            <p className='text-[#959595]'>{props.item.color} Colour</p>
                        </div>
                    }

                    <p className='text-[#111] pt-5'>{numToPrice(props.item.price)}₫</p>
                </div>             
            </div>
        </Link>
    )

}

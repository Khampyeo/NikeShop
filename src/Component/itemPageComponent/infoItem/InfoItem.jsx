import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function InfoItem() {
  const data = useSelector(state => state.reducerDetailItem.data)
  const img = useSelector(state => state.reducerDetailItem.img)
  const imgLength = img?.imgs.length
  return (
    
    <div 
      className={`
        grid gap-3
        ${imgLength > 3 ? 'grid-cols-2' : 'grid-cols-1'}
    `}>
      {imgLength ? img.imgs?.map((item, index) => (
        <div key={index} className="" >
          <img src={item.img} alt="" />
        </div>
      )) : (<img src={data.img}></img>)}
    </div>
  )
}

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import DetailItem from '../../Component/itemPageComponent/detailItem/DetailItem'
import InfoItem from '../../Component/itemPageComponent/infoItem/InfoItem'
import { BiLoaderAlt } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux'

export default function ItemPage() {
  const { id } = useParams()
  const data = useSelector(state => state.reducerDetailItem.data)
  const dispatch = useDispatch()
  useEffect(() => {
    const callApi = async () => {
      try {
        const res = await axios.get(`https://nike-sever-vtcoder.glitch.me/product/${id}`)
        dispatch({ type: 'DATA_SHOE', payload: res.data })
        dispatch({ type: 'IMG', payload: res.data.imgDetails[0] })

      } catch (er) {
        console.log(er);
      }
    }
    callApi()
    return ()=> dispatch({ type: 'DATA_SHOE', payload: null })

  }, [id])
  return (
    data?(<div className='py-[80px] flex max-w-7xl mx-auto pl-[36px]'>
      <div className="pr-[20px]">
        <InfoItem></InfoItem>
      </div>
      <div className="flex-1 px-[36px]">
        <DetailItem></DetailItem>
      </div>
    </div>)
    :
    (
      <div className="w-full h-[90vh] flex justify-center items-center">
        <BiLoaderAlt className='text-[50px] text-[#111111] animate-spin'></BiLoaderAlt>
      </div>
    )
  )
}

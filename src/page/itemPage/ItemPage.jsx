import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DetailItem from '../../Component/itemPageComponent/detailItem/DetailItem'
import InfoItem from '../../Component/itemPageComponent/infoItem/InfoItem'
import { BiLoaderAlt } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux'
import Error from '../../Component/errorCoponent/Error'

export default function ItemPage() {
  document.title = 'Nike. Item'

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
        dispatch({ type: 'DATA_SHOE', payload: 'error' })
        console.log(er);
      }
    }
    callApi()
    return () => dispatch({ type: 'DATA_SHOE', payload: null })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  return (
    data ? (
      data !== 'error' ?
        (
          <div
            className='
            lg:flex-row lg:pl-[36px]
            py-[80px] flex flex-col max-w-7xl mx-auto px-4
            '>
            <div 
              className="
                lg:pr-[20px]
              ">
              <InfoItem></InfoItem>
            </div>
            <div 
              className="
                lg:px-[36px] lg:min-w-[420px] lg:mt-0
                w-full flex-1 mt-5
                ">
              <DetailItem></DetailItem>
            </div>
          </div>
        )
        :
        <Error></Error>
    )
      :
      (
        <div className="w-full h-[90vh] flex justify-center items-center">
          <BiLoaderAlt className='text-[50px] text-[#111111] animate-spin'></BiLoaderAlt>
        </div>
      )
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import BlackBtn from '../Button/BlackBtn'
import WhiteGrayBtn from '../Button/WhiteGrayBtn'

export default function Error() {
  return (
    <div className='h-[60vh] flex flex-col justify-center items-center text-[30px]'>
      <p className='mb-5'>Opps! Something Go Wrong...</p>
      <Link to={'/homepage'}>
        <WhiteGrayBtn name='Return Home Page'></WhiteGrayBtn>
      </Link>
    </div>
  )
}

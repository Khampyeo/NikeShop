import React from 'react'
import mainbanner from '../img/mainBanner.png'
import mainbannerMobile from '../img/mainBannerMobile.png'
import adsbanner from '../img/bbbBanner.png'
import adsbannerMobile from '../img/bbbBannerMobile.png'
import BlackBtn from '../../Button/BlackBtn'
import { Link } from 'react-router-dom'

export default function AdsHomePage() {
  return (
    <div className='pb-5'>
      <Link to={'/store/all/all'}>
        <div className="lg:-mx-9 -mx-4">
          <img className='md:block hidden' src={adsbanner} alt="" />
          <img className='md:hidden w-full' src={adsbannerMobile} alt="" />
        </div>
      </Link>
      <div className="mt-20">
        <img src={mainbanner} alt="" className='md:block hidden w-full' />
        <img src={mainbannerMobile} alt="" className='md:hidden w-full' />

      </div>
      <div className="
        lg:text-center lg:mx-auto lg:w-[60%]
        text-left text-[#111] text-[16px] mt-10 w-[100%] 
        ">
        <p>Gift for You, from You</p>
        <h1 className='
          lg:text-[72px]
          text-[48px] py-0 my-0 leading-none
          '>UNWRAP YOUR FAVS</h1>
        <p className="py-5">You work hard. You gift hard. It’s time to treat yourself to something good.</p>
        <p className="">Whether “me time” for you means working out, winding down or somewhere in between, we have the leggings and bras, tops and tees you need to do “me time” your way.</p>
        <div className="mt-5">
          <Link to={'/store/all/all'}>
            <BlackBtn name='Shop'></BlackBtn>
          </Link>
        </div>
      </div>
    </div>
  )
}

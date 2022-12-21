import React from 'react'
import BlackBtn from '../../Button/BlackBtn'
import nikeGif from '../img/Sneaker.gif'

export default function VideoHomepage() {

    return (
        <div className="
            md:block
            hidden py-10 relative
            ">
            <img src={nikeGif} alt="" srcSet='' className='w-full' />
            <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                <p className="">Just In: Fast Pack</p>
                <h1 className="
                    lg:text-[74px]
                    md:text-[64px]
                    sm:text-[48px]
                    font-bold
                    ">FIND YOUR FAST</h1>
                <p className="mb-5">So many want to fly. Choose yours</p>
                <BlackBtn name='Join Us' padding = 'py-2 px-4'></BlackBtn>
            </div>
        </div>
    )
}

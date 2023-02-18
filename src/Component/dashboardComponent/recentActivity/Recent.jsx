import React from 'react'
import { BsDownload, BsThreeDotsVertical, BsCreditCard, BsDisc, BsHeadset } from "react-icons/bs";
import './scrollbar.css'

export default function Recent() {
    return (
        <div className='py-[18px] px-6 bg-white rounded-lg overflow-y-auto h-[500px] nav-scrollbar'>
            <div className="flex justify-between items-center">
                <h1 className='py-1 font-semibold text-[#6c757d]'>RECENT ACTIVITY</h1>
                <BsThreeDotsVertical></BsThreeDotsVertical>
            </div>
            <div className="mt-[18px]">
                <div className="flex items-start">
                    <div className="relative z-10 bg-white rounded-full border border-black p-1">
                        <BsCreditCard className=''></BsCreditCard>
                    </div>
                    <div className="ml-4 relative before:bg-[#dedede] before:w-[2px] before:h-full before:absolute before:left-[-29px] before:bottom-0 py-2" >
                        <h1 className='text-[14px] text-[#39afd1] font-semibold'>You sold an item</h1>
                        <p className='text-[12px] text-[#6c757d]'>Paul Burgess just purchased “Hyper - Admin Dashboard”!</p>
                        <p className='text-[12px] text-[#6c757d]'>5 minutes ago</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="relative z-10 bg-white rounded-full border border-black p-1">
                        <BsHeadset></BsHeadset>
                    </div>
                    <div className="ml-4 relative before:bg-[#dedede] before:w-[2px] before:h-full before:absolute before:left-[-29px] before:bottom-0 py-2" >
                        <h1 className='text-[14px] text-[#727cf5] font-semibold'>Product on the Bootstrap Market</h1>
                        <p className='text-[12px] text-[#6c757d]'>Dave Gamache added Admin Dashboard</p>
                        <p className='text-[12px] text-[#6c757d]'>5 minutes ago</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="relative z-10 bg-white rounded-full border border-black p-1">
                        <BsDisc></BsDisc>
                    </div>
                    <div className="ml-4 relative before:bg-[#dedede] before:w-[2px] before:h-full before:absolute before:left-[-29px] before:bottom-0 py-2" >
                        <h1 className='text-[14px] text-[#39afd1] font-semibold'>Robert Delaney</h1>
                        <p className='text-[12px] text-[#6c757d]'>Send you message "Are you there?"</p>
                        <p className='text-[12px] text-[#6c757d]'>5 minutes ago</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="relative z-10 bg-white rounded-full border border-black p-1">
                        <BsCreditCard></BsCreditCard>
                    </div>
                    <div className="ml-4 relative before:bg-[#dedede] before:w-[2px] before:h-full before:absolute before:left-[-29px] before:bottom-0 py-2" >
                        <h1 className='text-[14px] text-[#727cf5] font-semibold'>Audrey Tobey</h1>
                        <p className='text-[12px] text-[#6c757d]'>Uploaded a photo "Error.jpg"</p>
                        <p className='text-[12px] text-[#6c757d]'>5 minutes ago</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="relative z-10 bg-white rounded-full border border-black p-1">
                        <BsHeadset></BsHeadset>
                    </div>
                    <div className="ml-4 relative before:bg-[#dedede] before:w-[2px] before:h-full before:absolute before:left-[-29px] before:bottom-0 py-2" >
                        <h1 className='text-[14px] text-[#39afd1] font-semibold'>You sold an item</h1>
                        <p className='text-[12px] text-[#6c757d]'>Paul Burgess just purchased “Hyper - Admin Dashboard”!</p>
                        <p className='text-[12px] text-[#6c757d]'>5 minutes ago</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="relative z-10 bg-white rounded-full border border-black p-1">
                        <BsCreditCard></BsCreditCard>
                    </div>
                    <div className="ml-4 relative" >
                        <h1 className='text-[14px] text-[#727cf5] font-semibold'>You sold an item</h1>
                        <p className='text-[12px] text-[#6c757d]'>Paul Burgess just purchased “Hyper - Admin Dashboard”!</p>
                        <p className='text-[12px] text-[#6c757d]'>5 minutes ago</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

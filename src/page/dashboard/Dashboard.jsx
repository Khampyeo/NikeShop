import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Main from '../../Component/dashboardComponent/main/Main';
import Nav from '../../Component/dashboardComponent/nav/Nav';
import TopMenu from '../../Component/dashboardComponent/top-menu/TopMenu';

export default function Dashboard() {
  const [showNav, setShowNav] = useState(true)
  const handleShowNav = () => {
    setShowNav(!showNav)
  }
  return (
    <div className='flex'>
      <div className={`${showNav ? 'ml-0' : 'ml-[-300px]'} transition-all w-[300px]`}>
        <div className={`fixed top-0 w-[300px]`}>
          <Nav></Nav>
        </div>
      </div>
      <div className=""></div>
      <div className='flex-1 bg-[#f2edf3]'>
        <div className={`fixed top-0 right-0 ${showNav ? 'w-[calc(100%-300px)]' : 'w-full'} transition-all z-50`}>
          <TopMenu setShowNav={handleShowNav}></TopMenu>
        </div>
        <div className="mt-[72px]">
          <Main></Main>
        </div>
        <div className="py-4 flex justify-between px-6 border-t text-[#6c757d]">
          <p>2023 © Khamma</p>
          <div className="flex">
            <button>About</button>
            <button className='ml-3'>Support</button>
            <button className='ml-3'>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  )
}

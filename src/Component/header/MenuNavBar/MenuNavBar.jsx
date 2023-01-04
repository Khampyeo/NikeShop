import React, { Fragment, useEffect, useState } from 'react'
import BlackBtn from '../../Button/BlackBtn';
import WhiteBtn from '../../Button/WhiteBtn';
import SubNavBarMenu from './SubNavBarMenu';
import data from './data'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import jordanLogo from '../img/jordan-2.svg'
import { GrAdd } from "react-icons/gr";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import './animation.css'

export default function MenuNavBar(props) {
  const [menuShow, setMenuShow] = useState(props.show)
  const [navBarClick, setNavBarClick] = useState('')
  const [showUser, setShowUser] = useState(false)
  const [animationEndUser, setAnimationEndUser] = useState(false)

  const user = useSelector(state => state.reducerUser.user)

  const dispatch = useDispatch()
  const userNav = ['Profile', 'Orders', 'Favourites', 'Inbox', 'Experiences', 'Account Settings']
  const arrayHaveSubNav = ['Men', 'Women', 'Kids', 'Customise', 'Sale', 'Gifts 🎁'];
  const arrayNotSubNav = ['SNKRS'];

  const handleNavBarClick = () => {
    setNavBarClick('')
  }
  const handleOnExit = ()=>{
    props.onExit()
    setNavBarClick('')
    setShowUser(false)
  }

  useEffect(() => {
    if (props.show) {
      document.body.style.overflow = 'hidden'
      setMenuShow(true)
    }
  }, [props.show])

  const onAnimationEnd = () => {
    if (!props.show) {
      setMenuShow(false);
      document.body.style.overflow = 'visible'
    }
  };
  const returnFromUser = () => {
    if (animationEndUser) {
      setShowUser(false)
    }
  };

  const getArrTitleByName = (data, name) => {
    const newdata = data.find(element => element.name === name)
    return newdata.category.map((element) => element.title)
  }
  const logOut = () => {
    const guest = {
      age: null,
      email: null,
      name: 'guest',
      productsFavorite: [],
      userType: 'guest',
      _id: '1231'
    }
    localStorage.removeItem('user');
    dispatch({ type: 'USER', payload: guest })
    dispatch({ type: 'CART', payload: [] })
    dispatch({ type: 'STATUS', payload: 'notlogin' })

  }
  return (menuShow &&
    <Fragment>
      <div className={`
      fixed w-[300px] h-[100vh] bg-white right-0 top-0 overflow-hidden overflow-y-auto z-[1100] text-[#111]
      ${props.show ? 'menu-appear' : 'menu-disappear'}
    `} onAnimationEnd={onAnimationEnd}>
        <div className={`
        absolute top-0 w-full pt-[40px] px-[30px] pb-[120px] transition-all ease-linear 
        ${navBarClick === '' ? 'left-0' : 'left-[-300px]'}
      `}>
          <div className="exit p-1 rounded-full hover:bg-[#e5e5e5] absolute top-[12px] right-[30px] cursor-pointer"
            onClick={handleOnExit}>
            <GrAdd className='rotate-45 text-[24px]'></GrAdd>
          </div>
          <div className="">
            {user.userType !== 'guest' && <div className="" >
              <div className="group flex justify-between items-center py-[10px] cursor-pointer mb-4 mt-2"
                onClick={() => {
                  setShowUser(true)
                  setAnimationEndUser(false)
                }}>
                <div className="flex items-center" >
                  <AiOutlineUser className='text-[20px]'></AiOutlineUser>
                  <p className='text-[16px] ml-2'>Hi, {user.name}</p>
                </div>
                <FiChevronRight className='text-[22px]'></FiChevronRight>
              </div>
              {showUser &&
                <div
                  className={`
                  fixed h-[100%] w-[300px] bg-white top-0 right-0 text-[#111] overflow-hidden
                  ${!animationEndUser ? 'menu-appear' : 'menu-disappear'}
                `}
                  onAnimationEnd={returnFromUser}
                >
                  <div
                    className={`
                    absolute top-0 w-full pt-[40px] px-[30px] transition-all ease-linear text-[#111]
                    ${showUser ? 'right-[0px]' : 'right-[300px]'}
                  `}>
                    <button
                      className="
                      flex items-center
                      "
                      onClick={() => setAnimationEndUser(true)}>
                      <FiChevronLeft className='text-[24px] mr-2'></FiChevronLeft>
                      <p className='text-[16px]'>All</p>
                    </button>
                    <h1 className="text-[24px] py-5">Account</h1>
                    <div className="">
                      {userNav.map((name, index) =>
                        <p key={index} className="py-2 text-[#757575]">{name}</p>
                      )}
                      <p
                        className="py-2 text-red-700 opacity-80 cursor-pointer hover:opacity-100"
                        onClick={() => {
                          handleOnExit()
                          logOut()
                        }}>Log out</p>
                    </div>
                  </div>
                </div>
              }
            </div>
            }
            {arrayHaveSubNav.map((navBarName, index) => (
              <div key={index} className="">
                <li key={index} id={`sub-item-${index}`}
                  className='
          group flex justify-between items-center py-[10px] cursor-pointer'
                  onClick={() => {
                    setNavBarClick(navBarName)
                  }}>
                  <p className='
                  text-[#111] text-[24px]
                  '>{navBarName}
                  </p>
                  <FiChevronRight className='text-[22px]'></FiChevronRight>
                </li>
                <SubNavBarMenu
                  prev='All'
                  name={navBarName}
                  show={navBarClick === navBarName}
                  arr={getArrTitleByName(data, navBarName)}
                  handleNameClick={handleNavBarClick}
                ></SubNavBarMenu>
              </div>
            ))}
            {arrayNotSubNav.map((navBarName, index) => (
              <li key={index} id={`sub-item-${index}`} className='group flex items-center py-[10px] cursor-pointer'>
                <p className='
                  text-[#111] text-[24px]
                  '>{navBarName}
                </p>
              </li>
            ))}
          </div>
          <div className="mt-10">
            <div className="">
              <img src={jordanLogo} alt="" className='w-8 inline-block mr-5 cursor-pointer' /> <span>Jordan</span>
              <div className="mt-[60px]">
                {user.userType === 'guest' &&
                  <div>
                    <p className="text-[#757575] text-[20px] py-[20px]">Become a Nike Member for the best products, inspiration and stories in sport. <a className='text-[#111]' href="">Learn more</a></p>
                    <div className="mt-[20px]">
                      <Link to={'/login'} onClick={handleOnExit}>
                        <BlackBtn name='Join Us'></BlackBtn>
                      </Link>
                      <Link to={'/register'} onClick={handleOnExit}>
                        <WhiteBtn name='Sign In' style='ml-2'></WhiteBtn>
                      </Link>
                    </div>
                  </div>
                }

                <div className="text-[16px] mt-[40px]">
                  {user.userType !== 'guest' &&
                    <Link to={'/favourites'} onClick={handleOnExit}>
                      <div className="flex items-center py-3">
                        <AiOutlineHeart className='text-[24px]'></AiOutlineHeart>
                        <p className='pl-3'>Favourites</p>
                      </div>
                    </Link>
                  }
                  <Link to={'/cart'} onClick={handleOnExit}>
                    <div className="py-3">
                      <svg
                        aria-hidden="true"
                        className="pre-nav-design-icon inline-block"
                        width={24}
                        height={24}
                        fill="none"
                      >
                        <path
                          stroke="currentColor"
                          strokeWidth={1.5}
                          d="M8.25 8.25V6a2.25 2.25 0 0 1 2.25-2.25h3a2.25 2.25 0 1 1 0 4.5H3.75v8.25a3.75 3.75 0 0 0 3.75 3.75h9a3.75 3.75 0 0 0 3.75-3.75V8.25H17.5"
                        />
                      </svg>
                      <span className='pl-3'>Bag</span>
                    </div>
                  </Link>
                  <div className="py-3 cursor-pointer">
                    <svg
                      aria-hidden="true"
                      className="pre-nav-design-icon inline-block"
                      width={24}
                      height={24}
                      fill="none"
                    >
                      <path
                        stroke="currentColor"
                        strokeMiterlimit={10}
                        strokeWidth={1.5}
                        d="M14.25 3.75C13.01 3.75 12 4.76 12 6.5v7m8.25-3.75H3.75"
                      />
                      <path
                        stroke="currentColor"
                        strokeMiterlimit={10}
                        strokeWidth={1.5}
                        d="M14.25 3.75h4.39l1.61 6v10.5H3.75V9.75l1.61-6h5.14"
                      />
                    </svg>
                    <span className='pl-3'>Order</span>
                  </div>
                  <div className="py-3 cursor-pointer">
                    <svg
                      aria-hidden="true"
                      className="pre-nav-design-icon inline-block"
                      width={24}
                      height={24}
                      fill="none"
                    >
                      <path
                        stroke="currentColor"
                        strokeMiterlimit={10}
                        strokeWidth={1.5}
                        d="M20.25 5.25V16.5c0 1.24-1.01 2.25-2.25 2.25H6c-1.24 0-2.25-1.01-2.25-2.25V5.25"
                      />
                      <path
                        stroke="currentColor"
                        strokeMiterlimit={10}
                        strokeWidth={1.5}
                        d="M8.25 18.5v-7.25h7.5v7.25M12 11.25v7.25M1.5 5.25h21"
                      />
                    </svg>
                    <span className='pl-3'>Find a Store</span>
                  </div>
                  <div className="py-3 cursor-pointer">
                    <svg
                      aria-hidden="true"
                      className="pre-nav-design-icon inline-block"
                      width={24}
                      height={24}
                      fill="none"
                    >
                      <path
                        stroke="currentColor"
                        strokeMiterlimit={10}
                        strokeWidth={1.5}
                        d="M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75zM11.99 18v-1.5"
                      />
                      <path
                        stroke="currentColor"
                        strokeMiterlimit={10}
                        strokeWidth={1.5}
                        d="M9 9.75a3 3 0 1 1 4.29 2.71c-.78.37-1.29 1.16-1.29 2.03V15"
                      />
                    </svg>
                    <span className='pl-3'>Help</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bg-black opacity-50 inset-0 z-[1090] backdrop-blur-3xl" onClick={handleOnExit}></div>
    </Fragment>
  )
}

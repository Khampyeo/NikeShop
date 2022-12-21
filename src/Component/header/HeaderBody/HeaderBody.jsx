import React, { Fragment, useEffect, useState } from 'react'
import nikeLogo from '../img/Logo_NIKE.png'
import ChildMenu from './ChildMenu';
import data from './dataSubMenu.js'
import './animation.css'
import { BiMenu } from "react-icons/bi";
import MenuNavBar from '../MenuNavBar/MenuNavBar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



export default function HeaderBody() {

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [searchClick, setSearchClick] = useState(false)
    const [menuClick, setMenuClick] = useState(false);
    const user = useSelector(state => state.reducerUser.user)

    const handleMenuClick = () => {
        setMenuClick(!menuClick);
    }

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > 32 && window.scrollY > lastScrollY) { // if scroll down hide the navbar
                setShow(false);
            } else { // if scroll up show the navbar
                setShow(true);
            }
            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);


    function RenderSubMenu(props) {
        let category = {}
        switch (props.name) {
            case 'Men':
                category = data.find(item => item.name === props.name).category;
                break;
            case 'Women':
                category = data.find(item => item.name === props.name).category;
                break;
            case 'Kids':
                category = data.find(item => item.name === props.name).category;
                break;
            case 'Customise':
                category = data.find(item => item.name === props.name).category;
                break;
            case 'Sale':
                category = data.find(item => item.name === props.name).category;
                break;
            case 'Gifts 🎁':
                category = data.find(item => item.name === props.name).category;
                break;
            default:
                break;
        }
        return (
            <div className="absolute bg-white p-[40px] pt-[20px] w-[100vw] top-full left-0 z-[99] overflow-hidden">
                <div className="flex justify-center mx-auto max-w-7xl drop-down">
                    {category.map((item, index) => {
                        return (
                            <ChildMenu key={index} arr={item.arr}></ChildMenu>
                        )
                    })}
                </div>
            </div>
        )
    }
    function RenderNavBar() {
        const arrayHaveSubNav = [
            {
                name: 'Men',
                keywork: 'men',
                link:'/store/all/gender=0'
            },
            {
                name: 'Women',
                keywork: 'women',
                link:'/store/all/gender=1'

            },
            {
                name: 'Kids',
                keywork: 'kids',
                link:'/store/all/gender=2'
            },
            {
                name: 'Customise',
                keywork: 'customise',
                link:'/store/'
            }
            ,
            {
                name: 'Sale',
                keywork: 'sale',
                link:'/store/'
            },
            {
                name: 'Gifts 🎁',
                keywork: 'gift',
                link:'/store/'
            }];
        const arrayNotSubNav = [
            {
                name:'SNKRS',
                keywork:'snkrs',
                link:'https://www.nike.com/vn/launch'

            }];
        const [showSubMenu, setShowSubMenu] = useState('')
        return (<Fragment>
            {arrayHaveSubNav.map((navBarName, index) => (
                <li key={index}
                    id={`sub-item-${index}`}
                    className='group flex items-center' onMouseOver={() => setShowSubMenu(navBarName.name)} onMouseLeave={() => setShowSubMenu('')}>
                    <Link to={`${navBarName.link}`}>
                        <p className='
                        item
                        px-[12px] relative py-[18px] cursor-pointer
                        after:absolute after:bg-black after:w-full after:h-[2px] after:left-0 after:bottom-0 after:hidden
                        group-hover:after:block
                        '>{navBarName.name}
                        </p>
                    </Link>
                    <div id={`sub-menu-${index}`} className=''>
                        {showSubMenu == navBarName.name && <RenderSubMenu name={navBarName.name}></RenderSubMenu>}
                    </div>
                </li>
            ))}
            {arrayNotSubNav.map((navBarName, index) => (
                <li key={index} id={`sub-item-${index}`} className='group flex items-center'>
                    <p className='
                        item
                        px-[12px] relative py-[18px] cursor-pointer
                        after:absolute after:bg-black after:w-full after:h-[2px] after:left-0 after:bottom-0 after:hidden
                        group-hover:after:block
                        '>{navBarName.name}
                    </p>
                </li>
            ))}
        </Fragment>
        )
    }
    return (
        <Fragment>
            <div id='header-body' className={`
                w-full bg-white transition-all z-10
                ${show ? (window.pageYOffset > 32 ? 'fixed top-[0px]' : 'top-[0px]') : 'fixed top-[-60px]'}
                ${searchClick ? (window.pageYOffset > 32 ? 'fixed' : 'fixed header-open-animation') : (window.pageYOffset > 32 ? '' : 'header-close-animation')}
                `}>
                <div className="
                lg:px-9
                w-full h-[60px] relative px-4
                ">
                    <div className="mx-auto flex justify-between items-center h-full">
                        <Link to="/">
                            <div className={`
                                lg:block
                                h-5 cursor-pointer relative z-10
                                ${searchClick ? 'hidden' : ''}
                                `}>
                                <img className='h-7 py-1' src={nikeLogo} alt="" />
                            </div>
                        </Link>
                        <div className={`
                            navbar-header
                            xl:pr-0
                            lg:flex ${searchClick ? 'lg:hidden' : ''}
                            hidden pr-[60px] items-center justify-center absolute top-0 left-0 w-full
                            `}
                        >
                            <RenderNavBar></RenderNavBar>
                        </div>
                        <div className={`
                            h-full transition-all duration-500 flex justify-center ml-auto
                            ${searchClick ? 'flex-1' : ''}
                        `}>
                            <div className={`
                                h-full flex items-center transition-all duration-500 
                               ${searchClick ? 'lg:max-w-[700px] lg:w-[700px] w-[80%]' : 'lg:w-[160px] xl:w-[180px] w-[40px]'}
                            `}>
                                <div className={`relative w-full
                                `} onClick={() => setSearchClick(true)}>
                                    <div className={`
                                    lg:bg-transparent
                                    absolute left-0 h-[40px] w-[40px] rounded-full flex justify-center items-center hover:bg-[#e5e5e5]
                                    ${searchClick ? 'bg-transparent' : 'bg-white'}
                                    `}>
                                        <svg
                                            aria-hidden="true"
                                            className="pre-nav-design-icon"
                                            width={24}
                                            height={24}
                                            fill="none"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeWidth={1.5}
                                                d="M13.962 16.296a6.716 6.716 0 0 1-3.462.954 6.728 6.728 0 0 1-4.773-1.977A6.728 6.728 0 0 1 3.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0 1 10.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0 1 17.25 10.5a6.726 6.726 0 0 1-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"
                                            />
                                        </svg>
                                    </div>
                                    <input type="text" className={`
                                    lg:visible lg:px-[48px]
                                    py-[8px] rounded-full bg-[#f5f5f5] outline-none text-[16px] hover:bg-[#e5e5e5] 
                                    ${searchClick ? 'visible px-[48px] w-full' : 'lg:w-full w-[40px] px-0'}
                                    `} placeholder='Search' />
                                </div>

                            </div>
                        </div>
                        <div className="flex justify-center items-center relative">
                            <div className={`
                            heart-header
                            lg:block ${searchClick ? 'lg:invisible' : ''}
                            hidden favorite mx-4 hover:bg-[#e5e5e5] rounded-full p-2 cursor-pointer
                            `}>
                                <svg
                                    aria-hidden="true"
                                    className="pre-nav-design-icon"
                                    width={24}
                                    height={24}
                                    fill="none"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeWidth={1.5}
                                        d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 0 1 0 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 0 1 0-7.007A4.923 4.923 0 0 1 7.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 0 1 3.504-1.451"
                                    />
                                </svg>
                            </div>
                            <div className={`
                            cart-header
                            lg:mx-0 lg:block 
                            ${searchClick ? 'invisible' : ''}
                            mx-4 hover:bg-[#e5e5e5] rounded-full cursor-pointer p-2
                            `}>
                                <svg
                                    aria-hidden="true"
                                    className="pre-nav-design-icon"
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
                            </div>
                            <div className={`
                                lg:hidden
                                menu-header hover:bg-[#e5e5e5] rounded-full p-2 cursor-pointer
                                ${searchClick ? 'hidden' : ''}
                                `} onClickCapture={handleMenuClick}>
                                <BiMenu className={`
                                text-[26px]
                                `}>
                                </BiMenu>
                            </div>
                            <div className="lg:hidden">
                                <MenuNavBar show={menuClick} onExit={handleMenuClick}></MenuNavBar>
                            </div>
                            <div className={`
                                cancel-search 
                                absolute top-1/2 -translate-y-1/2 right-4 hover:opacity-70 cursor-pointer
                                ${searchClick ? 'pop-up' : 'hidden'}
                                `}
                                onClick={() => setSearchClick(false)}
                            >
                                <p className='text-[16px] text-[#111]'>Cancel</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`
            h-[64px] bg-white w-full ${window.scrollY > 32 ? 'block' : 'hidden'}
            
            `}></div>
        </Fragment>

    )
}

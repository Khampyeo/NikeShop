import React, { Fragment, useEffect, useState } from 'react'
import nikeLogo from '../img/Logo_NIKE.png'
import ChildMenu from './ChildMenu';
import data from './dataSubMenu.js'
import './animation.css'
import { BiMenu } from "react-icons/bi";
import MenuNavBar from '../MenuNavBar/MenuNavBar';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchInput from './SearchInput';



export default function HeaderBody() {

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [searchClick, setSearchClick] = useState(false)
    const [menuClick, setMenuClick] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState('')


    const user = useSelector(state => state.reducerUser.user)
    const cart = useSelector(state => state.reducerUser.cart)
    const handleMenuClick = () => {
        setMenuClick(!menuClick);
    }
    const handleSetSearchClick = (bool) => {
        setSearchClick(bool)
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
            <div className="absolute bg-white p-[40px] pt-[20px] w-[100vw] top-full left-0 z-[1000] overflow-hidden">
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
                link: '/store/all/gender=0'
            },
            {
                name: 'Women',
                keywork: 'women',
                link: '/store/all/gender=1'

            },
            {
                name: 'Kids',
                keywork: 'kids',
                link: '/store/all/gender=2'
            },
            {
                name: 'Customise',
                keywork: 'customise',
                link: '/store/'
            }
            ,
            {
                name: 'Sale',
                keywork: 'sale',
                link: '/store/'
            },
            {
                name: 'Gifts 🎁',
                keywork: 'gift',
                link: '/store/'
            }];
        const arrayNotSubNav = [
            {
                name: 'SNKRS',
                keywork: 'snkrs',
                link: 'https://www.nike.com/vn/launch'

            }];
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
                    <a href={navBarName.link} target='_blank' className='
                        item
                        px-[12px] relative py-[18px] cursor-pointer
                        after:absolute after:bg-black after:w-full after:h-[2px] after:left-0 after:bottom-0 after:hidden
                        group-hover:after:block
                        '>{navBarName.name}
                    </a>
                </li>
            ))}
        </Fragment>
        )
    }
    return (
        <Fragment>
            {searchClick && <div className="fixed bg-black opacity-50 inset-0 z-[1020] backdrop-blur-3xl" onClick={() => setSearchClick(false)}></div>}
            <div id='header-body'
                className={`
                    w-full bg-white transition-all z-[1030]
                    ${show ? (window.pageYOffset > 32 ? 'fixed top-[0px]' : 'top-[0px]') : 'fixed top-[-60px]'}
                    ${searchClick ? (window.pageYOffset > 32 ? 'fixed' : 'fixed header-open-animation') : (window.pageYOffset > 32 ? '' : ' header-close-animation relative')}
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
                                <img className='h-7 py-1 hover:opacity-60' src={nikeLogo} alt="" />
                            </div>
                        </Link>
                        <div className={`
                            navbar-header
                            xl:pr-0
                            lg:flex ${searchClick ? 'lg:hidden' : ''}
                            hidden pr-[60px] items-center justify-center absolute top-0 left-0 w-full
                        `}>
                            <RenderNavBar></RenderNavBar>
                        </div>
                        <SearchInput searchClick={searchClick} setSearchClick={handleSetSearchClick}></SearchInput>
                        <div className="flex justify-center items-center relative w-[120px]">
                            <Link to={'/favourites'}>
                                <div className={`
                                    heart-header
                                    lg:block ${searchClick ? 'lg:hidden' : ''}
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
                            </Link>
                            <Link to={'/cart'}>
                                <div className={`
                                cart-header
                                lg:mx-0 
                                ${searchClick ? 'hidden' : ''}
                                mx-4 hover:bg-[#e5e5e5] rounded-full cursor-pointer p-2 relative    
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
                                    <p className='absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-35%] text-[9px] font-bold'>{cart?.length}</p>
                                </div>
                            </Link>
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
            <div className="lg:hidden">
                <MenuNavBar show={menuClick} onExit={handleMenuClick}></MenuNavBar>
            </div>
        </Fragment>

    )
}

import "../../App.css";
import { BrowserRouter, Route, Router, Routes, useLocation } from "react-router-dom";
import React, { Fragment, useEffect, useState } from "react";
import HeaderMain from "../../Component/header/HeaderMain";
import FooterMain from "../../Component/footer/FooterMain";
import LoginPage from "../../page/loginPage/LoginPage";
import RegisterPage from "../../page/registerPage/RegisterPage"
import HomePage from "../../page/homePage/HomePage";
import StorePage from "../../page/storePage";
import CartPage from "../../page/cartPage/CartPage";
import ItemPage from "../../page/itemPage/ItemPage";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import nikeLogo from '../../Component/header/img/Logo_NIKE.png'
import { BiLoaderAlt } from "react-icons/bi";
import FavouritesPage from "../../page/favouritesPage/FavouritesPage";


function User() {
    const dispatch = useDispatch()
    const data = useSelector(state => state.reducerUser.user)
    const status = useSelector(state => state.reducerUser.status)
    useEffect(() => {
        if (localStorage.getItem('user') != null && status === 'none') {
            const user = JSON.parse(window.atob(localStorage.getItem('user')))
            const getUser = async (userLogin) => {
                dispatch({ type: 'STATUS', payload: 'pending' })
                try {
                    const res = await axios.post('https://nike-sever-vtcoder.glitch.me/users/login', userLogin)
                        .then((response) => {
                            const data = {
                                user: { ...response.data.user },
                                token: response.data.token
                            }
                            const userData = JSON.parse(localStorage.getItem(data.user._id))
                            if (userData) {
                                dispatch({ type: 'CART', payload: userData.cart })
                                data.user.productsFavorite = userData.favourites
                            }
                            dispatch({ type: 'USER', payload: data.user })
                            dispatch({ type: 'TOKEN', payload: data.token })
                            dispatch({ type: 'STATUS', payload: 'login' })
                        })
                        .catch(function (error) {
                            alert('error')
                        });
                }
                catch (er) {
                    console.log(er);
                }
            }
            getUser(user)
        }
        else {
            const user = {
                age: null,
                email: null,
                name: 'guest',
                productsFavorite: [],
                userType: 'guest',
                _id: '1231'
            }
            dispatch({ type: 'USER', payload: user })
            dispatch({ type: 'STATUS', payload: 'notlogin' })
        }
    }, [])
    return status === 'login' || status === 'notlogin' ?
        (
            <Fragment>
                <HeaderMain />
                <Routes>
                    <Route path="/" element={<HomePage></HomePage>} />
                    <Route path="/login" element={<LoginPage></LoginPage>} />
                    <Route path="/register" element={<RegisterPage></RegisterPage>} />
                    <Route path="/store/*" element={<StorePage></StorePage>} />
                    <Route path="/store/:search/:sort_info" element={<StorePage></StorePage>} />
                    <Route path="/cart" element={<CartPage></CartPage>} />
                    <Route path="/item/:id" element={<ItemPage></ItemPage>} />
                    <Route path="/favourites" element={<FavouritesPage></FavouritesPage>} />
                    <Route path='*' element={<HomePage />} />
                </Routes>
                <FooterMain />
            </Fragment>
        )
        :
        (
            <div className="">
                <img src={nikeLogo} className="w-[80px] mb-10 absolute top-5 left-1/2 translate-x[-1/2]"></img>
                <div className="absolute left-1/2 top-[50%] translate-x[-1/2] translate-y[-1/2]">
                    <BiLoaderAlt className='text-[50px] text-[#111111] animate-spin'></BiLoaderAlt>
                </div>
            </div>
        )
}

export default User;

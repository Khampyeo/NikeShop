import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import HeaderMain from "./Component/header/HeaderMain";
import FooterMain from "./Component/footer/FooterMain";
import LoginPage from "./page/loginPage/LoginPage";
import RegisterPage from "./page/registerPage/RegisterPage"
import HomePage from "./page/homePage/HomePage";
import StorePage from "./page/storePage";
import CartPage from "./page/cartPage/CartPage";
import ItemPage from "./page/itemPage/ItemPage";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import nikeLogo from './Component/header/img/Logo_NIKE.png'
import { BiLoaderAlt } from "react-icons/bi";


function App() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.reducerUser.user)
  const status = useSelector(state => state.reducerUser.status)

  useEffect(() => {
    let user = null
    if (localStorage.getItem('user') && status === 'none') {
      user = JSON.parse(window.atob(localStorage.getItem('user')))
      const getUser = async (userLogin) => {
        dispatch({ type: 'STATUS', payload: 'pending' })
        try {
          const res = await axios.post('https://nike-sever-vtcoder.glitch.me/users/login', userLogin)
            .then((response) => {
              const user = response.data.user
              dispatch({ type: 'USER', payload: user })
              dispatch({ type: 'STATUS', payload: 'done' })
              alert('Success!!')
            })
            .catch(function (error) {
              alert(error);
            });
        }
        catch (er) {
          console.log(er);
        }
      }
      getUser(user)
    }
  }, [])
  return status === 'done' ?
    (
      <BrowserRouter>
        <HeaderMain />
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/login" element={<LoginPage></LoginPage>} />
          <Route path="/register" element={<RegisterPage></RegisterPage>} />
          <Route path="/store/*" element={<StorePage></StorePage>} />
          <Route path="/store/:search/:sort_info" element={<StorePage></StorePage>} />
          <Route path="/cart" element={<CartPage></CartPage>} />
          <Route path="/item/:id" element={<ItemPage></ItemPage>} />
          <Route path='*' element={<HomePage />} />
        </Routes>
        <FooterMain />
      </BrowserRouter>
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

export default App;

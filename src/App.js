import React from 'react'
import { BrowserRouter, Route, Router, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import User from './page/user/User'
import Login from './page/dashboard/Login';

export default function App() {
  const pathname = window.location.pathname
  return (
    <BrowserRouter>
      <ScrollToTop />
      {pathname !== '/dashboard' ? <div>
        <User />
      </div>
        :
        <Login />
      }
    </BrowserRouter>
  )
}

import React from 'react'
import Header from './components/Header/Header.jsx'
import Fotter from './components/Footer/Fotter.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
    return(
        <>
        <Header />
        <Outlet />
        <Fotter />
        </>
    )
    
}

export default Layout

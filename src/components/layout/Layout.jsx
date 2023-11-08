import React from 'react'
import { Navbar } from './navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from './footer/Footer'

export const Layout = () => {
  return (
    <div>
        <div><Navbar /></div>
        <div><Outlet /></div>
        {/* <div><Footer /></div> */}
    </div>
  )
}

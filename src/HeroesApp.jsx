import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './ui'

export const HeroesApp = () => {
  return (
    <>  
        
        <Navbar/>
        {/* <hr/> */}
        <Outlet/>
    </>
  )
}

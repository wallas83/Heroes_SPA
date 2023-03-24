import React from 'react'
import { AppRoute } from './routes/AppRoute'
import { Authprovider } from './auth'



export const HeroesApp = () => {
  return (
    <Authprovider>  
        
        {/* <Navbar/>
        {/* <hr/> */}
        {/* <Outlet/>  */}
        <AppRoute/>

    </Authprovider>
  )
}

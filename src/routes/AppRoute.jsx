import React, { Children } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Loginpage } from '../auth';
import { ErrorPage } from '../heroes/Error/ErrorPage';
import { DcPage, MarvelPage } from '../heroes';
import { HeroesApp } from '../HeroesApp';


const router = createBrowserRouter([
    {
        path: '/',
        element: <HeroesApp />,
        errorElement: <ErrorPage/>,

        children: [
            {
                path: 'dc',
                element: <DcPage />,
            },
            {
                path: 'marvel',
                element: <MarvelPage />,
            }, 
            {
                path: 'login',
                element: <Loginpage />
            } ,
            
            {
                path: '/',
                element: <Navigate to = {"marvel"} />
            } 
            
]
    }

]);

export const AppRoute = () => {
    return (

        <>
            <RouterProvider router={router} />
        </>
    )
}

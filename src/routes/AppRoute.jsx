import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginPage } from '../auth';
import { ErrorPage } from '../heroes/Error/ErrorPage';
import { HeroesRoutes,  } from '../heroes';
import { childHeroesRouter } from './HeroRouter';


const router = createBrowserRouter([
    {
        path: 'login',
        element: <LoginPage />,
        errorElement: <ErrorPage/>,
    },
    {
        path: '/',
        element: <HeroesRoutes/>,
        children: childHeroesRouter,
        errorElement: <ErrorPage/>
    }
    

]);

export const AppRoute = () => {
    return (

        <>
            <RouterProvider router={router} />
        </>
    )
}

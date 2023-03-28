import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginPage } from '../auth';
import { ErrorPage } from '../heroes/Error/ErrorPage';
import { HeroesRoutes, } from '../heroes';
import { childHeroesRouter } from './HeroRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


const router = createBrowserRouter([
    {
        path: 'login',
        element: (
            <PublicRoute>
                <LoginPage />
            </PublicRoute>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: '/',
        element: (
            <PrivateRoute>
                <HeroesRoutes />
            </PrivateRoute>
        ),
        children: childHeroesRouter,
        errorElement: <ErrorPage />
    },
    {
        path: '/*',
        element: (
            <PrivateRoute>
                <HeroesRoutes />
            </PrivateRoute>
        ),
        errorElement: <ErrorPage />
    }


]);

export const AppRoute = () => {
    return (

        <>
            <RouterProvider router={router} />
        </>
    )
}

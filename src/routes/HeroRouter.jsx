import React from 'react'
import { Navigate } from 'react-router-dom'

import { DcPage, HeroPage, MarvelPage, SearchPage } from '../heroes'

export const childHeroesRouter = [
    {
        path: 'dc',
        element: <DcPage />,
    },
    {
        path: 'marvel',
        element: <MarvelPage />,
    },
    {
        path: 'hero/:id',
        element: <HeroPage />,
    },
    {
        path: 'search',
        element: <SearchPage />
    },

    {
        // path:'/*',
        path: '/',
        element: <Navigate to={"marvel"} />
    }

]


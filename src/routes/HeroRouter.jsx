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
        path: 'hero',
        element: <HeroPage />,
    },
    {
        path: 'search',
        element: <SearchPage />
    },

    {
        path: '/*',
        element: <Navigate to={"marvel"} />
    }

]


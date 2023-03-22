import React from 'react'
import ReactDOM from 'react-dom/client'
import { HeroesApp } from './HeroesApp'

import { AppRoute } from './routes/AppRoute'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AppRoute /> */}
    <HeroesApp/>
  </React.StrictMode>,
)

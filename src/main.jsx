import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppRoute } from './routes/AppRoute'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoute />
  </React.StrictMode>,
)

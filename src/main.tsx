import React from 'react'
import ReactDOM from 'react-dom/client'
import { IntialPageView } from './public/view'
import './i18n'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IntialPageView />
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('Root') as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)

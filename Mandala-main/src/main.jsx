import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async' // <-- ADD THIS LINE

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider> {/* <-- ADD THIS WRAPPER */}
      <App />
    </HelmetProvider> {/* <-- ADD THIS WRAPPER */}
  </StrictMode>,
)
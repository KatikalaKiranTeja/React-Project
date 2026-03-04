import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './stores/context/CardContext.jsx'
import { AuthProvider } from './stores/context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <React.StrictMode>
      <AuthProvider>
        <CartProvider>
          <App/>
        </CartProvider>
      </AuthProvider>
      
    </React.StrictMode>
  </BrowserRouter>
)

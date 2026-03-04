import React from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

function LandingPage() {
  const year = new Date().getFullYear()

  return (
    <div>
      <Navbar/>
      <Products/>
      <footer className="site-footer">
        <div className="site-footer-inner">
          <p>&copy; {year} E-Mart. All rights reserved.</p>
          <p>Secure shopping for mobiles, fashion, electronics and more.</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

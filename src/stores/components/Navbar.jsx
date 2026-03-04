import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CardContext'
import { useAuth } from '../context/AuthContext'

function Navbar() {

  const { cartitem} = useCart()
  const { currentUser, signOut } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    signOut()
    navigate('/signin')
  }

  return (
    <>
      <div className='navsection'>
       <div className="title">
            <Link to='/home'><h2>E-Mart</h2></Link>
        </div> 
       <div className="search">
            <input type="text" placeholder='Search products...' />
       </div>
       <div className="user">
            {currentUser ? (
              <div className="user-details">
                <span>{currentUser.email}</span>
                <button onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <div className="user-details user-links">
                <Link to='/signin'>SignIn</Link>
                <span>/</span>
                <Link to='/signup'>SignUp</Link>
              </div>
            )}
            <Link to='/cart'>
              <div className="cart">
                Cart
                <span className="cart-count">
                  {cartitem.length}
                </span>
              </div>
            </Link>
       </div>
      
    </div>
    <div className="submenu">
      <ul>
        <Link to='/mobiles'><li>Mobiles</li></Link>
        <Link to='/computers'><li>Computers</li></Link>
        <Link to='/watchs'><li>Watches</li></Link>
        <Link to='/men'><li>Men Fashion</li></Link>
        <Link to='/women'><li>Women Dressing</li></Link>
        <Link to='/furniture'><li>Furniture</li></Link>
        <Link to='/ac'><li>Ac</li></Link>
        <Link to='/kitchen'><li>Kitchen</li></Link>
        <Link to='/books'><li>Books</li></Link>
        <Link to='/speakers'><li>Speakers</li></Link>
        <Link to='/fridge'><li>Fridge</li></Link>
        <Link to='/tv'><li>Tv</li></Link>
        <Link to='/promobiles'><li>ProData</li></Link>
      </ul>
    </div>
  </>
  )
}

export default Navbar

import React from 'react'
import Navbar from './components/Navbar'
import { useCart } from './context/CardContext'
import { Link } from 'react-router-dom'

function UserCart() {

    const {cartitem, removeFromCart} = useCart()

  if (cartitem.length === 0) {
    return (
      <>
        <Navbar />
        <div className="cart-empty">
          <h2>Your cart is empty</h2>
          <Link to="/mobiles">Continue shopping</Link>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="cart-page">
      <h2>My Cart</h2>
      {cartitem.map((item)=>{
        return(
            <div className='cart-section' key={`${item.id}-${item.model}`}>
                <div className="cart-img">
                    <img src={item.image} alt="" />
                </div>
                <div className="cart-details">
                    <h3>{item.product}</h3>
                    <h2>{item.price}</h2>
                    <h3>{item.model}</h3>
                </div>
                <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
        )
      })}
      </div>
    </>
  )
}

export default UserCart

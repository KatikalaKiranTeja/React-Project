/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";





const CartContext = createContext()

export const CartProvider = ({children})=>{
    const[cartitem,setCartItem] = useState([])

    const addToCart = (item)=>{
        setCartItem([...cartitem,item])
    }
    const removeFromCart = (item)=>{
        setCartItem(cartitem.filter((apple)=>apple !== item))
    }
return(
    <CartContext.Provider value={{cartitem,addToCart,removeFromCart}}>
        {children}
    </CartContext.Provider>
)
}

export const useCart = ()=>{
    return useContext(CartContext)
}

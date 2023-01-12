import React, { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({children}) => { 

    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.some(x => x.id === id)
    }

    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
            let pos = cart.findIndex(x => x.id === item.id)
            cart[pos].cantProd += cantidad
            setCart([...cart])
        }else{
            setCart([...cart, {...item, cantidad:cantidad}])
        }
    }

    const removeItem = (id) => {
        const productos = cart.filter (x => x.id !== id)
        setCart([...productos])
    }

    const clear = () => {
        setCart([])
    }

    const cartTotal = () => {
        return cart.reduce((total, item) => total += item.cantidad, 0)
    }

    const sumaTotal = () => {
        return cart.reduce((total, item) => total += item.cantidad * item.importe, 0)
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, cartTotal, sumaTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider

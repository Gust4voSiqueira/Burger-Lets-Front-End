
import React, { createContext, useState, useContext } from "react";

const CartContext = createContext()

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const [dados, setDados] = useState([])
    const [totalValue, setTotalValue] = useState(0)

    function add(product) {
        const newCart = cart
        newCart.push(product)

        setCart(newCart)

        setTotalValue(totalValue + product.value)
    }

    function remove(index, value) {
        if (cart.length === 1) {
            setCart([])
            setTotalValue(0)
        } else {
            for (let a = 0; a < cart.length; a++) {
                if (cart[a].id === index) {
                    cart.splice(a, 1)
                }
            }
            setTotalValue(totalValue - value)
        }

    }

    function increment(quantities, index, value) {
        setTotalValue(totalValue + value)
        // eslint-disable-next-line array-callback-return
        cart.map(() => {
            let newCart = cart.filter((item, i) => i !== index)
            newCart[0].quantities = quantities
            newCart[0].subTotal = newCart[0].value * newCart[0].quantities

            if (cart.id === newCart[0].id) {
                setCart([...newCart])
            }
        })
    }


    function decrement(quantities, setQuantities, value) {
        if (quantities === 1) {
            return
        } else {
            setQuantities(quantities - 1)
            setTotalValue(totalValue - value)
        }
    }

    const store = {
        add,
        cart,
        remove,
        setDados,
        dados,
        totalValue,
        increment,
        decrement

    }

    return (
        <CartContext.Provider value={store}>
            {children}
        </CartContext.Provider>
    )

}

export function useCart() {
    const context = useContext(CartContext)

    const {
        cart,
        add,
        remove,
        setDados,
        dados,
        totalValue,
        increment,
        decrement
    } = context

    return {
        cart,
        add,
        remove,
        setDados,
        dados,
        totalValue,
        increment,
        decrement
    }
}
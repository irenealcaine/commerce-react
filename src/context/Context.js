import React, { createContext, useContext } from 'react'
import { useReducer } from 'react';
import { cartReducer, productReducer } from './Reducers';
import { products } from '../data/store'


const Cart = createContext()

const Context = ({ children }) => {

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: []
  })

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  )
}

export default Context

export const CartState = () => {
  return useContext(Cart)
}

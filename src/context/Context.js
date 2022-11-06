import React, { createContext, useContext } from 'react'

// import { faker } from '@faker-js/faker';
import { useReducer } from 'react';
import { cartReducer } from './Reducers';
import { products } from '../data/store'


const Cart = createContext()

const Context = ({ children }) => {

  // const products = [...Array(20)].map(() => ({
  //   id: faker.datatype.uuid(),
  //   name: faker.commerce.product(),
  //   price: faker.finance.amount(),
  //   image: 'https://picsum.photos/200/300',
  //   inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
  //   fastDelivery: faker.helpers.arrayElement([true, false]),
  //   ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  // }))

  console.log(products)

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: []
  })

  return (
    <Cart.Provider value={{ state, dispatch }}>
      {children}
    </Cart.Provider>
  )
}

export default Context

export const CartState = () => {
  return useContext(Cart)
}
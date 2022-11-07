import React from 'react'
import Filters from '../components/Filters'
import SingleProduct from '../components/SingleProduct'
import { CartState } from '../context/Context'
import './styles.css'

const Home = () => {

  const { state: { products },
    productState: { byStock, sort, byRating, searchQuery }
  } = CartState()
  // console.log(products)

  const transformProducts = () => {
    let sortedProducts = products

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) => (
        sort === 'lowToHigh'
          ? a.price - b.price
          : b.price - a.price
      ))
    }

    if (byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock)
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter((prod) =>
        Math.round(prod.rating.rate / 2) >= byRating
      )
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.title.toLowerCase().includes(searchQuery)
      )
      console.log(sortedProducts)
    }

    return sortedProducts
  }

  return (
    <div className='home'>
      <Filters />
      <div className='productContainer'>
        {
          transformProducts().map((product) => {
            return (<SingleProduct prod={product} key={product.id} />)
          })
        }
      </div>
    </div>
  )
}

export default Home

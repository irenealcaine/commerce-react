import React from 'react'
import { Row } from 'react-bootstrap'
import Filters from '../components/Filters'
import SingleProduct from '../components/SingleProduct'
import { CartState } from '../context/Context'
import './styles.css'

const Home = () => {

  const { state: { products },
    productState: { byStock, sort, byRating, searchQuery, byCategory }
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
      sortedProducts = sortedProducts.filter((prod) => prod.stock)
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter((prod) =>
        Math.round(prod.rating.rate / 2) >= byRating
      )
    }

    if (byCategory) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.category.includes(byCategory)
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
        <Row xs={1} md={2} lg={3} xl={4} className="g-2">
          {
            transformProducts().map((product) => {
              return (<SingleProduct prod={product} key={product.id} />)
            })
          }
        </Row>
      </div>
    </div>
  )
}

export default Home

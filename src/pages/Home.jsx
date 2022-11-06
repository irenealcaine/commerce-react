import React from 'react'
import Filters from '../components/Filters'
import SingleProduct from '../components/SingleProduct'
import { CartState } from '../context/Context'
import './styles.css'

const Home = () => {

  const { state: { products } } = CartState()
  console.log(products)

  return (
    <div className='home'>
      <Filters />
      <div className='productContainer'>
        {
          products.map((product) => {
            return (<SingleProduct prod={product} key={product.id} />)
          })
        }
      </div>
    </div>
  )
}

export default Home

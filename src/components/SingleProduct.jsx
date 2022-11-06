import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { CartState } from '../context/Context'
import Rating from './Rating'

const SingleProduct = ({ prod }) => {

  const { state: { cart }, dispatch } = CartState()
  console.log(cart)

  return (
    <div className='products'>
      <Card>
        <Card.Img
          variant='top'
          src={prod.image}
          alt={prod.title}
        />
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>{prod.price} €</span>
            <Rating rating={Math.round(prod.rating.rate / 2)} />
          </Card.Subtitle>
          {
            cart.some(p => p.id === prod.id) ? (
              <Button
                variant='danger'
                onClick={() => {
                  dispatch({
                    type: 'REMOVE_FROM_CART',
                    payload: prod
                  })
                }}>
                Quitar del carrito
              </Button>
            ) : (
              <Button
                variant='success'
                disabled={!prod.stock}
                onClick={() => {
                  dispatch({
                    type: 'ADD_TO_CART',
                    payload: prod
                  })
                }}
              >
                {prod.stock ? 'Añadir al carrito' : 'Sin stock'}
              </Button>
            )

          }



        </Card.Body>
      </Card>

    </div>
  )
}

export default SingleProduct

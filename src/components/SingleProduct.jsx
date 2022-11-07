import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { CartState } from '../context/Context'
import Rating from './Rating'

const SingleProduct = ({ prod }) => {

  const { state: { cart }, dispatch } = CartState()
  // console.log(cart)

  return (
    <div className='products' style={{ marginTop: 20 }}>
      <Col>
        <Card className='shadow'>
          <Card.Header as="h5" style={{ backgroundColor: '#fff' }}>{prod.title}</Card.Header>
          <Card.Img
            variant='top'
            src={prod.image}
            alt={prod.title}
          />
          <Card.Body>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Card.Title style={{ margin: 0 }}>{prod.price.toFixed(2)} €</Card.Title>
              <Card.Subtitle>
                <Rating rating={Math.round(prod.rating.rate / 2)} />
              </Card.Subtitle>
            </div>
            <Card.Subtitle className="text-muted" style={{ marginTop: 10, marginBottom: 10 }}>{prod.category}</Card.Subtitle>

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
                  style={{ width: '100%' }}
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
      </Col>
    </div>
  )
}

export default SingleProduct

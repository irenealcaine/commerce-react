import React, { useEffect, useState } from 'react'
import { Button, Col, Form, ListGroup, Row, Image } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'
import Rating from '../components/Rating'
import { CartState } from '../context/Context'

const Cart = () => {

  const { state: { cart }, dispatch } = CartState()

  const [total, setTotal] = useState()

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0))
  }, [cart])


  return (
    <div className='home'>
      <div className='productContainer'>
        <ListGroup>
          {cart.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.title} fluid rounded />
                </Col>
                <Col md={2}><span>{prod.title}</span></Col>
                <Col md={2}><span>{prod.price.toFixed(2)} €</span></Col>
                <Col md={2}>
                  <Rating rating={Math.round(prod.rating.rate / 2)} />
                </Col>
                <Col md={2}>
                  <Form.Control as='select' value={prod.qty}>
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <option key={i + 1}>{i + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type='button'
                    variant='light'
                    onClick={() =>
                      dispatch({
                        type: 'REMOVE_FROM_CART',
                        payload: prod
                      })
                    }
                  >
                    <AiFillDelete fontSize='20px' />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className='title'>Subtotal ({cart.length}) productos</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: {total.toFixed(2)} €</span>
        <Button type='button' disabled={!cart.length}>
          Proceder al pago
        </Button>
      </div>
    </div >
  )
}

export default Cart

import React from 'react'
import { Badge, Button, Container, Dropdown, DropdownButton, FormControl, Nav, Navbar } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { CartState } from '../context/Context'

const Header = () => {

  const { state: { cart },
    dispatch } = CartState()

  return (
    <Navbar bg='dark' variant='dark' style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to='/'>Nombre</Link>
        </Navbar.Brand>
        <Navbar.Text className='search'>
          <FormControl
            style={{ width: 500 }}
            placeholder='Buscar...'
            className='m-auto'
          />
        </Navbar.Text>
        <Nav>
          <Dropdown align={{ sm: "right" }}>
            <Dropdown.Toggle>
              <HiOutlineShoppingCart fontSize='25px' />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370 }}>

              {cart.length > 0 ? (
                <>
                  {cart.map(prod => (
                    <span className='cartItem' key={prod.id}>
                      <img
                        src={prod.image}
                        alt={prod.title}
                        className='cartItemImg'
                      />
                      <div className='cartItemDetail'>
                        <span>{prod.title}</span>
                        <span>{prod.price} €</span>
                      </div>
                      <AiFillDelete
                        fontSize='20px'
                        style={{ cursor: 'pointer' }}
                        onClick={() => dispatch({
                          type: 'REMOVE_FROM_CART',
                          payload: prod
                        })}
                      />
                    </span>
                  ))}
                  <Link to='/cart'>
                    <Button style={{ width: '95%', margin: '0 10px' }}>
                      Ir al carrito
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Carro vacío</span>
              )}


            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header

import React from 'react'
import { Badge, Button, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { GiDividedSpiral } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { CartState } from '../context/Context'

const Header = () => {

  const {
    state: { cart },
    dispatch,
    productDispatch
  } = CartState()

  return (
    <Navbar variant='dark' style={{ height: 80, backgroundColor: '#444' }} sticky="top">
      <Container>
        <Navbar.Brand>
          <GiDividedSpiral style={{ fontSize: 35 }} />
          <Link to='/'> Comercio</Link>
        </Navbar.Brand>
        <Navbar.Text className='search'>
          <FormControl
            style={{ width: 500 }}
            placeholder='Buscar...'
            className='m-auto'
            onChange={(e) => {
              productDispatch({
                type: 'FILTER_BY_SEARCH',
                payload: e.target.value
              })
            }}
          />
        </Navbar.Text>
        <Nav>
          <Dropdown align={{ sm: "right" }}>
            <Dropdown.Toggle >
              <HiOutlineShoppingCart fontSize='25px' />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle >
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
          </Dropdown >
        </Nav >
      </Container >
    </Navbar >
  )
}

export default Header

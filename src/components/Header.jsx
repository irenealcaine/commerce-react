import React from 'react'
import { Badge, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Header = () => {
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
          <Dropdown
            alignRight
          >
            <Dropdown.Toggle variante='success'>
              <HiOutlineShoppingCart fontSize='25px' />
              <Badge>{4}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370 }}>
              <span style={{ padding: 10 }}>Carro vacío</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header

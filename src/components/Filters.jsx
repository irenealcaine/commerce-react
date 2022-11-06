import React from 'react'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Rating from './Rating'

const Filters = () => {

  const [rate, setRate] = useState(3)

  return (
    <div className='filters'>
      <span className='title'>Filtrar productos</span>
      <span>
        <Form.Check
          inline
          label='Precio ascendente'
          name='group1'
          type='radio'
          id={`inline-1`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label='Precio descendente'
          name='group1'
          type='radio'
          id={`inline-2`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label='Incluir fuera de stock'
          name='group1'
          type='checkbox'
          id={`inline-3`}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>
          Puntuación:
        </label>
        <Rating rating={rate} onClick={(i) => setRate(i + 1)} style={{ cursor: 'pointer' }} />
      </span>
      <Button variant='light'>Borrar filtros</Button>
    </div>
  )
}

export default Filters

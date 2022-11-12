import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { CartState } from '../context/Context'
import Rating from './Rating'

const Filters = () => {

  const { productState: { byStock, sort, byRating, byCategory }, productDispatch } = CartState();
  console.log(byStock, sort, byRating, byCategory)


  return (
    <div className='filters'>
      <span className='title'>Ordenar</span>
      <span>
        <Form.Check
          inline
          label='Precio'
          name='group1'
          type='radio'
          id={`inline-1`}
          onChange={() =>
            productDispatch({
              type: 'SORT_BY_PRICE',
              payload: 'lowToHigh'
            })}
          checked={sort === 'lowToHigh' ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label='Popularidad'
          name='group1'
          type='radio'
          id={`inline-2`}
          onChange={() =>
            productDispatch({
              type: 'SORT_BY_PRICE',
              payload: 'popularToUnpopular'
            })}
          checked={sort === 'popularToUnpopular' ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label='Valoración'
          name='group1'
          type='radio'
          id={`inline-3`}
          onChange={() =>
            productDispatch({
              type: 'SORT_BY_PRICE',
              payload: 'goodToBad'
            })}
          checked={sort === 'goodToBad' ? true : false}
        />
      </span>
      <hr />
      <span className='title'>Filtrar</span>
      <span>
        <Form.Check
          inline
          label='Ocultar fuera de stock'
          name='group1'
          type='checkbox'
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: 'FILTER_BY_STOCK'
            })}
          checked={byStock}
        />
      </span>
      <span>
        {/* <label style={{ paddingRight: 10 }}>
          Puntuación:
        </label> */}
        <Rating rating={byRating} onClick={(i) =>
          productDispatch({
            type: 'FILTER_BY_RATING',
            payload: i + 1
          })
        } style={{ cursor: 'pointer' }} />
      </span>
      <span>
        <Form.Select size="sm" style={{ backgroundColor: '#252850', color: 'white', width: '100%' }}
          onChange={(e) =>
            productDispatch({
              type: 'FILTER_BY_CATEGORY',
              payload: e.target.value
            })}
        >
          <option value=''>Categoría</option>
          <option value="Ropa" >Ropa</option>
          <option value="Electrónica">Electrónica</option>
          <option value="Libros">Libros</option>
          <option value="Jardinería">Jardinería</option>
          <option value="Otros">Otros</option>
        </Form.Select>
      </span>
      <hr />
      <Button
        variant='light'
        onClick={() =>
          productDispatch({
            type: 'CLEAR_FILTERS'
          })}
      >Borrar filtros</Button>
    </div>
  )
}

export default Filters

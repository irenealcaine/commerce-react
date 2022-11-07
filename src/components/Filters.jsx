import React from 'react'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { CartState } from '../context/Context'
import Rating from './Rating'

const Filters = () => {

  const { productState: { byStock, sort, byRating }, productDispatch } = CartState();
  // console.log(byStock, sort, byRating)


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
          label='Precio descendente'
          name='group1'
          type='radio'
          id={`inline-2`}
          onChange={() =>
            productDispatch({
              type: 'SORT_BY_PRICE',
              payload: 'highToLow'
            })}
          checked={sort === 'highToLow' ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label='Incluir fuera de stock'
          name='group1'
          type='checkbox'
          id={`inline-3`}
          onChange={() =>
            productDispatch({
              type: 'FILTER_BY_STOCK'
            })}
          checked={byStock}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>
          Puntuación:
        </label>
        <Rating rating={byRating} onClick={(i) =>
          productDispatch({
            type: 'FILTER_BY_RATING',
            payload: i + 1
          })
        } style={{ cursor: 'pointer' }} />
      </span>
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

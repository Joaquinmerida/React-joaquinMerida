import React, { useContext } from 'react'
import { contexto } from '../../context/CartContext'

const CartWidget = () => {

const {carrito, total} = useContext(contexto)

  return (
    <div> <span className="material-icons">shopping_cart</span> ({carrito.length})</div>
  )
}

export default CartWidget
import React, { useContext } from 'react'
import { contexto } from '../../context/CartContext'

const CartWidget = () => {

const {carrito} = useContext(contexto)

if( carrito.length == 0){
  return(<div></div>)
}else{
  return (
    <div> <span className="material-icons">shopping_cart</span> ({carrito.length})</div>
  )
}
}

export default CartWidget
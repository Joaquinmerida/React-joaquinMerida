import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {

  return (
    <Link to={`/producto/${props.producto.id}`} className="producto">
        <h2>{props.producto.nombre}</h2>
        <img alt="imagen de producto" src={props.producto.imagen}/>
        <p>${props.producto.precio}</p>
    </Link>
  )
}

export default Item
import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {

  return (
    <div className="producto">
        <h2>{props.producto.nombre}</h2>
        <img alt="imagen de producto" src={props.producto.imagen}/>
        <p>${props.producto.precio}</p>
        <Link className="producto__link" to={`/producto/${props.producto.id}`}>Ver más</Link>
    </div>
  )
}

export default Item
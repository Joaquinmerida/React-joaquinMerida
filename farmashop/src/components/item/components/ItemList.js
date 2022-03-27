import React from 'react'
import Item from './Item'

const ItemList = (props) => {

  return (
    <div className="productos">
        {props.productos.map((producto) => {
            return <Item key={producto.id} producto={producto} />
        })}
    </div>
  )
}

export default ItemList
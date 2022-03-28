import React from 'react'
import { Link } from 'react-router-dom'
import ItemCounter from './ItemCounter'
import { useContext } from 'react'
import { contexto } from '../../../context/CartContext'

const ItemDetail = (props) => {

    const{carrito, total, borrarProducto } = useContext(contexto)



    const onAdd = (cantidad) => {
        let newItem = {}
        newItem['item'] = props.item[0]
        newItem['cantidad'] = cantidad
        newItem['id'] = props.item[0].id
        carrito.push(newItem)
        console.log(newItem)

    }

  console.log(carrito)
    console.log(props.item[0])

  return (
    <div>
        <div>
        <img src={props.item[0].imagen} alt="imagen de producto" />
        <h2>{props.item[0].nombre}</h2>
        <p>${props.item[0].precio}</p>
        </div>
        <div>
        <p>Descripcion del objeto</p>
        <ItemCounter inicial={1} onAdd={onAdd} />
        </div>
    </div>
  )
}

export default ItemDetail
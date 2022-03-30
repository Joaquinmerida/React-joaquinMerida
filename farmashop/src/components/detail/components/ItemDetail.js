import React from 'react'
import { Link } from 'react-router-dom'
import ItemCounter from './ItemCounter'
import { useContext, useState } from 'react'
import { contexto } from '../../../context/CartContext'

const ItemDetail = (props) => {

    const{carrito, addItem } = useContext(contexto)

    const [seleccionado,setSeleccionado] = useState(false)


    const onAdd = (cantidadSeleccionada) => {
    setSeleccionado(cantidadSeleccionada)
    addItem(props.item[0] ,cantidadSeleccionada)
  }


  return (
    <div className="detail">
        <div className="detail__imagen">
        <img src={props.item[0].imagen} alt="imagen de producto" />
        </div>
        <div className="detail__text">
        <h2>{props.item[0].nombre}</h2>
        <h3>${props.item[0].precio}</h3>
        <p>Descripcion del objeto</p>
        <ItemCounter inicial={1} onAdd={onAdd} />
        </div>
    </div>
  )
}

export default ItemDetail
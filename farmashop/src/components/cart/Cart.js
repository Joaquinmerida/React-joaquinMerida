import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from '../../context/CartContext'

const Cart = () => {


    const{carrito} = useContext(contexto)

    const[cantidad, setCantidad] = useState(carrito[0].cantidad)

    const handleClick = () => {
        setCantidad(cantidad - 1)
    }

    const handleClear = () => {
        setCantidad(cantidad * 0)
    }


    const agregarItem = () => {
        if(carrito[0].item.stock > cantidad){
        setCantidad(cantidad + 1)
        }
        
    }





    if(cantidad > 0){
        return(
                <div>
            <h2>Carrito</h2>
            {carrito.map(producto => (
                <div key={carrito[0].item.id}>
                    <img alt="imagen de producto" src={carrito[0].item.imagen}/>
                    <p>{carrito[0].item.nombre}</p>
                    <p>{cantidad}</p>
                    <h3>Total : ${cantidad * carrito[0].item.precio}</h3>
                    <button onClick={agregarItem}>Agregar un elemento</button>
                    <button onClick={handleClick}>Borrar del carrito</button>
                    <button onClick={handleClear}>Borrar todos los elementos</button>
                </div>
            ))}
        </div>)
    }

    return (
        <div>
        <h2>No hay ningún elemento seleccionado</h2>
        <Link to="/">Vovler a la tienda</Link>
        </div>
  )
}

export default Cart
import React, { useContext, useState } from 'react'
import { contexto } from '../../context/CartContext'

const Cart = () => {

    const{carrito} = useContext(contexto)

    const[cantidad, setCantidad] = useState(carrito[0].cantidad)

    const handleClick = () => {
        if(cantidad > 0)
        setCantidad(cantidad - 1)
        console.log(cantidad)
    }

    const handleClear = () => {
        setCantidad(cantidad * 0)
    }
    
    const agregarItem = () => {
        if (cantidad < carrito[0].item.stock){
        setCantidad(cantidad + 1)}
    }

    console.log(cantidad)

        return(
            <div>
                <h2>Carrito</h2>
                {carrito.map(producto => (
                    <div key={producto.item.id}>
                        <img alt="imagen de producto" src={producto.item.imagen}/>
                        <h3>{producto.item.nombre}</h3>
                        <p>Cantidad: {cantidad}</p>
                        <h3>Total parcial: ${cantidad * producto.item.precio}</h3>
                        <button onClick={agregarItem}>Agregar un elemento</button>
                        <button onClick={handleClick}>Borrar del carrito</button>
                        <button onClick={handleClear}>Borrar todos los elementos</button>
                    </div>
                ))}
            </div>)




}

export default Cart
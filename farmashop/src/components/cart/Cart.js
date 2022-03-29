import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from '../../context/CartContext'

const Cart = () => {

    const{carrito , total , limpiarCarrito, handleClear} = useContext(contexto)



    if (carrito.length === 0) {     
        return(
            <div>
                    <h1>No hay productos seleccionados</h1>
                    <Link to="/">Volver a la tienda</Link>
                </div>
            )
        }else {
        return(
            <div>
                <h2>Carrito</h2>
                {carrito.map(producto => (
                    <div key={producto.id}>
                        <img alt="imagen de producto" src={producto.imagen}/>
                        <h3>{producto.nombre}</h3>
                        <p>Cantidad: {producto.nuevaCantidad}</p>
                        <h3>Total parcial: {producto.precio * producto.nuevaCantidad}</h3>
                        <button onClick={handleClear} >Borrar elemento</button>
                    </div>
                ))}
                <div>
                <h2>Total a pagar: ${total}</h2>
                <button onClick={limpiarCarrito}>Limpiar carrito</button>
                </div>
            </div>
        )
    }
}


export default Cart
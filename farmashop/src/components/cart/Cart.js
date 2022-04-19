import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from '../../context/CartContext'
import { useNavigate } from 'react-router'

const Cart = () => {

    const { carrito, total, limpiarCarrito, handleClear } = useContext(contexto)

    const navigate = useNavigate()

    if (carrito.length === 0) {
        return (
            <div className="carga">
                <h2>No hay items seleccionados</h2>
                <Link to="/">Volver a la tienda <br /></Link>
            </div>
        )
    } else {
        return (
            <div className="carrito">
                <h2>Carrito</h2>
                {carrito.map(producto => (
                    <div className="producto__carrito" key={producto.id}>
                        <img alt="imagen de producto" src={producto.imagen} />
                        <div className="carrito__texto">
                            <h3>{producto.nombre}</h3>
                            <p>Cantidad: {producto.nuevaCantidad}</p>
                            <h3>Total parcial: {producto.precio * producto.nuevaCantidad}</h3>
                        </div>
                        <button onClick={() => handleClear(producto.id)} >Borrar elemento</button>
                    </div>
                ))}
                <div className="carrito__total">
                    <h2>Total a pagar: ${total}</h2>
                    <button onClick={limpiarCarrito}>Limpiar carrito</button>
                    <button onClick={() => navigate("/")}>Seguir comprando</button>
                    <button onClick={() => navigate("/menu/checkout")}>Terminar compra</button>
                </div>
            </div>
        )
    }
}


export default Cart
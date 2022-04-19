import React from 'react'
import { useState, useContext } from 'react'
import { contexto } from '../../context/CartContext'
import { serverTimestamp, addDoc, collection } from '@firebase/firestore'
import { db } from '../../firebase'
import { toast } from 'react-toastify'

const Checkout = () => {

    const { carrito, total } = useContext(contexto)
    
        const [nombre, setNombre] = useState("")
        const [direccion, setDireccion] = useState("")
        const [pago, setPago] = useState("")



    const terminarCompra = (event) => {
        event.preventDefault()
        const compra = {
            comprador: {
                nombre: nombre,
                direccion: direccion,
            },
            items: carrito,
            date: serverTimestamp(),
            total: total,
            pago: pago
        }

        const ordenesCollection = collection(db, "Ordenes")
        const pedido = addDoc(ordenesCollection, compra)
        toast.success('Compra realizada con exito!',{
            position: "bottom-right",
            autoClose: 1500,
            progress:false});
        

        console.log(pedido)

    }

    const handleChange = (event) => {
        setPago(event.target.value)
    }


    return (
        <div className="checkout">
            <h2>Informacion de facturación</h2>
            <form onSubmit={terminarCompra}>
                <label>Nombre:
                    <input
                        type="text" value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </label><br/>
                <label>Direccion:
                    <input type="text" value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                    />
                </label><br/>
                <select value={pago} onChange={handleChange}>
                    <option value="credito">Credito</option>
                    <option value="debito">Debito</option>
                </select><br/>
                <input type="submit" className="button"/>
            </form>
        </div>
    )
}

export default Checkout
import React from 'react'
import { useState, useContext } from 'react'
import { contexto } from '../../context/CartContext'
import { serverTimestamp, addDoc, collection } from '@firebase/firestore'
import { db } from '../../firebase'
import { toast } from 'react-toastify'

const Checkout = () => {

    const { carrito, total } = useContext(contexto)
    
        const [nombre, setNombre] = useState("")
        const [email, setEmail] = useState("")
        const [telefono, setTelefono] = useState("")
        const [direccion, setDireccion] = useState("")
        const [pago, setPago] = useState("")



    const terminarCompra = (event) => {
        event.preventDefault()
        const compra = {
            comprador: {
                nombre: nombre,
                direccion: direccion,
                telefono: telefono,
                email: email
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
                <label>Telefono:
                    <input type="text" value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                    />
                </label><br/>
                <label>Email:
                    <input type="text" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label><br/>
                <input type="submit" className="button"/>
            </form>
        </div>
    )
}

export default Checkout
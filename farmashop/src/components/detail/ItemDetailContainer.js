import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { db } from '../../firebase'
import { collection, getDocs } from '@firebase/firestore'
import ItemDetail from './components/ItemDetail'



const ItemDetailContainer = () => {

const [loading, setLoading] = useState (true)
const [productos, setProductos] = useState([])

let { id } = useParams();

useEffect(() => {
    
    const productosCollection = collection(db, "Stock")
    const consult = getDocs(productosCollection) 
    
    consult
    .then((resultado) => {
        const array_de_resultados = resultado.docs.map((doc) => {
            return doc.data()
        })
    
        setProductos(array_de_resultados)
        setLoading(false)
    
        })
    .catch(() => {
        console.log("Error de carga de productos")
    })
},[])

if(loading){
    return <h2>cargando</h2>

}else {
    return(
        <ItemDetail item={productos.filter(item => item.id == id)}/>
    )
}
}

export default ItemDetailContainer
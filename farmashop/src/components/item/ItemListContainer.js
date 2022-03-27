import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { db } from "../../firebase"
import { collection, getDocs } from "firebase/firestore"
import ItemList from './components/ItemList'


const ItemListContainer = () => {

    
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const { idCategoria } = useParams()

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
}, [idCategoria])


if(loading) {
    return <h2>Cargando productos</h2>
} else {
    return <ItemList productos={productos} />
}


}

export default ItemListContainer
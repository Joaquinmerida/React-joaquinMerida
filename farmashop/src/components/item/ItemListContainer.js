import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { db } from "../../firebase"
import { collection, getDocs, where ,query } from "firebase/firestore"
import ItemList from './components/ItemList'
import { CircularProgress } from 'react-cssfx-loading/lib'
import NavBar from '../header/NavBar'



const ItemListContainer = () => {

    
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const { idCategoria } = useParams()

    useEffect(() => {
    
        if (!idCategoria) {
            const productosCollection = collection(db, "Stock")
            const consult = getDocs(productosCollection) 
            
            consult
                .then(res => setProductos(res.docs.map(doc => doc.data())))
                .catch(() => alert("errrorrrr"))
                .finally(() => setLoading(false))
            }else{
                console.log(idCategoria)

                const productosCollection = collection(db, "Stock")
                const filter = query(productosCollection,where("categoria", "==", idCategoria))
                const consult = getDocs(filter)

                
                consult
                    .then(res=> setProductos(res.docs.map(doc=>doc.data())))
                    .catch((error) => { console.log("error")})
                    .finally(() => setLoading(false))
            }
}, [idCategoria])

if(loading) {
    return(
    <div className="carga">
        <h2>Cargando productos</h2>
        <CircularProgress color="#e4aeff" width="150px" height="150px"/>
    </div>)
} else {
    return( <>
    <NavBar />
    <ItemList productos={productos} />
    </>
    )
}
}

export default ItemListContainer
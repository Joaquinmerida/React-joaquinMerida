import React from 'react'
import { Link } from 'react-router-dom'


const Animation = () => {
    return (<>
    <div className="landing__animate">
        <h1>Bienvenido a Farmashop</h1>
    </div>
    <div className="landing__link">
        <h2>Contamos con lo ultimo en cosmeticos y perfumeria para ofrecerte</h2>
        <p>Productos de primera calidad a pecios accesibles</p>
        <Link to="/">Visitar la tienda</Link>
    </div>
    </>
  ) 
}

export default Animation
import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Header = () => {

  return (
    <div className="header">
      <Link to="/">
        <img alt="logo" src="https://i.postimg.cc/VLPCypvz/kisspng-sacred-lotus-symbol-computer-icons-vector-graphics-studio-share-pueblo-5bab99fdb675c5-947626.png" className="logo"/>
      </Link>
      <div className="header__nav">
        <Link to="/">Tienda</Link>
        <Link to="/menu/cart"><CartWidget /></Link>
        <p>Categorias</p>
        <p>Categorias</p>
      </div>
    </div>
  )
}

export default Header
import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Header = () => {

  return (
    <div className="header">
      <Link to="/landing">
        <img alt="logo" src="https://i.postimg.cc/VLPCypvz/kisspng-sacred-lotus-symbol-computer-icons-vector-graphics-studio-share-pueblo-5bab99fdb675c5-947626.png" className="logo"/>
      </Link>
      <div className="header__nav">
        <Link to="/">Tienda</Link>
        <Link to="/cart"><CartWidget /></Link>
      </div>
    </div>
  )
}

export default Header
import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Header = () => {

  return (
    <>
    <div>LOGO</div>
    <div className="navbar">
        <Link to="/">Tienda</Link>
        <Link to="/menu/cart"><CartWidget /></Link>
        </div>
    </>
  )
}

export default Header
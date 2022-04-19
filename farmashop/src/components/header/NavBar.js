import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
        <ul className="navBar">
            <li><Link to="/categoria/cremas">Cremas</Link></li>
            <li><Link to="/categoria/perfumes">Perfumes</Link></li>
            <li><Link to="/categoria/antialergicos">Antialergicos</Link></li>
            <li><Link to="/categoria/analgesicos">Analgesicos</Link></li>
            <li><Link to="/categoria/anticonceptivos">Anticonceptivos</Link></li>
        </ul>
  )
}

export default NavBar
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
        <Link to="/categoria/cremas">Cremas</Link>
        <Link to="/categoria/perfumes">Perfumes</Link>
        <Link to="/categoria/antialergicos">Antialergicos</Link>
        <Link to="/categoria/analgesicos">Analgesicos</Link>
        <Link to="/categoria/anticonceptivos">Anticonceptivos</Link>
    </div>
  )
}

export default Footer
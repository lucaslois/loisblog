import React from "react"
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-item'><span className="navbar-link">Inicio</span></div>
      <div className='navbar-item'><span className="navbar-link">Sobre mi</span></div>
      <div className='navbar-item'><span className="navbar-link">Libros</span></div>
    </div>
  )
}

export default Navbar
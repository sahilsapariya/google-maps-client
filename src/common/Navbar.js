import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <NavLink to={'/'}>Dashboard</NavLink>
        <NavLink to={'/nodes'}>Node</NavLink>
        <NavLink to={'/edges'}>Edge</NavLink>
        <NavLink to={'/login'}>Login</NavLink>
        <NavLink to={'/register'}>Register</NavLink>
    </div>
  )
}

export default Navbar
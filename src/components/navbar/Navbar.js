import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navContainer'>
        <Link to={'/'}>
            <span className='logo'>lamabooking</span>
            </Link>
            <div className='navItem'>
                <button className='navButton'>Register</button>
                <button className='navButton'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
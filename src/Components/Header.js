import React from 'react'
import hamburgerIcon from "../assets/icons_assets/🦆 icon _hamburger menu_.svg"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <header>
        <object width={20} height={20} aria-label='hamburger_icon' data={hamburgerIcon} type="image/svg+xml"></object>
        <img src={require('../assets/logos/Asset 16@4x.png')} width={200} alt='little-lemon logo' />
        <nav>
          <ul>

            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/'>Menu</Link></li>
            <li><Link to='/'>Reservations</Link></li>
            <li><Link to='/'>Order&nbsp;online</Link></li>
            <li><Link to='/'>Login</Link></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header








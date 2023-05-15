import React from 'react'

function Header() {
  return (
    <>
    <header>
        <img src={require('../assets/logos/Asset 16@4x.png')} width={200} alt='little-lemon logo' />
        <nav>
          <ul>

            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#menu'>Menu</a></li>
            <li><a href='#reservation'>Reservations</a></li>
            <li><a href='#order-online'>Order online</a></li>
            <li><a href='#login'>Login</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
// import { useState } from "react"
import React, { useEffect, useState } from 'react'
import hamburgerIcon from "../assets/icons_assets/🦆 icon _hamburger menu_.svg"
import { Link } from 'react-router-dom'
function Header() {

  var path = window.location.pathname

  const [pathRef, setPathRef] = useState(path)

  var styl

  if(path!=='/'){
  styl=
      {gridTemplateColumns: '1fr 1fr 1fr'}
    
  }else{
    styl=
      {gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr'}
  }


  const [NavLinks, setNavLinks] = useState(['About', 'Menu', 'Testimonials'])

  useEffect(() => {

    setPathRef(path)

   const links = (path === '/') ? ['About', 'Menu', 'Testimonials'] : []
   setNavLinks(links)
  
  }, [NavLinks, path])





  const renderNavLinks = (links) => {

    const linkHandler = () => {

      const scroolToId = `${links.toLowerCase()}-section`

      document.getElementById(scroolToId).scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
    }

    return (
      <li key={links}><a href onClick={() => { linkHandler(links) }} aria-label='on Click'>{links}</a></li>
    )

  }

  return (
    <>
      <header>
        <object width={20} height={20} aria-label='hamburger_icon' data={hamburgerIcon} type="image/svg+xml"></object>
        <img src={require('../assets/logos/Asset 16@4x.png')} width={200} alt='little-lemon logo' />
        <nav>
          
          <ul style={styl}>
            <li><Link to="/">Home</Link></li>
            {NavLinks.map(li => renderNavLinks(li))}
            <li><Link to="/reservations">Reservations</Link> </li>
            <li><Link to='/login'>Login</Link></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;








// import { useState } from "react"
import React from 'react'
import hamburgerIcon from "../assets/icons_assets/🦆 icon _hamburger menu_.svg"
function Header() {

  const NavLinks = ['Home', 'About', 'Menu', 'Reservations', 'Testimonials']


  const renderNavLinks = (links) =>{

    const linkHandler=()=>{

      const scroolToId = `${links.toLowerCase()}-section`

      document.getElementById(scroolToId).scrollIntoView({behavior: "smooth", block:"center", inline:"nearest" })
    }

    return(
      <li key={links }><a onClick={()=>{linkHandler(links)}} aria-label='on Click'>{links}</a></li>
    )

  }
  
  // const [y, setY] = useState(window.scrollY);
  // const [transformHeader, setTransformHeader] = useState("");

  // useEffect(() => {
  //   const handleScroll = () => {

  //     const currY = window.scrollY
  //     if (currY > y) {
  //       setTransformHeader("translateY(-200px)");
  //     } else if (currY < y) {
  //       setTransformHeader("translateY(0)")
  //     }
  //     setY(currY);

  //   }
  //   window.addEventListener("scroll", handleScroll);
  //   return () => { window.removeEventListener("scroll", handleScroll) }
  // }, [y]);
  
  // const handleClick = (anchor) => () => {
    //   const id = `${anchor}-section`;
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   }
  // };

    //  document.getElementById(className).scrollIntoView({
    //   behavior: "smooth",
    //   block: "start"
    // })

  // }
    // if(element){
    //   element.scrollIntoView({
    //     behavior: "smooth",
    //     block: "start"
    //   })
    // }

  return (
    <>
      <header>
        <object width={20} height={20} aria-label='hamburger_icon' data={hamburgerIcon} type="image/svg+xml"></object>
        <img src={require('../assets/logos/Asset 16@4x.png')} width={200} alt='little-lemon logo' />
        <nav>
          <ul>
            {NavLinks.map(li => renderNavLinks(li))}
            <li><a href='#login' onClick={('login')}>Login</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;








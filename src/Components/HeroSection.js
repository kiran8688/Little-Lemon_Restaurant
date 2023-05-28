import React from 'react'
import { Link } from 'react-router-dom'
// import ReserveTable from './ReserveTable'

function HeroSection() {

  const buttonHandler = () =>{
    
  }

  return (
    <>
    <section className='hero-section'>
          <article>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>We are family Owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Link type="submit" role='button' to={'/reservations'}>Reserve a Table</Link>
          </article>
          <img src={require("../assets/icons_assets/restauranfood.jpg")} alt="restaurant food" />
        </section>
    </>
  )
}

export default HeroSection
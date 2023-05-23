import React from 'react'
import ReserveTable from './ReserveTable'

function HeroSection() {
  return (
    <>
    <section className='hero-section'>
          <article>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>We are family Owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button type="submit" onClick={<ReserveTable/>}>Reserve a Table</button>
          </article>
          <img src={require("../assets/icons_assets/restauranfood.jpg")} alt="restaurant food" />
        </section>
    </>
  )
}

export default HeroSection
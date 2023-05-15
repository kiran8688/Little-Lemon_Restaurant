import React from 'react'

function HeroSection() {
  return (
    <>
    <section className='hero-section'>
          <article>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid minima reiciendis porro aut corrupti! Quibusdam sint, iure dignissimos blanditiis unde ex doloremque possimus quae, facilis deserunt aperiam in magnam placeat!</p>
            <button type="submit">Reserve a Table</button>
          </article>
          <img src={require("../assets/icons_assets/restauranfood.jpg")} width={200} alt="restaurant food" />
        </section>
    </>
  )
}

export default HeroSection
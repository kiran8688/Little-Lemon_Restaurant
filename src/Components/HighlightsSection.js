import React from 'react'
import Card from './Card'

function HighlightsSection() {
  return (
    <>
      <section id='menu-section' className='highlights-section'>
        <h2>This week's specials!</h2>
        <button type="submit" disabled>Online Menu</button>
        <article>
          <Card imgsrc={require("../assets/icons_assets/greek salad.jpg")} title='Greek salad' price={12.99} description= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sed minus reprehenderit earum quam maiores quos qui beatae voluptatibus autem, vitae minima, blanditiis et aperiam'/>
          <Card imgsrc={require("../assets/icons_assets/bruchetta.svg")}  title='Bruchetta' price={5.99} description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolore commodi perferendis odio similique dolorem vitae molestias autem amet doloru'/>
          <Card imgsrc={require("../assets/icons_assets/lemon dessert.jpg")} title='Lemon dessert' price={10.99} description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eum sunt aut iure natus, voluptatibus magni tempore, nobis tenetur' />
        </article>
      </section>
    </>
  )
}

export default HighlightsSection
import React from 'react'

function HighlightsSection() {
  return (
    <>
    <section className='highlights-section'>
          <h2>This week's specials!</h2>
          <button type="submit">Online Menu</button>
          <article>
            <article className='article-card'>
              <img src={require("../assets/icons_assets/greek salad.jpg")} width={270} alt="" />
              <div>
              <h4>Greek salad</h4>
              <h4>$12.99</h4>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde earum officia sed doloremque in et porro mollitia atque, reprehenderit, repellat, repellendus illum libero aliquam quam ab dicta velit minima aut!
              </p>
            </article>
          </article>
        </section>
    </>
  )
}

export default HighlightsSection
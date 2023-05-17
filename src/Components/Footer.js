import React from 'react'

function Footer() {
    return (
        <>
            <section className='footer-section'>
                <article><div>

                    <article>
                        <object height={250} width={150} aria-label='logo' data={require("../assets/logos/Asset 20@4x.png")} type="image/png"></object>
                    </article>
                    <article id='doormat'>
                        <h4>Doormat Navigation</h4>
                        <ul>
                            <li><a href='#home'>Home</a></li>
                            <li><a href='#about'>About</a></li>
                            <li><a href='#menu'>Menu</a></li>
                            <li><a href='#reservation'>Reservation</a></li>
                            <li><a href='#order-online'>Order online</a></li>
                            <li><a href='#login'>Login</a></li>
                        </ul>
                    </article>
                    <article id='social'>
                        <h4>Social Media Links</h4>
                        <ul>
                            <li><a href='#youtube'>Youtube</a></li>
                            <li><a href='#instagram'>Instagram</a></li>
                            <li><a href='#facebook'>Facebook</a></li>
                            <li><a href='#twitter'>Twitter</a></li>
                        </ul>
                    </article>
                    <article id='contact'>
                        <h4>Contact</h4>
                        <ul>
                            <li><a href='#address'>Address</a></li>
                            <li><a href='#phone-number'>Phone number</a></li>
                            <li><a href='#email'>Email</a></li>
                        </ul>
                    </article>
                </div>
                </article>
            </section>
        </>
    )
}

export default Footer
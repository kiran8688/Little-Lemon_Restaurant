import React from 'react'
import { Link } from 'react-router-dom'
import verified from '../assets/icons_assets/Filled.svg'

function ConfirmationPage(props) {
  return (
    <section className='confirmation-section'>
      
      <article>
        <h1>Your&nbsp;Table&nbsp;Reservation&nbsp;is&nbsp;Confirmed!!!</h1>
      </article>
      <article>

        <h3>Modern Family Restaurant</h3>
        <div>
          <h4>Name  <span>Kiran Kumar <img width={15} src={verified} alt="verified" title='verified' /> </span> </h4>
          <h4>Phone Number <span>+123456789 <img width={15} src={verified} alt="verified" title='verified' /> </span> </h4>
          <h4>E-mail <span>example@email.com <img width={15} src={verified} alt="verified" title='verified' /> </span> </h4>
          <h4>Special Request <span>provide a wheel chair</span> </h4>
        </div>
        <div>
          <h4>DATE: <span>16  / May  /  2023</span></h4>
          <h4>TIME: <span>20 : 30 PM</span></h4>
          <h4>GUESTS: <span>6 Members</span></h4>
          <h4>OCCASION: <span>Birthday</span></h4>
          <h4>SEATING: <span>Outside</span></h4>
        </div>

        <Link to={'/'}>Back To Home</Link>

      </article>
    </section>
  )
}

export default ConfirmationPage
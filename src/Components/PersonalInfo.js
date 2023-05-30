import React from 'react'
import { Link } from 'react-router-dom'
import homeIcon from '../assets/icons_assets/home icon.svg'

function PersonalInfo() {
  return (
    <section className='personal-section'>
        <Link to={'/'}>
        <img  aria-label="home_icon" src={homeIcon} alt="home-icon" style={{backgroundColor: '#f4ce14',height:'inherit', width:'inherit', borderRadius: 'inherit'}} />
        </Link>

        <article>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <form onClick={(e)=>{e.preventDefault()}}>

            <fieldset>
                <legend align='center' >Personal Information</legend>

                <div id="input">
                    <label htmlFor="firstname">First Name :</label>
                    <input type="text" autoComplete='off' title='Enter your Name' name="firstname" id="firstname" placeholder=' Enter First Name'/>
                </div>
                <div id="input">
                    <label htmlFor="lastname">Last Name :</label>
                    <input type="text" autoComplete='off' title='Enter your Name' name="lastname" id="lastname" placeholder='Enter Last Name' />
                </div>
                <div id="input">
                    <label htmlFor="phonenumber">Phone Number :</label>
                    <input type="tel" autoComplete='off' title='Enter your Number' name="phonenumber"  id="phonenumber" placeholder='example 123-456-7890' />
                </div>
                <div id="input">
                    <label htmlFor="email">Email :</label>
                    <input type="email" autoComplete='off' title='Enter your Email' name="email" id="email" placeholder='Example@email.com' />
                </div>
                <div id="input">
                    <label htmlFor="password">Password :</label>
                    <input type="password" autoComplete='off' title='Enter your password' name="password" id="password" placeholder='Enter Password'  />
                </div>
                <div id="input">
                    <label htmlFor="">Add a special request (optional) :</label>
                    <textarea name="" id=""  cols="30" rows="10" placeholder='example, need a scenic view behind the table' ></textarea>
                </div>
            </fieldset>
            <Link type='button' to={'confirmation'}>Book</Link>
            </form>
        </article>
    </section>
  )
}

export default PersonalInfo
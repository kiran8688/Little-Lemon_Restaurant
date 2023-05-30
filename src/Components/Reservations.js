import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';

import 'react-datepicker/dist/react-datepicker.css';
import homeIcon from '../assets/icons_assets/home icon.svg'

function ReserveTable() {

  const [date, setDate] = useState(null)

  const radioHandler = (checkedval) => {
    (checkedval === 'standard') ? document.getElementById('standard').checked = true : (document.getElementById('standard').checked = false);
    (checkedval === 'outside') ? document.getElementById('outside').checked = true : document.getElementById('outside').checked = false;

  }

  // console.dir(document.getElementById('date'))


  return (
    <>
      <section className='reservation-section'>
        <Link to={'/'}>

      <img  aria-label="home_icon" src={homeIcon} alt="home-icon" style={{backgroundColor: '#f4ce14',height:'inherit', width:'inherit', borderRadius: 'inherit'}} />
        </Link>
        <article>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <form onClick={(e) => { e.preventDefault(); }} >
              Find a Table for any occasion
            <fieldset>
              <legend align="center">Table Reservation Information </legend>


              <div id='input'>
                <label htmlFor='date' id='date' className='input-label'>
                  Date
                </label>
                <ReactDatePicker
                  selected={date}
                  onChange={date => setDate(date)}
                  minDate={new Date()}
                  placeholderText='dd   /   mm   /   yyyy'
                  dateFormat={'dd   /   MMMM   /   yyyy'}
                  disabledKeyboardNavigation
                  id='react-datepicker' />
              </div>

              <div id='input'>

                <label htmlFor='time' className='input-label'>
                  Time
                </label>

                <select defaultValue={'07:00 PM'} id='timmings'>
                  <option value="05:00 PM">05 : 00  PM</option>
                  <option value="06:00 PM">06 : 00  PM</option>
                  <option value="07:00 PM">07 : 00  PM</option>
                  <option value="08:00 PM">08 : 00  PM</option>
                  <option value="09:00 PM">09 : 00  PM</option>
                  <option value="10:00 PM">10 : 00  PM</option>
                  <option value="11:00 PM">11 : 00  PM</option>
                </select>
              </div>

              <div id='input'>

                <label htmlFor='number' className='input-label'>
                  Number of Diners
                </label>
                <select defaultValue={4} autoComplete="off" name='diners' id='diners' placeholder='' >
                  <option value="1">1 member</option>
                  <option value="2">2 members</option>
                  <option value="3">3 members</option>
                  <option value="4">4 members</option>
                  <option value="5">5 members</option>
                  <option value="6">6 members</option>
                  <option value="7">7 members</option>
                  <option value="8">8 members</option>
                  <option value="9">9 members</option>
                  <option value="10">10 members</option>
                </select>
              </div>

              <div id='input'>

                <label htmlFor='text' className='input-label'>
                  Occasion
                </label>

                <select defaultValue={'Casual'} id='occasions'>
                  <option value="Birthday">Birthday</option>
                  <option value="Engagement">Engagement</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Date">Date</option>
                  <option value="Casual">Casual</option>
                </select>
              </div>


              <fieldset>
                <legend>Select dining options</legend>

                <div onClick={() => radioHandler('standard')}>
                  <label htmlFor="standard"  >
                    Standard
                  </label>
                  <input type="radio" name="dining-options" onClick={() => radioHandler('standard')} id="standard" value="standard" />
                </div>
                <div onClick={() => radioHandler('outside')}>
                  <label htmlFor="outside" >
                    Outside
                  </label>
                  <input type="radio" name="dining-options" onClick={() => radioHandler('outside')} id="outside" value="outside" />
                </div>
              </fieldset>

            </fieldset>
            <Link type='submit' to={'personal-information'} >Enter Personal Details</Link>
          </form>
        </article>
      </section>
    </>
  )
}

export default ReserveTable
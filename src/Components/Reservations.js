import React from 'react'
import { Link } from 'react-router-dom';
// import homeIcon from '../assets/icons_assets/home icon.svg'

function ReserveTable() {

  const radioHandler = (checkedval) => {
    (checkedval === 'standard') ? document.getElementById('standard').checked = true : (document.getElementById('standard').checked = false);
    (checkedval === 'outside') ? document.getElementById('outside').checked = true : document.getElementById('outside').checked = false;

  }

  // console.dir(document.getElementById('date'))


  return (
    <>
      <section className='reservation-section'>
        {/* <object width={50} height={50} data={homeIcon} aria-label='home_icon' type="image/svg+xml"></object> */}
        <article>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <form onClick={(e) => { e.preventDefault(); }}>
            <fieldset>
              <legend align="center">Table reservation Information </legend>

              <div id='input'>
                <label htmlFor='date' className='input-label'>
                  Date
                </label>
                <input type='date' name='date' id='date' required ></input>
              </div>

              <div id='input'>

                <label htmlFor='time' className='input-label'>
                  Time
                </label>

                <select defaultValue={'07:00 PM'} id='timmings'>
                  <option defaultChecked value="05:00 PM">05:00 PM</option>
                  <option value="06:00 PM">06:00 PM</option>
                  <option value="07:00 PM">07:00 PM</option>
                  <option value="08:00 PM">08:00 PM</option>
                  <option value="09:00 PM">09:00 PM</option>
                  <option value="10:00 PM">10:00 PM</option>
                  <option value="11:00 PM">11:00 PM</option>
                </select>
              </div>

              <div id='input'>

                <label htmlFor='number' className='input-label'>
                  Number of Diners
                </label>
                <input type='number' min={1} max={10} defaultValue={4} autoComplete="off" name='diners' id='diners' placeholder='' ></input>
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
            <Link type='submit' to='personal-information' >Enter Personal Details</Link>
          </form>
        </article>
      </section>
    </>
  )
}

export default ReserveTable
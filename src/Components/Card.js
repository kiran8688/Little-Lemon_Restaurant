import React from 'react'
import burchetta from '../assets/icons_assets/bruchetta.svg'
import moped from '../assets/icons_assets/moped_black_24dp.svg'

function Card(props) {
    return (
        <>
            <article className='article-card'>
                {(props.imgsrc === require("../assets/icons_assets/bruchetta.svg") ? <object  aria-label='food' data={burchetta} type="image/svg+xml"></object> : <object  aria-label='food' data={props.imgsrc} type="image/jpg"></object>)}
                <div>
                    <h3>{props.title}</h3>
                    <h3>${props.price}</h3>
                </div>
                <p>{props.description}</p>
                <div >
                    <h4>Order for Delivery </h4>
                    <object data={moped} aria-label='moped' type="image/svg+xml"></object>
                </div>
            </article>
        </>
    )
}

export default Card
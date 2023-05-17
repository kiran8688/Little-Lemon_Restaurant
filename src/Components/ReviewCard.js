import React from 'react'
import quote from '../assets/icons_assets/format_quote_black_24dp.svg'

function ReviewCard(props) {
    return (
        <>
            <article className='review-card'>
                <div>
                    <img width={70} height={70} src={props.imgsrc} alt="user" />
                    <h4>{props.name}</h4>
                </div>
                <p>
                    <object data={quote} aria-label='quote-open' type="image/svg+xml"></object>{props.review}
                    <object data={quote} aria-label='quote-open' type="image/svg+xml"></object>
                </p>

            </article>
        </>
    )
}

export default ReviewCard
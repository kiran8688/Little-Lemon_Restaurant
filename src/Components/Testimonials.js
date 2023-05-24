import React from 'react'
import ReviewCard from './ReviewCard'

function Testimonials() {
    return (
            <section id='testimonials-section' className='testimonials-section'>
                <h2>Testimonials</h2>
                <article >
                    <ReviewCard imgsrc={require("../assets/icons_assets/Chaitanya_Anand.png")} name="Chaitanya A." review="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi esse est omnis. " />

                    <ReviewCard imgsrc={require("../assets/icons_assets/Felipe_Moitta.png")} name="Felipe M." review="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi esse est omnis. " />

                    <ReviewCard imgsrc={require("../assets/icons_assets/Peter_Ward.png")} name="Peter W." review="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi esse est omnis. Repudiandae in, " />

                    <ReviewCard imgsrc={require("../assets/icons_assets/Larry_Tao_Wang_1.png")} name="Larry Tao W." review="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi esse est omnis. " />

                </article>


            </section>
    )
}

export default Testimonials
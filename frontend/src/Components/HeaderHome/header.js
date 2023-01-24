import React from 'react'
import "./header.scss"
function HeaderSection() {
    return (
        <section className='headersectionhome'>

            <div className='generalheadersection'>
                <div className='leftsidetextheader'>

                    <h3>Learn From The Expert</h3>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</h4>
                    <button>ADMISSION NOW</button>
                </div>


                <div className='loginheader'>
                    <label /> Sign Up
                    <input placeholder='Email Adress' />
                    <input placeholder='Password' />
                    <input placeholder='Re-Type Password' />
                    <button> Sign Up</button>
                </div>

            </div>
        </section>
    )
}

export default HeaderSection
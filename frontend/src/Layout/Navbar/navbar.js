import React from 'react'
import "./navbar.scss"
function Navbar() {
    return (

        <nav className='navbargeneraldiv'>

            <div className='generaldiv'>

                <div>
                    <h2>OneSchool</h2>
                </div>

                <div className='generala'>
                    <a>Home</a>
                    <a>Courses</a>
                    <a>Programs</a>
                    <a>Teachers</a>
                </div>

                <div>
                    <button className='contactbtn'> <h3>Contact Us</h3> </button>
                </div>

            </div>

        </nav>

    )
}

export default Navbar
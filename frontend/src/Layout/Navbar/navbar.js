import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"
function Navbar() {
    return (

        <nav className='navbargeneraldiv'>

            <div className='generaldiv'>

                <div className='oneschooldiv'>
                    <Link className='link' to={"/"}> <h2 className='oneschool'>OneSchool</h2> </Link>
                </div>

                <div className='generala'>
                    <Link className='linkhome' to={"/"}>  <a>Home</a> </Link>
                    <Link className='linkadd' to={"/add"}> <a>Add</a> </Link>
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
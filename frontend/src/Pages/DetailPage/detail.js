import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../Layout/Navbar/navbar';
import { Helmet } from 'react-helmet';

function DetailPage() {

    let { _id } = useParams();
    const [datam, setDatam] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/users/${_id}`).then(({ data }) => {
            setDatam(data);
        });
    }, []);

    return (

        <>
            <Helmet>
                <title> Detail Page </title>
            </Helmet>
            <>
                <Navbar />
                <div className='elementdiv'>
                    <h1> {datam.name} </h1>
                    <h3> {datam.title}</h3>
                    <p> {datam.description}</p>
                </div>

                <Link to={"/"}> <button>Go to Home Page</button> </Link>

            </>
        </>
    )
}

export default DetailPage
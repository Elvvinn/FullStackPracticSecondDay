import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./ourteacher.scss"
import { Link } from 'react-router-dom';
function OurTeacherSection() {

    const [datam, setDatam] = useState([])
    const [search, setSearch] = useState("")

    function deletefunc() {
        axios.get("http://localhost:5000/users").then(({ data }) => {
            setDatam(data);
        });
    }

    useEffect(() => {
        deletefunc();
    }, []);

    const deleteklik = (_id) => {
        axios.delete("http://localhost:5000/users/" + _id)
        deletefunc();
    }

    return (

        <section className='elementsection'>
            <div className='ourteachertextdiv'>
                <h2> Our teachers </h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam! </p>
            </div>
            <div className='generalelementdiv'>
                {datam.filter(data => data.name.toLowerCase().includes(search)).map((element) => {
                    return (

                        <div className='elementdiv'>
                            <h1> {element.name} </h1>
                            <h3> {element.title}</h3>
                            <p> {element.description}</p>
                            <Link to={`/users/${element._id}`}> <button className='moreinfo'> More Info </button> </Link>
                            <button onClick={() => (deleteklik(element._id))}> Delete This Item </button>
                        </div>
                    )
                })}
                <input type={"text"} placeholder="Search Now .." onChange={(e) => setSearch(e.target.value)} />
            </div>
        </section>
    )
}

export default OurTeacherSection

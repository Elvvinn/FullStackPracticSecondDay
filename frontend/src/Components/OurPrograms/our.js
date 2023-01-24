import React from 'react'
import "./our.scss"
function OurSectionHomePage() {
    return (
        <>

            <section className='ourprogramsection'>

                <div className='ourprogramstext'>
                    <h2> Our Programs </h2>
                    <p className='loremclass'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam! </p>
                </div>

                <div className='generaldivfotofirstprogram'>
                    <img src='https://preview.colorlib.com/theme/oneschool/images/undraw_youtube_tutorial.svg' alt='' />
                    <div className='firstfotoetext'>
                        <h4 className='firstfotowe'>We Are Excellent In Education </h4>
                        <p className='firstfotolorem'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo. </p>
                        <div className='iconitem'>
                            <i class="fa-solid fa-graduation-cap"> 22,931 Yearly Graduates</i>
                            <i class="fa-solid fa-building-columns">150 Universities Worldwide</i>
                        </div>
                    </div>
                </div>

                <div className='generaldivstrive'>

                    <div className='strivetext'>
                        <h4>Strive for Excellent </h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo. </p>
                        <div className='seconditem'>
                            <i class="fa-solid fa-graduation-cap">22,931 Yearly Graduates</i>
                            <i class="fa-solid fa-building-columns">
                                150 Universities Worldwide</i>
                        </div>
                    </div>
                    <img src='https://preview.colorlib.com/theme/oneschool/images/undraw_teaching.svg' alt='' />
                </div>

            </section>


        </>
    )
}

export default OurSectionHomePage
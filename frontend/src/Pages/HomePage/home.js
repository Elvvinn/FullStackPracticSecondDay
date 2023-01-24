import React from 'react'
import HeaderSection from '../../Components/HeaderHome/header'
import OurSectionHomePage from '../../Components/OurPrograms/our'
import Navbar from '../../Layout/Navbar/navbar'

function HomePage() {
    return (
        <>
            <Navbar />
            <HeaderSection />
            <OurSectionHomePage />
        </>
    )
}

export default HomePage
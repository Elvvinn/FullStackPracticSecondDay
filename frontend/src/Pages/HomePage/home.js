import React from 'react'
import HeaderSection from '../../Components/HeaderHome/header'
import MessageUsSection from '../../Components/MessageUs/message'
import OurSectionHomePage from '../../Components/OurPrograms/our'
import OurTeacherSection from '../../Components/OurTeachers/ourteacher'
import FooterSection from '../../Layout/Footer/footer'
import Navbar from '../../Layout/Navbar/navbar'
import { Helmet } from 'react-helmet';
function HomePage() {
    return (

        <>
            <Helmet>
            <title> Home Page </title>
            </Helmet>

            <>

                <Navbar />
                <HeaderSection />
                <OurSectionHomePage />
                <OurTeacherSection />
                <MessageUsSection />
                <FooterSection />
            </>
        </>
    )
}

export default HomePage
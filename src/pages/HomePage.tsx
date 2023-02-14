import React from 'react'
import CourseContainer from '../components/CourseContainer'
import FeaturedCompanies from '../components/FeaturedCompanies'
import FeaturedJobContainer from '../components/FeaturedJobContainer'
import Filter from '../components/Filter'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import OurPartners from '../components/OurPartners'

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <Hero/>
            <FeaturedJobContainer/>
            <FeaturedCompanies />
            <CourseContainer />
            <OurPartners />
            <Footer />
        </div>
    )
}

export default HomePage
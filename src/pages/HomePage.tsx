import React from 'react'
import CourseContainer from '../components/CourseContainer'
import FeaturedCompanies from '../components/FeaturedCompanies'
import FeaturedJobContainer from '../components/FeaturedJobContainer'
import Filter from '../components/Filter'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import OurPartners from '../components/OurPartners'
import SmallSizedScreenNavBar from '../components/SmallSizedScreenNavBar'

const HomePage = () => {
    return (
        <div>
            <SmallSizedScreenNavBar />
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
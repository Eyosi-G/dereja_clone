import React from 'react'
import FeaturedJobContainer from '../components/FeaturedJobContainer'
import Filter from '../components/Filter'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <Hero/>
            <FeaturedJobContainer/>
        </div>
    )
}

export default HomePage
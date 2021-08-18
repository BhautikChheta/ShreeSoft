import React from 'react'
import HeroSection from '../Components/HeroSection'
import Navbar from '../Components/Navbar'
import './Home.css'

function Home() {
    return (
        <div className='home__container'>
            <Navbar />
            <HeroSection />
        </div>
    )
}

export default Home
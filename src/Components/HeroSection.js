import React from 'react'
import { Link } from 'react-router-dom'
import './HeroSection.css'

export default function HeroSection() {
    return (
        <div className='herosection__container'>
            <section className="hero-banner">
                <div className="hero-banner-content flex justify-between text-center w-5/6 mx-auto my-5">
                    <div className="hero-text-container w-2/3 justify-start mt-20">
                        <h4 className='text-2xl italic mb-2'>We Design, Develop, Deploy and Maintain</h4>
                        <h1 className='header-text text-4xl px-7 mb-10'>Mobile-App, Web-App and Website Design & Development</h1>
                        <p className='px-10 para-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni voluptates eos modi sequi dignissimos quos, velit quisquam nisi hic maxime libero mollitia ad fugit. Nesciunt facilis consectetur iure ad ab!</p>
                        <p className='px-10 para-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis optio iste quo numquam amet dignissimos maxime deserunt, accusamus assumenda voluptate?</p>
                    </div>
                    <div className="hero-img p-5 flex flex-col w-1/3 justify-end">
                        <img src="./images/CodeDevelopment.svg" alt=" Code Development"/>
                        <img src="./images/Devices.svg" alt=" Code Development" className='w-1/8'/>
                    </div>
                </div>
            </section>
            <section className="hero-contact-us mt-20 mb-14">
                <div className="inquiry--container flex justify-evenly w-3/4 mx-auto">
                    <h1 className='inquiry-text w-1/2 text-3xl'>Want to Discuss</h1>
                    <Link to='/contact-us' className='flex w-1/2 justify-center align-center'>
                        <button className='btn text-2xl px-10 py-1'>Contact Us</button>
                    </Link>
                </div>
            </section>
            
        </div>
    )
}

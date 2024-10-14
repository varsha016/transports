"use client"
import React from 'react'

// import CustomSlider from '../components/CustomSlider'; // Adjust the path as necessary

import TransportCard6 from '../card/page'
import OurServices from '../ourServices/page'
import Footer from './../footer/page'
import SliderPage from '../SliderPage/page'

const page = () => {
    return (
        <div className=''>
            <SliderPage />
            <TransportCard6 />
            <OurServices />
            <Footer />

        </div>
    )
}

export default page
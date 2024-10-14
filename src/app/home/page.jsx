"use client"
import React from 'react'

// import CustomSlider from '../components/CustomSlider'; // Adjust the path as necessary
import CustomSlider from './../slider/page'
import TransportCard6 from './../card/page'
import OurServices from './../ourServices/page'
import Footer from './../footer/page'

const page = () => {
    return (
        <div className=''>
            <CustomSlider />
            <TransportCard6 />
            <OurServices />
            <Footer />

        </div>
    )
}

export default page
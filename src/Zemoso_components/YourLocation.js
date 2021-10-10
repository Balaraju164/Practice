import React from 'react'
import CheckOutSteps from './checkoutSteps'
import './YourLocation.css'

const YourLocation = () => {
    return (
        <div className='container'>
            <div className='row'>
            <div className='row1'>
                <div className='content'>
                <CheckOutSteps step1 step2 step3 />
                <h1>More than 2000 people are using Green Commute</h1>
                </div>
            </div>
            <div className='row2'>
                <img src='/images/zemoso_image2.jpg' alt='location_image'/>
            </div>
            </div>
        </div>
    )
}

export default YourLocation

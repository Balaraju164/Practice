import React from 'react'
import CheckOutSteps from './checkoutSteps'
import './YourLocation.css'

const YourLocation = () => {
    return (
        <div className='container'>
            <div className='row'>
            <div className='row1'>
                <div className='content'>
                <CheckOutSteps step1 step2 />
                <div className='data_content'>
                <h3>More than 2000 people are using Green Commute</h3>
                <button type='button' className='back_button'><i className="fas fa-arrow-left"></i>back</button>
                <p>Where do you want to work?</p>
                <input type='text' placeholder='enter you job location'/>
                <div className='buttons'>
                <button type="button" className='butto' >Next</button>
                <button type="button" className='butto' >Skip</button>
                </div>
                </div>
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

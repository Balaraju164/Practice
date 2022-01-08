import React from 'react'
import './checkoutSteps.css'

const CheckOutSteps = ({step1,step2,step3}) => {
    return (
        <nav className='navbar'>
                {step1?(<a href='#'><p className='number'>1</p>Your location</a>):<a href='#' className='disabled'><p className='number1'>1</p>Your location</a>}
                {step2?(<a href='#'><p className='number'>2</p>Job Location</a>):<a href='#' className='disabled'><p className='number1'>2</p>Job Location</a>}
                {step3?(<a href='#'><p className='number'>3</p>Your skills</a>):<a href='#' className='disabled'><p className='number1'>3</p>Your skills</a>}
        </nav>
    )
}

export default CheckOutSteps

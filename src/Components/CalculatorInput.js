import React, { Component } from 'react'

export class CalculatorInput extends Component {
    render() {
        return (
            <div>

               <input type='text' readOnly value={this.props.inputValue} className='textarea' placeholder='Enter values....'/>

            </div>
        
        )
    }
}

export default CalculatorInput

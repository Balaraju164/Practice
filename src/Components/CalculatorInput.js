import React, { Component } from 'react'

export class CalculatorInput extends Component {
    render() {
        return (
            <div>
               <input type='text' readOnly value={this.props.inputValue}/>
            </div>
        )
    }
}

export default CalculatorInput

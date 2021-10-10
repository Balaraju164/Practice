import React, { Component } from 'react'

export class CalculatorButtons extends Component {
    render() {
        return (
                <input type='button' value ={this.props.label} onClick={this.props.onClick} className='button'/>
        )
    }
}

export default CalculatorButtons

import React, { Component } from 'react'

export class CalculatorOutput extends Component {
    render() {
        return (
            <div>
            <input type='text' readOnly value={this.props.outputValue} className='textarea'/>
            </div>
        )
    }
}

export default CalculatorOutput

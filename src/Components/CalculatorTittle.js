import React, { Component } from 'react'

export class CalculatorTittle extends Component {
    render() {
        return (
            <div className='tittle'>
                {this.props.tittle}
            </div>
        )
    }
}

export default CalculatorTittle

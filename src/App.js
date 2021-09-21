import React, { Component, Fragment } from 'react'
import CalculatorButtons from './Components/CalculatorButtons'
import CalculatorInput from './Components/CalculatorInput'
import CalculatorOutput from './Components/CalculatorOutput'
import CalculatorTittle from './Components/CalculatorTittle'

export class App extends Component {
  render() {
    return (
      <Fragment>
        <CalculatorTittle/>
        <CalculatorInput/>
        <CalculatorOutput/>
        <CalculatorButtons/>
      </Fragment>
    )
  }
}

export default App

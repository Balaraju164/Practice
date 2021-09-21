import React, { Component, Fragment } from 'react'
import CalculatorButtons from './Components/CalculatorButtons'
import CalculatorInput from './Components/CalculatorInput'
import CalculatorOutput from './Components/CalculatorOutput'
import CalculatorTittle from './Components/CalculatorTittle'

export class App extends Component {
  constructor(props)
  {
    super(props)
    this.tittle='Calculator'
  }
  render() {
    return (
      <Fragment>
        <CalculatorTittle tittle={this.tittle}/>
        <CalculatorInput/>
        <CalculatorOutput/>
        <CalculatorButtons/>
      </Fragment>
    )
  }
}

export default App

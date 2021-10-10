import React, { Component, Fragment } from 'react'
import CalculatorButtons from './Components/CalculatorButtons'
import CalculatorInput from './Components/CalculatorInput'
import CalculatorOutput from './Components/CalculatorOutput'
import CalculatorTittle from './Components/CalculatorTittle'
import YourLocation from './Zemoso_components/YourLocation'

export class App extends Component {
  render() {
    return (
      <Fragment>
        <YourLocation/>
      </Fragment>
    )
  }
}

export default App

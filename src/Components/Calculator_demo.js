<div className='calculator'>
        <CalculatorTittle tittle={this.tittle}/>
        <CalculatorInput inputValue={this.state.question}/>
        <CalculatorOutput outputValue={this.state.answer}/>
        <div className='button-row'>
          <CalculatorButtons label={'clear'} onClick={this.handleClick.bind(this)}/>
          <CalculatorButtons label={'Delete'} onClick={this.handleClick.bind(this)}/>
          <CalculatorButtons label={'.'} onClick={this.handleClick.bind(this)}/>
          <CalculatorButtons label={'/'} onClick={this.handleClick.bind(this)}/>
        </div>
        <div className='button-row'>
          <CalculatorButtons label={'7'} onClick={this.handleClick.bind(this)}/>
          <CalculatorButtons label={'8'} onClick={this.handleClick.bind(this)}/>
          <CalculatorButtons label={'9'} onClick={this.handleClick.bind(this)}/>
          <CalculatorButtons label={'*'} onClick={this.handleClick.bind(this)}/>
        </div>
        <div className='button-row'>
          <CalculatorButtons label={'4'} onClick={this.handleClick.bind(this)}/>
          <CalculatorButtons label={'5'} onClick={this.handleClick.bind(this)}/>
          <CalculatorButtons label={'6'} onClick={this.handleClick.bind(this)}/>
          <CalculatorButtons label={'-'} onClick={this.handleClick.bind(this)}/>
        </div>
        <div className='button-row'>
          <CalculatorButtons label={'1'} onClick={this.handleClick.bind(this)}/>
          <CalculatorButtons label={'2'} onClick={this.handleClick.bind(this)}/>
          <CalculatorButtons label={'3'} onClick={this.handleClick.bind(this)}/>
          <CalculatorButtons label={'+'} onClick={this.handleClick.bind(this)}/>
        </div>
        <div className='button-row'>
          <CalculatorButtons label={'0'} onClick={this.handleClick.bind(this)}/>
          <CalculatorButtons label={'='} onClick={this.handleClick.bind(this)}/>
        </div>
        </div>

         /*constructor(props)
  {
    super(props)
    this.tittle='Calculator'
    this.state={
      question:'',
      answer:''
    }
  }

  handleClick=(e)=>{
    let value = e.target.value
    switch(value)
    {
      case '=':
            let ans=''
            try {
              ans=eval(this.state.question)
              this.setState({answer:ans})
            } catch (error) {
              this.setState({answer:'Math Error'})
            }
            break
      case 'clear':
            this.setState({question:'',answer:''})
            break
      case 'Delete':
            this.setState({question:this.state.question.substr(0,this.state.question.length-1)})
            break
      default:
            let k=this.state.question
            this.setState({question:k+=value})
            break
    }
   }*/
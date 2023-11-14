import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    increment(){
        //Multiple calls on this code returns a wrong answer:
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {            
        //     console.log('Callback Value', this.state.count);
        // })

        //Instead do:
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    incrementFive()
    {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    
  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        {/* <button onClick={() => this.increment()}>Increment</button> */}
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter

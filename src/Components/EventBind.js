import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         Message: 'Hello'
      }

    //   3: Using the constructor to do the binding:
    //   this.clickHandler = this.clickHandler.bind(this)
    }

    //Used with approach 1 to 3:
    // clickHandler(){
    //     console.log(this)
    //     this.setState({
    //         Message : 'Goodbye'
    //     })
    // }

    //Approach 4:
    clickHandler = () => {
        this.setState({
            Message: 'Goodbye!'
        })
    }

  render() {
    return (
      <div>
        {/* <div>{this.state.Message}</div> */}
        {/* Can do the binding as:
        1. using the bind key word: */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

        {/* 2. Using the arrow function */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}

        {/* 3.Using the constuctor to do the binding: */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind

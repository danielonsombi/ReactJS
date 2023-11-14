import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: false
    }
  }
  
  
  render() {
    //Use Short Circuit Operator
    return this.state.isLoggedIn && <div>Welcome Daniel</div>


    //Use Ternary Conditional Operator
    // return(
    //   this.state.isLoggedIn ? 
    //   <div>Welcome Daniel</div> :
    //   <div>Welcome Guest</div>
    // )

    //Use element Variable:
    // let Message
    // if (this.state.isLoggedIn)
    // {
    //   Message = <div>Welcome Daniel</div>
    // } else {
    //   Message = <div>Welcome Guest</div>
    // }

    // return <div>{Message}</div>


    //Use if/else
    // if (this.state.isLoggedIn)
    // {
    //   return <div>Welcome Daniel</div>
    // } else {
    //   return <div>Welcome Guest</div>
    // }
    // return (
    //   <div>
    //     <div>Welcome Daniel</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting

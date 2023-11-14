import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }

      this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName)
    {
        //alert('Hello' + this.state.parentName)
        //If using ES6 then you can use the back ticks instead of concatenating as above:
        alert(`Hello ${this.state.parentName} from  ${childName}`)
    }
    
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent

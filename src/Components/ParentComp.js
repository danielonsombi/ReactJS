import React, { Component } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Daniel'
      }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Daniel'
            })
        }, 2000)
    }
    
  render() {
    console.log('***********Parent Component**************')
    return (
      <div>
        Parent Component
        {/* <RegularComp name={this.state.name}></RegularComp>
        <PureComp name = {this.state.name}></PureComp> */}
        <MemoComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp

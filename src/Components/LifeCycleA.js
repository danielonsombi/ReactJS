import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Daniel'
      }
      console.log('LifecycleA constructor')
    }
    
    static getDerivedStateFromProps(props, state)
    {
        console.log('LifecycleA getDerivedSTateFromProps')
        return null
    }

    componentDidMount()
    {
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'Codevolution'
        })
    }
    
  render() {
    console.log('LifecycleA render')
    return (
      <div>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB/>
      </div>

    )
  }
}

export default LifeCycleA

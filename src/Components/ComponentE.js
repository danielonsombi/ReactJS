import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'
import User from './User'

class ComponentE extends Component {
    static contextType = UserContext
  render() {
    return (
        <div>
            Component E Context {this.context}            
            <ComponentF/>
        </div>
    )
  }
}

//Can either use the below approach to call the context or use the static function above to achieve the same.
//ComponentE.contextType = UserContext

export default ComponentE


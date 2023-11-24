import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false
      }
    }
    
    static getDerivedStateFromError(error)
    {
        return {
            hasError: true
        }
    }
    componentDidCatch(error, info)
    {
        // Used to log the errors
        console.log(error)
        console.log(info)
    }

  render() {
    if (this.state.hasError) {
        return <h1>Something went wrong</h1>
    }
    return this.props.Children
  }
}

export default ErrorBoundary

import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comments:'',
         topic: 'React'
      }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    HandleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    HandleTopicChange = event => {
        this.setState({
            topic:event.target.value
        })
    }

    HandleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    
  render() {
    const {username, comments, topic} = this.state

    return (
        <form onSubmit={this.HandleSubmit}>
            <div>
                {/* This is regular html form: */}
                {/* <label>Username</label>
                <input type='text'/> */}


                {/* Can be changed to controlled react component as by:
                1. Creating a component state to control the value of the input element 
                2. Handling the onChange event*/}
                <label>Username</label>
                <input 
                    type='text' 
                    value={username} 
                    onChange={this.handleUsernameChange}
                />

            </div>
            <div>
                <label>Comments</label>
                <textarea value={comments} onChange={this.HandleCommentsChange}></textarea>
            </div>
            <div>
                <label>Topic</label>
                <select value={topic} onChange={this.HandleTopicChange}>
                    <option value ="React">React</option>
                    <option value ="Angular">Angular</option>
                    <option value ="Vue">Vue</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form

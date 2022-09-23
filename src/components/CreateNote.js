
import React from 'react'
import { marked } from 'marked'
import  './CreateNote.css'

const initialText = ""

class createNote extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      text: initialText
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({text: event.target.value})
  }

  render() {
    const markdown = marked.parse(this.state.text)
    return (
      <div className="container-note bg-dark">
        <div className="sidebar">
        </div>
        <div className="input-area bg-dark">
          <textarea className="form-control input-text" type="text" onChange={this.handleChange}/>
        </div>
        <div className="output-area bg-dark">
          <div className="form-control output-text" dangerouslySetInnerHTML={{__html: markdown}}></div>
        </div>
      </div>
    )
  }
}

export default createNote

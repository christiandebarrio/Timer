import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(value) {
    this.props.history.push(`/timer/${value}`)
  }
  render() {
    return (
      <div className="main-content wrapper">
        <div className="timer">
          <div className="timer-content">
            <div className="timer-banner">
              <h1 className="timer-title">Introduce el tiempo</h1>
              <span className="icon icon-timer" />
            </div>
            <div className="timer-field">
              <input
                type="text"
                placeholder="introduce el tiempo"
                ref={el => (this.input = el)}
                onKeyUp={e =>
                  e.keyCode === 13 && this.handleSubmit(this.input.value)
                }
              />
              <button
                className="button"
                type="submit"
                onClick={() => this.handleSubmit(this.input.value)}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

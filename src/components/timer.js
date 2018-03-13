import React from 'react'
import { Link } from 'react-router-dom'

export default class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { time: this.props.match.params.time, done: false }
  }
  componentDidMount() {
    this.setMyInterval()
    this.setMyTimeout()
  }
  componentWillUnmount() {
    this.clearMyInterval()
    this.clearMyTimeout()
  }
  setMyTimeout() {
    const time = this.props.match.params.time
    this.myTimeout = setTimeout(() => {
      this.setState({ done: true })
      this.clearMyInterval()
    }, parseInt(time) * 1000)
  }
  clearMyTimeout() {
    clearTimeout(this.myTimeout)
  }
  setMyInterval() {
    this.myInterval = setInterval(
      () => this.setState({ time: this.state.time - 1 }),
      1000
    )
  }
  clearMyInterval() {
    clearInterval(this.myInterval)
  }

  render() {
    return (
      <div className="main-content wrapper">
        <div className="timer">
          <div className="timer-content">
            <div className="timer-display">
              <div className="counter">{this.state.time}</div>
            </div>
          </div>
          <div className="timer-actions left-align">
            <Link to="/">
              <button className="button">
                <span className="icon icon-arrow-left" />
                <span to="/" className="text">
                  Volver
                </span>
              </button>
            </Link>
          </div>
        </div>
        {this.state.done && (
          <audio
            src="https://freesound.org/data/previews/353/353497_2106779-lq.mp3"
            autoPlay
          />
        )}
      </div>
    )
  }
}

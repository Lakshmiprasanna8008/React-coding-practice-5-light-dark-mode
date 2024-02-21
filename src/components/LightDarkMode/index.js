// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isLightMode: true}

  light = () => {
    this.setState({isLightMode: false})
  }

  dark = () => {
    this.setState({isLightMode: true})
  }

  render() {
    const {isLightMode} = this.state
    return (
      <div className="main-container">
        {isLightMode ? (
          <div className="dark-mode-container">
            <h1 className="dark-mode-heading">Click To Change Mode</h1>
            <button
              className="dark-mode-button"
              type="button"
              onClick={this.light}
            >
              Light Mode
            </button>
          </div>
        ) : (
          <div className="light-mode-container">
            <h1 className="light-mode-heading">Click To Change Mode</h1>
            <button
              className="light-mode-button"
              type="button"
              onClick={this.dark}
            >
              Dark Mode
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default LightDarkMode

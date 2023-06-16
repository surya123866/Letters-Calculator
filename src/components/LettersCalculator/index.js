import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  inputText = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="App-container">
        <div className="content-container">
          <h1 className="heading">Calculate the letters you enter</h1>
          <div>
            <label htmlFor="input" className="input-tag">
              Enter the phrase
            </label>
            <input
              type="text"
              className="input"
              onChange={this.inputText}
              placeholder="Enter the phrase"
              id="input"
            />
          </div>
          <div className="result-container">
            <p className="result-text">No.of letters: {count}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator

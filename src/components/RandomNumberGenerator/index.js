// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onGenerateButtonClick = () => {
    this.setState({randomNumber: Math.floor(Math.random() * 101)})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="bg-container">
        <div className="random-number-card">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="gen-button"
            onClick={this.onGenerateButtonClick}
          >
            Generate
          </button>
          <p className="random-number-text">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator

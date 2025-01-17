// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrementBtn = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(() => ({count: randomNumber}))
  }

  render() {
    const {count} = this.state
    const disPlayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          <p className="paragraph">Count is {disPlayText}</p>
          <button
            className="button"
            type="button"
            onClick={this.onIncrementBtn}
          >
            Increment
          </button>
          <p className="Note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp

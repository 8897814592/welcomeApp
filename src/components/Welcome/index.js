import {Component} from 'react'
import './index.css'
class Welcome extends Component {
  state = {isSubscribe: true}
  renderButton = () => {
    const {isSubscribe} = this.state
    if (isSubscribe === true) {
      return <button className="button">subscribed</button>
    }
    return <button className="button">subscribe</button>
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you!Happy Learning</p>
        {this.renderButton()}
      </div>
    )
  }
}

// Write your code here

import {Componet} from 'react'

import './index.css'

class ShowHide extends Componet {
  state = {isHide: false, isHide1: false}

  hideSurname = () => {
    this.setState(prevState => ({isHide: !prevState.isHide}))
  }

  hideName = () => {
    this.setState(prevState => ({isHide1: !prevState.isHide1}))
  }

  render() {
    const {isHide} = this.state

    const hideShow = isHide && (
      <div>
        <p>Joe</p>
      </div>
    )

    const hideShow1 = isHide && (
      <div>
        <p>Jonas</p>
      </div>
    )

    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">Show/Hide</h1>
          <div className="box">
            <div>
              <button type="button" onClick={this.hideSurname}>
                Show/Hide Firstname
              </button>
              {hideShow}
            </div>
            <div>
              <button type="button" onClick={this.hideName}>
                Show/Hide Lastname
              </button>
              {hideShow1}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide

import React, { Component } from 'react'
import alternative from './alternative.jpg'
export default class Alternative extends Component {
  render() {
    return (
      <div>
        <img src={alternative} alt="if no image " />
      </div>
    )
  }
}

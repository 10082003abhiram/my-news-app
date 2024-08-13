import React, { Component } from 'react'
import loading from './loading.gif.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div style={{aspectRatio: 3/2 , objectFit:'contain', mixBlendMode:'color-burn', border:null, display:'flex', justifyContent:'center', alignItems:'center'}}>
        <img src={loading} alt="loading the page" />
      </div>
    )
  }
}

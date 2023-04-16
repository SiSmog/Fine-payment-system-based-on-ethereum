import React, { Component } from 'react'
import './CustomButton.css'
export default class CustomButton extends Component {

  
  render() {
    return (
      <button className={this.props.variant+" "+this.props.size} onClick={this.props.onClick}>{this.props.text}</button>
    )
  }
}

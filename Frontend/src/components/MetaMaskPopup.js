import React, { Component } from 'react'
import './Popup.css'
export default class MetaMaskPopup extends Component {
    render() {
        return (
            <div  className={this.props.className}>
                <div className='alert'>
                    <img src={this.props.icon} className='alertIcon'/>
                    <div className='alertTitle'>MetaMask is not connected</div>
                    <div className='alertContent'>You may need to install MetaMask if you have not already</div>
                    <div className='alertOptions'>
                        {this.props.activate}
                    </div>
                </div>
            </div>
        )
    }
}

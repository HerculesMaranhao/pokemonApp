import React, { Component } from 'react'

import './style.css'

class Photo extends Component {

  render(){
    const { children } = this.props
    return(
      <div className="photo">
        {children}
      </div>
    )
  }
}

export default Photo
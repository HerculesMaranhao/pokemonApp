import React, { Component } from 'react'

import './style.css'

class Card extends Component {

  render(){

    
    return(
      <div className="card" ontouchstart={"this.classList.toggle('hover')"}>
        <div className="card-content">
          <div className="front">
            {this.props.contentFront}
          </div>
          <div className="back">
            {this.props.contentBack}
          </div>
        </div>      
      </div>
    )
  }
}

export default Card
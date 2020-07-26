import React, { Component } from 'react'

import './style.css'

class Card extends Component {

    render() {
    const { index, cardsClicked } = this.props
    return (
      <div 
        className={`card ${cardsClicked.includes(index) ? '' : 'hoverCard'}`} 
        >
        <div className={`card-content ${cardsClicked.includes(index) ? '' : 'hoverCardContent'}`}>
          <div className="front">
            {this.props.contentFront}
          </div>
          <div className={`back ${cardsClicked.includes(index) ? '' : 'hoverBack'}`}>
            {this.props.contentBack}
          </div>
        </div>
      </div>
    )
  }
}

export default Card
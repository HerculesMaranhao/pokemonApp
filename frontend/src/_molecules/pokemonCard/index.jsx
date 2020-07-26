import React, { Component } from 'react'

import Card from '../../_atoms/card'
import PokedexModal from './../PokedexModal'
import './style.css'

class PokemonCard extends Component {

  state = {
    pokedexModal: { open: false, data: null },
    cardsClicked: []
  }

  handleClick = index => {
    const { cardsClicked } = this.state
    let newList = [...cardsClicked]
    if(!cardsClicked.includes(index)){
      newList = [...cardsClicked, index]
    }

    this.setState({ cardsClicked: newList})
  }

  renderContentFront = (
    <div style={{
      width: '100%',
      height: '100%',
      background: 'rgba(255,255,255,0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'column',
      borderRadius: 10
    }}
    >
      <div className="pokemonName">{this.props.pokemon?.name}</div>
      <img
        src={this.props.pokemon?.photo}
        alt={this.props.pokemon?.name}
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
      <div 
        className="pokedexButton" 
        onClick={() => this.setState({ pokedexModal: { open: true, data: this.props.pokemon }}, () => this.handleClick(this.props.index))}
        >
          Pokédex
      </div>
    </div>
  )

  render() {
    const { index } = this.props
    const { cardsClicked } = this.state
    return (
      <div className="pokemonCard">
        <Card contentBack={this.renderContentFront} contentFront={""} index={this.props.index} cardsClicked={cardsClicked} />
        {this.state?.pokedexModal?.open &&
          <PokedexModal 
            pokemon={this.state?.pokedexModal?.data} 
            onHide={() => this.setState({ pokedexModal: { open: false }})} 
          />
        }
      </div>
    )
  }
}

export default PokemonCard
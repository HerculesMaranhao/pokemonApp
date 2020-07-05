import React, { Component } from 'react'

import Card from '../../_atoms/card'
import { FindPokemonImage } from './../../assets/img/pokemons'
import './style.css'

class PokemonCard extends Component {

  renderContentFront = (
    <div style={{
      width: '100%',
      height: '100%',
      background: 'rgba(255,255,255,0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <img
        src={FindPokemonImage(this.props.pokemon ?? '')}
        alt={this.props.pokemon}
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </div>
  )

  render() {

    return (
      <div className="pokemonCard">
        <Card contentBack={this.renderContentFront} contentFront={""} />
        {}
      </div>
    )
  }
}

export default PokemonCard
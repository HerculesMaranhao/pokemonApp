import React, { Component } from 'react'

import Card from '../../_atoms/card'
import Photo from '../../_atoms/photo'
import './style.css'

class PokemonCard extends Component {

  render() {

    return (
      <div className="pokemonCard">
        <Card>
          <Photo />
          <div className="pokemonCard-dados">
            <div>Nome: </div>
            <div>Tipo: </div>
          </div>
        </Card>
      </div>
    )
  }
}

export default PokemonCard
import React, { Component } from 'react'

import PokemonCard from '../../_molecules/pokemonCard'
import './style.css'

class PokemonList extends Component {

  render(){

    return(
      <div className="pokemonsList">
        <PokemonCard />
        <PokemonCard />
      </div>
    )
  }
}

export default PokemonList
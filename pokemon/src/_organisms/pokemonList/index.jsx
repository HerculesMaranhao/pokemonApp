import React, { Component } from 'react'

import PokemonCard from '../../_molecules/pokemonCard'
import './style.css'

const pokemons = ['charmander', 'bulbasaur', 'squirtle']

class PokemonList extends Component {

  render(){

    return(
      <div className="pokemonsList">
        {pokemons.map(p => (<PokemonCard key={p} pokemon={p} />))} 
      </div>
    )
  }
}

export default PokemonList
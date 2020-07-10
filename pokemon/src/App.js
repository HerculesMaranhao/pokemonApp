import React, { Component } from 'react';
import PokemonsList from './_organisms/pokemonList'

class App extends Component {

  render(){

    return(
      <div>
        <h1>Projeto Pokemón</h1>
        <PokemonsList />
      </div>
    )
  }
}

export default App
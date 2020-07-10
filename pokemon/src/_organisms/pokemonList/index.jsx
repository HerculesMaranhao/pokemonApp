import React, { Component } from 'react'

import PokemonCard from '../../_molecules/pokemonCard'
import './style.css'

const pokemons = ['bulbasaur', 'ivysaur', 'venosaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise', 'caterpie', 'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrill', 'pidgey', 'pidgeotto', 'pidgeot', 'rattata', 'raticate', 'spearow', 'fearow', 'ekans', 'arbok', 'pikachu', 'raichu', 'sandshrew', 'sandslash', 'nidoran_f', 'nidorina', 'nidoqueen', 'nidoran_m', 'nidorino', 'nidoking', 'clefairy', 'clefable', 'vulpix', 'ninetales', 'jigglypuff', 'wigglytuff', 'zubat', 'golbat', 'oddish', 'gloom', 'vileplume', 'paras', 'parasect', 'venonat', 'venomoth', 'diglett', 'dugtrio', 'meowth', 'growlithe', 'lapras', 'eevee', 'dratini', 'mew']

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
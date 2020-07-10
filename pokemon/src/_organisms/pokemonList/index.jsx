import React, { Component } from 'react'

import PokemonCard from '../../_molecules/pokemonCard'
import './style.css'

const pokemons = [
  'bulbasaur',
  'ivysaur',
  'venosaur',
  'charmander',
  'charmeleon',
  'charizard',
  'squirtle',
  'wartortle',
  'blastoise',
  'caterpie',
  'metapod',
  'butterfree',
  'weedle',
  'kakuna',
  'beedrill',
  'pidgey',
  'pidgeotto',
  'pidgeot',
  'rattata',
  'raticate',
  'spearow',
  'fearow',
  'ekans',
  'arbok',
  'pikachu',
  'raichu',
  'sandshrew',
  'sandslash',
  'nidoran_f',
  'nidorina',
  'nidoqueen',
  'nidoran_m',
  'nidorino',
  'nidoking',
  'clefairy',
  'clefable',
  'vulpix',
  'ninetales',
  'jigglypuff',
  'wigglytuff',
  'zubat',
  'golbat',
  'oddish',
  'gloom',
  'vileplume',
  'paras',
  'parasect',
  'venonat',
  'venomoth',
  'diglett',
  'dugtrio',
  'meowth',
  'growlithe',
  'lapras',
  'eevee',
  'dratini',
  'mew'
]

class PokemonList extends Component {

  state = {
    pagination: {
      limit: 8,
      offset: 0,
      total: 0
    },
    pokemons: []
  }

  loadPokemons = () => {
    const { pagination } = this.state
    let count = 0
    const startIndex = pagination.offset * pagination.limit
    const list = pokemons
      .filter((x, i) => {
        if (i >= startIndex && count < pagination.limit) {
          count++
          return x
        }
      })
    this.setState({ pokemons: list, pagination: { ...pagination, total: pokemons.length } })
  }

  nextPage = () => {
    const { pagination } = this.state
    let qdePages = parseInt(pagination.total / pagination.limit)
    const hasMore = Boolean((pagination.total % pagination.limit) > 0)
    if(hasMore){
      qdePages += 1
    }
    const offset = (pagination.offset + 1) === qdePages ? pagination.offset : pagination.offset + 1    
    debugger
    this.setState({
      pagination: {
        ...pagination,
        offset
      }
    }, this.loadPokemons)
  }

  previousPage = () => {
    this.setState({
      pagination: {
        ...this.state.pagination,
        offset: this.state.pagination.offset > 0 ? this.state.pagination.offset - 1 : 0
      }
    }, this.loadPokemons)
  }

  renderPages = () => {
    const { pagination } = this.state
    const qdePages = parseInt(pagination.total / pagination.limit)
    const hasMore = Boolean((pagination.total % pagination.limit) > 0)
    let pages = []
    for (let index = 1; index <= qdePages; index++) {
      pages = [...pages, index]
    }
    if(hasMore){
      pages = [...pages, pages.length + 1]
    }
    return pages.map((x, i) => (<div className={`page ${pagination.offset === i ? 'currentPage' : ''}`}>{x}</div>))
  }

  componentDidMount() {
    this.loadPokemons()
  }

  render() {

    const { pokemons } = this.state

    return (
      <div>

        <div className="pokemonsList">
          {pokemons.map(p => (<PokemonCard key={p} pokemon={p} />))}
        </div>
        <div className="pagination">
          <select className="select"
            onChange={e => this.setState({ pagination: { ...this.state.pagination, limit: e.target.value } }, this.loadPokemons)}>
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="64">64</option>
          </select>
          <button type="button" className="button"
            onClick={this.previousPage}
          >Previous</button>
          <div className="pages">
            {this.renderPages()}
          </div>
          <button
            type="button"
            className="button"
            onClick={this.nextPage}
          >Next</button>
        </div>
      </div>
    )
  }
}

export default PokemonList
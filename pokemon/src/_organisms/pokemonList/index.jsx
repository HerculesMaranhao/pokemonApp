import React, { Component } from 'react'

import PokemonCard from '../../_molecules/pokemonCard'
import './style.css'
import PokemonDataBase from './../../database/pokemon'

class PokemonList extends Component {

  state = {
    pagination: {
      limit: 16,
      offset: 0,
      total: 0
    },
    pokemon: []
  }

  loadPokemon = () => {
    const { pagination } = this.state
    let count = 0
    const startIndex = pagination.offset * pagination.limit
    const list = PokemonDataBase
      .filter((x, i) => {
        if (i >= startIndex && count < pagination.limit) {
          count++
          return x
        }
      })
    this.setState({ pokemon: list, pagination: { ...pagination, total: PokemonDataBase.length } })
  }

  nextPage = () => {
    const { pagination } = this.state
    let qdePages = parseInt(pagination.total / pagination.limit)
    const hasMore = Boolean((pagination.total % pagination.limit) > 0)
    if (hasMore) {
      qdePages += 1
    }
    const offset = (pagination.offset + 1) === qdePages ? pagination.offset : pagination.offset + 1
    this.setState({
      pagination: {
        ...pagination,
        offset
      }
    }, this.loadPokemon)
  }

  previousPage = () => {
    this.setState({
      pagination: {
        ...this.state.pagination,
        offset: this.state.pagination.offset > 0 ? this.state.pagination.offset - 1 : 0
      }
    }, this.loadPokemon)
  }

  renderPages = () => {
    const { pagination } = this.state
    const qdePages = parseInt(pagination.total / pagination.limit)
    const hasMore = Boolean((pagination.total % pagination.limit) > 0)
    let pages = []
    for (let index = 1; index <= qdePages; index++) {
      pages = [...pages, index]
    }
    if (hasMore) {
      pages = [...pages, pages.length + 1]
    }
    return pages.map((x, i) => (<div key={x} className={`page ${pagination.offset === i ? 'currentPage' : ''}`}>{x}</div>))
  }

  disabledButton = () => {
    const { pagination } = this.state
    let disabledNext = false
    let disabledPrevious = false
    if (pagination.offset === 0) {
      disabledPrevious = true
    }
    const qdePages = parseInt(pagination.total / pagination.limit)
    if (qdePages === pagination.offset) {
      disabledNext = true
    }
    
    return { disabledNext, disabledPrevious }

  }

  componentDidMount() {
    this.loadPokemon()
  }

  render() {

    const { pokemon } = this.state

    return (
      <div>

        <div className="pokemonsList">
          {pokemon.map((p, i) => (<PokemonCard key={p.name} pokemon={p} index={i} />))}
        </div>
        <div className="pagination">
          <select className="select"
            onChange={e => this.setState({ pagination: { ...this.state.pagination, limit: e.target.value, offset: 0 } }, this.loadPokemon)}>
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="64">64</option>
          </select>
          <button type="button" className="button"
            onClick={this.previousPage}
            disabled={this.disabledButton()?.disabledPrevious}
          >
            Previous
          </button>
          <div className="pages">
            {this.renderPages()}
          </div>
          <button
            type="button"
            className="button"
            onClick={this.nextPage}
            disabled={this.disabledButton()?.disabledNext}
          >
            Next
          </button>
        </div>
      </div>
    )
  }
}

export default PokemonList
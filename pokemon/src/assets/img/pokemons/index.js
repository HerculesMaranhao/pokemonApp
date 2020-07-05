import Bulbasaur from './bulbasaur.png'
import Squirtle from './squirtle.png'
import Charmander from './charmander.png'

export const FindPokemonImage = pokemon => {
    switch (pokemon) {
        case 'bulbasaur':
            return Bulbasaur
        case 'squirtle':
            return Squirtle
        case 'charmander':
            return Charmander
        default:
            break;
    }
}
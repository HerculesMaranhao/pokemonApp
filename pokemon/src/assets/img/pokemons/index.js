import Bulbasaur from './bulbasaur.png'
import Squirtle from './squirtle.png'
import Charmander from './charmander.png'
import Dratini from './dratini.png'
import Growlithe from './growlithe.png'
import Meowth from './meowth.png'
import Raichu from './raichu.png'
import Mew from './mew.png'
import Lapras from './lapras.png'
import Eevee from './eevee.png'

export const FindPokemonImage = pokemon => {
    switch (pokemon) {
        case 'bulbasaur':
            return Bulbasaur
        case 'squirtle':
            return Squirtle
        case 'charmander':
            return Charmander
        case 'dratini':
            return Dratini
        case 'growlithe':
            return Growlithe
        case 'meowth':
            return Meowth
        case 'raichu':
            return Raichu
        case 'mew':
            return Mew
        case 'lapras':
            return Lapras
        case 'eevee':
            return Eevee    
        default:
            break;
    }
}
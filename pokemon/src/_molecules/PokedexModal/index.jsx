import React, { Component } from 'react'
import { Dialog, DialogContent } from '@material-ui/core'

class PokedexModal extends Component {

  render() { 
    const { pokemon, onHide } = this.props
    return ( 
      <Dialog open fullWidth maxWidth="md" onClose={onHide}>
        <DialogContent>
          <img src={pokemon.photo} alt={pokemon.name} />
        </DialogContent>
      </Dialog>
     );
  }
}
 
export default PokedexModal;
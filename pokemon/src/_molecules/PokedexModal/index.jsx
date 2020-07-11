import React, { Component } from 'react'
import {
  Dialog,
  DialogContent,
  Card,
  CardContent,
  Grid
} from '@material-ui/core'

import FUNDO_CARD_3 from './../../assets/img/fundo_card_3.png'
import DEX from './../../assets/img/dex.jpg'
import './style.css'

class PokedexModal extends Component {

  render() {
    const { pokemon, onHide } = this.props
    return (
      <Dialog
        open
        onClose={onHide}
        PaperProps={{
          style: {
            background: `url(${DEX})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            minHeight: 600,
            minWidth: 340,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        }}

      >
        <DialogContent style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: `url(${FUNDO_CARD_3}) no-repeat`,
            backgroundPosition: 'center',
            backgroundSize: '100% 100%',
            width: 275,
            height: 250,
            borderRadius: 4,
          }}>
            <Grid
              container
              spacing={1}
              style={{
                background: 'rgba(255,255,225,0.7)',
                borderRadius: 4,
                width: 275,
                height: 250,
                padding: 5
              }}>
              <Grid
                item
                xs={12}
                sm={12}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img
                  src={pokemon.photo}
                  alt={pokemon.name}
                  style={{ maxWidth: 100, maxHeight: 200 }}
                />
              </Grid>
              <Grid item container xs={12} sm={12} md={12}>
                <Grid item xs={6}>
                  <div className="dados">
                    <div><span>Nome:</span>&nbsp;{pokemon.name}</div>
                    <div><span>Tipo:</span>&nbsp;{pokemon.name}</div>
                    <div><span>Categoria:</span>&nbsp;{pokemon.name}</div>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="dados">
                    <div><span>Grupo de Ovo:</span>&nbsp;{pokemon.name}</div>
                    <div><span>Geração:</span>&nbsp;{pokemon.name}</div>
                    <div><span>Região:</span>&nbsp;{pokemon.name}</div>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="dados">
                    <div><span>Movimentos:</span>&nbsp;{pokemon.name}</div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </DialogContent>
      </Dialog >
    );
  }
}

export default PokedexModal;
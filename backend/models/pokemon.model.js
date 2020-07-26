const mongoose = require('mongoose')

const Schema = mongoose.Schema;
let PokemonSchema = new Schema({
  code: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  alias: String,
  category: { _id: String, name: String },
  types: [{ name: String, _id: String }],
  egg_groups: Array,
  moves: Array,
  region: Object,
  generation: Object
}, { collection: 'pokemon' });
// Exportar o modelo
module.exports = mongoose.model('Pokemon', PokemonSchema);
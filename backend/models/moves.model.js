const mongoose = require('mongoose')

const Schema = mongoose.Schema;
let MovesSchema = new Schema({
  name: { type: String, required: true, unique: true },
  type: { name: String, _id: String },
  effect: String,
  weakness: String,
  force: String
}, { collection: 'moves' });
// Exportar o modelo
module.exports = mongoose.model('Moves', MovesSchema);
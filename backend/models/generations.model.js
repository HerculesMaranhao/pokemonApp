const mongoose = require('mongoose')

const Schema = mongoose.Schema;
let GenerationsSchema = new Schema({
  name: { type: String, required: true, unique: true }
}, { collection: 'generations' });
// Exportar o modelo
module.exports = mongoose.model('Generations', GenerationsSchema);
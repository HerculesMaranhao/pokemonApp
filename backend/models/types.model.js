const mongoose = require('mongoose')

const Schema = mongoose.Schema;
let TypesSchema = new Schema({
  name: { type: String, required: true, unique: true }
}, { collection: 'types' });
// Exportar o modelo
module.exports = mongoose.model('Types', TypesSchema);
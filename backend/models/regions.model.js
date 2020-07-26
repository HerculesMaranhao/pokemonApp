const mongoose = require('mongoose')

const Schema = mongoose.Schema;
let RegionsSchema = new Schema({
  name: { type: String, required: true, unique: true }
}, { collection: 'regions' });
// Exportar o modelo
module.exports = mongoose.model('Regions', RegionsSchema);
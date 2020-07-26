const mongoose = require('mongoose')

const Schema = mongoose.Schema;
let CategoriesSchema = new Schema({
  name: { type: String, required: true, unique: true }
}, { collection: 'categories' });
// Exportar o modelo
module.exports = mongoose.model('Categories', CategoriesSchema);
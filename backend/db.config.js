//Acesso à BD
const mongoose = require('mongoose');
let url = 'mongodb://localhost/pokemon_app';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
mongoose.Promise = global.Promise;
let db = mongoose.connection;

module.exports = () => db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));
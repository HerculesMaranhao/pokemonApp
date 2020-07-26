var Categories = require('../models/categories.model');

exports.find = function (req, res) {
  res.send('Olá! Categories ao Controller');
};

exports.create = function (req, res, next) {
  let categories = new Categories(
    {
      name: req.body.name,
    }
  );
  
  categories.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send('Categoria adicionada com sucesso')
  })
};
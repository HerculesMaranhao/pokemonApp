var Generations = require('../models/generations.model');

exports.find = function (req, res) {
  res.send('Olá! Generations ao Controller');
};

exports.create = function (req, res, next) {
  let generations = new Generations(
    {
      name: req.body.name,
    }
  );
  
  generations.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send('Geração adicionada com sucesso')
  })
};
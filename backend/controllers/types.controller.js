var Types = require('../models/types.model');

exports.find = function (req, res) {
  res.send('Olá! Types ao Controller');
};

exports.create = function (req, res, next) {
  let types = new Types(
    {
      name: req.body.name,
    }
  );
  
  types.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send('Tipo adicionado com sucesso')
  })
};
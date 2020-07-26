var Regions = require('../models/regions.model');

exports.find = function (req, res) {
  res.send('Olá! Regions ao Controller');
};

exports.create = function (req, res, next) {
  let regions = new Regions(
    {
      name: req.body.name,
    }
  );
  
  regions.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send('Região adicionada com sucesso')
  })
};
var Moves = require('../models/moves.model');

exports.find = function (req, res) {
  res.send('Olá! Moves ao Controller');
};

exports.create = function (req, res, next) {
  let moves = new Moves(
    {
      name: req.body.name,
      type: req.body.type,
    }
  );
  
  moves.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send('Movimento adicionado com sucesso')
  })
};